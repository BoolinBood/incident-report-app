export type IncidentReportStatus = 'Open' | 'InProgress' | 'Success'

export type IncidentReport = {
  id: Number
  title: String
  description: String
  category_id: Number
  status: IncidentReportStatus
  created_at: String
}