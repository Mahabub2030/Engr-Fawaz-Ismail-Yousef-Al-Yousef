import { TypeAnimation } from "react-type-animation";
import facebook from "../assets/facebook.png";
import hero from "../assets/Hero.jpg";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

// import herobg1 from '../assets/herobg1.jpg'

const Hero = () => {
  return (
    <>
      <section
        // style={{
        //   backgroundImage: `url(${herobg1})`,
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        // }}

        className=" relative "
      >
        <div className=" max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
              <h1 className="lg:text-7xl text-4xl  font-bold lg:leading-snug leading-">
                Hi There, This is <br /> Engr.Fawaz Ismail{" "}
                <span className="text-red-500">Yousef Al-Yousef</span>
              </h1>

              <div>
                <TypeAnimation
                  sequence={[
                    "AGRICULTURE ENGINEER,", // type this
                    1500, // wait
                    "", // clear it completely
                    500, // short pause
                    "Specialized in Agriculture Mechanization", // type next
                    150, // wait
                    "", // clear again before repeating
                    500,
                    "Head of DACO Landscaping, Roads & Ground Facilities Department",
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="md:text-2xl text-xl mb-4 text-black"
                />
              </div>

              <p className="mb-4">
                Results-driven Agriculture Engineer with over 20 years of
                distinguished experience in managing and directing roads, land
                development, landscaping, and plantation operations within
                complex and competitive Operation & Maintenance environments.
                Demonstrated leadership in strategic planning, operational
                execution, and performance optimization, with extensive
                expertise in government tenders, procurement systems, and
                high-value contract management from drafting to awarding and
                mobilization. Proficient in project negotiation, stakeholder
                engagement, and multi-disciplinary team leadership, with a
                proven track record in pest control programs and the development
                of sustainable operational strategies that ensure compliance,
                efficiency, and long-term project success.
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground/80"
                >
                  <img src={facebook} alt="" className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground/80"
                >
                  <img src={instagram} alt="" className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground/80"
                >
                  <img src={linkedin} alt="" className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative flex justify-center items-end">
              <img
                src={hero}
                alt="Engr Fawaz"
                className="h-[20vh]  md:h-[60vh] lg:h-[60vh] w-[60vh] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-10 hidden bg-gray-200 p-4  md:flex flex-col gap-6 rounded-full">
          <img src={facebook} alt="" className="w-20" />
          <img src={instagram} alt="" className="w-20" />
          <img src={twitter} alt="" className="w-20" />
          <img src={linkedin} alt="" className="w-20" />
        </div>
      </section>
    </>
  );
};

export default Hero;
