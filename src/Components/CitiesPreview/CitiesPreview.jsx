import classes from "./CitiesPreview.module.css";
import { SunOutlined } from "@ant-design/icons";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureHigh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CitiesPreview = () => {
  return (
    <section className={classes.citiesPreview} id="popularCities">
      <span className={classes.Article}>Popular cities</span>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={classes.citiesContent}
      >
        <Link to={"/city"} className={classes.blockOfCity}>
          <div className={classes.upperPart}>
            <SunOutlined className={classes.status} />
            <div className={classes.nameCityAndStatus}>
              <span>New York</span>
              <span>Sun</span>
            </div>
            <span className={classes.temperature}>25°</span>
          </div>
          <div className={classes.bottomPart}>
            <div>
              <FiSunrise className={classes.iconBottomPart} />
              <div>
                <span>Sunrise</span>
                <span>4:32 AM</span>
              </div>
            </div>
            <div>
              <FiSunset className={classes.iconBottomPart} />
              <div>
                <span>Sunset</span>
                <span>9:32 PM</span>
              </div>
            </div>
            <div>
              <IoWaterOutline className={classes.iconBottomPart} />
              <div>
                <span>Humidity</span>
                <span>70% </span>
              </div>
            </div>
            <div>
              <FaTemperatureHigh className={classes.iconBottomPart} />
              <div>
                <span>Feels like</span>
                <span>24°</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/city"} className={classes.blockOfCity}>
          <div className={classes.upperPart}>
            <SunOutlined className={classes.status} />
            <div className={classes.nameCityAndStatus}>
              <span>Washington</span>
              <span>Sun</span>
            </div>
            <span className={classes.temperature}>21°</span>
          </div>
          <div className={classes.bottomPart}>
            <div>
              <FiSunrise className={classes.iconBottomPart} />
              <div>
                <span>Sunrise</span>
                <span>5:12 AM</span>
              </div>
            </div>
            <div>
              <FiSunset className={classes.iconBottomPart} />
              <div>
                <span>Sunset</span>
                <span>9:12 PM</span>
              </div>
            </div>
            <div>
              <IoWaterOutline className={classes.iconBottomPart} />
              <div>
                <span>Humidity</span>
                <span>80% </span>
              </div>
            </div>
            <div>
              <FaTemperatureHigh className={classes.iconBottomPart} />
              <div>
                <span>Feels like</span>
                <span>19°</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/city"} className={classes.blockOfCity}>
          <div className={classes.upperPart}>
            <SunOutlined className={classes.status} />
            <div className={classes.nameCityAndStatus}>
              <span>Las Vegas</span>
              <span>Sun</span>
            </div>
            <span className={classes.temperature}>29°</span>
          </div>
          <div className={classes.bottomPart}>
            <div>
              <FiSunrise className={classes.iconBottomPart} />
              <div>
                <span>Sunrise</span>
                <span>4:42 AM</span>
              </div>
            </div>
            <div>
              <FiSunset className={classes.iconBottomPart} />
              <div>
                <span>Sunset</span>
                <span>9:12 PM</span>
              </div>
            </div>
            <div>
              <IoWaterOutline className={classes.iconBottomPart} />
              <div>
                <span>Humidity</span>
                <span>80% </span>
              </div>
            </div>
            <div>
              <FaTemperatureHigh className={classes.iconBottomPart} />
              <div>
                <span>Feels like</span>
                <span>30°</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default CitiesPreview;
