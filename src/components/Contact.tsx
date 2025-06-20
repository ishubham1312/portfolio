import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram, Send, Youtube, X, MapPin, Map } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Sora', fontWeight: 800 }}
          >
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info and Address */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:ishubham1312@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
                  title="Email: ishubham1312@gmail.com"
                >
                  <Mail size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="tel:+919170003039"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-200"
                  title="Phone: +91 91700 03039"
                >
                  <Phone size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/ishubham1312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="https://github.com/ishubham1312"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-200"
                  title="GitHub Profile"
                >
                  <Github size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/ishubham1312"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-200"
                  title="Instagram Profile"
                >
                  <Instagram size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@ishubham1312"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200"
                  title="YouTube Channel"
                >
                  <Youtube size={24} className="text-white" />
                </motion.a>

                <motion.a
                  href="https://x.com/Shubham99925933"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-gray-800 to-black rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-200"
                  title="X (Twitter) Profile"
                >
                  <X size={24} className="text-white" />
                </motion.a>
              </div>
            </div>
            </motion.div>
            
            {/* Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Address
                </h3>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Seer Goverdhanpur, B.H.U
                      <br />
                      Varanasi, Uttar Pradesh
                      <br />
                      India - 221005
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://maps.google.com/?q=Seer+Goverdhanpur+BHU+Varanasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      > 
                        <Map className="h-6 w-6 mr-2" />
                        View on Map
                      </a>
                    </div>                  </div>
                  
                  {/* Map Section */}
                  <div className="h-72 md:h-80 rounded-xl overflow-hidden border border-gray-700 shadow-lg relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.111314224497!2d82.98872531501114!3d25.26771878383552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76f8cf139%3A0x9c7b4bdcb1f2c8e2!2sBanaras%20Hindu%20University!5e0!3m2!1sen!2sin!4v1624123456789"
                      width="100%"
                      height="100%"
                      style={{ border: 1 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BHU Varanasi Location"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;