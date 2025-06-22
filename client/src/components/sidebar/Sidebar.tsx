import { ClipboardPlus, TableProperties } from 'lucide-react'
import SidebarMenu from './SidebarMenu'
import { useState } from 'react'
import AddReportForm from '../forms/AddReportForm'
import { useModalStore } from '../../stores/modal.store'


const Sidebar = () => {

	const modalStore = useModalStore()

	const OpenAddReportMenu = () => {
		modalStore.setModalElement(<AddReportForm />)
		modalStore.open()
	}

	const sidebarMenus = [
		{ label: "Reports", icon: <TableProperties />, onClick: () => { } },
		{ label: "Add new report", icon: <ClipboardPlus />, onClick: OpenAddReportMenu }
	]
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [currentMenu, _] = useState<string>(sidebarMenus[0].label)

	return (
		<div className="flex flex-col gap-1 pr-8">
			{sidebarMenus.map((menu) => (
				<SidebarMenu
					onClick={menu.onClick}
					currentLabel={currentMenu}
					key={menu.label}
					icon={menu.icon}
					label={menu.label}
				/>
			))}
		</div>
	);
}

export default Sidebar