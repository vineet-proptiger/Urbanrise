'use client'
import React from 'react'

const highlights = [
  {
    title: 'Prime Gattahalli Location',
    description: 'Located in Gattahalli, off Sarjapur Road, right between HSR Layout and Electronic City.',
    icon: 'fa-solid fa-location-dot'
  },
  {
    title: 'Rapid Metro & Road Connectivity',
    description: 'Quick access to Namma Metro Yellow Line, Hosur Road, and the NICE Road corridor.',
    icon: 'fa-solid fa-train-subway'
  },
  {
    title: '4.2-Acre Gated Community',
    description: 'Spread over ~4.20 acres with 3 iconic towers and expansive landscaped open greens.',
    icon: 'fa-solid fa-building'
  },
  {
    title: 'EI+ Intelligent Living',
    description: 'Towers generate power from sun and wind with rooftop solar panels and wind turbines.',
    icon: 'fa-solid fa-solar-panel'
  },
  {
    title: 'Low-Rise Dedicated Clubhouse',
    description: 'Dedicated amenity building with social lounges, gym, pool, and co-working spaces.',
    icon: 'fa-solid fa-champagne-glasses'
  },
  {
    title: 'Thoughtfully Planned Layouts',
    description: 'Spacious 3 & 4 BHK residences of 1,500 to 2,000 sq.ft. with balconies and natural light.',
    icon: 'fa-solid fa-ruler-combined'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#2A7A2A] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            What Makes The Living Wave Stand Apart
          </h2>
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#EAF5EA] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(42, 122, 42,0.14)] hover:border-[#2A7A2A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#EAF5EA] text-[#2A7A2A] group-hover:bg-[#2A7A2A] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#222222] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#2A7A2A] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#2A7A2A]/20 group-hover:bg-[#2A7A2A] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
