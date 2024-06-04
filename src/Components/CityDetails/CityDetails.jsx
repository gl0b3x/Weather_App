import classes from "./CityDetails.module.css";
import { ConfigProvider } from "antd";
import Search from "antd/es/input/Search.js";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureHigh } from "react-icons/fa";
import { SunOutlined } from "@ant-design/icons";
import { TbTemperatureSun } from "react-icons/tb";
import { LuWind } from "react-icons/lu";

const CityDetails = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className={classes.cityWrapper} id="product">
      <section className={classes.cityWrapperBlur}>
        <div className={classes.cityDetails}>
          <div className={classes.leftBlock}>
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    activeBorderColor: "rgb(var(--backgroundReverse))",
                    hoverBorderColor: "rgb(var(--backgroundReverse))",
                    colorBgContainer: "rgba(var(--backgroundReverse), 0.1)",
                    colorText: "rgba(var(--textColor))",
                    colorTextPlaceholder: "rgba(var(--textColor), 0.7)",
                    borderRadius: "14px",
                  },
                  Button: {
                    defaultHoverBg: "rgba(var(--backgroundReverse), 0.1)",
                    defaultHoverBorderColor: "rgb(var(--backgroundReverse))",
                    defaultActiveBg: "rgba(var(--backgroundReverse), 0.1)",
                    defaultBg: "rgba(var(--backgroundReverse), 0.1)",
                  },
                },
              }}
            >
              <Search placeholder="New York" className={classes.searchInput} />
            </ConfigProvider>
            <div className={classes.visualCityWrapper}>
              <div className={classes.visualCityDetails}>
                <div>
                  <p className={classes.temperature}>25°</p>
                  <p className={classes.dayDetails}>Sunny day</p>
                </div>
                <div className={classes.bottomPart}>
                  <div>
                    <span className={classes.leftBlockTitleSpan}>
                      <FiSunrise /> Sunrise
                    </span>
                    <span className={classes.leftBlockInfoSpan}>4:32 AM</span>
                  </div>
                  <div>
                    <span className={classes.leftBlockTitleSpan}>
                      <FiSunset /> Sunset
                    </span>
                    <span className={classes.leftBlockInfoSpan}>9:32 PM</span>
                  </div>
                  <div>
                    <span className={classes.leftBlockTitleSpan}>
                      <IoWaterOutline /> Humidity
                    </span>
                    <span className={classes.leftBlockInfoSpan}>70% </span>
                  </div>
                  <div>
                    <span className={classes.leftBlockTitleSpan}>
                      <FaTemperatureHigh /> Feels like
                    </span>
                    <span className={classes.leftBlockInfoSpan}>24°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.Temperature}>
              <p className={classes.rightBlockTitle}>Hourly Forecast</p>
              <div className={classes.temperatureFlexBox}>
                <div className={classes.active}>
                  <p className={classes.timeSpan}>Now</p>
                  <p className={classes.temperatureSpan}>25°</p>
                  <p className={classes.iconSpan}>
                    <SunOutlined />
                  </p>
                </div>
                {array.map((index) => (
                  <div key={index} className={classes.temperatureBox}>
                    <p className={classes.timeSpan}>{"1" + index + ":00"}</p>
                    <p className={classes.temperatureSpan}>25°</p>
                    <p className={classes.iconSpan}>
                      <SunOutlined />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.Temperature}>
              <p className={classes.rightBlockTitle}>Day Forecast</p>
              <div className={classes.temperatureFlexBox}>
                <div className={classes.active}>
                  <p className={classes.dateSpan}>Today</p>
                  <p className={classes.timeSpan}>30/06</p>
                  <p className={classes.temperatureSpan}>25°</p>
                  <p className={classes.iconSpan}>
                    <SunOutlined />
                  </p>
                </div>

                {array.map((index) => (
                  <div key={index} className={classes.temperatureBox}>
                    <p className={classes.dateSpan}>Sun</p>
                    <p className={classes.timeSpan}>{"0" + index + "/07"}</p>
                    <p className={classes.temperatureSpan}>{25 + index}°</p>
                    <p className={classes.iconSpan}>
                      <SunOutlined />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.bottomPartRightBlock}>
              <div>
                <p className={classes.bottomBlockTitle}>
                  <TbTemperatureSun /> Uv Index
                </p>
                <p className={classes.valueUv}>3</p>
                <input
                  type="range"
                  max="10"
                  value={3}
                  className="gradient-slider"
                />
              </div>
              <div>
                <p className={classes.bottomBlockTitle}>
                  <LuWind /> Wind
                </p>
                <span className={classes.valueWind}>
                  3 <span> MPH Wind </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
};

export default CityDetails;
