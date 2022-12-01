import classes from "./app.module.css";
import Header from "./components/layout/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
