import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  rounded">
      <div className="w-full flex ">
        <div className="w-1/2 footer-center py-20  bg-[#1F2937]  text-white">
          <h1>CONTACT US</h1>
          <div className="space-y-2 mt-4">
            <p> 123 ABS Street, Uni 21, Bangladesh </p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className=" w-1/2  bg-[#111827] text-white footer-center py-20 space-y-4">
          <h1 className="footer-title">Follow Us</h1>
          <p>Join us on Social Media</p>
          <div className="flex justify-center gap-4 text-3xl text-white ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className=" footer-center text-base-300 bg-[#151515] py-4">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
