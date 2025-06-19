package dto

type IncidentReportCategory struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type GetAllIncidentReportsResponse struct {
	ID          int                    `json:"id"`
	Title       string                 `json:"title"`
	Description string                 `json:"description"`
	Category    IncidentReportCategory `json:"category"`
	Status      string                 `json:"status"`
	Created_at  string                 `json:"created_at"`
}

type GetIncidentReportResponse struct {
	ID          int                    `json:"id"`
	Title       string                 `json:"title"`
	Description string                 `json:"description"`
	Category    IncidentReportCategory `json:"category"`
	Status      string                 `json:"status"`
	Created_at  string                 `json:"created_at"`
}

type PostIncidentReportRequest struct {
	Title       string `json:"title" validate:"required"`
	Description string `json:"description"`
	Category_id int    `json:"category_id" validate:"required"`
	Status      string `json:"status" validate:"required,oneof=Open InProgress Success"`
}

type PostIncidentReportResponse struct {
	ID          int			`json:"id"`
	Title       string	`json:"title"`
	Description string	`json:"description"`
	Category_id    int	`json:"category_id"`
	Status      string	`json:"status"`
	Created_at  string	`json:"created_at"`
}

type PutIncidentReportRequest struct {
	ID          int    `json:"id"`
	Title  			string `json:"title"`
	Description string `json:"description"`
	Category_id int    `json:"category_id"`
	Status      string `json:"status" validate:"required,oneof=Open InProgress Success"`
}

type PutIncidentReportResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title" validate:"required"`
	Description string `json:"description"`
	Category_id int    `json:"category_id"`
	Status      string `json:"status"`
}
