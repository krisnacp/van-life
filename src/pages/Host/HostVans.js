import "./HostVans.css";
import { Link } from "react-router-dom";
import "../../server";
import { useEffect, useState } from "react";

function HostVans() {
    // meyiapkan state untuk menampung value hasil fetch useEffect()
    const [hosts, setHosts] = useState([]);

    // fetching data
    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setHosts(data.vans));
    }, []);

    console.log(hosts);
    // mapping data hasil fetch pada card
    const hostCard = hosts.map((host) => {
        return (
            <Link
                to={`/host/vans/${host.id}`}
                className="host-listed-van-card"
                key={host.id}
            >
                <div className="host-van-info-wrapper">
                    <img
                        src={host.imageUrl}
                        alt="img of card"
                        className="host-card-img"
                    />
                    <div className="host-van-info">
                        <h3>{host.name}</h3>
                        <p>{host.price}$/day</p>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <>
            {hosts.length === 0 ? (
                <h1 className="loading">Loading...</h1>
            ) : (
                <section className="host-vans-wrapper">
                    <h1 className="host-vans-heading">Your listed vans</h1>
                    <div className="host-listed-van-card-container">
                        {hostCard}
                    </div>
                </section>
            )}
        </>
    );
}

export default HostVans;
