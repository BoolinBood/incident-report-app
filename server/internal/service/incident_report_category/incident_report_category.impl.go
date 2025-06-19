package service

import (
	"incident-report-server/internal/dto"
	repository "incident-report-server/internal/repository/incident_report_category"
)

type IncidentReportCategoryServiceImpl struct {
	repo repository.IncidentReportCategoryRepositorySpec
}

func NewIncidentReportCategoryService(repo repository.IncidentReportCategoryRepositorySpec) IncidentReportCategoryServiceSpec {
	return &IncidentReportCategoryServiceImpl{repo: repo}
}

func (s *IncidentReportCategoryServiceImpl) GetAllCategories() ([]dto.GetAllIncidentReportCategories, error) {
	return s.repo.GetAllCategories()
}