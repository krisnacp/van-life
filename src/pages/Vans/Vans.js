import "./Vans.css";
import "../../server";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vans() {
    /* fetching data from local server */
    // inisiasi state untuk menapung data hasil fetching, sesuaikan tipe data nilai default state dengan tipe data dari nilai yang ditampung akan ditampung
    const [vans, setVans] = useState([]);

    // fetch data menggunakan useEffect
    useEffect(() => {
        // asynchronous function digunakan agar state yang diinisiasi bisa dieksekusi dahulu oleh program
        async function getVans() {
            const res = await fetch("/api/vans");
            const data = await res.json();
            setVans(data.vans);
        }
        getVans();
        //     fetch("/api/vans")
        //         .then((res) => res.json())
        //         .then((data) => setVans(data.vans));
    }, []);

    // console.log(vans);

    const vanCard = vans.map((van) => {
        // van category bg-color condition
        function categoryColor() {
            if (van.type === "simple") {
                return "simple";
            } else if (van.type === "rugged") {
                return "rugged";
            } else {
                return "luxury";
            }
        }

        return (
            <div key={van.id} className="van-card">
                <Link to={`/vans/${van.id}`} className="link-wrapper">
                    <img
                        src={van.imageUrl}
                        alt="img of card"
                        className="van-img"
                    />
                    <div className="van-details">
                        <h3 className="van-name">{van.name}</h3>
                        <div className="van-price">
                            <h3>${van.price}</h3>
                            <span>/day</span>
                        </div>
                    </div>
                    <div className={`van-category ${categoryColor()}`}>
                        {van.type}
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className="vans-wrapper">
            <header>
                <h1>Explore our van options</h1>
                <div className="filters">
                    <ul className="filter-container">
                        <li className="filter">Simple</li>
                        <li className="filter">Luxury</li>
                        <li className="filter">Rugged</li>
                    </ul>
                    <p className="filters-cleaner">Clear Filter</p>
                </div>
            </header>
            <div className="vans-content">{vanCard}</div>
        </div>
    );
}

export default Vans;
