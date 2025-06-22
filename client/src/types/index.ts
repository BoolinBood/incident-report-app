import type { IncidentReportCategory } from "./model/incident_report_category.model";
import type { IncidentReport, IncidentReportStatus } from "./model/incident_report.model";
import {incidentReportStatusAsArray} from './model/incident_report.model'

export type {
  IncidentReportCategory,
  IncidentReport, IncidentReportStatus
}

export {
  incidentReportStatusAsArray
}