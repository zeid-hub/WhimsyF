import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="div-contact">
      <div className="div-header">
        <h1 className="header-h1">Get In Touch</h1>
        <img src="https://plus.unsplash.com/premium_photo-1661572867239-41b14b2ece0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVscCUyMGRlc2t8ZW58MHx8MHx8fDA%3D" alt="contact" className="header-image" />
      </div>
      <p className="my-p">
        If you have any questions, comments, or feedback, please dont hesitate to reach out to us. We would love to hear from you!
      </p>

      <h2>Contact Details</h2>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> <a href="mailto:support@ecommercestore.com">support@ecommercestore.com</a></p>
      <p><strong>Address:</strong> 123 E-commerce St, Shopping City, Country</p>

      <h2>Customer Support Hours</h2>
      <p>Our customer support team is available during the following hours:</p>
      <ul>
        <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
        <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
        <li><strong>Sunday:</strong> Closed</li>
      </ul>

      <h2>Location</h2>
      <p>Find us at our physical store location:</p>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345084253!2d144.95592931531807!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df6b1b19b%3A0x2e014a8ba495e1c0!2s123%20E-commerce%20St%2C%20Shopping%20City%2C%20Country!5e0!3m2!1sen!2s!4v1592439386856!5m2!1sen!2s"
          width="400"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <h2 className="my-h2">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
