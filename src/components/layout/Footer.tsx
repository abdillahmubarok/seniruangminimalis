// components/layout/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Interia</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'House Interior', path: '/services/interior' },
                { name: 'House Exterior', path: '/services/exterior' },
                { name: 'Office Consultation', path: '/services/office' },
                { name: 'Furniture Design', path: '/services/furniture' },
                { name: 'Commercial Space', path: '/services/commercial' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.path}
                    className="hover:text-secondary transition-colors flex items-center"
                  >
                    <i className="fas fa-angle-right mr-2"></i>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>1234 Interior Street, Design City, State 56789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>123 456 7890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@interia.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3"></i>
                <span>Mon - Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Instagram */}
          <div>
            <h3 className="text-xl font-bold mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link href="#" key={item} className="relative h-20 w-full block overflow-hidden group">
                  <div className="relative h-full w-full">
                    <Image 
                      src={`/images/instagram-${item}.jpg`} 
                      alt={`Instagram post ${item}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-secondary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} Interia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer