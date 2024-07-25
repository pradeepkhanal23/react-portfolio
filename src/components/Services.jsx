import { services } from "../utils/helpers";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="p-5 w-full max-w-5xl mx-auto mt-5" id="services">
        <div className="mb-5">
          <h2 className="title text-center">Services</h2>
          <p className="subtitle text-center">What I offer</p>
        </div>
        <div className="grid  gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => {
            const { id, logo, tag } = service;
            return (
              <div
                className="card border border-gray-300 bg-white px-5 py-10 my-3 flex flex-col items-start gap-y-2 rounded-xl drop-shadow-md"
                key={id}
              >
                <span className="text-3xl">{logo}</span>
                <div className="py-3">
                  {tag.split(" ").map((para, i) => {
                    return (
                      <h4 key={i} className="para font-semibold tracking-wide">
                        {para}
                      </h4>
                    );
                  })}
                </div>
                <button
                  className="inline-flex items-center gap-x-3 subtle cursor-pointer"
                  onClick={() => openModal(service)}
                >
                  View More
                  <span>
                    <FaArrowRightLong className="animate-bounceRight " />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
      {selectedService && (
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          selectedService={selectedService}
        />
      )}
    </>
  );
};
export default Services;
