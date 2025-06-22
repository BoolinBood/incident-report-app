import React from 'react'

interface Props {
  label: String
}

const ReportTableTag = ({label}: Props) => {
  return (
		<div className="text-center bg-gray-100 py-1 rounded-xl">
			{String(label).toUpperCase()}
		</div>
	);
}

export default ReportTableTag