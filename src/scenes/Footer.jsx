import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer id="footer" className="h-64 bg-grey2 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between ">
          <p className="font-opensans  text-1xl text-yellow">
            MANIKANTA BALAGA
            <p className="">Contact No : 8143043869</p>
            <p>Mail id: manikantabalaga01@gmail.com</p>
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2024 Manikanta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
