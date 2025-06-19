package handler

import (
	"database/sql"
	"fmt"
	"incident-report-server/internal/dto"
	"strconv"
	service "incident-report-server/internal/service/incident_report"
	fiber "github.com/gofiber/fiber/v2"
)

type IncidentReportHandlerSpec interface {
	CreateNewReport(c *fiber.Ctx) 	error
	GetAllReports(c *fiber.Ctx) 		error
	GetReportById(c *fiber.Ctx) 		error
	EditReport(c *fiber.Ctx) 				error
	DeleteReportById(c *fiber.Ctx) 	error
}

func NewIncidentReportHandler(service service.IncidentReportServiceSpec) IncidentReportHandlerSpec {
	return &IncidentReportHandler{service: service}
}

type IncidentReportHandler struct {
	service service.IncidentReportServiceSpec
}

func (h *IncidentReportHandler) CreateNewReport(c *fiber.Ctx) error {

	var req dto.PostIncidentReportRequest
	var res dto.Response[*dto.PostIncidentReportResponse]

	// bind request
	if err := c.BodyParser(&req); err != nil {
		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true

		return c.Status(fiber.StatusBadRequest).JSON(res)
	}
	
	// validate request
	if err := dto.Validate.Struct(&req); err != nil {
		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true

		return c.Status(fiber.StatusBadRequest).JSON(res)
	}
	
	report, err := h.service.CreateNewReport(&req)

	if err != nil {
		res.Message = err.Error()
		res.Error 	= true
		
		return c.Status(fiber.StatusInternalServerError).JSON(res)	
	}

	res.Content = report
	res.Message = "Succesfully create report"
	res.Error 	= false
	
	return c.Status(fiber.StatusCreated).JSON(res)
}

func (h *IncidentReportHandler) GetAllReports(c *fiber.Ctx) error {

	var response dto.Response[[]dto.GetAllIncidentReportsResponse]
	
	reports, err := h.service.GetAllReports()
	
	if err != nil {

		response.Content	= []dto.GetAllIncidentReportsResponse{}
		response.Error 		= true
		response.Message 	= err.Error()
		
		return c.Status(fiber.StatusInternalServerError).JSON(response)
	}

	response.Content 	= reports
	response.Error 		= false
	response.Message 	= "Successfully retrive incident reports"
	
	return c.Status(fiber.StatusOK).JSON(response)
}

func (h *IncidentReportHandler) GetReportById(c *fiber.Ctx) error {

	var res dto.Response[*dto.GetIncidentReportResponse]

	id, _ := strconv.Atoi(c.Params("id"))
	
	report, err := h.service.GetReportById(id)

	if err != nil {

		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true
		
		return c.Status(fiber.StatusInternalServerError).JSON(res)
	}

	if report == nil {
		res.Content = nil
		res.Message = fmt.Sprintf("Cannot retrive incident report id: %v", id)
		res.Error = false
		
		return c.Status(fiber.StatusNotFound).JSON(res)
	}

	res.Content = report
	res.Message = fmt.Sprintf("Succesfully retrive incident report id: %v", id)
	res.Error = false

	return c.Status(fiber.StatusOK).JSON(res)
}

func (h *IncidentReportHandler) EditReport(c *fiber.Ctx) error {

	var req dto.PutIncidentReportRequest
	var res dto.Response[*dto.PutIncidentReportResponse]
	
	// bind request
	if err := c.BodyParser(&req); err != nil {
		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true
		
		return c.Status(fiber.StatusBadRequest).JSON(res)
	}

	// validate request
	if err := dto.Validate.Struct(&req); err != nil {
		res.Message = err.Error()
		res.Error 	= true

		return c.Status(fiber.StatusBadRequest).JSON(req)
	}

	newReport, err := h.service.EditReport(&req)

	if err != nil {
		
		var httpStatus int
		
		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true

		if err == sql.ErrNoRows {
			httpStatus = fiber.StatusNotFound
		} else {
			httpStatus = fiber.StatusInternalServerError
		}

		return c.Status(httpStatus).JSON(res)
	}

	res.Content = newReport
	res.Message = "Successfully update incident report"
	res.Error 	= false
	
	return c.Status(fiber.StatusCreated).JSON(res)
}

func (h *IncidentReportHandler) DeleteReportById(c *fiber.Ctx) error {

	var res dto.Response[any]
	
	id, _ := strconv.Atoi(c.Params("id"))
	
	err := h.service.DeleteReportById(id)
	
	if err != nil {
		res.Content = nil
		res.Message = err.Error()
		res.Error 	= true
		
		return c.Status(fiber.StatusInternalServerError).JSON(res)
	}
	
	res.Content = nil
	res.Message = fmt.Sprintf("Successfully delete incident report id: %v", id)
	res.Error = false
	
	return c.Status(fiber.StatusNoContent).JSON(res)
}