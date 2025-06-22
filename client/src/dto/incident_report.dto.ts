import type { IncidentReportCategory, IncidentReportStatus } from "../types"

export type PostIncidentReportRequest = {
	title:        String;
	description:  String;
	categoryId:   Number;
	status:       IncidentReportStatus;
	created_at:    String;
};

export type PostIncidentReportResponse = {
	id:           Number;
	title:        String;
	description:  String;
	categoryId:   Number;
	status:       IncidentReportStatus;
	created_at:    String;
};

export type GetAllIncidentReportResponse = {
	id:           Number;
	title:        String;
	description:  String;
	category:     IncidentReportCategory;
	status:       IncidentReportStatus;
	created_at:    String;
};

export type GetIncidentReportByIdResponse = {
	id:           Number;
	title:        String;
	description:  String;
	category:     IncidentReportCategory;
	status:       IncidentReportStatus;
	created_at:    String;
};

export type PutIncidentReportRequest = {
  id:           Number;
	title:        String;
	description:  String;
	categoryId:   Number;
	status:       IncidentReportStatus;
	created_at:    String;
};

export type PutIncidentReportResponse = {
	id:           Number;
	title:        String;
	description:  String;
	categoryId:   Number;
	status:       IncidentReportStatus;
	created_at:    String;
};
