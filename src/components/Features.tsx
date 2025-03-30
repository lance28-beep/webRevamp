"use client";

const features = [
  {
    icon: "✨",
    title: "Weekly Design Showcases",
    description: "Get inspired by our curated collection of stunning website transformations. Each week, we feature new designs with detailed breakdowns of what makes them exceptional."
  },
  {
    icon: "🎯",
    title: "Free Website Features",
    description: "Submit your project for a chance to get a free professional website design. Selected projects receive a complete makeover and detailed case study coverage."
  },
  {
    icon: "📚",
    title: "Design Resources & Tutorials",
    description: "Access our growing library of web design tips, code solutions, and UX patterns. Perfect for students, developers, and business owners looking to improve their web presence."
  },
  {
    icon: "💡",
    title: "Expert Design Analysis",
    description: "Learn from real-world examples with our in-depth analysis of successful website redesigns, conversion optimization, and user experience improvements."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="content-container py-12 sm:py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">
            Discover Web Design Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your source for web design inspiration, free website features, and expert insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 stagger-animation">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl hover-card transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Feature Section */}
        <div className="glass p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl text-center max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
            Get Your Website Featured
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
            Join our collection of inspiring web designs and get a chance for a free professional makeover
          </p>
          <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 feature-list text-sm sm:text-base">
            <li className="flex items-start space-x-2">
              <span className="mt-0.5">🎨</span>
              <span>Receive a complete website redesign by our expert team</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-0.5">📊</span>
              <span>Get featured in our weekly showcase reaching thousands of designers</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-0.5">📝</span>
              <span>Detailed case study of your website transformation</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="mt-0.5">🚀</span>
              <span>Gain exposure and inspire others with your design journey</span>
            </li>
          </ul>
          <div className="space-y-3">
            <a href="#submit-project">
              <button className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl w-full sm:w-auto">
                Submit Your Website
              </button>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Join 100+ websites that have been featured in our inspiration gallery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 