import { NavBar } from "../Elements";

export default function Layout({children}) {
    return <div>
                <NavBar></NavBar>
                {children}
            </div>
}