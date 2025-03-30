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
      <section id="submit-project" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
                {/* Enhanced animated background pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-[2px]"></div>
                </div>
                
                {/* Main Content */}
                <div className="relative space-y-8">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/20 shadow-lg mb-4">
                      🌟 Free Website Consultation & Review
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Transform Your Web Presence</h2>
                    <p className="text-xl opacity-90 leading-relaxed">Let's elevate your online presence with modern design principles and proven strategies that convert visitors into customers.</p>
                  </div>

                  {/* Services Offered */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <span className="mr-2">🎯</span>
                      Comprehensive Services:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="text-xl mt-1">🆕</span>
                        <div>
                          <h4 className="font-medium text-lg mb-1">New Website Development</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Start fresh with a modern, responsive website built using the latest technologies. Perfect for businesses ready to establish a strong online presence with optimized performance and SEO-friendly structure.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="text-xl mt-1">🔄</span>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Complete Website Makeover</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Transform your existing website with modern design patterns, improved user experience, and enhanced performance. We'll analyze your current site and implement strategic improvements for better engagement.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="text-xl mt-1">👨‍💻</span>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Technical Consultation</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Get expert guidance on technical decisions, architecture planning, and best practices. We'll help you choose the right technologies and implement optimal solutions for your specific needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="text-xl mt-1">📚</span>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Educational Insights</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Learn the principles behind effective web design and development. Get hands-on mentoring and practical tips to maintain and update your website independently.</p>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <span className="mr-2">⚙️</span>
                      Modern Tech Stack:
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm opacity-90 mb-3">We use the latest technologies to ensure your website is fast, secure, and scalable:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: 'Next.js 14', desc: 'Latest features' },
                          { name: 'React', desc: 'UI components' },
                          { name: 'TypeScript', desc: 'Type-safe' },
                          { name: 'Tailwind CSS', desc: 'Modern styling' },
                          { name: 'Node.js', desc: 'Backend' },
                          { name: 'MongoDB', desc: 'Database' }
                        ].map((tech) => (
                          <div key={tech.name} className="px-3 py-2 bg-white/10 rounded-lg text-sm backdrop-blur-sm hover:bg-white/20 transition-colors group">
                            <span className="font-medium">{tech.name}</span>
                            <span className="opacity-0 group-hover:opacity-80 ml-1 text-xs transition-opacity">- {tech.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🔒</span>
                        <span>Security-First Approach</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>🌐</span>
                        <span>SEO Best Practices</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>📱</span>
                        <span>Responsive Design</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                        <span>⚡</span>
                        <span>Optimized Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SubmissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
