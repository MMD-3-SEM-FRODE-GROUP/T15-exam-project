"use client";
import Image from "next/image";
import React, { useState, memo } from 'react';
import { 
  Radio, Flag, MapPin, ChevronDown, ChevronUp, Music, Calendar, 
  Globe, CreditCard, Shield 
} from 'lucide-react';
import AboutHeroImage from '@/images/gabriel-benois-unsplash.jpg';

const FAQItem = memo(({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-black">{question}</span>
        {isOpen ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
      </button>
      {isOpen && (
        <p className="mt-4 text-black">{answer}</p>
      )}
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

const AboutPage = () => {
  const faqItems = [
    {
      question: "What is Foo Fest?",
      answer: "Foo Fest is an immersive music festival celebrating diverse genres and creating transformative experiences that connect artists and audiences."
    },
    {
      question: "When and Where?",
      answer: "Our annual festival takes place in late summer, bridging urban and natural landscapes to create a unique musical journey."
    },
    {
      question: "Ticket Information",
      answer: "We offer various ticket tiers, including early bird, standard, VIP, and group packages. Tickets go on sale six months before the event."
    },
    {
      question: "What to Expect",
      answer: "Multiple stages, cutting-edge sound systems, art installations, local food vendors, and a community-driven atmosphere that goes beyond traditional music festivals."
    }
  ];

  return (
    <div className="relative text-gray-700">
      <Image
        src={AboutHeroImage}
        alt="Hero background for about-page, by Gabriel Benois"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="opacity-50"
      />
      <div className="min-h-screen text-gray-700 py-12 px-4 relative z-10"> 
        <div className="max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden mt-60">
          <div className="text-center p-8 bg-white">
            <h1 className="text-5xl font-black text-black mb-4">
              FOO FEST
            </h1>
            <p className="text-xl text-gray-700">
              Where music transcends boundaries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 p-8 bg-white">
            <div className="text-center">
              <Radio className="mx-auto h-16 w-16 text-black" />
              <h3 className="mt-4 text-xl font-bold text-black">Sound Waves</h3>
              <p className="text-gray-700">
                Curated musical journeys across genres
              </p>
            </div>

            <div className="text-center">
              <Flag className="mx-auto h-16 w-16 text-black" />
              <h3 className="mt-4 text-xl font-bold text-black">Experience</h3>
              <p className="text-gray-700">
                Immersive festival landscape and community
              </p>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto h-16 w-16 text-black" />
              <h3 className="mt-4 text-xl font-bold text-black">Location</h3>
              <p className="text-gray-700">
                Epic venue bridging urban and natural spaces
              </p>
            </div>
          </div>

          <div className="p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4 text-black">Our Origin</h2>
            <p className="text-gray-700 mb-4">Founded in 2018, Foo Fest emerged from a collective passion for transformative musical experiences.</p>
            <p className="text-gray-700">We craft moments that resonate beyond the festival grounds.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-black text-center">Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Music, title: "Lineup", desc: "World-class artists across multiple genres" },
            { icon: Calendar, title: "Schedule", desc: "Detailed performance timings released monthly" },
            { icon: Globe, title: "Sustainability", desc: "Committed to eco-friendly festival practices" },
            { icon: CreditCard, title: "Payments", desc: "Secure online transactions and flexible options" },
            { icon: Shield, title: "Safety", desc: "Comprehensive security and medical support" }
          ].map((info, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <info.icon className="mx-auto h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{info.title}</h3>
              <p className="text-gray-700">{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
