import { motion } from 'motion/react';
import { Shield, Target, History } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-32 pb-xl"
    >
      <section className="max-w-container-max mx-auto px-gutter mb-xl mt-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div className="space-y-[24px]">
            <h1 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-primary font-semibold tracking-[-0.02em]">
              Defining Modern Luxury in Jodhpur.
            </h1>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant">
              Deora Properties was founded on a simple principle: to bring unparalleled transparency, refined architectural taste, and unwavering trust to the real estate market of Rajasthan.
            </p>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant">
              With over 15 years of curating exclusive estates, our portfolio encompasses the finest heritage properties, modern villas, and investment lands.
            </p>
          </div>
          <div className="h-[400px] rounded-xl overflow-hidden soft-shadow">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ilai8PM7RwOwfMrSM9cuAoe3-lAnC53ycOX2_P4wB3FGRTDrnyJ9I7_yoWGLQNneCIzmdzHPv6OA3HOlvYm3cxmC-Cs2-2TJ2ewknsbimpEeFSaInq6mO__hsZ8AjFN4n0c2_CmmYE1he-38eIBWHGRCpqKxHhT7NrJIofjhSGjJIAA4G3Nar-2qvl_42Pr1WSlchDrZwsvaGYmsxLKXolpnMHbXpwe0lUHetyYTmgslHjHF1-PyCJTvKEQoQ4SYpOJL93Hvcfs" 
              alt="Luxury interior" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-xl">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          <div className="flex flex-col items-center text-center p-[24px]">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-[24px] text-primary">
              <Shield size={32} />
            </div>
            <h3 className="font-display text-[24px] font-semibold text-primary mb-[12px]">Trust & Integrity</h3>
            <p className="font-body text-[16px] text-on-surface-variant">We believe in complete transparency and ethical practices in every single transaction.</p>
          </div>
          <div className="flex flex-col items-center text-center p-[24px]">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-[24px] text-primary">
              <Target size={32} />
            </div>
            <h3 className="font-display text-[24px] font-semibold text-primary mb-[12px]">Curated Selection</h3>
            <p className="font-body text-[16px] text-on-surface-variant">Every property in our portfolio is meticulously vetted for legal clarity and architectural merit.</p>
          </div>
          <div className="flex flex-col items-center text-center p-[24px]">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-[24px] text-primary">
              <History size={32} />
            </div>
            <h3 className="font-display text-[24px] font-semibold text-primary mb-[12px]">Heritage Respect</h3>
            <p className="font-body text-[16px] text-on-surface-variant">We honor the rich architectural history of Jodhpur while embracing modern luxury.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
