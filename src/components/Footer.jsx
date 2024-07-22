import { socialMedia } from "../utils/helpers";

const Footer = () => {
  return (
    <>
      <section id="footer" className="p-5 w-full bg-white">
        <h2 className="text-2xl font-semibold text-center brand-name ">
          <a href="#">PRADEEP</a>
        </h2>
        <div className="flex items-center justify-center gap-x-10 mt-5">
          <p className="text-md">About</p>
          <p className="text-md">Projects</p>
          <p className="text-md">Services</p>
        </div>
        <div className="flex items-center justify-center gap-x-5 mt-5">
          {socialMedia.map((social) => {
            return (
              <a
                href={social.linkPath}
                target="_blank"
                className="text-2xl md:text-3xl"
                key={social.id}
              >
                {social.icon}
              </a>
            );
          })}
        </div>
        <p className="text-center mt-10">
          &copy; Pradeep Khanal. All Rights Reserved
        </p>
      </section>
    </>
  );
};
export default Footer;
