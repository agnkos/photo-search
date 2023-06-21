import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

const Layout = () => {
    const context = useContext(Context)
    return (
        <div className={`${context?.openModal ? "overflow-hidden" : ""}`}>
            <Outlet />
        </div>
    )
}
export default Layout