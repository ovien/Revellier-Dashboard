// @ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router"
import { NavItems } from "Components"

const MobileSidebar = () => {
    let sidebar: SidebarComponent;
    const toggleSidebar = () => {
        sidebar.toggle();
    }
  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to="/">
                <h1 className="text-2xl italic">revellier</h1>
            </Link>
            {/* @ts-ignore */}
            <button onClick={toggleSidebar}>
                <img src="/assets/icons/menu.svg" alt="menu" className="size-[20px]"/>
            </button>
        </header>
        <SidebarComponent 
        width={270} 
        ref={(Sidebar) => Sidebar = sidebar}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackDrop={true}
        type="over">
            <NavItems handleClick={toggleSidebar} />
        </SidebarComponent>
    </div>
  )
}

export default MobileSidebar