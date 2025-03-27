// components/home/CallToAction.tsx
import React from 'react'
import Link from 'next/link'
import AnimatedHeadline from '../ui/AnimatedHeadline'

const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col justify-center animate-fade-in-up">
            <span className="text-secondary text-sm tracking-wider uppercase">
              Lets Started
            </span>
            
            <AnimatedHeadline 
              beforeText="Ready To Have"
              highlightedText="New House"
              rotatingText={["Better", "Bigger", "Faster"]}
              afterText="Design"
              className="text-3xl md:text-4xl animate-fade-in-up"
              tag="h2"
            />
            
            <div className="w-24 h-1 bg-secondary my-6"></div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <i className="fas fa-box-open text-4xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">25 + Flexible Package</h4>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link 
                href="/packages"
                className="inline-block font-semibold text-primary hover:underline transition-all duration-300 hover:translate-y-1"
              >
                View Package
              </Link>
            </div>
            
            {/* Package 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <i className="fas fa-headset text-4xl text-secondary"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Live Talk With Us</h4>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 font-medium hover:bg-secondary transition-colors duration-300 hover:translate-y-1"
              >
                Get a Quotation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction