'use client'
import React from 'react'

const pricingData = [
  {
    type: '3 BHK + 2 Toilets Apartments',
    area: '1520',
    price: '₹1.67 Cr*',
    desc: 'Spacious 3 BHK layout with 2 toilets, separate living and dining, and private balcony.',
  },
  {
    type: '3 BHK + 3 Toilets Apartments',
    area: '1750',
    price: 'On Request',
    desc: 'Expansive 3 BHK layout with 3 attached toilets, generous living space, and cross-ventilation.',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="text-[#004935] font-bold text-[13px] sm:text-[14px] tracking-[2px] uppercase mb-2.5 block">
            PRICE LIST
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Apartment Options &amp; Special Launch Pricing
          </h2>
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#EAF7EE] shadow-[0_8px_30px_rgba(175, 117, 28,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #004935' }}
            >
              <div>
                {/* Top Header: Unit Type & Area Tag */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#1a1a1a] font-black text-[18px] sm:text-[20px] m-0">
                    {item.type}
                  </h3>
                  <span className="bg-[#EAF7EE] text-[#004935] text-[12.5px] sm:text-[13.5px] font-extrabold px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {item.area} Sq.Ft.
                  </span>
                </div>

                {/* Specs: Build-up Area */}
                <div className="mb-3 bg-[#f8fafc] p-2.5 rounded-xl border border-gray-100 text-xs">
                  <span className="text-gray-400 block font-semibold uppercase">Build-up Area</span>
                  <strong className="text-gray-800 text-[13px]">{item.area} Sq.Ft.</strong>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#6c757d] font-bold uppercase tracking-wider block mb-1">
                    PRICE
                  </span>
                  <div className="text-[#222222] font-black text-[24px] tracking-tight">
                    {item.price}
                  </div>
                </div>
                {/* Description */}
                {item.desc && (
                  <p className="text-[#6c757d] text-[13px] font-medium mb-4 leading-snug">{item.desc}</p>
                )}
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer"
                style={{
                  background: '#98ECA1',
                  color: '#003829',
                  border: '2px solid #98ECA1',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#004935';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#004935';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#98ECA1';
                  e.currentTarget.style.color = '#003829';
                  e.currentTarget.style.borderColor = '#98ECA1';
                }}
              >
                Get Full Price Sheet
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto border border-[#e5e7eb]" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">Title</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Build-up Area</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Price</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#fafafa] transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#1a1a1a] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-4 lg:px-6 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area} Sq.Ft.</td>
                  <td className="py-5 px-4 lg:px-6 font-black text-[17px] text-[#222222] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-extrabold text-[13.5px] transition-all duration-300 shadow-md cursor-pointer"
                      style={{
                        background: '#98ECA1',
                        color: '#003829',
                        border: '2px solid #98ECA1',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#004935';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#004935';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#98ECA1';
                        e.currentTarget.style.color = '#003829';
                        e.currentTarget.style.borderColor = '#98ECA1';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Full Price Sheet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
