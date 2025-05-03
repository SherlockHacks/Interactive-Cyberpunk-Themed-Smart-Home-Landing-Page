import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    package: '10 Marla Package'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          package: '10 Marla Package'
        });
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-text-shimmer">
                Contact
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your Home?
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Reach out to our team for a free consultation and quote.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[{
            title: 'Phone',
            description: 'Call us to discuss your requirements',
            contact: '+92 300 1234567',
            href: 'tel:+923001234567',
            icon: PhoneIcon
          }, {
            title: 'Email',
            description: 'Send us your queries anytime',
            contact: 'info@smarthaven.pk',
            href: 'mailto:info@smarthaven.pk',
            icon: MailIcon
          }, {
            title: 'Visit Us',
            description: 'Our showroom is open Monday to Saturday',
            contact: 'DHA Phase 5, Lahore, Pakistan',
            href: '#',
            icon: MapPinIcon
          }].map((item, index) => <ScrollReveal key={item.title} delay={200 + index * 150} direction="up">
                <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-colors duration-300 group card-cyberpunk">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-4 group-hover:animate-pulse-glow">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    {item.description}
                  </p>
                  <a href={item.href} className="mt-3 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:animate-pulse">
                    {item.contact}
                  </a>
                </div>
              </ScrollReveal>)}
          </div>
          <ScrollReveal delay={400} direction="up">
            <div className="mt-16 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h3 className="text-2xl font-medium text-white text-center">
                  Request a Consultation
                </h3>
                {isSubmitted ? <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/50 text-center animate-pulse-glow">
                    <p className="text-xl text-cyan-300">
                      Thank you for your interest!
                    </p>
                    <p className="mt-2 text-gray-300">
                      We've received your request and will contact you shortly.
                    </p>
                  </div> : <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                          First name
                        </label>
                        <div className="mt-1">
                          <input type="text" name="firstName" id="first-name" value={formState.firstName} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                          Last name
                        </label>
                        <div className="mt-1">
                          <input type="text" name="lastName" id="last-name" value={formState.lastName} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <div className="mt-1">
                          <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                          Phone
                        </label>
                        <div className="mt-1">
                          <input type="text" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <div className="mt-1">
                          <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required></textarea>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="package" className="block text-sm font-medium text-gray-300">
                          Package of Interest
                        </label>
                        <div className="mt-1">
                          <select id="package" name="package" value={formState.package} onChange={handleChange} className="py-3 px-4 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                            <option>10 Marla Package</option>
                            <option>1 Kanal Package</option>
                            <option>2 Kanal Package</option>
                            <option>Custom Solution</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className={`py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 btn-cyberpunk relative overflow-hidden ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
                        {isSubmitting ? <>
                            <span className="inline-block animate-pulse">
                              Processing...
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30 animate-pulse"></span>
                          </> : <span className="relative z-10">Submit Request</span>}
                      </button>
                    </div>
                  </form>}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};