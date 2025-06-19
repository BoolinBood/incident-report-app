package service

import (
	"incident-report-server/internal/dto"
	repository "incident-report-server/internal/repository/incident_report"
)

type IncidentReportServiceImpl struct{
	repo repository.IncidentReportRepositorySpec
}

func NewIncidentReportService(repo repository.IncidentReportRepositorySpec) IncidentReportServiceSpec {
	return &IncidentReportServiceImpl{repo: repo}
}

func (s *IncidentReportServiceImpl) GetAllReports() ([]dto.GetAllIncidentReportsResponse, error) {
	return s.repo.GetAllIncidentReports()
}

func (s *IncidentReportServiceImpl) GetReportById(id int) (*dto.GetIncidentReportResponse, error) {
	return s.repo.GetIncidentReportById(id)
}

func (s *IncidentReportServiceImpl) CreateNewReport(report *dto.PostIncidentReportRequest) (*dto.PostIncidentReportResponse, error) {
	return s.repo.CreateIncidentReport(report)
}

func (s *IncidentReportServiceImpl) EditReport(newReport *dto.PutIncidentReportRequest) (*dto.PutIncidentReportResponse, error) {
	return s.repo.EditIncidentReport(newReport)
}

func (s *IncidentReportServiceImpl) DeleteReportById(id int) error {

	_, err := s.repo.GetIncidentReportById(id)

	if err != nil {
		return err
	}
	
	return s.repo.DeleteIncidentReport(id)
}