import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import Reviews from "./pages/Host/Reviews";
import HostVanDetailLayout from "./components/HostVanDetailLayout";
import Details from "./pages/Host/VanDetail/Details";
import Pricing from "./pages/Host/VanDetail/Pricing";
import Photos from "./pages/Host/VanDetail/Photos";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetail />} />
                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="vans" element={<HostVans />} />
                            {/* <Route
                                path="vans/:id"
                                element={<HostVanDetail />}
                            /> */}
                            <Route
                                path="vans/:id"
                                element={<HostVanDetailLayout />}
                            >
                                <Route index element={<Details />} />
                                <Route path="pricing" element={<Pricing />} />
                                <Route path="photos" element={<Photos />} />
                            </Route>
                            {/* <Route path="/host/reviews" element={<Reviews />} /> */}
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
