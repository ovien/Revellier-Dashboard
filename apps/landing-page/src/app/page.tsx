import Image from "next/image";
import { Button } from "../components/ui/button";

const destinations = [
  { name: "Canada", img: "/canada.png" },
  { name: "Australia", img: "/australia.png" },
  { name: "United Kingdom", img: "/uk.png" },
  { name: "Germany", img: "/germany.png" },
  { name: "Nigeria", img: "/nigeria.png" },
  { name: "New Zealand", img: "/new zealand.png" },
  { name: "Portugal", img: "/portugal.png" },
  { name: "UAE", img: "/uae.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="w-full text-center py-20 px-4 bg-[#0a1e59] text-white min-h-[55vh] flex flex-col justify-center relative overflow-hidden" id="hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-bounce animate-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/15 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* Additional particles */}
          <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse animate-wave" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-purple-300/30 rounded-full animate-bounce animate-glow" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-cyan-300/35 rounded-full animate-ping animate-float" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          
          {/* Rotating elements */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-white/20 rounded-full animate-spin animate-glow" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border border-white/15 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          
          {/* Moving shapes */}
          <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-white/10 rotate-45 animate-pulse animate-float" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-white/15 rounded-sm animate-bounce animate-wave" style={{animationDelay: '1.8s'}}></div>
          
          {/* Wave effects */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse animate-shimmer"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse animate-wave" style={{animationDelay: '2s'}}></div>
          
          {/* Gradient overlay animations */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Moving lines with different patterns */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-1/4 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/20 rotate-45 animate-pulse" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute bottom-1/5 left-1/5 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-white/25 rotate-12 animate-ping" style={{animationDelay: '2.2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Where are we going today?</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Awaken your wanderlust and see the world for more than it is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-white text-[#0a1e59] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-pulse" style={{animationDelay: '1s'}}>Start Your Trip</Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="w-full py-12 px-4" id="features">
        <h2 className="text-2xl font-semibold text-center mb-8">Popular Destinations</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 px-2">
          {destinations.map((dest) => (
            <div key={dest.name} className="relative bg-white rounded-lg shadow-lg min-w-[320px] h-[300px] hover:scale-105 transition-transform cursor-pointer overflow-hidden">
              <Image 
                src={dest.img} 
                alt={dest.name} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded text-sm font-semibold">
                {dest.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-4xl py-12 px-4" id="how-it-works">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <ol className="space-y-4 text-left mx-auto max-w-2xl">
          <li className="flex gap-3 items-start">
            <span className="font-bold text-blue-600">1.</span>
            <span>Sign up and tell us about your migration plans (citizenship, destination, travel dates, purpose).</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="font-bold text-blue-600">2.</span>
            <span>Our AI instantly generates a personalized checklist, travel advisories, and tips for your route.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="font-bold text-blue-600">3.</span>
            <span>Track your trip status, upload documents and get tailored advice based on approval trends, and get notified of policy changes or requirements.</span>
          </li>
        </ol>
      </section>

      {/* Call to Action & Contact */}
      <section className="w-full max-w-4xl py-12 px-4 text-center" id="contact">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6 text-gray-600">Create an account or reach out to our team for a personalized consultation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
