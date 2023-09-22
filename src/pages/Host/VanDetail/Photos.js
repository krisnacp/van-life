import { useOutletContext } from "react-router-dom";
import "./VanDetails.css";
import "../../../server";

function Photos() {
    const [detailVans, setDetailVans] = useOutletContext();

    return (
        <>
            {detailVans ? (
                <div className="host-van-photos">
                    <img
                        className="van-photo"
                        src={detailVans.imageUrl}
                        alt="Detail van img"
                    />
                </div>
            ) : (
                <h1 className="loading-van-details">Loading...</h1>
            )}
        </>
    );
}

export default Photos;
