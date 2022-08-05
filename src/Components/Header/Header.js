import {Link} from "react-router-dom";

import UserInfo from "../UserInfo/UserInfo";
import "./headerStyle.css"

export default function Header() {

    return (
        <div className={'header'}>

            <Link to={'/'}>
                <div className={'link'}>home</div>
            </Link>
            <UserInfo/>

        </div>
    );
}