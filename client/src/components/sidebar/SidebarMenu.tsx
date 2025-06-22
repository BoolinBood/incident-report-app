import React from 'react'

interface Props {
  	label: string
	icon: React.ReactNode
	currentLabel: string
	onClick: () => void
}

const SidebarMenu = ({label, icon, currentLabel, onClick}: Props) => {
	
	return (
		<button
			onClick={() => { onClick() }}
			className={`flex w-full hover:bg-gray-100 p-2 rounded-xl cursor-pointer ${currentLabel === label ? 'bg-gray-100' : ''}`}>
			<div>{icon}</div>
			<div className="ml-2">{label}</div>
		</button>
	);
}

export default SidebarMenu