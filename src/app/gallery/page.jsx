'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Sample event data - replace with your actual events and images
const events = [
  {
    id: 1,
    title: 'Corporate Conference 2023',
    thumbnail: '/assets/corporateEvent/1.jpg',
    images:[
      '/assets/corporateEvent/1.jpg',
      '/assets/corporateEvent/2.jpg',
      '/assets/corporateEvent/3.jpg',
    ]
  },
  {
    id: 2,
    title: 'Wedding Celebration',
    thumbnail: '/assets/wedding/1.jpg',
    images: [
      '/assets/wedding/1.jpg',
      '/assets/wedding/2.jpg',
      '/assets/wedding/3.jpg'
    ]
  },
  {
    id: 3,
    title: 'Birthday Perty',
    thumbnail: '/assets/birthdayEvent/1.jpg',
    images: ['/assets/birthdayEvent/1.jpg',
      '/assets/birthdayEvent/2.jpg',
       '/assets/birthdayEvent/3.jpg',
    ] 
  },
]

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Gallery Section */}
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl text-gray-800 font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h1>

        {/* Event Thumbnails */}
        {!selectedEvent && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Event Images Grid */}
        {selectedEvent && !selectedImage && (
          <div className="space-y-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={() => setSelectedEvent(null)}
            >
              <X className="w-4 h-4" />
              Back to Events
            </motion.button>
            <motion.h2 
              className="text-3xl text-gray-800 font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {selectedEvent.title}
            </motion.h2>
            <div className="grid grid-cols-2  sm:grid-cols-3 gap-4">
              {selectedEvent.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image}
                      alt={`${selectedEvent.title} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Fullscreen Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4  hover:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Full screen image"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

