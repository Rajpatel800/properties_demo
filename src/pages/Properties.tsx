import { RefreshCw, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { properties } from '../data';

export default function Properties() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow max-w-container-max mx-auto px-gutter w-full pb-24 pt-32"
    >
      <header className="text-center mb-xl">
        <h1 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-primary mb-[16px] tracking-[-0.02em] font-semibold">
          Curated Estates
        </h1>
        <p className="font-body text-[18px] text-secondary max-w-2xl mx-auto">
          Discover a portfolio of exquisite luxury villas, expansive investment lands, and exclusive gated communities designed for the discerning few.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        {/* Advanced Filter Sidebar (3 Columns) */}
        <aside className="md:col-span-3">
          <div className="bg-surface-container-lowest p-[24px] rounded-xl soft-shadow sticky top-28">
            <div className="flex justify-between items-center mb-[24px]">
              <h2 className="font-display text-[24px] font-semibold text-primary">Refine Search</h2>
              <button className="text-secondary hover:text-primary text-[12px] flex items-center gap-[4px] font-body font-medium transition-colors">
                <RefreshCw size={14} /> Reset
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-[32px]">
              <h3 className="font-body text-[14px] font-semibold tracking-[0.05em] uppercase text-primary mb-[16px]">Property Type</h3>
              <div className="flex flex-col gap-[12px]">
                {['Luxury Villas', 'Investment Land', 'Gated Communities'].map(type => (
                  <label key={type} className="flex items-center gap-[12px] cursor-pointer group">
                    <input type="checkbox" defaultChecked={type === 'Investment Land'} className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-background" />
                    <span className={`font-body text-[16px] transition-colors ${type === 'Investment Land' ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'}`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-[32px]">
              <h3 className="font-body text-[14px] font-semibold tracking-[0.05em] uppercase text-primary mb-[16px]">Price Range (₹)</h3>
              <div className="flex gap-[16px] items-center">
                <input type="text" placeholder="Min" className="minimal-input font-body text-[16px] text-primary placeholder:text-secondary-fixed-dim" />
                <span className="text-secondary">-</span>
                <input type="text" placeholder="Max" className="minimal-input font-body text-[16px] text-primary placeholder:text-secondary-fixed-dim" />
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-[32px]">
              <h3 className="font-body text-[14px] font-semibold tracking-[0.05em] uppercase text-primary mb-[16px]">Location</h3>
              <div className="relative">
                <select className="minimal-input font-body text-[16px] text-primary appearance-none cursor-pointer pr-8">
                  <option>All Locations</option>
                  <option>Jodhpur</option>
                  <option>Jaipur</option>
                  <option>Udaipur</option>
                  <option>Goa</option>
                </select>
                <ChevronDown size={20} className="absolute right-0 top-2 text-secondary pointer-events-none" />
              </div>
            </div>

            {/* Amenities Filter */}
            <div className="mb-[32px]">
              <h3 className="font-body text-[14px] font-semibold tracking-[0.05em] uppercase text-primary mb-[16px]">Key Amenities</h3>
              <div className="flex flex-col gap-[12px]">
                {['Private Pool', 'Heritage View', 'Clubhouse'].map(amenity => (
                  <label key={amenity} className="flex items-center gap-[12px] cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-background" />
                    <span className="font-body text-[16px] text-secondary group-hover:text-primary transition-colors">
                      {amenity}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary text-on-primary py-[12px] rounded font-body text-[14px] font-semibold tracking-[0.05em] uppercase hover:bg-primary-container transition-colors">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Property Cards Grid (9 Columns) */}
        <section className="md:col-span-9">
          {/* Grid Header / Sort */}
          <div className="flex justify-between items-center mb-[32px] pb-[16px] border-b border-surface-variant flex-wrap gap-4">
            <p className="font-body text-[16px] text-secondary">
              Showing <span className="font-bold text-primary">12</span> exclusive properties
            </p>
            <div className="flex items-center gap-[8px]">
              <span className="font-body text-[12px] font-medium text-secondary uppercase tracking-[0.05em]">Sort by:</span>
              <div className="relative">
                <select className="bg-transparent text-primary font-body text-[14px] font-semibold border-none focus:ring-0 cursor-pointer pr-6 appearance-none outline-none">
                  <option>Featured</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                  <option>Newest Additions</option>
                </select>
                <ChevronDown size={16} className="absolute right-0 top-1 text-primary pointer-events-none" />
              </div>
            </div>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {properties.map(property => (
              <article key={property.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow transition-transform duration-300 hover:-translate-y-1 flex flex-col cursor-pointer">
                <div className="relative h-[320px] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-[16px] left-[16px] bg-white/80 backdrop-blur-md px-[12px] py-[6px] rounded font-body text-[12px] font-medium text-primary uppercase tracking-[0.05em] border border-white/20">
                    {property.type}
                  </div>
                </div>
                
                <div className="p-[24px] flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-[8px]">
                    <h3 className="font-display text-[24px] font-semibold text-primary break-words pr-2">{property.title}</h3>
                    <span className="font-display text-[24px] text-primary font-bold whitespace-nowrap">{property.price}</span>
                  </div>
                  <p className="font-body text-[16px] text-secondary mb-[16px] flex items-center gap-[4px]">
                    <MapPin size={18} className="shrink-0" />
                    {property.location}
                  </p>
                  
                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-[16px] mb-[24px] pt-[16px] border-t border-surface-variant flex-grow">
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] text-secondary mb-[4px]">
                        {property.configuration ? 'Configuration' : (property.plotSize ? 'Total Plot' : 'Area')}
                      </span>
                      <span className="font-body text-[14px] font-semibold text-primary">
                        {property.configuration || property.plotSize || property.area}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] text-secondary mb-[4px]">
                        {property.amenities ? 'Amenities' : (property.zoning ? 'Zoning' : 'Bedrooms')}
                      </span>
                      <span className="font-body text-[14px] font-semibold text-primary">
                        {property.amenities || property.zoning || property.bedrooms}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] text-secondary mb-[4px]">
                        {property.status ? 'Status' : (property.access ? 'Access' : (property.specialty ? 'Specialty' : 'Facing'))}
                      </span>
                      <span className="font-body text-[14px] font-semibold text-primary">
                        {property.status || property.access || property.specialty || property.facing}
                      </span>
                    </div>
                  </div>
                  
                  {/* Secondary CTA */}
                  <button className="w-full bg-transparent border border-primary text-primary py-[12px] rounded font-body text-[14px] font-semibold uppercase tracking-[0.05em] hover:bg-primary hover:text-on-primary transition-colors duration-300">
                    {property.type === 'Gated Community' ? 'Explore Community' : 'View Details'}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-[64px] flex justify-center">
            <button className="group flex items-center gap-[8px] bg-white border border-outline-variant px-[32px] py-[12px] rounded-full hover:border-primary hover:bg-surface-container-low transition-all duration-300 shadow-[0_4px_12px_rgba(20,50,74,0.02)]">
              <span className="font-body text-[14px] font-semibold tracking-[0.05em] text-primary uppercase transition-colors">Load More Properties</span>
              <ChevronDown size={20} className="text-primary group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
