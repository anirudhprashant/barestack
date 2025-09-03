import TextRotate from '@/components/ui/text-rotate';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-background">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative py-12 sm:py-16 lg:py-20">

          
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight flex flex-col items-center text-center md:flex-row md:items-baseline md:text-left">
  <span>BareStack builds tools that are</span>
  <TextRotate
    texts={["simple.", "fast.", "focused.", "honest."]}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-#1A202C"
    mainClassName="px-2 py-1 rounded-lg inline-block mt-2 md:mt-0 md:ml-2"
  />
</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
              The complete, no-bullshit ecosystem for teams who have better things to do.
            </p>
            <div className="flex justify-center items-center relative">
              {/* Subtle UI Card Background Element */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 sm:w-96 h-32 sm:h-40 bg-white/30 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg -z-10"></div>
              
              <a 
                href="https://www.linkedin.com/in/anirudhprashant/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-base sm:text-lg font-medium relative z-10"
              >
                This will take you to my LinkedIn →
              </a>
            </div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section id="suite" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
          backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundColor: '#fafafa'
        }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Icon Showcase Container - Shows first on mobile */}
               <div className="flex-1 order-1 lg:order-1">
                 {/* White Card Container with Icon Grid */}
                 <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg max-w-md mx-auto lg:mx-0">
                   <div className="grid grid-cols-4 gap-6">
                    {/* Row 1 - BareCRM, BareChat, BareTools, BareProjects */}
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareCRM">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareChat">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareTools">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareProjects">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                       </svg>
                     </div>
                  
                    {/* Row 2 - BareAnalytics, BareDocs, BareSupport, BareDesign */}
                     <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareAnalytics">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareDocs">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareSupport">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200" title="BareDesign">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H4z" clipRule="evenodd" />
                         <path fillRule="evenodd" d="M6 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm2 0v8h8V6H8z" clipRule="evenodd" />
                       </svg>
                     </div>
                  
                    {/* Row 3 - Coming Soon placeholders */}
                     <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg filter grayscale opacity-75" title="Coming Soon">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg filter grayscale opacity-75" title="Coming Soon">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg filter grayscale opacity-75" title="Coming Soon">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg filter grayscale opacity-75" title="Coming Soon">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
              
              {/* Content - Shows second on mobile */}
               <div className="flex-1 text-center lg:text-left lg:pl-8 order-2 lg:order-2">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                   The BareStack Suite
                 </h2>
                 <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                   A complete ecosystem of simple, fast, no-bullshit tools designed to get out of your way. From CRM to project management, we're building everything your team needs. All free, forever*.
                 </p>
               </div>
              
            </div>
          </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            Manifesto
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: The Founder */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4 sm:mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Built by one person.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-left leading-relaxed">
                 It's just me man. Updates might be slow, support might be a little weak. But at least, it'll be honest.
               </p>
            </div>

            {/* Card 2: The Process */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4 sm:mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Part AI, Part Human.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-left leading-relaxed">
                I was first introduced to front end development in high school which I was super close to flunking. AI made it so much easier to realise solutions. There are obvious limitations to this, at least currently. Always open to suggestions and collaborations.
              </p>
            </div>

            {/* Card 3: The Price */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4 sm:mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                *Free, until I'm broke.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-left leading-relaxed">
                Well this is pretty self explanatory. If server bills were to get a little high, you would still always be able to host barestack on your own server, which would still be FREE.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    {/* Footer */}
    <footer id="contact" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-xs sm:text-sm text-gray-500 order-1 sm:order-1">
            © 2025 BareStack.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 order-2 sm:order-2">
            <a href="#manifesto" className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Manifesto
            </a>
            
          </div>
          <div className="order-3 sm:order-3">
            <a href="https://www.linkedin.com/in/anirudhprashant/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
}