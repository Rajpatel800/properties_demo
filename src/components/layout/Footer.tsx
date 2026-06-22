import { MapPin, Phone, Globe, Camera, PlayCircle, Clock, Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pt-xl pb-12 bg-surface-container-lowest mt-auto border-t border-surface-variant">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg lg:gap-[32px]">
        
        {/* Company Overview */}
        <div className="flex flex-col gap-sm lg:col-span-2">
          <div className="font-display text-[24px] font-bold text-primary">
            Deora Properties
          </div>
          <p className="font-body text-[16px] text-secondary mt-sm max-w-[320px] leading-[1.6]">
            Elevating the standard of living in Jodhpur with premium, verified real estate solutions and absolute transparency.
          </p>
          <div className="flex gap-md mt-[16px]">
            <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><Globe size={20} /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><Camera size={20} /></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><PlayCircle size={20} /></a>
          </div>
        </div>
        
        {/* Quick Links & Services */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-body text-[14px] font-semibold uppercase tracking-widest text-primary mb-xs">Services</h4>
          <ul className="space-y-[12px]">
            {['Luxury Villas', 'Investment Lands', 'Commercial Real Estate', 'Legal Assistance', 'NRI Services'].map(link => (
              <li key={link}>
                <a href="#" className="font-body text-[15px] font-medium text-secondary hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Service Areas */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-body text-[14px] font-semibold uppercase tracking-widest text-primary mb-xs">Service Areas</h4>
          <ul className="space-y-[12px]">
             <li className="font-body text-[15px] font-medium text-secondary flex items-start gap-[8px]">
               <Navigation size={16} className="mt-1 shrink-0 text-outline" />
               <span>Umaid Heritage</span>
             </li>
             <li className="font-body text-[15px] font-medium text-secondary flex items-start gap-[8px]">
               <Navigation size={16} className="mt-1 shrink-0 text-outline" />
               <span>Pali Highway Corridors</span>
             </li>
             <li className="font-body text-[15px] font-medium text-secondary flex items-start gap-[8px]">
               <Navigation size={16} className="mt-1 shrink-0 text-outline" />
               <span>Ratanada & Circuit House</span>
             </li>
             <li className="font-body text-[15px] font-medium text-secondary flex items-start gap-[8px]">
               <Navigation size={16} className="mt-1 shrink-0 text-outline" />
               <span>Near AIIMS Jodhpur</span>
             </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-[20px]">
          <h4 className="font-body text-[14px] font-semibold uppercase tracking-widest text-primary mb-xs">Contact Us</h4>
          <div className="font-body text-[15px] text-secondary flex items-start gap-xs">
            <MapPin size={20} className="shrink-0 mt-1" />
            <span>123 Heritage Road, Jodhpur,<br/>Rajasthan 342001</span>
          </div>
          <div className="font-body text-[15px] text-secondary flex items-center gap-xs">
            <Phone size={20} />
            <span>+91 98765 43210</span>
          </div>
          <div className="font-body text-[15px] text-secondary flex items-start gap-xs pt-2">
            <Clock size={20} className="shrink-0 mt-1" />
            <span><strong>Mon - Sat:</strong><br/>10:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-gutter mt-xl pt-[32px] border-t border-surface-variant flex flex-col md:flex-row justify-between items-center gap-[24px] text-center md:text-left">
        <p className="font-body text-[14px] font-medium text-secondary">
          © 2024 Deora Properties India. All Rights Reserved.
        </p>
        <div className="flex gap-[24px]">
          <a href="#" className="font-body text-[14px] font-medium text-secondary hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="font-body text-[14px] font-medium text-secondary hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="font-body text-[14px] font-medium text-secondary hover:text-primary transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
