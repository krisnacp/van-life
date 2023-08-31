import about_poster from "../assets/images/about_poster.png";
import "./About.css";

function About() {
    return (
        <div className="about-wrapper">
            <div className="about-poster">
                <img src={about_poster} alt="Van Life About Section Poster" />
            </div>
            <main className="about-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <article>
                    <p>
                        Our mission is to enliven your road trip with the
                        perfect travel van rental. Our vans are recertified
                        before each trip to ensure your travel plans can go off
                        without a hitch. <br /> (Hitch costs extra 😉)
                    </p>
                    <p>
                        Our team is full of vanlife enthusiasts who know
                        firsthand the magic of touring the world on 4 wheels.
                    </p>
                </article>
                <div className="van-box">
                    <div className="tagline">
                        <h3>Your destination is waiting. </h3>
                        <h3>Your van is ready.</h3>
                    </div>
                    <button className="btn-van-explore">
                        <h5>Explore our vans</h5>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default About;
