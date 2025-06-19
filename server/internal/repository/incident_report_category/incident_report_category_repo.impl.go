package repository

import (
	"incident-report-server/database"
	"incident-report-server/internal/dto"
)

type IncidentReportCategoryRepository struct{}

func NewIncidentReportCategoryRepository() IncidentReportCategoryRepositorySpec {
	return &IncidentReportCategoryRepository{}
}

func (repo *IncidentReportCategoryRepository) GetAllCategories() ([]dto.GetAllIncidentReportCategories, error) {

	query := `SELECT id, name FROM category;`

	rows, err := database.DB.Query(query)
	
	if err != nil {
		return nil, err
	}

	var categories []dto.GetAllIncidentReportCategories
	
	for rows.Next() {
		var c dto.GetAllIncidentReportCategories
		err = rows.Scan(&c.ID, &c.Name)

		if err != nil {
			return nil, err
		}

		categories = append(categories, c)
	}
	
	return categories, err
}