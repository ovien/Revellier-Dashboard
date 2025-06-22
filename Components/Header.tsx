import { useLocation } from "react-router";
import { cn } from "../app/Lib/utils";

interface Props {
    title: string;
    description: string;
}

const Header = ({ title, description}: Props) => {
    const location = useLocation();
  return (
    <header className="header">
        <article>
            <h1 className={cn('text-2xl font-bold text-dark-100', location.pathname === '/' 
                ? 'text-[100px] md:text-4xl font-bold' : 'text-[50px] md:text-2xl font-semibold')}>
            {title}</h1>
            <p>{description}</p>
        </article>
    </header>
  )
}

export default Header