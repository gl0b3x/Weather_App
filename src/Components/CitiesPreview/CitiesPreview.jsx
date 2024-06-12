import classes from "./CitiesPreview.module.css";
import { SunOutlined } from "@ant-design/icons";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureHigh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CitiesPreview = () => {
  const array = [1,2,3]


  return (
    <section className={classes.citiesPreview} id="popularCities">
      <span className={classes.Article}>Popular cities</span>
      <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          className={classes.citiesContent}
      >
        {
          array.map( index => (
              <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    scale: { duration: 0.5, delay: 0.2 * index },
                    opacity: { duration: 0.3, delay: 0.3 * index },
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className={classes.blockOfCityWrapper}>
                <Link to={"/city"} className={classes.blockOfCity}>
                  <div className={classes.upperPart}>
                    <SunOutlined className={classes.status}/>
                    <div className={classes.nameCityAndStatus}>
                      <span>New York</span>
                      <span>Sun</span>
                    </div>
                    <span className={classes.temperature}>25°</span>
                  </div>
                  <div className={classes.bottomPart}>
                    <div>
                      <FiSunrise className={classes.iconBottomPart}/>
                      <div>
                        <span>Sunrise</span>
                        <span>4:32 AM</span>
                      </div>
                    </div>
                    <div>
                      <FiSunset className={classes.iconBottomPart}/>
                      <div>
                        <span>Sunset</span>
                        <span>9:32 PM</span>
                      </div>
                    </div>
                    <div>
                      <IoWaterOutline className={classes.iconBottomPart}/>
                      <div>
                        <span>Humidity</span>
                        <span>70% </span>
                      </div>
                    </div>
                    <div>
                      <FaTemperatureHigh className={classes.iconBottomPart}/>
                      <div>
                        <span>Feels like</span>
                        <span>24°</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
          ))
        }
      </motion.div>
    </section>
  );
};

export default CitiesPreview;
