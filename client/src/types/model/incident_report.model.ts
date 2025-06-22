const IncidentReportStatus = {
  Open: 'Open',
  InProgress: 'InProgress',
  Success: 'Success',
} as const

export type IncidentReportStatus = keyof typeof IncidentReportStatus

export type IncidentReport = {
  id: number
  title: string
  description: string
  category_id: number
  status: IncidentReportStatus
  created_at: string
}

export const incidentReportStatusAsArray = Object.keys(IncidentReportStatus) as IncidentReportStatus[]