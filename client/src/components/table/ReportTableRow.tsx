import { PencilLine, Trash } from 'lucide-react';
import type { GetAllIncidentReportResponse } from '../../dto'
import { DateUtils } from '../../utils';
import ReportTableTag from './ReportTableTag';
import GlobalActionButton from '../common/GlobalActionButton';

interface Props {
  data: GetAllIncidentReportResponse
}

const ReportTableRow = (props: Props) => {
  return (
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
          <GlobalActionButton callbackFn={() => { }}>
						<PencilLine />
					</GlobalActionButton>
          <GlobalActionButton callbackFn={() => { }}>
            <Trash />
					</GlobalActionButton>
				</div>
			</td>
		</tr>
	);
}

export default ReportTableRow