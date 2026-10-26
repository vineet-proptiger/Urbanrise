'use client'
import React from 'react'

const locationList = [
  {
    title: 'Wipro Sarjapur Campus',
    time: '4.6 km / 18 mins',
  },
  {
    title: 'Prestige Tech Park',
    time: '7.7 km / 31 mins',
  },
  {
    title: 'Huskur Road Metro Station',
    time: '4.9 km / 20 mins',
  },
  {
    title: 'Infosys Foundation Konappana Agrahara Metro',
    time: '4.6 km / 18 mins',
  },
  {
    title: 'Primus Public School',
    time: '1.5 km / 6 mins',
  },
  {
    title: 'Apollo Hospitals (Sarjapur Road)',
    time: '3 km / 12 mins',
  },
  {
    title: 'Market Square Mall',
    time: '5.7 km',
  },
  {
    title: 'Kempegowda International Airport',
    time: '37.6 km',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#2A7A2A] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You Connected
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (8 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 8 Location Points */}
          <div className="flex flex-col justify-between gap-2 sm:gap-2.5 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#EAF5EA] border border-[#EAF5EA] hover:border-[#2A7A2A]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(42, 122, 42,0.12)] transition-all duration-200"
              >
                {/* Left side: Red Pin Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAF5EA] group-hover:bg-[#2A7A2A] text-[#2A7A2A] group-hover:text-white flex items-center justify-center text-[12px] sm:text-[13px] shrink-0 transition-colors duration-200">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#2A7A2A] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#EAF5EA] group-hover:bg-[#2A7A2A] text-[#2A7A2A] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.557798748504!2d77.69868337507475!3d12.871812987434431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d6c92645da5%3A0x7181e7da7a43a397!2sThe%20living%20Wave%20by%20Urbanrise!5e0!3m2!1sen!2sin!4v1792999353671!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="The living Wave by Urbanrise Google Maps Location"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
