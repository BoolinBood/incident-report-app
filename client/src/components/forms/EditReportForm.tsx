import toast from 'react-hot-toast'
import type { PutIncidentReportRequest } from '../../dto'
import IncidentReportService from '../../services/incident_report.service'
import ReportForm from './ReportForm'
import { useIncidentReportStore } from '../../stores/incident_reports.store'
import { useModalStore } from '../../stores/modal.store'

interface Props {
    defaultValues: PutIncidentReportRequest
}


const EditReportForm = ({defaultValues}: Props) => {
    const reFetch = useIncidentReportStore(state => state.reFetch)
    const modalStore = useModalStore()
    
    const onSubmitHandler = async (data: object) => {
        IncidentReportService.UpdateIncidentReport(data as PutIncidentReportRequest)
            .then(response => {
                toast(response.message)
                reFetch()
                modalStore.close()
            })
    }
    return (
        <ReportForm onSubmitHandler={onSubmitHandler} defaultValues={defaultValues} />
    )
}

export default EditReportForm
