import HeaderComponent from "../Components/Header/HeaderComponent.jsx";
import CitySearch from "../Components/CitySearch/CitySearch.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import AboutUs from "../Components/AboutUs/AboutUs.jsx";
import CitiesPreview from "../Components/CitiesPreview/CitiesPreview.jsx";

const HomePage = () => {
  return (
    <main>
      <HeaderComponent about={true} popular={true} />
      <CitySearch />
      <CitiesPreview />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default HomePage;
