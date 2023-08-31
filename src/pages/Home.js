import "./Home.css";

function Home() {
    return (
        <div className="main-wrapper">
            <main className="main-content">
                <article className="main-page">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>
                        Add adventure to your life by joining the #vanlife
                        movement. Rent the perfect van to make your perfect road
                        trip.
                    </p>
                </article>
                <button className="btn-find-van">
                    <h4>Find your van</h4>
                </button>
            </main>
        </div>
    );
}

export default Home;
