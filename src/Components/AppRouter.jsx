import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import CityPage from "../Pages/CityPage.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/city"} element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
