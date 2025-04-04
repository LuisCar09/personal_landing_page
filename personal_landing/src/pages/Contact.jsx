import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/LuisCar09'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/luis-carlos-bravo-a-012533352/'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:luiscbravo94@gmail.com'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-container">
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <span className="focus-border"></span>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`submit-status ${submitStatus}`}>
                    {submitStatus === 'success' 
                      ? '✓ Message sent successfully!' 
                      : '× There was an error sending your message.'}
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info">
              <div className="social-links">
                <h3>Connect With Me</h3>
                <div className="social-grid">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-alternative">
                <h3>Prefer Email?</h3>
                <p>
                  If you prefer to use your email client, you can send me a message directly at:
                </p>
                <a 
                  href="mailto:luiscbravo94@gmail.com" 
                  className="email-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  luiscbravo94@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 