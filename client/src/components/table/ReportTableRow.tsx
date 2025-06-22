import { PencilLine, Trash } from 'lucide-react';
import type { GetAllIncidentReportResponse } from '../../dto'
import { DateUtils } from '../../utils';
import ReportTableTag from './ReportTableTag';
import GlobalActionButton from '../common/GlobalActionButton';
import EditReportForm from '../forms/EditReportForm';
import DeleteReportForm from '../forms/DeleteReportForm';
import { useModalStore } from '../../stores/modal.store';


interface Props {
	data: GetAllIncidentReportResponse
}

const ReportTableRow = (props: Props) => {
	const modalStore = useModalStore()

	const openEditModal = () => {
		modalStore.setModalElement(<EditReportForm defaultValues={{
			id: props.data.id,
			title: props.data.title,
			description: props.data.description,
			category_id: props.data.category.id,
			status: props.data.status,
			created_at: props.data.created_at
		}} />)
		modalStore.open()
	}

	const openDeleteModal = () => {
		modalStore.setModalElement(<DeleteReportForm report={props.data} />)
		modalStore.open()
	}

	return (
		<>
			<tr>
				<td className="report-title">{props.data.title}</td>
				<td className="report-desc text-gray-500">{props.data.description}</td>
				<td className="report-category">
					<ReportTableTag label={props.data.category.name} />
				</td>
				<td className="report-status">
					<ReportTableTag label={props.data.status} />
				</td>
				<td className="report-created_at text-gray-500">
					{DateUtils.getDate(props.data.created_at)}
				</td>
				<td>
					<div className="flex gap-2">
						<GlobalActionButton buttonType='button' callbackFn={() => { openEditModal() }}>
							<PencilLine />
						</GlobalActionButton>
						<GlobalActionButton buttonType='button' callbackFn={() => { openDeleteModal() }}>
							<Trash />
						</GlobalActionButton>
					</div>
				</td>
			</tr>
		</>

	);
}

export default ReportTableRow