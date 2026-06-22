import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-32 pb-xl max-w-container-max mx-auto px-gutter w-full"
    >
      <header className="text-center mb-[48px]">
        <h1 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-primary mb-[16px] tracking-[-0.02em] font-semibold">
          Get in Touch
        </h1>
        <p className="font-body text-[18px] text-secondary max-w-2xl mx-auto">
          Whether you're looking for your dream home or seeking expert investment advice, our team is ready to assist you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">
        <div className="bg-white p-[48px] rounded-xl soft-shadow">
          <h2 className="font-display text-[32px] text-primary mb-[32px] font-semibold">Send a Message</h2>
          <form className="flex flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-[24px]">
              <div className="w-full">
                <label className="font-body text-[12px] font-semibold tracking-[0.05em] uppercase text-secondary mb-[8px] block">First Name</label>
                <input type="text" className="minimal-input font-body text-[16px] text-primary" placeholder="Enter your first name" />
              </div>
              <div className="w-full">
                <label className="font-body text-[12px] font-semibold tracking-[0.05em] uppercase text-secondary mb-[8px] block">Last Name</label>
                <input type="text" className="minimal-input font-body text-[16px] text-primary" placeholder="Enter your last name" />
              </div>
            </div>
            <div>
               <label className="font-body text-[12px] font-semibold tracking-[0.05em] uppercase text-secondary mb-[8px] block">Email Address</label>
               <input type="email" className="minimal-input font-body text-[16px] text-primary" placeholder="Enter your email" />
            </div>
            <div>
               <label className="font-body text-[12px] font-semibold tracking-[0.05em] uppercase text-secondary mb-[8px] block">Phone Number</label>
               <input type="tel" className="minimal-input font-body text-[16px] text-primary" placeholder="Enter your phone number" />
            </div>
            <div>
               <label className="font-body text-[12px] font-semibold tracking-[0.05em] uppercase text-secondary mb-[8px] block">Message</label>
               <textarea rows={4} className="minimal-input font-body text-[16px] text-primary resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button type="submit" className="bg-primary text-on-primary font-body text-[14px] font-semibold tracking-[0.05em] uppercase px-xl py-[16px] rounded hover:bg-primary-container transition-colors mt-[12px]">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-[32px]">
          <div className="bg-surface-container-lowest p-[32px] rounded-xl soft-shadow border border-surface-variant flex gap-[24px] items-start">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-display text-[20px] font-semibold text-primary mb-[8px]">Office Address</h3>
              <p className="font-body text-[16px] text-secondary leading-[1.6]">
                123 Heritage Road,<br/>
                Opposite Umaid Bhawan Palace,<br/>
                Jodhpur, Rajasthan 342001
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-[32px] rounded-xl soft-shadow border border-surface-variant flex gap-[24px] items-start">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-display text-[20px] font-semibold text-primary mb-[8px]">Contact Numbers</h3>
              <p className="font-body text-[16px] text-secondary leading-[1.6]">
                +91 98765 43210 (Sales)<br/>
                +91 98765 43211 (Support)
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-[32px] rounded-xl soft-shadow border border-surface-variant flex gap-[24px] items-start">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-display text-[20px] font-semibold text-primary mb-[8px]">Email Addresses</h3>
              <p className="font-body text-[16px] text-secondary leading-[1.6]">
                info@deoraproperties.com<br/>
                sales@deoraproperties.com
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-[32px] rounded-xl soft-shadow border border-surface-variant flex gap-[24px] items-start">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-display text-[20px] font-semibold text-primary mb-[8px]">Working Hours</h3>
              <p className="font-body text-[16px] text-secondary leading-[1.6]">
                Monday - Saturday<br/>
                10:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
