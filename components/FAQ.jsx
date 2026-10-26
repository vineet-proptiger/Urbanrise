'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Urbanrise The Living Wave?',
    answer: (
      <>
        Urbanrise The Living Wave offers spacious <strong className="font-semibold text-[#222222]">3 BHK and 4 BHK premium apartments</strong>: 3 BHK with 2 toilets (1,500 to 1,520 sq.ft), 3 BHK with 3 toilets (1,700 to 1,750 sq.ft), and 4 BHK with 3 toilets (1,980 to 2,000 sq.ft) with contemporary layouts and large balconies.
      </>
    ),
  },
  {
    question: 'What are the starting prices and EOI offer?',
    answer: (
      <>
        Expression of Interest (EOI) starting prices begin from <strong className="font-semibold text-[#222222]">₹1.67 Cr*</strong> for 3 BHK with 2 toilets, ₹1.88 Cr for 3 BHK with 3 toilets, and ₹2.20 Cr for 4 BHK with 3 toilets. EOI prices apply to the first 50 bookings only.
      </>
    ),
  },
  {
    question: 'How large is the project and what is the development structure?',
    answer:
      'Urbanrise The Living Wave spans ~4.20 acres in Gattahalli, comprising 3 towers with two basements, ground, and 9/11 upper floors, featuring approximately 368 residences.',
  },
  {
    question: 'Where exactly is Urbanrise The Living Wave located?',
    answer: (
      <>
        Urbanrise The Living Wave is strategically located in <strong className="font-semibold text-[#222222]">Gattahalli, off Sarjapur Road</strong>, South-East Bengaluru, near Wipro SEZ, TCS Think Campus, Electronic City, and the Delta Electronics Bommasandra Yellow Line Metro station.
      </>
    ),
  },
  {
    question: 'What makes Urbanrise The Living Wave an Environmentally Intelligent (EI+) project?',
    answer:
      'EI+ includes rooftop solar panels, wind turbines on towers, Biome rainwater harvesting wells, regenerative elevators, indoor & outdoor air purifiers, and EV charging infrastructure in up to half of car parking spaces.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#004935] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#e5f0ff] text-[#0052cc] font-semibold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
