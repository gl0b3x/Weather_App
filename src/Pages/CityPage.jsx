import HeaderComponent from "../Components/Header/HeaderComponent.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import CityDetails from "../Components/CityDetails/CityDetails.jsx";

const CityPage = () => {
  return (
    <main>
      <HeaderComponent product={true} />
      <CityDetails />
      <Footer />
    </main>
  );
};

export default CityPage;
