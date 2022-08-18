import { NavBar } from "../Elements";

export default function Layout(props) {
    return <div>
        <NavBar/>
        <div>
            {props.children}
        </div>
    </div>
}