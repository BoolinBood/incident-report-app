package routes

import "github.com/gofiber/fiber/v2"

func RegiterRoutes(app *fiber.App) {
	RegisterIncidentReportRoutes(app)
}