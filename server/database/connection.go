package database

import (
	"database/sql"
	"log"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func InitDB() error {
	var err error
	dsn := "host=localhost user=postgres password=admin1234 dbname=incident-report port=5432 sslmode=disable"
	DB, err = sql.Open("postgres", dsn)

	if err != nil {
		log.Println("Error while connecting to psql server: ", err)
		return err
	}

	if err = DB.Ping(); err != nil {
		log.Println("Error making a test ping to the server: ", err)
		return err
	}

	log.Println("Database connected successfully")
	return nil
	
}