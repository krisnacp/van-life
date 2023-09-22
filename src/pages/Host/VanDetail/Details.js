import { useOutletContext } from "react-router-dom";
import "./VanDetails.css";
import "../../../server";

function Details() {
    // menangkap value dari property 'context' yang sudah di-pass dari parent routenya
    const [detailVans, setDetailVans] = useOutletContext(); // dengan, kita tidak perlu melakukan fetching/hook data lagi itu sudah dilakukan pada bagian parent kompenen
    // console.log(detailVans);

    return (
        <>
            {detailVans ? (
                <div className="host-van-details">
                    <p>
                        <span className="bold">Name:</span> {detailVans.name}
                    </p>
                    <p>
                        <span className="bold">Category:</span>{" "}
                        {detailVans.type}
                    </p>
                    <p>
                        <span className="bold">Description:</span>{" "}
                        {detailVans.description}
                    </p>
                    <p>
                        <span className="bold">Visibility:</span> Public
                    </p>
                </div>
            ) : (
                <h1 className="loading-van-details">Loading...</h1>
            )}
        </>
    );
}

export default Details;
