import { Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "../Context";

const Layout = () => {
    // const context = useContext(Context)
    return (
        <>
            <Outlet />
        </>
    )
}
export default Layout