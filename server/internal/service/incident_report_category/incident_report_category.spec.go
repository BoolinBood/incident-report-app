package service

import "incident-report-server/internal/dto"

type IncidentReportCategoryServiceSpec interface {
	GetAllCategories() ([]dto.GetAllIncidentReportCategories, error)
}