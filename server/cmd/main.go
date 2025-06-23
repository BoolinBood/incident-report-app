package main

import (
	db "incident-report-server/database"
	"incident-report-server/internal/routes"
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
	
	routes.RegiterRoutes(app)
	
	err = app.Listen(":8080")
	if err != nil {
		log.Println("error while starting the server: ", err)
	}
}