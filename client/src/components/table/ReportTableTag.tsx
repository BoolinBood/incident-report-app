interface Props {
  label: string
}

const ReportTableTag = ({label}: Props) => {
  return (
		<div className="text-center bg-gray-100 py-1 rounded-xl">
			{String(label).toUpperCase()}
		</div>
	);
}

export default ReportTableTag