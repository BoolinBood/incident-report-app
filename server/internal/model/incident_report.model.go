package model

type IncidentReport struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	Category_id string `json:"category_id"` 
	Status string `json:"status"`
	Created_at string `json:"created_at"` 
}