import "../../server";
import { useEffect, useState } from "react";
import "./VanDetail.css";
import { Link, useParams } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-alt-left-black.svg";

function VanDetail() {
    // method hook untuk meng-grab object dinamis dari <Route path="/vans/:id" />
    const params = useParams();

    // inisiasi state untuk menampung hasil fetch
    const [detailVans, setDetailVans] = useState(null); // default value diset 'null' berfungsi untuk conditional rendering, karena sifat falsy dari nullish value

    // fetching data menggunakan useEffect()
    /* useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setDetailVans(data.vans));
    }, []); */
    // pada fetching data secara spesifik, kita bisa memanfaatkan value dari object dinamis yang sudah di-grab oleh method hook useParams() sebagai identifikator data untuk fetching data tertentu dari api
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setDetailVans(data.vans));
    }, [params.id]);

    console.log(detailVans);

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

    // mengambil data berdasarkan id dari url yang sudah di-grab menggunakan useParams()
    // const van = detailVans.filter((detailVan) => detailVan.id === id);

    // const van2 = detailVans.map((detailVan) => {
    //     // van category bg-color condition
    //     function categoryColor() {
    //         if (detailVan.type === "simple") {
    //             return "simple";
    //         } else if (detailVan.type === "rugged") {
    //             return "rugged";
    //         } else {
    //             return "luxury";
    //         }
    //     }

    //     return (
    //         <div key={detailVan.id} className="van-detail-container">
    //             <img
    //                 src={detailVan.imageUrl}
    //                 alt="Van detail img"
    //                 className="detail-img"
    //             />
    //             <div className={`detail-van-category ${categoryColor()}`}>
    //                 {detailVan.type}
    //             </div>
    //             <article>
    //                 <header className="header-detail-container">
    //                     <h1>Modest Explorer</h1>
    //                 </header>
    //                 <div className="detail-price">
    //                     <h3>$60</h3>
    //                     <span>/day</span>
    //                 </div>
    //                 <p className="van-description">
    //                     The Modest Explorer is a van designed to get you out of
    //                     the house and into nature. This beauty is equipped with
    //                     solar panels, a composting toilet, a water tank and
    //                     kitchenette. The idea is that you can pack up your home
    //                     and escape for a weekend or even longer!
    //                 </p>
    //             </article>
    //             <button className="rent-van">Rent this van</button>
    //         </div>
    //     );
    // });

    return (
        <div className="van-detail-wrapper">
            <nav className="breadcrumbs-container">
                <ol className="breadcrumbs-list">
                    <li>
                        <Link to="/vans" className="breadcrumb">
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
                <div className="van-detail-container">
                    <img
                        src={detailVans.imageUrl}
                        alt="Van detail img"
                        className="detail-img"
                    />
                    <div className={`detail-van-category ${categoryColor()}`}>
                        {detailVans.type}
                    </div>
                    <article>
                        <header className="header-detail-container">
                            <h1>{detailVans.name}</h1>
                        </header>
                        <div className="detail-price">
                            <h3>{detailVans.price}</h3>
                            <span>/day</span>
                        </div>
                        <p className="van-description">
                            {detailVans.description}
                        </p>
                    </article>
                    <button className="rent-van">Rent this van</button>
                </div>
            ) : (
                <h2 className="load-text">Loading...</h2>
            )}

            {/* {van2} */}
        </div>
    );
}

export default VanDetail;
