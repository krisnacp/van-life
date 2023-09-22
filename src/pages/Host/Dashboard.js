import "./Dashboard.css";
import star from "../../assets/icons/star-filled-golden.svg";
import van1 from "../../assets/images/van-1.png";

function Dashboard() {
    return (
        <main className="dashboard-wrapper">
            <section className="earning-wrapper">
                <h2 className="earning-title">Welcome!</h2>
                <div className="earning-info">
                    <p className="month-earning">
                        Income in last <span>30 days</span>
                    </p>
                    <p className="earning-details">Details</p>
                </div>
                <h1 className="earning-nominal">$2,260</h1>
            </section>
            <section className="score-wrapper">
                <div className="score-container">
                    <h3>Review score</h3>
                    <div className="star-wrapper">
                        <img className="star-icon" src={star} alt="Star icon" />
                        <h3 className="score">
                            5.0<span>/5</span>
                        </h3>
                    </div>
                </div>
                <p className="score-details">Details</p>
            </section>
            <section className="listed-vans-wrapper">
                <div className="all-list-vans">
                    <h3>Your listed vans</h3>
                    <p>View all</p>
                </div>
                <div className="listed-van-card-container">
                    <div className="listed-van-card">
                        <div className="van-info-wrapper">
                            <img
                                src={van1}
                                alt="img of card"
                                className="card-img"
                            />
                            <div className="van-info">
                                <h3>Modest Explorer</h3>
                                <p>$60/day</p>
                            </div>
                        </div>
                        <p>Edit</p>
                    </div>
                    <div className="listed-van-card">
                        <div className="van-info-wrapper">
                            <img
                                src={van1}
                                alt="img of card"
                                className="card-img"
                            />
                            <div className="van-info">
                                <h3>Modest Explorer</h3>
                                <p>$60/day</p>
                            </div>
                        </div>
                        <p>Edit</p>
                    </div>
                </div>
            </section>
            <div className="listed-card"></div>
        </main>
    );
}

export default Dashboard;
