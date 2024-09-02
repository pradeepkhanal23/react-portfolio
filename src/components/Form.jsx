import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage(""); // Clearing previous messages
    setError(""); // Clearing previous errors

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setMessage("Email Sent Successfully");
    } catch (err) {
      setError("Failed to send email. Please try again later.");
      console.error("FAILED...", err);
    } finally {
      //loading state set to false
      setLoading(false);

      //cleared the form
      setFormData({
        name: "",
        email: "",
        project: "",
      });

      //errro is reset to false as well
      setError(false);

      //clearing the message after 3 secs
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="John Doe"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="project"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Project
          </label>
          <textarea
            id="project"
            value={formData.project}
            rows="4"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Write your project idea here..."
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center gap-x-5">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send"} <PiPaperPlaneTiltBold />
          </button>
          {message && (
            <p className="text-green-500 capitalize font-semibold">
              {message}!!
            </p>
          )}
          {error && <p className="text-red-500 ">{error}!!</p>}
        </div>
      </form>
    </>
  );
};
export default Form;
