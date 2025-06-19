package repository

import (
	"incident-report-server/internal/dto"
)

type IncidentReportRepositorySpec interface {
	GetAllIncidentReports() ([]dto.GetAllIncidentReportsResponse, error)
	GetIncidentReportById(id int) (*dto.GetIncidentReportResponse, error)
	CreateIncidentReport(report *dto.PostIncidentReportRequest) (*dto.PostIncidentReportResponse, error)
	EditIncidentReport(newReport *dto.PutIncidentReportRequest) (*dto.PutIncidentReportResponse, error)
	DeleteIncidentReport(id int) error
}