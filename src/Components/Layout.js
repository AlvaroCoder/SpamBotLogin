import { NavBar } from "../Elements";

export default function Layout({children}) {
    return <div >
                <NavBar></NavBar>
                <div className="pl-[8rem]">
                    {children}
                </div>
            </div>
}