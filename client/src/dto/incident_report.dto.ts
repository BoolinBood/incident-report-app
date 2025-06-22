import type { IncidentReportCategory, IncidentReportStatus } from "../types"

export type PostIncidentReportRequest = {
	title:        string;
	description:  string;
	category_id:   number;
	status:       IncidentReportStatus;
};

export type PostIncidentReportResponse = {
	id:           number;
	title:        string;
	description:  string;
	category_id:   number;
	status:       IncidentReportStatus;
	created_at:    string;
};

export type GetAllIncidentReportResponse = {
	id:           number;
	title:        string;
	description:  string;
	category:     IncidentReportCategory;
	status:       IncidentReportStatus;
	created_at:    string;
};

export type GetIncidentReportByIdResponse = {
	id:           number;
	title:        string;
	description:  string;
	category:     IncidentReportCategory;
	status:       IncidentReportStatus | null;
	created_at:    string;
};

export type PutIncidentReportRequest = {
  id:           number;
	title:        string;
	description:  string;
	category_id:   number;
	status:       IncidentReportStatus | null;
	created_at:    string;
};

export type PutIncidentReportResponse = {
	id:           number;
	title:        string;
	description:  string;
	category_id:   number;
	status:       IncidentReportStatus;
	created_at:    string;
};
