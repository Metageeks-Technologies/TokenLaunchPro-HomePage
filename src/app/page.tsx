import Image from "next/image";
import Head from './components/Header'
import Empow from "./components/Empowering";
import Mainlanding from "./components/Mainlanding";
import Ads from "./components/Ads";
import Theory from "./components/Theory";
import Features from "./components/Features";
import Works from "./components/Works";
import Imageline from "./components/Imageline";
import Backers from "./components/Backers";
import FAQ from "./components/Faq";
import Advisor from "./components/Advisor";
import Team1 from "./components/Team";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
     <div >
      <div className="">
        <Head />
      </div>

      <div className="">
        <Empow />
      </div>
      

      <div>
        <Mainlanding/>
      </div>

      <div className="p-4">
        <Ads />
      </div>

      <div className="">
        <Theory />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Works />
      </div>

      <div>
        <Imageline />
      </div>

      <div>
        <Backers />
      </div>
      
      <div>
        <FAQ/>
      </div>

      <div>
        <Advisor />
      </div>

      <div>
        <Team1 />
      </div>

      <div>
        <Footer />
      </div>
     </div> 
    </div>
  );
}
