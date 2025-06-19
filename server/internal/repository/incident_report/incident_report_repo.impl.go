package repository

import (
	"database/sql"
	"incident-report-server/database"
	"incident-report-server/internal/dto"
)

type IncidentReportRepositoryImpl struct{}


func NewIncidentReportRepository() IncidentReportRepositorySpec {
	return &IncidentReportRepositoryImpl{}
}

func (repo *IncidentReportRepositoryImpl) GetAllIncidentReports() ([]dto.GetAllIncidentReportsResponse, error){

	var reports []dto.GetAllIncidentReportsResponse
	
	rows, err := database.DB.Query(`
		SELECT 
			ir.id, ir.title, ir.description, ir.status, ir.created_at,
			c.id, c.name 
		FROM incident_report ir
		JOIN category c ON ir.category_id = c.id
	`)
	
	for rows.Next() {
		var r dto.GetAllIncidentReportsResponse
		err = rows.Scan(&r.ID, &r.Title, &r.Description, &r.Status, &r.Created_at, &r.Category.ID, &r.Category.Name)

		if err != nil {
			return nil, err
		}

		reports = append(reports, r)
	}

	return reports, err	
}

func (repo *IncidentReportRepositoryImpl) GetIncidentReportById(id int) (*dto.GetIncidentReportResponse, error) {
	
	query := `
		SELECT 
			ir.id, ir.title, ir.description, ir.status, ir.created_at,
			c.id, c.name 
		FROM incident_report ir
		JOIN category c ON ir.category_id = c.id
		WHERE ir.id = $1
	`
	row := database.DB.QueryRow(query, id)
	
	var r dto.GetIncidentReportResponse
	err := row.Scan(&r.ID, &r.Title, &r.Description, &r.Status, &r.Created_at, &r.Category.ID, &r.Category.Name)

	if err != nil {
		if err == sql.ErrNoRows { return nil, sql.ErrNoRows}
		return nil, err
	}

	return &r, err
}

func (repo *IncidentReportRepositoryImpl) CreateIncidentReport(report *dto.PostIncidentReportRequest) (*dto.PostIncidentReportResponse, error) {

	query := `
		INSERT INTO incident_report(title, description, category_id, status) 
		VALUES ($1, $2, $3, $4) 
		RETURNING id, title, description, category_id, status, created_at;
	`

	row := database.DB.QueryRow(query, report.Title, report.Description, report.Category_id, report.Status)
	
	var r dto.PostIncidentReportResponse
	err := row.Scan(&r.ID, &r.Title, &r.Description, &r.Category_id, &r.Status, &r.Created_at)

	if err != nil {
		if err == sql.ErrNoRows { return nil, sql.ErrNoRows}
		return nil, err
	}

	return &r, err
}

func (repo *IncidentReportRepositoryImpl) EditIncidentReport(newReport *dto.PutIncidentReportRequest) (*dto.PutIncidentReportResponse, error) {
	query := `
		UPDATE public.incident_report SET title=$2, description=$3, category_id=$4, status=$5 
		WHERE id = $1 
		RETURNING id, title, description, category_id, status;
	`
	
	var r dto.PutIncidentReportResponse
	err := database.DB.
		QueryRow(query, newReport.ID, newReport.Title, newReport.Description, newReport.Category_id, newReport.Status).
		Scan(&r.ID, &r.Title, &r.Description, &r.Category_id, &r.Status)
	
	if err != nil {
		if err == sql.ErrNoRows { return nil, sql.ErrNoRows }
		return nil, err
	}
	return &r, err
}

func (repo *IncidentReportRepositoryImpl) DeleteIncidentReport(id int) error {
	query := "DELETE FROM public.incident_report WHERE id = $1;"

	_, err := database.DB.Exec(query, id)

	if err != nil {
		return err
	}

	return nil
}