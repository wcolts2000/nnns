import Layout from '../components/Layout';
import Hero from "../components/Home/Hero";
import CTA from "../components/Home/CTA";
import Video from "../components/Home/Video";
import POIs from "../components/Home/POIs";
import Testimonial from "../components/Home/Testimonial";
import Connected from "../components/Home/Connected";

const networkingList = ["Wifi Mesh Networks", "Network Administration", "Network Engineering", "Point to Point Connections", "Cable Runs"];
const computersList = ["New Computers", "Refurbished Computers", "Remote Printer Installations", "VOIP Systems", "Merchant Processing", "Credit Card Machine Integration", "Hosted Hospitality Solutions", "Hospitality Communication Solutions"];
const camerasList = ["Security Cameras", "IP Cameras"];
// import '../styles.scss';

function Home() {
  return (
      <Layout 
        title="Northern Nevada Network Services"
        description="Get networking, VOIP, Computers, Cameras, Merchant Processing, Point Of Sales, and more in Reno and Sparks for your business today."
      >
        <Hero />
        <CTA title="Networking" icon='wifi' img="access-points" categoryList={networkingList} />
        <POIs />
        <Video />
        <CTA title="Computers" position="right" icon='computer' img='pos' categoryList={computersList} />
        <Testimonial />
        <CTA title="Cameras" icon="camera-icon" img="camera" categoryList={camerasList} />
        <Connected />
      </Layout>
  );
}

export default Home;
