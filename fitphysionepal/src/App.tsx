import classes from "./app.module.css";
//test
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import { routeConfig as router } from "./config/route-config";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <Routes>
          <Route path={router.home.routeURL} element={<HomePage />} />
          <Route path={router.contact.routeURL} element={<ContactPage />} />
          <Route path={router.about.routeURL} element={<AboutPage />} />
          <Route path={router.services.routeURL} element={<ServicesPage />} />
          <Route path={router.booking.routeURL} element={<BookAppointmentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
