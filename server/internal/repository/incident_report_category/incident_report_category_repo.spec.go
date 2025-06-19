package repository

import (
	"incident-report-server/internal/dto"
)

type IncidentReportCategoryRepositorySpec interface {
	GetAllCategories() ([]dto.GetAllIncidentReportCategories, error)
}