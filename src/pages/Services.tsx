import { ChevronDown, UserSquare2, Mountain, Home, TrendingUp, FileText, Car } from 'lucide-react';
import { motion } from 'motion/react';
import { services, processSteps, faqs } from '../data';
import { useState } from 'react';

const iconMap: Record<string, React.ReactNode> = {
  UserSquare2: <UserSquare2 size={24} />,
  Mountain: <Mountain size={24} />,
  Home: <Home size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  FileText: <FileText size={24} />,
  Car: <Car size={24} />
};

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-24 pb-xl"
    >
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-xl mt-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
          <div className="lg:col-span-5 space-y-[24px]">
            <h1 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-primary font-semibold tracking-[-0.02em]">
              Expert Real Estate Services in Jodhpur.
            </h1>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant">
              Guiding you through every step of your property journey with transparency, local expertise, and a commitment to modern Indian luxury.
            </p>
          </div>
          <div className="lg:col-span-7 h-[500px] rounded-xl overflow-hidden soft-shadow relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlHMwdFzwtwMxK1hFF9Urq_LehJ8okl2BK2JSyosKF6V_xHUm8PHV7ZITCacBMGmDH00HyhjdzvGxrOE-FXpysytMG0ehSDVp8-qylrpm6DRq86KS0sqI4s1lN5PrBMy2F4Bp53pWLVgH0yCSi9-9y59q5Ahn0Gj0qdSfc8H8iJBhP2znZ1aJ4JByqla-lw2yBpXsTVWO_rjdlRWxuzrl8NzPNdEyEMZ77W7L7Xxe6ZowCt9Wx5zSRB1iXdUM325ZecKVCivM6dK4" 
              alt="Luxurious modern villa at sunset" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-xl pt-[48px]">
        <div className="text-center mb-[48px]">
          <h2 className="font-display text-[32px] text-primary mb-[16px] font-semibold">Our Services</h2>
          <div className="w-16 h-1 bg-outline-variant mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white p-[32px] rounded-xl soft-shadow hover:shadow-lg transition-all duration-300 flex flex-col items-start group border border-transparent hover:border-surface-variant cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-[24px] group-hover:bg-primary-container transition-colors">
                <div className="text-outline group-hover:text-primary-fixed transition-colors">
                  {iconMap[service.icon]}
                </div>
              </div>
              <h3 className="font-display text-[24px] font-semibold text-primary mb-[12px]">{service.title}</h3>
              <p className="font-body text-[16px] text-on-surface-variant flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-white py-xl mb-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-[64px]">
            <h2 className="font-display text-[32px] font-semibold text-primary mb-[16px]">Our Streamlined Process</h2>
            <p className="font-body text-[18px] text-on-surface-variant max-w-2xl mx-auto">
              A transparent, step-by-step approach ensuring clarity and peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] relative pt-[24px]">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-outline-variant z-0"></div>
            
            {processSteps.map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-[24px] transition-colors duration-500 shadow-sm
                  ${idx === 3 ? 'bg-primary shadow-[0_10px_40px_rgba(20,50,74,0.15)] text-white' : 'bg-background text-primary'}`}
                >
                  <span className="font-display text-[24px] font-semibold">{step.number}</span>
                </div>
                <h4 className="font-body text-[14px] font-semibold uppercase tracking-[0.05em] text-primary mb-[8px]">{step.title}</h4>
                <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-xl pt-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          <div className="lg:col-span-4">
            <h2 className="font-display text-[32px] font-semibold text-primary mb-[16px]">Investor FAQs</h2>
            <p className="font-body text-[16px] text-on-surface-variant mb-[24px]">Common inquiries regarding property investment in the Jodhpur region.</p>
          </div>
          <div className="lg:col-span-8 space-y-[16px]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-outline-variant pb-[16px]">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center font-body text-[14px] font-semibold text-primary cursor-pointer py-[8px] text-left"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-secondary" />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="font-body text-[16px] text-on-surface-variant mt-[16px] pb-[8px] leading-[1.6]">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-container-max mx-auto px-gutter mb-[48px]">
        <div className="bg-primary-container rounded-xl p-[48px] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-[32px] font-semibold text-white mb-[24px]">Ready to find your perfect property?</h2>
            <p className="font-body text-[18px] text-on-primary-container mb-[32px] max-w-2xl mx-auto leading-[1.6]">
              Speak with our experts today and start your journey towards owning a piece of modern luxury in Jodhpur.
            </p>
            <button className="bg-white text-primary font-body text-[14px] font-semibold tracking-[0.05em] px-[32px] py-[16px] rounded hover:bg-background transition-colors shadow-sm">
              Get Expert Advice Today
            </button>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </section>
    </motion.div>
  );
}
