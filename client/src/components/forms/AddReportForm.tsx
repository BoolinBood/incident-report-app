import IncidentReportService from '../../services/incident_report.service'
import type { PostIncidentReportRequest } from '../../dto'
import ReportForm from './ReportForm'
import { useIncidentReportStore } from '../../stores/incident_reports.store'
import { useModalStore } from '../../stores/modal.store'


const defaultValues: PostIncidentReportRequest = {
    title: "",
    description: "",
    category_id: 0,
    status: "Open"
}

const AddReportForm = () => {
    const modalStore = useModalStore()
    const reFetch = useIncidentReportStore((state) => state.reFetch)

    const onSubmitHandler = async (data: object) => {
        await IncidentReportService.CreateNewIncidentReport(data as PostIncidentReportRequest)
            .then(res => {
                if (!res.error) {
                    reFetch()
                }
                modalStore.close()
            })
    }
    
    return (
        <>
            <div className='font-bold text-xl'>New report</div>
            <ReportForm onSubmitHandler={onSubmitHandler} defaultValues={defaultValues} />
        </>
    )
}

export default AddReportForm
