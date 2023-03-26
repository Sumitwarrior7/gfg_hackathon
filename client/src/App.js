import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Content/context/AuthorizationContext.js";

import Cart from "./Components/Cart/Cart.js";
import Home from "./Components/Content/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./App.css";
import About from "./Components/Content/About/AboutUs.js";
import Signup from "./Components/Content/Signup/Signup.js";
import SignIn from "./Components/Content/Signup/SignIn.js";
import ResetPassword from "./Components/Content/Signup/ResetPassword";
import Shop from "./Components/Content/Shop/Shop.js";
import Footer from "./Components/Footer/footer";
import Renting from "./Components/Content/Rent/Renting.js";
import Contact from "./Components/Content/Contact/Contact.js";
import Veg_Sell from "./Components/Content/Sell_form/veg_sell_form/veg_sell_form";
import RentingSection from "./Components/Content/Rent/RentalPages/ServiceTakerPortal/RentalServicesPage/RentalSection.js";
import ServicesRequiredListing from "./Components/Content/Rent/RentalPages/ServiceProviderPortal/ServicesRequiredListing/ServicesRequiredListing.js";
import UserProfile from "./Components/User_profile/User_profile";
import IndividualListingPage from "./Components/Content/Rent/RentalPages/ServiceProviderPortal/IndividualListingPage/IndividualListingPage.js";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signin/resetpassword" element={<ResetPassword />} />
          <Route exact path="/rent" element={<Renting />} />
          <Route exact path="/rent/service-taker-portal" element={<RentingSection />} />
          <Route exact path="/rent/service-provider-portal" element={<ServicesRequiredListing />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sell" element={<Veg_Sell />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/thassa" element={<IndividualListingPage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
