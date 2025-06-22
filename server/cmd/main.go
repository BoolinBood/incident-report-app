package main

import (
	db "incident-report-server/database"
	"incident-report-server/internal/routes"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"log"
	fiber "github.com/gofiber/fiber/v2"
)

func main() {
	err := db.InitDB()
	defer db.DB.Close()
	
	if err != nil {
		log.Fatal("error while connecting to database: ", err)
	}
	
	app := fiber.New()

	app.Use(cors.New())
	
	routes.RegiterRoutes(app)
	
	err = app.Listen(":8080")
	if err != nil {
		log.Println("error while starting the server: ", err)
	}
}