import { ClipboardPlus, TableProperties } from 'lucide-react'
import SidebarMenu from './SidebarMenu'
import { useState } from 'react'

const sidebarMenus = [
  { label: "Reports", icon: <TableProperties /> },
  { label: "Add new report", icon: <ClipboardPlus /> }
]



const Sidebar = () => {
  
  const [currentMenu, _] = useState<String>(sidebarMenus[0].label)

  return (
		<div className="flex flex-col gap-1 pr-8">
			{sidebarMenus.map((menu) => (
				<SidebarMenu
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