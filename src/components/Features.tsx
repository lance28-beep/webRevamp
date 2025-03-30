"use client";

const features = [
  {
    icon: "🎓",
    title: "FREE Weekly Lessons",
    description: "Code snippets, design hacks, and UX best practices delivered straight to your inbox."
  },
  {
    icon: "💡",
    title: "Website Inspiration",
    description: "Before/after revamps and detailed breakdowns of why they work."
  },
  {
    icon: "🌟",
    title: "Promotional Spotlights",
    description: "Submit your site for a free redesign and feature in our weekly showcase."
  },
  {
    icon: "🚀",
    title: "Pro Tips & Tricks",
    description: "Actionable advice to elevate your projects from 'good' to 'holy-wow'."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="content-container section-spacing">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Level Up Your Web Game
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to create stunning websites that convert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 stagger-animation">
          {features.map((feature, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Feature Section */}
        <div className="glass p-8 rounded-2xl text-center max-w-3xl mx-auto animate-slide-up">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Want Your Project Featured?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Submit your website and get a chance to:
          </p>
          <ul className="text-left space-y-3 mb-8 feature-list">
            <li>🎨 Get a fresh site makeover by our pro designers</li>
            <li>📢 Receive free promotion to our community</li>
            <li>📝 Get a detailed breakdown of the improvements</li>
            <li>🌐 Join our showcase of success stories</li>
          </ul>
          <a href="#submit-project">
            <button className="btn-primary">
              Submit Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
} 