import classes from "./app.module.css";
import Header from "./components/layout/Header/Header";
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
      <main></main>
      <Routes>
        <Route path={router.home.routeURL} element={<HomePage />} />
        <Route path={router.contact.routeURL} element={<ContactPage />} />
        <Route path={router.about.routeURL} element={<AboutPage />} />
        <Route path={router.services.routeURL} element={<ServicesPage />} />
        <Route path={router.booking.routeURL} element={<BookAppointmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
