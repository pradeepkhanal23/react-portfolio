import { IoMdClose } from "react-icons/io";
import { ImCheckboxChecked } from "react-icons/im";

const Modal = ({ isOpen, closeModal, selectedService }) => {
  const { tag, details, taskList } = selectedService;
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden m-2">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all mx-auto max-w-lg">
            <span className="flex items-center justify-end  cursor-pointer">
              <IoMdClose className="text-xl m-2" onClick={closeModal} />
            </span>
            <div className="bg-white px-4 py-5 sm:p-6 sm:pb-4">
              <h3 className="text-xl font-semibold text-center">{tag}</h3>
              <p className="subtle text-center my-3">{details}</p>
              <div className="mt-2">
                <ul>
                  {taskList.map((task, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-2 subtle my-2"
                    >
                      <span>
                        <ImCheckboxChecked />
                      </span>
                      <p>{task}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
