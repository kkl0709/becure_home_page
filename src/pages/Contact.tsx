import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const getValidationMessage = (
    el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  ) => {
    if ((el as HTMLInputElement).type === "email" && (el as HTMLInputElement).validity.typeMismatch) {
      return "Please enter a valid email address.";
    }
    if (el.name === "subject" && (el as HTMLSelectElement).value === "") {
      return "Please select a subject.";
    }
    return "Please fill out this field.";
  };

  return (
    <section className="contact page-section" id="contact">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Have questions? We're here to help</p>
      </div>

      <div className="contact-container">
      <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            onInvalid={(e) => {
              const el = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
              el.setCustomValidity(getValidationMessage(el));
            }}
            onInput={(e) => {
              const el = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
              el.setCustomValidity("");
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
