import Banner from './Banner/Banner';
import Steps from './Steps/Steps';
import CityTabs from './CityTabs/CityTabs';
import Featured from './Featured/Featured';
import CTA from './CTA/CTA';
import SocialMedia from './SocialMedia/SocialMedia';
import './homepage.css'


function Homepage() {
  return (
    <div className="homepage">
      <Banner></Banner>
      <Steps></Steps>
      <CityTabs></CityTabs>
      <Featured></Featured>
      <CTA></CTA>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default Homepage;
