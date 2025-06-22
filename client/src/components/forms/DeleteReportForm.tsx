import toast from "react-hot-toast"
import type { GetAllIncidentReportResponse } from "../../dto"
import IncidentReportService from "../../services/incident_report.service"
import GlobalActionButton from "../common/GlobalActionButton"
import { useIncidentReportStore } from "../../stores/incident_reports.store"
import { useModalStore } from "../../stores/modal.store"

interface Props {
    report: GetAllIncidentReportResponse
}


const DeleteReportForm = ({ report }: Props) => {
    const modalStore = useModalStore()
    const reFetch = useIncidentReportStore(state => state.reFetch)

    const onClickDeleteHandler = async (report_id: number) => {
        await IncidentReportService.DeleteIncidentReport(report_id)
            .then(res => {
                toast(res.message)
                reFetch()
                modalStore.close()
            })
    }
    return (
        <div>
            <div className="font-bold text-xl">Delete confirmation</div>
            <div>Are you sure you want to delete "{report.title}" ?</div>
            <div className="flex justify-end mt-2 gap-2">
                <GlobalActionButton
                    buttonType="button"
                    callbackFn={() => {
                        modalStore.close()
                    }}
                >
                    <div className="mx-3">No</div>
                </GlobalActionButton>
                <GlobalActionButton
                    buttonType="button"
                    callbackFn={() => {
                        onClickDeleteHandler(report.id)
                    }}
                >
                    <div className="mx-3">Yes</div>
                </GlobalActionButton>
                
            </div>
        </div>
    )
}

export default DeleteReportForm
