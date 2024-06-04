import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { WeatherContext } from "../../Context/ConfigProvider.jsx";
import classes from "./HeaderComponent.module.css";
import { useSmoothScroll } from "../Tools/useSmoothScroll.js";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderComponent = ({ popular, about, product }) => {
  const { currentTheme, setCurrentTheme } = useContext(WeatherContext);
  const handleSmoothScroll = useSmoothScroll();

  return (
    <header className={classes.Header}>
      <Link to={"/"}>Weather App</Link>
      <div className={classes.Navigation}>
        {product ? (
          <a
            href="#product"
            className={classes.Link}
            onClick={handleSmoothScroll}
          >
            New York
          </a>
        ) : (
          <></>
        )}
        {popular ? (
          <a
            href="#popularCities"
            className={classes.Link}
            onClick={handleSmoothScroll}
          >
            Popular Cities
          </a>
        ) : (
          <></>
        )}
        {about ? (
          <a
            href="#aboutUs"
            className={classes.Link}
            onClick={handleSmoothScroll}
          >
            About Us
          </a>
        ) : (
          <></>
        )}
        <a href="#footer" className={classes.Link} onClick={handleSmoothScroll}>
          Contacts
        </a>
      </div>
      <div className={classes.Buttons}>
        {currentTheme === "dark" ? (
          <SunOutlined onClick={() => setCurrentTheme("light")} />
        ) : (
          <MoonOutlined onClick={() => setCurrentTheme("dark")} />
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
