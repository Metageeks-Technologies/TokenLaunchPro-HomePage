
// import Head from './components/Header'
import Head from '@/app/components/Header'
// import Empow from "./components/Empowering";
import Empow from '@/app/components/Empowering'
// import Mainlanding from "./components/Mainlanding";
import Mainlanding from "@/app/components/Mainlanding"
// import Ads from "./components/Ads";
import Ads from "@/app/components/Ads"
// import Theory from "./components/Theory";
import Theory from "@/app/components/Theory"
// import Features from "./components/Features";
import Features from "@/app/components/Features"
import Works from "@/app/components/Works"
// import Works from "./components/Works";
// import Imageline from "./components/Imageline";
import Imageline from "@/app/components/Imageline"
// import Backers from "./components/Backers";
import Backers from "@/app/components/Backers"
// import FAQ from "./components/Faq";
import FAQ from "@/app/components/Faq"
// import Advisor from "./components/Advisor";
import Advisor from "@/app/components/Advisor"
// import Team1 from "./components/Team";
import Team1 from "@/app/components/Team"
// import Footer from "./components/Footer";
import Footer from "@/app/components/Footer"



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
