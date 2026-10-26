'use client'
import React from 'react'

const highlights = [
  {
    title: 'Developer',
    description: 'Urbanrise (Alliance Group) — trusted developer with 25+ years of legacy, 24,000+ happy families, and ₹63,000 Cr portfolio.',
    icon: 'fa-solid fa-city'
  },
  {
    title: 'Land Area',
    description: 'Spread across ~4.20 acres of prime Gattahalli land with expansive open greens, landscaped courtyards, and wide driveways.',
    icon: 'fa-solid fa-vector-square'
  },
  {
    title: 'Configurations',
    description: 'Spacious 3 BHK and 4 BHK luxury residences (1,500 to 2,100 sq.ft.) engineered with large balconies and natural ventilation.',
    icon: 'fa-solid fa-bed'
  },
  {
    title: 'Clubhouse',
    description: 'Low-rise dedicated amenity building with social lounges, recreation zones, and executive reading/co-working spaces.',
    icon: 'fa-solid fa-champagne-glasses'
  },
  {
    title: 'Towers & Heights',
    description: '3 residential towers (Towers 1 & 3: B+G+18; Tower 2: B+G+17) plus a separate dedicated low-rise amenity clubhouse.',
    icon: 'fa-solid fa-building'
  },
  {
    title: 'Eco-Features',
    description: 'Environmentally Intelligent (EI+) design with Miyawaki urban forests, solar panels, and rainwater recharge systems.',
    icon: 'fa-solid fa-leaf'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#004935] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
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
              className="group relative bg-white rounded-[20px] p-7 border border-[#EAF7EE] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0, 73, 53,0.14)] hover:border-[#004935]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#98ECA1] text-[#003829] group-hover:bg-[#004935] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#222222] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#004935] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#004935]/20 group-hover:bg-[#004935] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
