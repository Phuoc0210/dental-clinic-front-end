import "./App.css";
import HomepageIndex from "./pages/homepage/homepageIndex";
import FormContainer from "./pages/user/login/index.jsx";
import { Routes, Switch, Route, Link, RouterProvider } from "react-router-dom";
import AppRoute from "./Route";

function App() {
  return (
    <>
      {/* <FormContainer /> */}
      {/* <HomepageIndex /> */}
      <AppRoute />
    </>
  );
}

export default App;
