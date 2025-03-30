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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl p-4 md:p-8 text-white shadow-xl relative overflow-hidden group order-2 md:order-1">
                {/* Enhanced animated background pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-[2px]"></div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-sm md:text-base opacity-90 mb-6">We're not just another web design agency. We're your partners in digital transformation.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">🎯</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Strategic Approach</h4>
                        <p className="text-xs md:text-sm opacity-90 leading-relaxed">We don't just make pretty websites. We create strategic digital solutions aligned with your business goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">💡</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Innovative Solutions</h4>
                        <p className="text-xs md:text-sm opacity-90 leading-relaxed">Stay ahead with cutting-edge web technologies and design trends that set you apart from competitors.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">👨‍💻</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Technical Consultation</h4>
                        <p className="text-xs md:text-sm opacity-90 leading-relaxed">Get expert guidance on technical decisions, architecture planning, and best practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <span className="text-xl mt-1">📚</span>
                      <div>
                        <h4 className="font-medium text-base md:text-lg mb-1">Educational Insights</h4>
                        <p className="text-xs md:text-sm opacity-90 leading-relaxed">Learn the principles behind effective web design and development.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🔒</span>
                        <span>Security-First</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🌐</span>
                        <span>SEO Optimized</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>📱</span>
                        <span>Responsive</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>⚡</span>
                        <span>Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
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
