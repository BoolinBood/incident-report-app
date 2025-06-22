import React, { useEffect, useState } from 'react'
import type { GetAllIncidentReportResponse } from '../../dto'
import IncidentReportService from '../../services/incident_report.service'
import ReportTableRow from './ReportTableRow'

const ReportTable = () => {
  
  const [reports, setReports] = useState<GetAllIncidentReportResponse[] | null>([])
  
  const getIncidentReports = async () => {
    const response = await IncidentReportService.GetAllIncidentReports()
    setReports(response.content)
  }
  
  useEffect(() => {
    getIncidentReports()
  }, [])
  
  return (
    <table className='report-table'>

      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody>
        { reports?.map(report => <ReportTableRow data={report} />) }
      </tbody>
      
    </table>
  )
}

export default ReportTable