import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "../app/Lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void}) => {
    const user = {
        name : 'Mary',
        email : 'mary@gmail.com',
        avatar : '/public/assets/images/david.webp'
    }
    
  return (
    <section className="nav-items">
        <Link to='/' className="link-logo">
            <h1 className="text-2xl italic">revellier</h1>
        </Link>
        <div className="container">
            <nav>
                {sidebarItems.map(({id, href, icon, label}) => (
                    <NavLink to={href} key={id}>
                        {({ isActive }: {isActive: boolean}) => (
                            <div className={cn('group nav-item', {'bg-[#0a1e59] !text-white': isActive})}>
                                <img src={icon} alt={label} className="size-[20px]"/>
                                <span>{label}</span>
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>
            <footer className="nav-footer">
                <img src={user?.imageUrl || '/public/assets/images/david.webp'} alt="user?.name || 'David'" />
                <article>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </article>
                <button onClick={() => {console.log('logout')}} className="cursor-pointer">
                    <img src="/assets/icons/logout.svg" alt="logout"  className="size-[20px]"/>
                </button>
            </footer>
        </div>
    </section>
  )
}

export default NavItems
