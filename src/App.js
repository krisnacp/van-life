import "./App.css";
import logo from "./assets/icons/logo.png";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// function About() {
//     return (
//         <div className="about-wrapper">
//             <div className="about-poster">
//                 <img src={about_poster} alt="Van Life About Section Poster" />
//             </div>
//             <main className="about-content">
//                 <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
//                 <article>
//                     <p>
//                         Our mission is to enliven your road trip with the
//                         perfect travel van rental. Our vans are recertified
//                         before each trip to ensure your travel plans can go off
//                         without a hitch. <br /> (Hitch costs extra 😉)
//                     </p>
//                     <p>
//                         Our team is full of vanlife enthusiasts who know
//                         firsthand the magic of touring the world on 4 wheels.
//                     </p>
//                 </article>
//                 <div className="van-box">
//                     <div className="tagline">
//                         <h3>Your destination is waiting. </h3>
//                         <h3>Your van is ready.</h3>
//                     </div>
//                     <button className="btn-van-explore">
//                         <h5>Explore our vans</h5>
//                     </button>
//                 </div>
//             </main>
//         </div>
//     );
// }

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="navigation">
                    <div className="nav-container">
                        <div className="nav-logo-container">
                            <Link to="/">
                                <img
                                    className="nav-logo"
                                    src={logo}
                                    alt="Van Life Logo"
                                />
                            </Link>
                        </div>
                        <nav className="main-nav">
                            <ul className="main-menu">
                                <li>
                                    <Link to="about" className="menu">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="menu">Vans</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>

                <footer className="page-footer">
                    <span>&copy;</span>
                    <p>2023 #VANLIFE</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
