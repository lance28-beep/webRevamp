import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SubmissionForm from "@/components/SubmissionForm";
import TechStackMarquee from "@/components/TechStackMarquee";
import Newsletter from "@/components/Newsletter";
import dynamic from 'next/dynamic';

// Dynamically import SplashCursor with no SSR
const SplashCursor = dynamic(() => import('@/components/SplashCursor'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Splash Cursor Effect - Only rendered on client side */}
      <SplashCursor />

      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Features Section */}
      <Features />

      {/* Submission Section */}
      <section id="submit-project" className="py-8 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl p-4 md:p-8 text-white shadow-xl relative overflow-hidden group order-2 lg:order-1">
                {/* Enhanced animated background pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-[2px]"></div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Request Your Free Website Design! 🎨</h3>
                  <p className="text-sm md:text-base opacity-90 mb-6">Have a business or project that needs a website? Submit your idea, and if selected, we'll design it for free and feature it in our inspiration gallery!</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">✨</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Submit Your Project</h4>
                        <p className="text-sm opacity-90 leading-relaxed">Whether you need a new website or a revamp, tell us your vision. Looking for local businesses, student projects, portfolios, or unique ideas that inspire others.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">🎯</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">What We're Looking For</h4>
                        <p className="text-sm opacity-90 leading-relaxed">• Local businesses needing modern websites<br/>• Student projects with unique concepts<br/>• Portfolio sites with creative direction<br/>• Innovative web app ideas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">💫</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">If Selected</h4>
                        <p className="text-sm opacity-90 leading-relaxed">• Free professional website design<br/>• Featured on our inspiration gallery<br/>• Detailed design case study<br/>• Social media promotion</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">🌟</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Design Features Available</h4>
                        <p className="text-sm opacity-90 leading-relaxed">• Responsive layouts<br/>• Modern UI/UX design<br/>• Interactive elements<br/>• Custom animations<br/>• Brand-aligned visuals</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <h4 className="font-medium text-base mb-2">🏆 Recent Features</h4>
                    <p className="text-sm opacity-90 mb-3">"The design perfectly captured our cafe's atmosphere. It's now inspiring other local businesses!" - Sarah's Corner Cafe</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>📅</span>
                        <span>Weekly Selections</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🎨</span>
                        <span>Custom Design</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm">
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>💡</span>
                        <span>Any Industry</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🎯</span>
                        <span>Free Design</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>✨</span>
                        <span>Get Featured</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>📱</span>
                        <span>Responsive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SubmissionForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
