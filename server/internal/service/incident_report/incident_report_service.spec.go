package service

import (
	"incident-report-server/internal/dto"
)

type IncidentReportServiceSpec interface {
	GetAllReports() ([]dto.GetAllIncidentReportsResponse, error)
	GetReportById(id int) (*dto.GetIncidentReportResponse, error)
	CreateNewReport(report *dto.PostIncidentReportRequest) (*dto.PostIncidentReportResponse, error)
	EditReport(newReport *dto.PutIncidentReportRequest) (*dto.PutIncidentReportResponse, error)
	DeleteReportById(id int) error
}