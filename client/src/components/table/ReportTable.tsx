import { useEffect } from 'react'
import IncidentReportService from '../../services/incident_report.service'
import ReportTableRow from './ReportTableRow'
import { useIncidentReportStore } from '../../stores/incident_reports.store'

const ReportTable = () => {

  const reports = useIncidentReportStore((state) => state.reports)
  const setReports = useIncidentReportStore((state) => state.setReports)

  useEffect(() => {

    const getIncidentReports = async () => {
      const response = await IncidentReportService.GetAllIncidentReports()
      setReports(response.content)
    }

    getIncidentReports()
  }, [setReports])

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
        {reports?.map((report, index) => <ReportTableRow key={index} data={report} />)}
      </tbody>

    </table>
  )
}

export default ReportTable