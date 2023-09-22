import { useOutletContext } from "react-router-dom";
import "./VanDetails.css";
import "../../../server";

function Pricing() {
    const [detailVans, setDetailVans] = useOutletContext();

    return (
        <>
            {detailVans ? (
                <div className="host-van-pricing">
                    <p>
                        <span className="bold-pricing">
                            ${detailVans.price}.00
                        </span>
                        /day
                    </p>
                </div>
            ) : (
                <h1 className="loading-van-details">Loading...</h1>
            )}
        </>
    );
}

export default Pricing;
