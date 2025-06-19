package routes

import (
	"github.com/gofiber/fiber/v2"
	"incident-report-server/internal/handler"
	irRepo "incident-report-server/internal/repository/incident_report"
	irCateRepo "incident-report-server/internal/repository/incident_report_category"
	irService "incident-report-server/internal/service/incident_report"
	irCateService "incident-report-server/internal/service/incident_report_category"
)

func RegisterIncidentReportRoutes(app *fiber.App) {
	group := app.Group("/incident-reports")

	// Wiring...
	irRepository := irRepo.NewIncidentReportRepository()
	irService := irService.NewIncidentReportService(irRepository)
	irHandler := handler.NewIncidentReportHandler(irService)
	
	irCategoryRepository := irCateRepo.NewIncidentReportCategoryRepository()
	irCategoryService := irCateService.NewIncidentReportCategoryService(irCategoryRepository)
	irCategoryHandler := handler.NewIncidentReportCategoryHandler(irCategoryService)
	
	group.Post("/", irHandler.CreateNewReport)
	group.Get("/", irHandler.GetAllReports)
	group.Get("/categories", irCategoryHandler.GetAllCategories)
	group.Put("/", irHandler.EditReport)
	
	group.Get("/:id", irHandler.GetReportById)
	group.Delete("/:id", irHandler.DeleteReportById)
}