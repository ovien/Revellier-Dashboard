import React from 'react'
import { Outlet } from 'react-router'
import {SidebarComponent} from '@syncfusion/ej2-react-navigations'
import NavItems from '../../../Components/NavItems'
import { MobileSidebar } from 'Components'

const AdminLayout = () => {
  return (
    <div className="admin-Layout flex h-screen">
        <MobileSidebar />
        <aside className="w-[270px] hidden lg:block flex-shrink-0">
            <SidebarComponent width={270} enableGestures={false}>
                <NavItems />
            </SidebarComponent>
        </aside>
        <main className="flex-1 overflow-auto p-6">
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout