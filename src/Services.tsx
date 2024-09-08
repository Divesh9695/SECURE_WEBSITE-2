
import React from "react";
import icon1 from "./assets/m.png";
import icon2 from "./assets/h.png";
import icon3 from "./assets/v.png";
import icon4 from "./assets/b.png";
import icon5 from "./assets/t.png";
import icon6 from "./assets/s.png";

const Services: React.FC = () => {
  return (
    <div className="px-4">
      <p className="text-center text-lg font-semibold">WHAT WE OFFER</p>
      <h1 className="font-bold text-4xl md:text-6xl text-center text-[#447abe] mt-5">
        Available Services
      </h1>
      <p className="text-center mt-5 text-base md:text-lg">
        Safeguarding your peace of mind through cutting-edge security solutions
        <br /> tailored to your unique needs and delivered by our experienced
        professionals.
      </p>

      {/* Icons below the text */}
      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src={icon1} alt="Bodyguard Services" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Bodyguard Services</h2>
            <p className="mt-2 text-sm md:text-base">
              Personalized bodyguard services for<br /> your utmost safety and security.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={icon2} alt="Armed Security Services" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Armed Security Services</h2>
            <p className="mt-2 text-sm md:text-base">
              Trained experts providing armed <br /> security services you can rely on.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={icon3} alt="Vehicle Patrol Services" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Vehicle Patrol Services</h2>
            <p className="mt-2 text-sm md:text-base">
              Efficient vehicle patrol services<br /> ensuring constant surveillance and <br /> swift response.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={icon4} alt="Unarmed Security Services" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Unarmed Security Services</h2>
            <p className="mt-2 text-sm md:text-base">
              Unarmed security services delivering a <br /> safe environment with professionalism.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={icon5} alt="Business Security" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Business Security</h2>
            <p className="mt-2 text-sm md:text-base">
              Comprehensive security solutions <br /> tailored to safeguard your commercial interests.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={icon6} alt="Property Protection" className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">Property Protection</h2>
            <p className="mt-2 text-sm md:text-base">
              Reliable property protection services to <br /> preserve your valuable investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
