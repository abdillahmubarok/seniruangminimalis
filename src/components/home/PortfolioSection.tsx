// components/home/PortfolioSection.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'

// Gallery Lightbox component
const GalleryLightbox = ({ 
  isOpen, 
  onClose, 
  images,
  initialIndex = 0
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  images: Array<{src: string; title: string}>;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  if (!isOpen) return null;
  
  const currentImage = images[currentIndex];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        &times;
      </button>
      
      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-20"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-20"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
      
      {/* Image container */}
      <div className="max-w-4xl max-h-full">
        <div className="relative h-[80vh] w-full">
          <Image 
            src={currentImage.src} 
            alt={currentImage.title}
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        {/* Image info */}
        <div className="text-white mt-4 text-center">
          <h3 className="text-xl font-bold">{currentImage.title}</h3>
          <p className="text-gray-300 text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}

// Portfolio Item with Image Component
const PortfolioItemImage = ({ 
  image, 
  title, 
  category, 
  onViewGallery
}: {
  image: string;
  title: string;
  category: string;
  onViewGallery: () => void;
}) => {
  return (
    <div className="relative group animate-fade-in-up">
      {/* Main Image */}
      <div className="relative h-[400px] w-full">
        <Image 
          src={image} 
          alt={title}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* View Gallery button */}
      <button
        className="absolute top-4 left-4 bg-primary text-white p-6 z-10 hover:bg-secondary transition-colors duration-300"
        onClick={onViewGallery}
      >
        <i className="fas fa-images text-xl"></i>
      </button>
      
      {/* Image Click Area */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onViewGallery}
      ></div>
    </div>
  )
}

// Portfolio Item Text Box Component
const PortfolioItemText = ({ 
  category, 
  title, 
  description,
  animationDelay = 0
}: {
  category: string;
  title: string;
  description: string;
  animationDelay?: number;
}) => {
  return (
    <div 
      className="bg-primary p-8 h-full flex flex-col justify-center animate-fade-in-up" 
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <span className="text-secondary text-sm font-medium tracking-wide mb-2">{category}</span>
      <h4 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h4>
      <p className="text-white/80">{description}</p>
    </div>
  )
}

const PortfolioSection = () => {
  // State untuk gallery lightbox
  const [galleryLightbox, setGalleryLightbox] = useState({ 
    isOpen: false,
    category: '',
    images: [] as Array<{src: string; title: string}>,
    initialIndex: 0
  });
  
  // Fungsi untuk membuka gallery lightbox
  const openGalleryLightbox = (category: string, initialIndex: number = 0) => {
    // Temukan semua gambar dari kategori yang dipilih
    const categoryImages = galleryData[category] || [];
    
    setGalleryLightbox({ 
      isOpen: true, 
      category,
      images: categoryImages,
      initialIndex
    });
  };
  
  // Fungsi untuk menutup gallery lightbox
  const closeGalleryLightbox = () => {
    setGalleryLightbox({ ...galleryLightbox, isOpen: false });
  };

  // Galeri data berdasarkan kategori
  const galleryData: Record<string, Array<{src: string; title: string}>> = {
    'Plafon': [
      { src: '/images/section/porto/plafon.jpg', title: 'Plafon Gypsum' },
      { src: '/images/section/porto/plafon-2.jpg', title: 'Plafon Gypsum' },
      { src: '/images/section/porto/plafon-3.jpg', title: 'Plafon Gypsum' },
      { src: '/images/section/porto/plafon-4.jpg', title: 'Plafon Gypsum' },
      { src: '/images/section/porto/plafon-5.jpg', title: 'Plafon Gypsum' },
      { src: '/images/section/porto/plafon-6.jpg', title: 'Plafon Gypsum' }
    ],
    'Kitchen Set': [
      { src: '/images/section/porto/kitchen.jpg', title: 'Kitchen Set Minimalis' },
      { src: '/images/section/porto/kitchen-2.jpg', title: 'Kitchen Set Minimalis' },
      { src: '/images/section/porto/kitchen-3.jpg', title: 'Kitchen Set Minimalis' },
      { src: '/images/section/porto/kitchen-4.jpg', title: 'KKitchen Set Minimalis' },
      { src: '/images/section/porto/kitchen-5.jpg', title: 'KKitchen Set Minimalis' }
    ],
    'Wall Moulding ': [
      { src: '/images/section/porto/wall-5.jpg', title: 'Wall Moulding' },
      { src: '/images/section/porto/wall-2.jpg', title: 'Wall Moulding' },
      { src: '/images/section/porto/wall-3.jpg', title: 'Wall Moulding' },
      { src: '/images/section/porto/wall-4.jpg', title: 'Wall Moulding' }
    ],
    'Partisi': [
      { src: '/images/section/porto/partisi.jpg', title: 'Partisi Penyekat Ruangan' },
      { src: '/images/section/porto/partisi-2.jpg', title: 'Partisi Penyekat Ruangan' },
      { src: '/images/section/porto/partisi-3.jpg', title: 'Partisi Penyekat Ruangan' },
      { src: '/images/section/porto/partisi-4.jpg', title: 'Partisi Penyekat Ruangan' }
    ]
  };

  // Portfolio Items Data
  const portfolioItems = [
    {
      type: 'image',
      image: '/images/section/porto/plafon.jpg',
      title: 'Plafon Gypsum Minimalis',
      category: 'Plafon',
    },
    {
      type: 'text',
      title: 'Desain Plafon Modern',
      category: 'Plafon',
      description: 'Menampilkan plafon gypsum dengan desain modern yang elegan dan memaksimalkan kesan luas pada ruangan.'
    },
    {
      type: 'image',
      image: '/images/section/porto/kitchen.jpg',
      title: 'Kitchen Set Minimalis',
      category: 'Kitchen Set',
    },
    {
      type: 'text',
      title: 'Kitchen Set Custom',
      category: 'Kitchen Set',
      description: 'Desain kitchen set yang disesuaikan dengan kebutuhan dan ruang dapur, menggunakan material berkualitas tinggi.'
    },
    {
      type: 'image',
      image: '/images/section/porto/wall.jpg',
      title: 'Backdrop TV Minimalis',
      category: 'Wall Moulding ',
    },
    {
      type: 'text',
      title: 'Wall Moulding & Ruang Tamu Modern',
      category: 'Wall Moulding',
      description: 'Wall moulding yang memberikan aksen menarik pada dinding ruangan Anda.'
    },
    {
      type: 'image',
      image: '/images/section/porto/partisi.jpg',
      title: 'Partisi Penyekat Ruangan',
      category: 'Partisi',
    },
    {
      type: 'text',
      title: 'Partisi Penyekat Ruangan',
      category: 'Partisi',
      description: 'Solusi cerdas untuk memisahkan area tanpa mengurangi kesan luas dengan desain partisi yang fungsional.'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
            Portofolio Kami
          </span>
          
          <AnimatedHeadline 
            beforeText="Hasil"
            highlightedText="Karya Terbaik"
            rotatingText={["Minimalis", "Modern", "Elegan"]}
            afterText="Dari Kami"
            className="text-3xl md:text-4xl mx-auto animate-fade-in-up"
            tag="h2"
          />
          
          <p className="max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Berikut adalah beberapa contoh hasil karya SENI RUANG MINIMALIS PEKALONGAN yang telah kami kerjakan dengan penuh dedikasi dan kualitas terbaik.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Row 1 */}
          <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8">
            {portfolioItems.slice(0, 4).map((item, index) => (
                item.type === 'image' ? (
                  <PortfolioItemImage 
                    key={index}
                    image={item.image!}
                    title={item.title}
                    category={item.category}
                    onViewGallery={() => openGalleryLightbox(item.category, 0)}
                  />
                ) : (
                  <PortfolioItemText
                    key={index}
                    category={item.category}
                    title={item.title}
                    description={item.description || ''}
                    animationDelay={200 * (index % 4)}
                  />
                )
              ))}
          </div>
          
          {/* Row 2 */}
          <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {portfolioItems.slice(4, 8).map((item, index) => (
                item.type === 'image' ? (
                  <PortfolioItemImage 
                    key={index + 4}
                    image={item.image!}
                    title={item.title}
                    category={item.category}
                    onViewGallery={() => openGalleryLightbox(item.category, 0)}
                  />
                ) : (
                  <PortfolioItemText
                    key={index + 4}
                    category={item.category}
                    title={item.title}
                    description={item.description || ''}
                    animationDelay={200 * (index % 4)}
                  />
                )
              ))}
          </div>
        </div>
      </div>
      
      {/* Gallery Lightbox */}
      <GalleryLightbox 
        isOpen={galleryLightbox.isOpen}
        onClose={closeGalleryLightbox}
        images={galleryLightbox.images}
        initialIndex={galleryLightbox.initialIndex}
      />
    </section>
  )
}

export default PortfolioSection