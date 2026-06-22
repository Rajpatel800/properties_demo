import { MapPin, Building2, Wallet, BadgeCheck, Star, Handshake, ChevronDown, Shield, Search, FileText, CheckCircle, MessageCircle, Calendar, ChevronRight, Quote, TrendingUp, Plane, Train, Map, Navigation, ArrowRight, ArrowLeft, Users, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { properties, categories, whyChooseUs, testimonials, homeFaqs, processSteps } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} />,
  Map: <Map size={24} />,
  FileText: <FileText size={24} />,
  CheckCircle: <CheckCircle size={24} />,
  Car: <MessageCircle size={24} />, // Actually replacing with another for visual distinctness if needed, mapping 'Car' -> Calendar or something contextually similar. Wait, Let's use `Car` from lucide if available. Oh we don't have Car imported here, let's just render a Navigation icon. 
  TrendingUp: <TrendingUp size={24} />
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nextTestimoinal = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimoinal = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex-grow flex flex-col bg-background"
    >
      {/* 0. Hero Section [UNCHANGED] */}
      <section className="relative min-h-[750px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwdjUe6tqs8myykDQbwf3-EUZO8qK6PdALl9bv01kE1wysc_wFoyXstcaUaNC5eGtGfeF46f7dmuEZ9yT0iLYdgJQBTnErh7WavFwtSxUlVqTceYwTmBx9fwl_3ckjbZZIxx0WRT72RpswioW5aktmAZdBZUrE5IHNYVH42XNFPed7gEq02LWXamN_HRLvd6ipv64_4V291FdM5EtuNgB6B0B7AB586zZ87ElKkc2IcfZj6RjJotUg1YMYBj7dcKs7H_kiZLOj2tk')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface-container-lowest/90" />
        </div>
        
        <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter text-center mt-xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-semibold text-on-secondary mb-[24px] text-shadow-sm max-w-4xl mx-auto"
          >
            Find Premium Properties in Jodhpur with Confidence
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-[18px] leading-[1.6] text-on-secondary/90 mb-xl max-w-2xl mx-auto"
          >
            Exclusive villas, heritage homes, and prime commercial real estate curated for discerning buyers.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto glass-overlay rounded-xl p-[24px] soft-shadow"
          >
            <form className="flex flex-col md:flex-row gap-[24px] items-end text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full md:w-1/3 flex flex-col items-start relative">
                <label className="font-body text-[12px] font-medium text-secondary mb-[4px]">Location</label>
                <div className="relative w-full">
                  <MapPin size={20} className="absolute left-0 bottom-2 text-secondary" />
                  <input 
                    type="text" 
                    placeholder="e.g. Umaid Heritage" 
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-primary font-body text-[16px] pl-8 pb-2 pt-1 placeholder-secondary-fixed-dim outline-none transition-colors" 
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-start relative">
                <label className="font-body text-[12px] font-medium text-secondary mb-[4px]">Property Type</label>
                <div className="relative w-full">
                  <Building2 size={20} className="absolute left-0 bottom-2 text-secondary" />
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-primary font-body text-[16px] pl-8 pb-2 pt-1 appearance-none cursor-pointer outline-none transition-colors">
                    <option value="">All Types</option>
                    <option value="villa">Luxury Villa</option>
                    <option value="plot">Residential Plot</option>
                    <option value="commercial">Commercial Space</option>
                  </select>
                  <ChevronDown size={20} className="absolute right-0 bottom-2 text-secondary pointer-events-none" />
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-start relative">
                <label className="font-body text-[12px] font-medium text-secondary mb-[4px]">Budget</label>
                <div className="relative w-full">
                  <Wallet size={20} className="absolute left-0 bottom-2 text-secondary" />
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-primary font-body text-[16px] pl-8 pb-2 pt-1 appearance-none cursor-pointer outline-none transition-colors">
                    <option value="">Any Budget</option>
                    <option value="1-3cr">1 Cr - 3 Cr</option>
                    <option value="3-5cr">3 Cr - 5 Cr</option>
                    <option value="5cr+">5 Cr +</option>
                  </select>
                  <ChevronDown size={20} className="absolute right-0 bottom-2 text-secondary pointer-events-none" />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto bg-primary text-on-primary font-body text-[14px] font-semibold tracking-[0.05em] px-xl py-[12px] rounded hover:bg-primary-container transition-colors h-[42px] flex items-center justify-center shrink-0 mt-md md:mt-0"
              >
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 1. Trusted by Homebuyers */}
      <section className="bg-surface-container-lowest border-b border-surface-variant z-20 py-[48px]">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 lg:grid-cols-4 gap-y-[32px] gap-x-[16px] divide-x-0 lg:divide-x lg:divide-surface-variant text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center justify-center gap-2">
            <Users size={32} className="text-secondary opacity-50 block mb-[8px]" />
            <h4 className="font-display text-[40px] text-primary font-semibold leading-none">500+</h4>
            <p className="font-body text-[14px] tracking-[0.05em] text-secondary font-semibold uppercase">Happy Clients</p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center justify-center gap-2">
            <Building2 size={32} className="text-secondary opacity-50 block mb-[8px]" />
            <h4 className="font-display text-[40px] text-primary font-semibold leading-none">150+</h4>
            <p className="font-body text-[14px] tracking-[0.05em] text-secondary font-semibold uppercase">Properties Sold</p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center justify-center gap-2">
            <Star size={32} className="text-secondary opacity-50 block mb-[8px]" />
            <h4 className="font-display text-[40px] text-primary font-semibold leading-none">10+</h4>
            <p className="font-body text-[14px] tracking-[0.05em] text-secondary font-semibold uppercase">Years Expertise</p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center justify-center gap-2">
            <BadgeCheck size={32} className="text-secondary opacity-50 block mb-[8px]" />
            <h4 className="font-display text-[40px] text-primary font-semibold leading-none">100%</h4>
            <p className="font-body text-[14px] tracking-[0.05em] text-secondary font-semibold uppercase">Verified Listings</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Property Categories */}
      <section className="py-[120px] max-w-container-max mx-auto px-gutter w-full">
        <div className="text-center mb-[64px]">
          <h2 className="font-display text-[40px] font-semibold tracking-[-0.02em] text-primary mb-[16px]">Explore by Category</h2>
          <p className="font-body text-[18px] text-secondary max-w-2xl mx-auto">Discover properties tailored precisely to your lifestyle and financial goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.id} 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer soft-shadow"
            >
              <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-[32px]">
                <h3 className="font-display text-[24px] font-semibold text-white mb-[8px]">{category.title}</h3>
                <p className="font-body text-[15px] text-white/80 mb-[24px] line-clamp-2">{category.description}</p>
                <div className="font-body text-[14px] font-semibold tracking-[0.05em] uppercase text-white flex items-center gap-[8px] transition-transform group-hover:translate-x-2">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Featured Properties Showcase */}
      <section className="bg-surface-container py-[120px]">
        <div className="max-w-container-max mx-auto px-gutter w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-[24px]">
            <div>
              <h2 className="font-display text-[40px] font-semibold tracking-[-0.02em] text-primary mb-[16px]">Exclusive Showcases</h2>
              <p className="font-body text-[18px] text-secondary max-w-2xl">Hand-picked selections representing the pinnacle of Jodhpur real estate.</p>
            </div>
            <button className="hidden md:inline-flex items-center gap-[8px] border-b border-primary text-primary font-body text-[14px] font-semibold uppercase tracking-[0.05em] pb-1 hover:opacity-75 transition-opacity">
              View All Properties <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
            {properties.slice(0, 6).map((property, idx) => (
              <motion.article 
                key={property.id} 
                initial={{ y: 30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow transition-transform duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img src={property.image} alt={property.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute top-[16px] left-[16px] bg-white/80 backdrop-blur-md px-[12px] py-[6px] rounded font-body text-[12px] font-medium text-primary uppercase tracking-[0.05em] border border-white/20">
                    {property.type}
                  </div>
                </div>
                
                <div className="p-[24px] flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-[8px]">
                    <h3 className="font-display text-[20px] font-semibold text-primary break-words pr-2 leading-tight">{property.title}</h3>
                  </div>
                  <p className="font-body text-[15px] text-secondary mb-[16px] flex items-center gap-[4px]">
                    <MapPin size={16} className="shrink-0" /> {property.location}
                  </p>
                  <p className="font-display text-[22px] text-primary font-bold mb-[24px]">{property.price}</p>
                  
                  <div className="grid grid-cols-2 gap-[16px] mb-[32px] pt-[16px] border-t border-surface-variant flex-grow">
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] text-secondary mb-[4px]">Area / Plot</span>
                      <span className="font-body text-[14px] font-semibold text-primary">
                        {property.configuration || property.plotSize || property.area}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] text-secondary mb-[4px]">Key Feature</span>
                      <span className="font-body text-[14px] font-semibold text-primary">
                        {property.amenities || property.zoning || property.bedrooms}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-transparent border border-outline-variant text-primary py-[10px] rounded font-body text-[13px] font-semibold uppercase tracking-[0.05em] hover:border-primary hover:bg-surface-container-low transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-[48px] text-center md:hidden">
            <button className="inline-flex items-center gap-[8px] bg-white border border-outline-variant text-primary px-xl py-sm rounded-full font-body text-[14px] font-semibold uppercase tracking-[0.05em] soft-shadow hover:bg-surface-container-low transition-colors">
              View All Properties <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Invest in Jodhpur */}
      <section className="py-[120px] max-w-container-max mx-auto px-gutter w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden h-[500px] soft-shadow relative"
          >
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwdjUe6tqs8myykDQbwf3-EUZO8qK6PdALl9bv01kE1wysc_wFoyXstcaUaNC5eGtGfeF46f7dmuEZ9yT0iLYdgJQBTnErh7WavFwtSxUlVqTceYwTmBx9fwl_3ckjbZZIxx0WRT72RpswioW5aktmAZdBZUrE5IHNYVH42XNFPed7gEq02LWXamN_HRLvd6ipv64_4V291FdM5EtuNgB6B0B7AB586zZ87ElKkc2IcfZj6RjJotUg1YMYBj7dcKs7H_kiZLOj2tk" alt="Jodhpur aerial view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-[24px]"
          >
            <h2 className="font-display text-[40px] font-semibold tracking-[-0.02em] text-primary">Why Invest in Jodhpur?</h2>
            <p className="font-body text-[18px] leading-[1.6] text-on-surface-variant border-b border-surface-variant pb-[32px]">
              Often known as the Blue City, Jodhpur seamlessly blends immense historical gravity with rapid, forward-looking infrastructural growth, making it a highly rewarding real estate market.
            </p>
            
            <ul className="space-y-[24px] pt-[8px]">
              <li className="flex gap-[16px] items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container shrink-0 flex items-center justify-center text-primary"><TrendingUp size={24} /></div>
                <div>
                  <h4 className="font-display text-[20px] font-semibold text-primary mb-[4px]">Rapid Infrastructure Growth</h4>
                  <p className="font-body text-[15px] text-secondary leading-[1.6]">Aggressive development of commercial corridors and expanding city boundaries present unique early-entry opportunities.</p>
                </div>
              </li>
              <li className="flex gap-[16px] items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container shrink-0 flex items-center justify-center text-primary"><Shield size={24} /></div>
                <div>
                  <h4 className="font-display text-[20px] font-semibold text-primary mb-[4px]">Increasing Property Values</h4>
                  <p className="font-body text-[15px] text-secondary leading-[1.6]">Consistent year-over-year appreciation driven by scarcity in premium zones and rising local affluence.</p>
                </div>
              </li>
              <li className="flex gap-[16px] items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container shrink-0 flex items-center justify-center text-primary"><Plane size={24} /></div>
                <div>
                  <h4 className="font-display text-[20px] font-semibold text-primary mb-[4px]">Excellent Connectivity</h4>
                  <p className="font-body text-[15px] text-secondary leading-[1.6]">Enhanced airport links, superior modernized rail networks, and robust 6-lane highway access.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Deora Properties */}
      <section className="bg-white py-[120px] border-y border-surface-variant">
        <div className="max-w-container-max mx-auto px-gutter w-full text-center">
          <div className="mb-[64px]">
            <h2 className="font-display text-[40px] font-semibold tracking-[-0.02em] text-primary mb-[16px]">The Deora Advantage</h2>
            <p className="font-body text-[18px] text-secondary max-w-2xl mx-auto">Providing a frictionless, trustworthy avenue into the most coveted real estate offerings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {whyChooseUs.map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background border border-surface-variant rounded-xl p-[32px] text-left hover:border-primary transition-colors soft-shadow"
              >
                <div className="text-primary mb-[24px]">
                  {iconMap[feature.icon] || <CheckCircle size={24} />}
                </div>
                <h3 className="font-display text-[22px] font-semibold text-primary mb-[12px]">{feature.title}</h3>
                <p className="font-body text-[15px] text-secondary leading-[1.6]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="bg-primary py-[120px] overflow-hidden text-center text-white relative">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <Quote size={64} className="mx-auto text-white/10 mb-[32px]" />
          <h2 className="font-display text-[40px] font-semibold tracking-[-0.02em] mb-[64px]">Voices of Trust</h2>
          
          <div className="relative max-w-3xl mx-auto min-h-[250px]">
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeTestimonial}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.4 }}
                 className="flex flex-col items-center"
               >
                 <div className="flex gap-[4px] text-tertiary-fixed mb-[24px]">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                 </div>
                 <p className="font-display text-[24px] md:text-[32px] leading-[1.4] mb-[40px] font-normal italic">
                   "{testimonials[activeTestimonial].text}"
                 </p>
                 <div className="flex items-center gap-[16px] text-left">
                   <img src={testimonials[activeTestimonial].photo} alt={testimonials[activeTestimonial].name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" referrerPolicy="no-referrer" />
                   <div>
                     <h4 className="font-body text-[16px] font-semibold tracking-[0.05em] uppercase">{testimonials[activeTestimonial].name}</h4>
                     <p className="font-body text-[14px] text-white/70">{testimonials[activeTestimonial].property}</p>
                   </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center gap-[16px] mt-[48px]">
             <button onClick={prevTestimoinal} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
               <ArrowLeft size={20} />
             </button>
             <button onClick={nextTestimoinal} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* 7. Our Process */}
      <section className="py-[120px] bg-background">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-[80px]">
            <h2 className="font-display text-[40px] font-semibold text-primary mb-[16px] tracking-[-0.02em]">A Seamless Journey</h2>
            <p className="font-body text-[18px] text-on-surface-variant max-w-2xl mx-auto">
              Our transparent and methodical approach ensures absolute clarity from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] relative pt-[24px]">
            <div className="hidden md:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-outline-variant z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-[24px] transition-colors duration-500 shadow-sm
                  ${idx === 3 ? 'bg-primary shadow-[0_10px_40px_rgba(20,50,74,0.15)] text-white' : 'bg-surface-container-low text-primary'}`}
                >
                  <span className="font-display text-[24px] font-semibold">{step.number}</span>
                </div>
                <h4 className="font-body text-[14px] font-semibold uppercase tracking-[0.05em] text-primary mb-[8px]">{step.title}</h4>
                <p className="font-body text-[14px] text-secondary leading-[1.6]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-[120px] bg-white border-t border-surface-variant">
        <div className="max-w-3xl mx-auto px-gutter w-full">
          <div className="text-center mb-[64px]">
             <h2 className="font-display text-[40px] font-semibold text-primary mb-[16px] tracking-[-0.02em]">Common Questions</h2>
             <p className="font-body text-[18px] text-secondary">Providing transparency answers to your most pressing real estate inquiries.</p>
          </div>
          
          <div className="space-y-[16px]">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="border-b border-surface-variant pb-[16px]">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center font-body text-[16px] font-semibold text-primary cursor-pointer py-[12px] text-left hover:text-outline transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 shrink-0 text-primary ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="font-body text-[15px] text-secondary mt-[8px] pb-[16px] leading-[1.6]">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call-to-Action Section */}
      <section className="relative py-[140px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 h-full w-full">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjZx9oOsM8YodTeoux5oSprnF43Zc5so5XCFdhh0led9G01z3ecrjOVwnZOGo2BTyEi6OK8a7qII27Gg-3z9T1-6ZucdVYq6sDV5R2SXs4W8RgJKZ8xbI5x1tdutC51ZIEj2U8kMn57MgQa98y2tPAzxR9Tj5NpL-REwKmrLSy5Y9te2T_Rdq4iGq6fLyS011YZudWcKA_tlrv0A20DLiZaBYzjxwUD-MOdg4tc1dxqfxD4aUhrnY9YBsq6FWOyndaSPOx25ULlDY" alt="CTA backdrop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-gutter">
          <h2 className="font-display text-[40px] md:text-[56px] text-white font-semibold leading-[1.1] mb-[24px]">Ready to Find Your Ideal Property in Jodhpur?</h2>
          <p className="font-body text-[18px] text-white/80 leading-[1.6] mb-[48px]">Connect with our experts for personalized recommendations and verified opportunities.</p>
          
          <div className="flex flex-col sm:flex-row gap-[24px] justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-primary font-body text-[14px] font-semibold tracking-[0.05em] uppercase px-xl py-[16px] rounded hover:bg-surface-container-low transition-colors shadow-lg">
              Schedule a Consultation
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white text-white font-body text-[14px] font-semibold tracking-[0.05em] uppercase px-xl py-[16px] rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-[8px]">
              <MessageCircle size={20} /> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
