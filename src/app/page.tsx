'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-parchment via-white to-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-6 md:px-12 lg:px-24 z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl"
          >
            {/* Floating Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Building the future of simple software</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-inter text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight"
            >
              Software is
              <br />
              <span className="text-terracotta relative">
                bloated
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-terracotta/20 -z-10"
                ></motion.div>
              </span>
              <span className="text-gray-400">.</span>
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mb-12"
            >
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium mb-6">
                  BareStack builds tools that do <span className="text-sage font-semibold">one thing</span> exceptionally well.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4 shadow-lg"
                  >
                    Explore BareCRM
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2 transition-colors"
                  >
                    <span>Our Story</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            

          </motion.div>
        </div>

      </section>

      {/* Manifesto Section */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-terracotta/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sage/3 to-terracotta/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="relative">
                <div className="w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta to-sage rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-3">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-terracotta mb-2">∅</div>
                      <div className="text-sm font-medium text-gray-600">Zero Bloat</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <span className="inline-block bg-gradient-to-r from-terracotta to-sage bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4">
                    The Problem
                  </span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                >
                  We're drowning in
                  <span className="block text-terracotta">features nobody</span>
                  <span className="block">asked for</span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                    Subscriptions that bleed you dry. Enterprise solutions that solve 
                    yesterday's problems with tomorrow's complexity.
                  </p>
                  
                  <div className="flex items-center space-x-4 py-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent"></div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold text-terracotta px-4"
                    >
                      Enough.
                    </motion.span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent"></div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <p className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                      No bloat. No bullshit.
                    </p>
                    <p className="text-gray-600">
                      No monthly fees for features you'll never use.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Slider */}
      <section className="w-full overflow-hidden py-8 border-t border-b border-gray-100">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-sage/70 tracking-wide mx-12">
            BareStack. Barebones. Bare Necessities.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-terracotta/70 tracking-wide mx-12">
            Simple Software. Real Solutions.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-sage/70 tracking-wide mx-12">
            Zero Bloat. Maximum Impact.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-terracotta/70 tracking-wide mx-12">
            Built for Builders.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-sage/70 tracking-wide mx-12">
            BareStack. Barebones. Bare Necessities.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-terracotta/70 tracking-wide mx-12">
            Simple Software. Real Solutions.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-sage/70 tracking-wide mx-12">
            Zero Bloat. Maximum Impact.
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-terracotta/70 tracking-wide mx-12">
            Built for Builders.
          </span>
        </div>
      </section>

      {/* First Product Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="inline-block bg-sage text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  First Project
                </span>
              </div>
              <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-terracotta">BareCRM</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Our first tool in the BareStack suite. While Salesforce charges $300/month for features you'll never touch, 
                BareCRM focuses on what actually matters: tracking your customers and deals.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                No AI chatbots. No social media integration. No "revolutionary" 
                workflow automation. Just a clean, fast CRM that helps you sell more.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Lightning-fast contact management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Simple deal pipeline tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Essential reporting, nothing more</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-sage rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-white rounded-lg"></div>
                </div>
                <p className="text-gray-600 font-medium">BareCRM Interface Preview</p>
                <p className="text-sm text-gray-500 mt-2">Clean. Simple. Effective.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Product Section - BarePLAN */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-terracotta rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <p className="text-gray-600 font-medium">BarePLAN Interface Preview</p>
                <p className="text-sm text-gray-500 mt-2">Organized. Focused. Efficient.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4">
                <span className="inline-block bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Second Project
                </span>
              </div>
              <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
                Introducing <span className="text-sage">BarePLAN</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Our barebones project management tool. While others drown you in Gantt charts, 
                kanban boards, and endless customization options, BarePLAN focuses on what matters: 
                getting things done.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                No time tracking widgets. No team collaboration bells and whistles. 
                No "AI-powered insights." Just clean project organization that helps you ship faster.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Simple task management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Clear project timelines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Essential progress tracking</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-terracotta/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-600">Our Philosophy</span>
            </div>
            <h2 className="font-inter text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Design <span className="text-sage">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four foundational beliefs that shape every decision, every feature, and every line of code we write.
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp} 
              className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-2xl font-bold mb-4 text-gray-900 group-hover:text-terracotta transition-colors">
                    Subtract, Don't Add
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Every feature request begins with a simple question: "What can we remove?" 
                    We believe that true sophistication lies in simplicity, not complexity.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-2xl font-bold mb-4 text-gray-900 group-hover:text-sage transition-colors">
                    Clarity Over Cleverness
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We choose plain language over jargon, intuitive design over innovation for innovation's sake. 
                    No hidden menus, no "revolutionary" interfaces that confuse users.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      "The best interface is the one you don't have to think about."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-2xl font-bold mb-4 text-gray-900 group-hover:text-terracotta transition-colors">
                    Speed is a Feature
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Fast loading times, instant responses, zero lag. Performance isn't a nice-to-have—
                    it's the foundation of great user experience.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      "Speed is the ultimate feature. Everything else is just decoration."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="group bg-white rounded-3xl p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">04</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-2xl font-bold mb-4 text-gray-900 group-hover:text-sage transition-colors">
                    Opinionated by Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We show you the best way to accomplish your goals, not every possible way. 
                    Fewer choices lead to better outcomes and faster decisions.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      "Good design is opinionated. Great design makes those opinions invisible."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center bg-gray-900 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="font-medium">These principles guide everything we build</span>
              <div className="ml-3 w-2 h-2 bg-sage rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-inter text-4xl md:text-5xl font-bold mb-6">
              Join the Revolution
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Be the first to know when we launch BareCRM and BarePLAN, our upcoming barebones project management tool. 
              No spam, no marketing fluff. Just honest updates about software that actually works.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-6">
              Free tools. Open source when possible. No bullshit, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 