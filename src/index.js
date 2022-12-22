import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

import Header from "./Extends/Header";

import Footer from "./Extends/Footer";
import reportWebVitals from "./reportWebVitals";

// IMPORT PAGES
import About from "./Views/About/Index";

import ScrollToTop from "./Views/ScrollToTop/Index";
// import { Form } from "react-bootstrap/lib/Navbar";
import Carauction from "./Views/Carauction";
import CarDetails from "./Views/CarDetails/index";
import Property from "./Views/Property/index";
import Contactus from "./Views/Contactus/index";
import Propertydetails from "./Views/Propertydetails/index";

import FAQ from "./Views/FAQ/Index";
import Register from "./Views/Register/index";
import Signin from "./Views/Signin/index";
import Termscondition from "./Views/Termscondition/index";
import Myprofile from "./Views/Dashboard/Myprofile/index";
import Changepassword from "./Views/Dashboard/Changepassword/index";
import Cars from "./Views/Dashboard/Cars/index";
import Carsdeposits from "./Views/Dashboard/Carsdeposits/index";
import Watching from "./Views/Dashboard/Watching/index";
import Bidhistory from "./Views/Dashboard/Bidhistory/index";
import Profileupdate from "./Views/Dashboard/Profileupdate/index";
import Addressupdate from "./Views/Dashboard/Addressupdate/index";
import Trafficfile from "./Views/Dashboard/Trafficfile/index";
import Communication from "./Views/Dashboard/Communication/index";
import Document from "./Views/Dashboard/Document/index";
import NumberPlate from "./Views/NumberPlate";
import MobilePhone from "./Views/MobilePhone";

// NEW
function Main() {
  return (
    <BrowserRouter>
      <header className="pageheader">
        <Header />
      </header>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/aboutus" element={<About />} />

        <Route path="/carauction" element={<Carauction />} />
        <Route path="/number-plate" element={<NumberPlate />} />
        <Route path="/mobile-phone" element={<MobilePhone />} />
        <Route path="/property" element={<Property />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/termscondition" element={<Termscondition />} />

        <Route path="/carsdeposits" element={<Carsdeposits />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/changepassword" element={<Changepassword />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/profileupdate" element={<Profileupdate />} />

        <Route path="/bidhistory" element={<Bidhistory />} />

        <Route path="/watching" element={<Watching />} />
        <Route path="/addressupdate" element={<Addressupdate />} />

        <Route path="/Trafficfile" element={<Trafficfile />} />

        <Route path="/communication" element={<Communication />} />

        <Route path="/document" element={<Document />} />

        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
