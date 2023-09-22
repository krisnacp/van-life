import Header from "./Header";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Outlet /> merupakan componen dari react router yang berguna untuk mengatur atau memberitahu bahwa parent element dari nested route akan dirender terlebih dulu, baru child componentnya akan dirender. Jika pada parent nested route tidak ditulikan component ini, maka child component tidak akan bisa terender */}
            <FooterLayout />
        </>
    );
}

export default Layout;
