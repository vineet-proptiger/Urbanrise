'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const overviewSpecs = [
  {
    title: 'Configuration',
    desc: '3 BHK & 4 BHK Apartments',
  },
  {
    title: 'Land Parcel Area',
    desc: '~4.20 Acres',
  },
  {
    title: 'Tower Structure',
    desc: '3 Towers with 368 Homes',
  },
  {
    title: 'Luxury Clubhouse',
    desc: 'Low-Rise Dedicated Amenity Building',
  },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Urbanrise The Living Wave Gattahalli" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#004935] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                WELLNESS ARCHITECTURE
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Overview
              </h2>

              <div className="mb-6">
                <div className={`text-[#6c757d] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-4 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    <strong className="text-[#111111]">Urbanrise The Living Wave</strong> is a premium pre-launch apartment project by Urbanrise in Gattahalli, South-East Bengaluru, off Sarjapur Road and next to Adarsh Garden Estate. Spread across about 4.2 acres, this gated community offers 368 3 BHK and 4 BHK homes in three towers, designed for mid-size and large families.
                  </p>
                  <p className="m-0">
                    Expression of Interest (EOI) starting prices are approximate: 3 BHK with 2 toilets (1,500 to 1,520 sq. ft.) from ₹1.65 Cr, 3 BHK with 3 toilets (1,650 to 1,750 sq. ft.) from ₹1.87 Cr, and 4 BHK with 3 toilets (1,950 to 2,100 sq. ft.) from ₹2.31 Cr. The indicative base rate is ₹11,000 per sq. ft.
                  </p>
                  <p className="m-0">
                    The project has a separate low-rise amenity building with a swimming pool and gym, landscaped gardens, 432 proposed car parking spaces and an 8-metre internal fire driveway.
                  </p>
                  <p className="m-0">
                    Gattahalli sits between HSR Layout, Sarjapur Road and Electronic City. Wipro SEZ (Sarjapur Road) is about 5.6 km away, TCS Think Campus about 5.65 km, and Electronic City Phases 1 and 2 are 5 to 8.2 km away. The nearest operational metro station is Delta Electronics Bommasandra on the Namma Metro Yellow Line, about 7.96 km by road, with connections to RV Road and Jayadeva Hospital. Access to Hosur Road and the NICE Road network is easy.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#004935] font-bold text-[14.5px] mt-2.5 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Exactly 4 Specs with Green Circular Checkmarks (Matching Reference Screenshot) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                {overviewSpecs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#98ECA1] text-[#003829] flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5 shadow-sm font-bold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-[16px] sm:text-[17px] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[#6c757d] text-[13.5px] sm:text-[14px] font-medium m-0 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
