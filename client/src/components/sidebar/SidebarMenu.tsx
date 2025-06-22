import React from 'react'

interface Props {
  label: String
	icon: React.ReactNode
	currentLabel: String
}

const SidebarMenu = ({label, icon, currentLabel}: Props) => {
	
	return (
		<button
			className={`flex w-full hover:bg-gray-100 p-2 rounded-xl cursor-pointer ${currentLabel === label ? 'bg-gray-100' : ''}`}>
			<div>{icon}</div>
			<div className="ml-2">{label}</div>
		</button>
	);
}

export default SidebarMenu