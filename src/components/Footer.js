import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-start mb-6 mt-60">
          {/* Contact Information */}
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Dev Patel</h3>
            <p>
              IIT Kharagpur, West Bengal, India
            </p>
            <p>
              Blockchain Enthusiast
            </p>
            <p>
              Email: devpatel452219@gmail.com
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Neel Gupta</h3>
            <p>
              IIT Kharagpur, West Bengal, India
            </p>
            <p>
              Blockchain Enthusiast
            </p>
            <p>
              Email: neel@gmail.com
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Harshit Panthi</h3>
            <p>
              IIT Kharagpur, West Bengal, India
            </p>
            <p>
              Blockchain Enthusiast
            </p>
            <p>
              Email: harshit@gmail.com
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Dhruv Bansal</h3>
            <p>
              IIT Kharagpur, West Bengal, India
            </p>
            <p>
              Blockchain Enthusiast
            </p>
            <p>
              Email: dhruv@gmail.com
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
