'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRocket, FaLightbulb, FaUsers, FaArrowRight } from 'react-icons/fa'
import CustomCursor from '@/components/customCursor'

const MotionLink = motion(Link)

export default function Home() {
  return (
    <>
    <CustomCursor/>
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Welcome to Your Time Event
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Creating Unforgettable Moments, One Event at a Time
          </p>
          <MotionLink
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </MotionLink>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Your Time Event?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaRocket, title: 'Innovative Ideas', description: 'We bring fresh and creative concepts to every event.' },
              { icon: FaLightbulb, title: 'Attention to Detail', description: 'Every aspect of your event is meticulously planned.' },
              { icon: FaUsers, title: 'Expert Team', description: 'Our experienced professionals ensure flawless execution.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Event Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/placeholder.svg?height=400&width=600', alt: 'Corporate event' },
              { src: '/placeholder.svg?height=400&width=600', alt: 'Wedding celebration' },
              { src: '/placeholder.svg?height=400&width=600', alt: 'Birthday party' },
              { src: '/placeholder.svg?height=400&width=600', alt: 'Product launch' },
              { src: '/placeholder.svg?height=400&width=600', alt: 'Gala dinner' },
              { src: '/placeholder.svg?height=400&width=600', alt: 'Team building event' },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 overflow-hidden rounded-lg shadow-md group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          >
            <p className="text-gray-600 text-lg mb-4">
              &quot;Your Time Event transformed our vision into reality. The attention to detail and professionalism were outstanding. Our wedding day was absolutely perfect thanks to their expert planning and execution.&quot;
            </p>
            <p className="text-gray-800 font-semibold">- Sarah & John, Newlyweds</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s turn your vision into an unforgettable experience
          </p>
          <MotionLink
            href="/connect"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
            <FaArrowRight className="ml-2" />
          </MotionLink>
        </div>
      </section>
    </div>
    </>
  )
}

