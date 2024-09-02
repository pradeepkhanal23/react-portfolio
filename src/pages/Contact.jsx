import { contactCards } from "../utils/helpers";
import { Header, Form } from "../components/index";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section id="contact" className="p-5 mt-10 mx-auto w-full max-w-5xl">
        <Header title="Contact Me" subtitle="Get in touch" />
        <div className="flex flex-col md:flex-row">
          <div className="text-center mt-10 flex-1">
            <div>
              <h4 className="text-xl font-semibold">Talk to me</h4>
            </div>
            <div>
              {contactCards.map((card) => {
                const { id, platform, contactInfo, icon, contactLink } = card;
                return (
                  <article
                    className="bg-white py-6 m-5  border border-gray-300 rounded-lg"
                    key={id}
                  >
                    <span className="text-3xl flex items-center justify-center ">
                      {icon}
                    </span>
                    <h4 className="para font-semibold">{platform}</h4>
                    <p className="subtle">{contactInfo}</p>
                    <a
                      href={contactLink}
                      target="_blank"
                      className="flex items-center justify-center mt-4 gap-x-2 subtle "
                    >
                      Write me
                      <FaArrowRightLong className="animate-bounceRight" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="p-5 flex-1 md:mt-5">
            <h4 className="text-xl font-semibold text-center mb-5">
              Write me your project
            </h4>
            {/* Form Component */}
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
