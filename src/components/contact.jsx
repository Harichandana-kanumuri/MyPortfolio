import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Create templateParams to match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,      // Adjust these keys to match your template
      from_email: formData.email,
      message: formData.message,
    };

   
    emailjs
      .send(
        "service_96c94pq",    // Your EmailJS service ID
        "template_gbdry1e",   // Your EmailJS template ID
        templateParams,
        "XgS9yJzRYIcEFUvR5"   // Your EmailJS public/user key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again later.");
        }
      );

    // Reset the form data
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="pt-20" id="contact">
      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold text-white">
        Contact Me
      </h2>

      {/* Contact Form */}
      <div className="container mx-auto max-w-3xl px-4">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-3 py-2 rounded outline-none text-black"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 rounded outline-none text-black"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 rounded outline-none text-black"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
