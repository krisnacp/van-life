import "../server";
import { useEffect, useState } from "react";
import "./HostVanDetailLayout.css";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";
import leftArrow from "../assets/icons/arrow-alt-left-black.svg";

function HostVanDetail() {
    // method hook untuk meng-grab object dinamis dari <Route path="/vans/:id" />
    const params = useParams();

    // inisiasi state untuk menampung hasil fetch
    const [detailVans, setDetailVans] = useState(null); // default value diset

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setDetailVans(data.vans));
    }, [params.id]);

    // console.log(detailVans);

    // van category bg-color condition
    function categoryColor() {
        if (detailVans.type === "simple") {
            return "simple";
        } else if (detailVans.type === "rugged") {
            return "rugged";
        } else {
            return "luxury";
        }
    }

    return (
        <div className="van-detail-wrapper">
            <nav className="breadcrumbs-container">
                <ol className="breadcrumbs-list">
                    <li>
                        {/* <Link to="../vans" className="breadcrumb"> */}
                        {/* 1. value pada property 'to' menunjukan bahwa tujuan dari <Link> adalah naik 1 level path, dari /host/vans/:id ke /host/vans. Jika penulisan value dari property 'to' hanya '..|../' tanpa menunjukan level atau path yang dituju, maka tujuan dari <Link> adalah path dari parent <Route path="host">, karena <Route path="vans/:id"> akan relatif ke 'path="host"' yang merupakan parent 'route'-nya dari pada 'path="vans"', yang bukan merupakan parent route, melainkan 'siblings route'. Jadi penulisan value pada property 'to' harus mencantumkan path dari route tujuannya, <Link to="../vans"> */}
                        <Link
                            to=".."
                            relative="path"
                            // 2. jika cara yang pertama adalah, menspesifikan value dari property 'to' sesuai dengan tujuan yang ingin dicapai, sedangkan yang kedua adalah men-setting relativitas dari tujuan. Jika defaultnya relativitas tujuan dari <Link> dengan value property 'to=".."' parent route maka dengan tambahan property 'relative', kita bisa mengubah tujuan relatifnya menjadi path, karena path saat ini adalah '/host/vans/:id', maka jika naik 1 level adalah '/host/vans' yang merupakan realatif dengan path, jika relatif dengan route maka akan naik ke '/host'
                            className="breadcrumb"
                        >
                            <img
                                className="left-arrow"
                                src={leftArrow}
                                alt="left arrow icon"
                            />
                            <p className="breadcrumb-text">Back to all vans</p>
                        </Link>
                    </li>
                </ol>
            </nav>
            {detailVans ? (
                <div className="host-van-detail-container">
                    <div className="host-van-card-header">
                        <img
                            src={detailVans.imageUrl}
                            alt="Van detail img"
                            className="host-van-detail-img"
                        />
                        <div className="host-van-card-header-attribute">
                            <div
                                className={`detail-van-category ${categoryColor}`}
                            >
                                {detailVans.type}
                            </div>
                            <h1 className="header-detail-attribute">
                                {detailVans.name}
                            </h1>

                            <div className="detail-price-attribute">
                                <h3>${detailVans.price}</h3>
                                <span>/day</span>
                            </div>
                        </div>
                    </div>
                    <nav className="host-van-detail-nav-container">
                        <ul className="host-van-detail-main-menu">
                            <li>
                                <NavLink
                                    to="."
                                    end
                                    className={`host-menu ${({ isActive }) =>
                                        isActive ? "active" : ""}`}
                                >
                                    Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="pricing"
                                    className={`host-menu ${({ isActive }) =>
                                        isActive ? "active" : ""}`}
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="photos"
                                    className={`host-menu ${({ isActive }) =>
                                        isActive ? "active" : ""}`}
                                >
                                    Photos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Outlet context={[detailVans, setDetailVans]} />
                </div>
            ) : (
                <h2 className="load-text">Loading...</h2>
            )}
        </div>
    );
}

export default HostVanDetail;
