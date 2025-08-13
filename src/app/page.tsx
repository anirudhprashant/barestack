'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [teamSize, setTeamSize] = useState(10)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [calculations, setCalculations] = useState({
    timeLost: '1,270 hours',
    costWasted: '$63,500',
    timeSaved: '1,143 hours',
    moneySaved: '$57,150',
    roi: '5,715%'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return
    
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitMessage('🎉 Welcome to the waitlist! Check your email for confirmation.')
      setEmail('')
    } catch (error) {
      setSubmitMessage('Error joining waitlist. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateCalculations = (newTeamSize: number, newHourlyRate: number) => {
    // More realistic waste calculation based on industry research
    // Base waste: 21.5 hours per week per developer (McKinsey 2020)
    // Adjusted for team size efficiency: larger teams have more coordination overhead
    const baseWasteHoursPerWeek = 21.5
    const teamEfficiencyFactor = Math.min(1 + (newTeamSize - 1) * 0.05, 2) // Max 2x waste for large teams
    const adjustedWastePerWeek = baseWasteHoursPerWeek * teamEfficiencyFactor
    const totalHoursWasted = Math.round(newTeamSize * adjustedWastePerWeek * 50) // 50 working weeks
    const totalCostWasted = totalHoursWasted * newHourlyRate
    
    // BareStack saves 75-85% of wasted time (more conservative estimate)
    const efficiencyGain = 0.8 // 80% average
    const hoursSaved = Math.round(totalHoursWasted * efficiencyGain)
    const moneySaved = hoursSaved * newHourlyRate
    
    // BareStack is now FREE and open-source - no costs!
    const bareStackCost = 0
    const netSavings = moneySaved // Pure savings since it's free
    
    // ROI calculation: since cost is $0, we show pure value gained
    const roiDisplay = 'INFINITE' // Infinite ROI when cost is zero
    
    setCalculations({
      timeLost: totalHoursWasted.toLocaleString() + ' hours',
      costWasted: '$' + totalCostWasted.toLocaleString(),
      timeSaved: hoursSaved.toLocaleString() + ' hours',
      moneySaved: '$' + moneySaved.toLocaleString(),
      roi: roiDisplay
    })
  }

  useEffect(() => {
    updateCalculations(teamSize, hourlyRate)
  }, [teamSize, hourlyRate])

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-parchment via-white to-gray-50 pt-12" role="banner" aria-label="Hero section">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-6 md:px-12 lg:px-24 z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-red-50 border border-red-300 rounded-full px-6 py-3 mb-12 shadow-sm"
            >
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-red-800">You only use 32% of features you pay for</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight" role="heading" aria-level={1}>
                  You're paying for
                  <br />
                  <span className="text-terracotta relative inline-block">
                    68% bloat
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-terracotta/20 -z-10"
                    ></motion.div>
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-800">
                  <span className="text-sage font-bold">BareStack</span> builds tools that do <span className="text-terracotta font-bold">one thing</span> well.
                </p>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-10 py-5 shadow-xl font-medium"
                    onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Navigate to waste calculator"
                  >
                    Stop The Waste →
                  </motion.button>
                  

                </div>
              </motion.div>
              

            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="section-padding bg-gradient-to-br from-gray-50 via-white to-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-200">
              THE PROBLEM
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We're drowning in
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                features nobody
              </span>
              <br />
              asked for
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Expensive subscriptions that bleed you dry. Enterprise solutions that solve yesterday's problems with tomorrow's complexity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl text-white">∅</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">Zero Bloat</div>
                  <div className="text-sm text-gray-600">What you actually need</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Essential Features</span>
                    <span className="text-sage font-bold">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Unused Bloat</span>
                    <span className="text-red-600 font-bold">0%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Time to Value</span>
                    <span className="text-sage font-bold">Instant</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
                  Enough.
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">No bloat. No bullshit.</div>
                    <div className="text-gray-600 text-sm">Tools that do exactly what they promise, nothing more.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">No fees. Ever. Completely free.</div>
                    <div className="text-gray-600 text-sm">Open-source tools that respect your budget and your time.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sage font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Simple. Fast. Effective.</div>
                    <div className="text-gray-600 text-sm">Software that amplifies your productivity, not your frustration.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waste Calculator */}
      <section id="calculator" className="py-12 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Compact Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium mb-3 border border-red-200">
                WASTE CALCULATOR
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Calculate Your Waste
              </h3>
              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                See exactly how much bloated software is costing your team
              </p>
            </div>
            
            {/* Compact Calculator */}
            <div className="bg-gradient-to-br from-white via-gray-50/30 to-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
              
              {/* Horizontal Layout */}
              <div className="grid lg:grid-cols-5 gap-4 items-center">
                {/* Input Controls - Horizontal */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/40 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-sage to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white text-sm">👥</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Team Size</h4>
                        <div className="text-xs text-gray-600">{teamSize} people</div>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${teamSize}%, #e5e7eb ${teamSize}%, #e5e7eb 100%)`
                      }}
                      aria-label="Team size input"
                      aria-describedby="team-size-description"
                    />
                    <span id="team-size-description" className="sr-only">Enter the number of team members</span>
                    <div className="text-center mt-2">
                      <span className="bg-sage text-white px-3 py-1 rounded-lg font-bold text-lg">{teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/40 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-terracotta to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white text-sm">💰</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Hourly Rate</h4>
                        <div className="text-xs text-gray-600">${hourlyRate}/hour</div>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="25"
                      max="200"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((hourlyRate - 25) / 175) * 100}%, #e5e7eb ${((hourlyRate - 25) / 175) * 100}%, #e5e7eb 100%)`
                      }}
                      aria-label="Hourly rate input in dollars"
                      aria-describedby="hourly-rate-description"
                    />
                    <span id="hourly-rate-description" className="sr-only">Enter the hourly rate in dollars</span>
                    <div className="text-center mt-2">
                      <span className="bg-terracotta text-white px-3 py-1 rounded-lg font-bold text-lg">${hourlyRate}</span>
                    </div>
                  </div>
                </div>
                
                {/* Results - Horizontal */}
                <div className="lg:col-span-3 grid md:grid-cols-3 gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100/60 rounded-xl border border-red-200/40 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs">⏰</span>
                    </div>
                    <div className="text-xs text-red-600 font-semibold mb-1 uppercase tracking-wide">Time Lost</div>
                    <div className="text-xl font-black text-red-600 font-mono mb-1">{calculations.timeLost}</div>
                    <div className="text-xs text-gray-600">Hours annually</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100/60 rounded-xl border border-red-200/40 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs">💸</span>
                    </div>
                    <div className="text-xs text-red-600 font-semibold mb-1 uppercase tracking-wide">Money Wasted</div>
                    <div className="text-xl font-black text-red-600 font-mono mb-1">{calculations.costWasted}</div>
                    <div className="text-xs text-gray-600">Down the drain</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-4 bg-gradient-to-br from-sage/20 via-emerald-50 to-sage/10 rounded-xl border border-sage/30 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xs">🚀</span>
                    </div>
                    <div className="text-xs text-sage font-semibold mb-1 uppercase tracking-wide">You Save</div>
                    <div className="text-xl font-black text-sage font-mono mb-1">{calculations.moneySaved}</div>
                    <div className="text-xs text-gray-600">With BareStack</div>
                  </motion.div>
                </div>
              </div>
              
              {/* Compact ROI & CTA */}
              <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-gradient-to-r from-sage/5 via-white to-terracotta/5 rounded-xl border border-gray-200/30">
                <div className="text-center md:text-left">
                  <div className="text-sm text-gray-700 font-medium">Your Potential ROI</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-sage to-terracotta bg-clip-text text-transparent">{calculations.roi}</div>
                  <div className="text-xs text-gray-600">Plus {calculations.timeSaved} of your life back</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-sage to-terracotta text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Stop The Waste Now →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sage to-terracotta bg-clip-text text-transparent">
              The BareStack Manifesto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe software should amplify human potential, not complicate it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sage to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-sage">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">No bloat means instant loading and responsive interactions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-terracotta">Laser Focused</h3>
              <p className="text-gray-300 text-sm">Each tool does one thing exceptionally well</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Intuitive</h3>
              <p className="text-gray-300 text-sm">Zero learning curve, maximum productivity from day one</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Premium Quality</h3>
              <p className="text-gray-300 text-sm">Crafted with obsessive attention to detail</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="products" className="section-padding bg-gradient-to-br from-parchment via-white to-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sage to-terracotta bg-clip-text text-transparent">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The first wave of BareStack tools launching Q2 2024
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-terracotta transition-colors">BarePLAN</h3>
              <p className="text-gray-700 mb-6">Project management without the management. Tasks, deadlines, done.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-terracotta font-semibold bg-terracotta/10 px-3 py-1 rounded-full">Q2 2024</span>
                <span className="text-sm text-terracotta font-semibold">FREE</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">BareCRM</h3>
              <p className="text-gray-700 mb-6">Customer relationships, not customer confusion. Contacts and deals, period.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">Q2 2024</span>
                <span className="text-sm text-blue-600 font-semibold">FREE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="waitlist" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-terracotta rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sage to-terracotta bg-clip-text text-transparent">
              Ready to Escape the Bloat?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Say goodbye to bloated software
            </p>
            
            <div className="max-w-md mx-auto">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    required
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="px-8 py-4 bg-gradient-to-r from-sage to-terracotta text-white rounded-xl hover:from-sage/90 hover:to-terracotta/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
                
                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center ${submitMessage.includes('Error') ? 'text-red-300' : 'text-sage'}`}
                  >
                    {submitMessage}
                  </motion.p>
                )}
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-sage rounded-full mr-2"></span>
                    No spam, ever
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                    Launch updates only
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Unsubscribe anytime
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  )
}