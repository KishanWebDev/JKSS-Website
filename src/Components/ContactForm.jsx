import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_deo0yh8";
      const templateId = "template_96nqgm2";
      const publicKey = "AoU6xLuZp9iRcxxth";

      const templateParams = {
        to_email: "raik55488@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Show success message
      toast.success('Message sent successfully! We will get back to you soon.', {
        position: 'top-right',
        duration: 3000,
        className: 'bg-white dark:bg-gray-800',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-right',
        duration: 3000,
        className: 'bg-white dark:bg-gray-800',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-2 px-4 rounded-md ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;