package handler

import (
	"incident-report-server/internal/dto"
	service "incident-report-server/internal/service/incident_report_category"

	"github.com/gofiber/fiber/v2"
)

type IncidentReportCategoryHandlerSpec interface {
	GetAllCategories(c *fiber.Ctx) error
}

type IncidentReportCategoryHandler struct {
	service service.IncidentReportCategoryServiceSpec
}

func NewIncidentReportCategoryHandler(service service.IncidentReportCategoryServiceSpec)	IncidentReportCategoryHandlerSpec {
	return &IncidentReportCategoryHandler{service: service}
}

func (h *IncidentReportCategoryHandler) GetAllCategories(c *fiber.Ctx) error {
	var res dto.Response[[]dto.GetAllIncidentReportCategories]

	categories, err := h.service.GetAllCategories()

	if err != nil {
		res.Content = nil
		res.Message	=	err.Error()	
		res.Error		= true

		return c.Status(fiber.StatusInternalServerError).JSON(res)
	}
	
	res.Content = categories
	res.Message	=	"Successfully retrive all incident report categories"
	res.Error		=	false
	
	return c.Status(fiber.StatusOK).JSON(res)
}