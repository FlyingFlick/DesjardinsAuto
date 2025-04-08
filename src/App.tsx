import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X as IconX } from 'lucide-react';
import {
  IconWorld,
  IconClock,
  IconBrandLinkedin,
  IconBolt,
  IconChevronRight,
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandDiscord,
  IconScale,
  IconFileText,
  IconBuildingStore,
  IconUsers,
  IconRobot,
  IconCheck,
} from '@tabler/icons-react';
import { BackgroundCircles } from './components/ui/background-circles';
import { FeaturesSectionWithHoverEffects } from './components/ui/features';
import { SparklesCore } from './components/ui/sparkles';
import { Feature } from './components/ui/feature';
import { Button as MovingBorderButton } from './components/ui/moving-border';
import { Footer } from './components/ui/footer';

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  //Cal.com button script
  useEffect(() => {
    // Dynamically load the Cal embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "strategy-call", { origin: "https://cal.com" });
      Cal.ns["strategy-call"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    `;
    document.head.appendChild(script);

    // Cleanup on unmount if needed
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative">
      {/* Demo Site Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <IconX className="w-6 h-6" />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Coming Soon!</h3>
              <p className="text-gray-300 mb-6">
                This will be available within the next few days. I'd love to
                chat in the meantime!
              </p>
              <p className="text-gray-300 italic">-Sean</p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[80vh] relative flex flex-col">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="sticky top-0 ml-auto p-4 text-gray-400 hover:text-white z-50 bg-slate-900/80 backdrop-blur-sm"
            >
              <IconX className="w-6 h-6" />
            </button>
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <div className="prose prose-invert space-y-6">
                <p className="text-gray-300 mt-4">
                  Effective Date: March 31, 2025
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Introduction
                  </h3>
                  <p className="text-gray-300">
                    Welcome to Desjardins Automation. Your privacy is important
                    to us. This Privacy Policy outlines our practices concerning
                    any information we may collect when you visit our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Information We Do Not Collect
                  </h3>
                  <p className="text-gray-300">
                    At Desjardins Automation, we are committed to protecting
                    your privacy. We do not collect, store, or process any
                    personal information from visitors to our website.
                    Specifically:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mt-2">
                    <li>
                      Personal Data: We do not collect names, addresses, phone
                      numbers, email addresses, or any other personal
                      identifiers.
                    </li>
                    <li>
                      Usage Data: We do not track or analyze your browsing
                      behavior, IP addresses, or device information.
                    </li>
                    <li>
                      Cookies: Our website does not use cookies or similar
                      tracking technologies.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Third-Party Links
                  </h3>
                  <p className="text-gray-300">
                    Our website may contain links to external sites. Please be
                    aware that we are not responsible for the privacy practices
                    of these external sites. We encourage you to review the
                    privacy policies of any third-party sites you visit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Changes to This Privacy Policy
                  </h3>
                  <p className="text-gray-300">
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with an updated
                    effective date.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Contact Us
                  </h3>
                  <p className="text-gray-300">
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at:
                  </p>
                  <div className="mt-2 text-gray-300">
                    <p>Desjardins Automation</p>
                    <p>Phone: (330) 805-1563</p>
                    <p>Email: Sean.J@DesjardinsAutomation.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[80vh] relative flex flex-col">
            <button
              onClick={() => setShowTermsModal(false)}
              className="sticky top-0 ml-auto p-4 text-gray-400 hover:text-white z-50 bg-slate-900/80 backdrop-blur-sm"
            >
              <IconX className="w-6 h-6" />
            </button>
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <div className="prose prose-invert space-y-6">
                <p className="text-gray-300 mt-4">
                  Effective Date: March 31, 2025
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Introduction
                  </h3>
                  <p className="text-gray-300">
                    Welcome to Desjardins Automation. By accessing or using our
                    website, you agree to comply with and be bound by these
                    Terms of Service. If you do not agree to these terms, please
                    do not use our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Use of Website
                  </h3>
                  <p className="text-gray-300">
                    You agree to use our website for lawful purposes only. You
                    are prohibited from:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mt-2">
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Engaging in fraudulent or deceptive activities.</li>
                    <li>
                      Attempting to interfere with the proper functioning of our
                      website.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Intellectual Property
                  </h3>
                  <p className="text-gray-300">
                    All content on this website, including text, graphics,
                    logos, and images, is the property of Desjardins Automation
                    and is protected by intellectual property laws. Unauthorized
                    use of any content is prohibited.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Disclaimers
                  </h3>
                  <p className="text-gray-300">
                    Our website is provided on an "as-is" and "as-available"
                    basis. We make no warranties, expressed or implied,
                    regarding the operation or availability of the website. We
                    do not guarantee that the website will be free from errors
                    or interruptions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-300">
                    To the fullest extent permitted by law, Desjardins
                    Automation shall not be liable for any damages arising from
                    your use of our website, including but not limited to
                    direct, indirect, incidental, or consequential damages.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Changes to Terms
                  </h3>
                  <p className="text-gray-300">
                    We reserve the right to modify these Terms of Service at any
                    time. Any changes will be posted on this page with an
                    updated effective date. Your continued use of the website
                    after any changes constitutes your acceptance of the new
                    terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Governing Law
                  </h3>
                  <p className="text-gray-300">
                    These Terms of Service are governed by the laws of the State
                    of Ohio, United States, without regard to its conflict of
                    law principles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Contact Us
                  </h3>
                  <p className="text-gray-300">
                    If you have any questions about these Terms of Service,
                    please contact us at:
                  </p>
                  <div className="mt-2 text-gray-300">
                    <p>Desjardins Automation</p>
                    <p>Phone: (330) 805-1563</p>
                    <p>Email: Sean.J@DesjardinsAutomation.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative pb-24">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={40}
          className="fixed inset-0 h-full w-full pointer-events-none"
          particleColor="#FFFFFF"
          speed={0.3}
        />
        <BackgroundCircles
          title="Desjardins Automation"
          description="Building AI assistants tailored to your dealership. They Engage website visitors, integrate with your CRM, and know entire inventory. They turn visitors into qualified leads."
          variant="senary"
        />

        <div className="relative z-10">
          {/* Problem Statement */}
          <Feature />

          {/* Solution Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-3xl font-bold text-center mb-16">
              My Solution: Integrated 24/7 Customer Engagement
              <div className="mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDemoModal(true);
                  }}
                  className="inline-flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300"
                >
                  <IconBuildingStore className="w-5 h-5" />
                  <span>See it in action on our demo dealership site →</span>
                </a>
              </div>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-blue-500/50 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <IconClock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Instant Response</h3>
                </div>
                <div className="mb-6 rounded-lg px-10 overflow-hidden">
                  <img
                    src="/Solution1.png"
                    alt="Global Availability"
                    className="w-fit h-full object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-400">
                  No more lost leads due to slow response times. Our AI engages
                  visitors immediately, 24/7, ensuring every inquiry gets
                  instant attention.
                </p>
              </div>
              <div className="group relative p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-blue-500/50 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <IconBolt className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Knowledge</h3>
                </div>
                <div className="mb-6 rounded-lg px-10 overflow-hidden">
                  <img
                    src="/Solution2.png"
                    alt="Global Availability"
                    className="w-fit h-full object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-400">
                  Our AI maintains deep knowledge of your inventory,
                  specifications, and pricing, providing accurate information
                  instantly to potential buyers.
                </p>
                <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-8 h-8 text-blue-400/30 rotate-90">
                    <IconChevronRight className="w-full h-full animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="group relative p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-blue-500/50 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <IconWorld className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Always Available</h3>
                </div>
                <div className="mb-6 rounded-lg px-10 overflow-hidden">
                  <img
                    src="/Solution3.png"
                    alt="Global Availability"
                    className="w-fit h-full object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-400">
                  Never miss another lead, even during off-hours. Our AI
                  assistant works around the clock, qualifying leads while you
                  sleep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 id="Features" className="text-3xl font-bold text-center mb-16">
            Why Our AI Assistant Excels for Your Dealership
          </h2>
          <FeaturesSectionWithHoverEffects />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="w-8 h-8 text-blue-400/30 rotate-90">
            <IconChevronRight className="w-full h-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <h3
            id="Testimonials"
            className="text-3xl font-bold text-center mb-12"
          >
            Industry Leading Success Stories
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* AAA AUTO Case Study */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                AAA Auto
              </h3>
              <p className="text-blue-400 text-sm mb-4">
                Powered by Smartsupp Chat
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    900 cars sold each month through enhanced customer
                    interactions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    7,200 new leads generated monthly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    30% increase in conversations with live agents
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    10% conversion rate (5x more effective than traditional
                    online forms)
                  </p>
                </div>
                <a
                  href="https://www.smartsupp.com/case-studies/aaa-auto-thanks-to-smartsupp-chat-we-sell-900-cars-a-month/"
                  target="_blank"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read full case study →
                </a>
              </div>
            </div>

            {/* ABC Motors Case Study */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                AutoAlert
              </h3>
              <p className="text-blue-400 text-sm mb-4">
                AI-Powered Chatbot Solution
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    30% increase in customer interactions within three months
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    20% higher lead generation rate by engaging visitors
                    proactively
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    Streamlined sales process by prioritizing high-intent buyers
                  </p>
                </div>
                <a
                  href="https://www.autoalert.com/dealership-ai-chatbots/"
                  target="_blank"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read full case study →
                </a>
              </div>
            </div>

            {/* AutoAlert Case Study */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Hyundai Bahrain
              </h3>
              <p className="text-blue-400 text-sm mb-4">
                Powered by Giosg Live Selling
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    Response time reduced from 1 week to 24 hours
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    60% of showroom visits converted into test drives
                    (previously 28%)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                  <p className="text-gray-300">
                    57% conversion rate of prospects to closed sales (industry
                    average 18-20%)
                  </p>
                </div>
                <a
                  href="https://www.giosg.com/customer-success-stories/hyundai-bahrain"
                  target="_blank"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read full case study →
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-12 max-w-3xl mx-auto text-lg">
            These industry-leading solutions have transformed dealership
            operations worldwide. Let us help you choose and implement the
            perfect solution for your needs.
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <div id="About_Me" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 blur transition duration-200 group-hover:opacity-75"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg flex flex-col">
                  <img
                    src="/AIMe.png"
                    alt="Professional headshot"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm text-center backdrop-blur-sm">
                    This is AI me
                  </p>
                </div>
              </div>
              <div className="relative group mt-6">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 blur transition duration-200 group-hover:opacity-75"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg flex flex-col">
                  <img
                    src="/Me.jpg"
                    alt="AI-generated portrait"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm text-center backdrop-blur-sm">
                    And this is the real me
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <h2 className="text-4xl font-bold mb-6">Hi, I'm Sean</h2>
                <div className="space-y-10 text-gray-300">
                  <p className="relative">
                    Founder of Desjardins Automation. I've worked in the
                    automotive world, love cars, and am passionate about using
                    AI to make things easier and more human
                    <span className="block mt-2 text-blue-400 font-semibold italic text-lg relative">
                      emphasis on more human
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
                    </span>
                  </p>
                  <p className="mt-12">
                    I started this for dealerships because I saw too many stuck
                    with overpriced, clunky tools that didn't help them connect
                    with customers. I aim to build something more intelligent,
                    faster, and more personal—something that makes both
                    customers and dealerships happy.
                  </p>
                  <div className="flex items-center gap-4 pt-10">
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                    >
                      <IconBrandLinkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  My Journey So Far
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                    <p className="text-gray-300">
                      Built AI chat assistants from scratch for dealerships
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                    <p className="text-gray-300">
                      Focused on real-world problems like lead conversion and
                      response times
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 mt-1 text-blue-400" />
                    <p className="text-gray-300">
                      Created a personalized, customizable, affordable solution
                      that's integrated into your current systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-8">
                For a limited time, I'll build a tailored AI assistant for your
                dealership's website for $10.
              </h2>
              <p className="text-2xl text-blue-500 font-semibold text-center mb-8">
                You benefit from personalized service at an unbeatable price.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDemoModal(true);
                  }}
                  className="group relative px-12 py-4 text-xl font-semibold text-white bg-gradient-to-br from-slate-600/80 via-slate-700/80 to-slate-800/80 rounded-xl overflow-hidden transition-all duration-175 hover:from-slate-500/90 hover:via-slate-600/90 hover:to-slate-700/90 hover:scale-105 hover:shadow-xl shadow-lg backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <IconBuildingStore className="w-6 h-6" />
                    <span>Visit Demo Dealership</span>
                  </div>
                </a>
                <button
                  data-cal-link="seanjd1014/strategy-call"
                  data-cal-namespace="strategy-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="group relative px-12 py-4 text-xl font-semibold text-white bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-800/80 rounded-xl overflow-hidden transition-all duration-175 hover:from-blue-500/90 hover:via-blue-600/90 hover:to-blue-700/90 hover:scale-105 hover:shadow-xl shadow-lg backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span>Book a Demo</span>
                    <IconChevronRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
              <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mt-12">
                I'm collecting social proof for now and would appreciate any
                feedback on my solution. I'd love to chat with you to see what I
                can do for your dealership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer
          brand={{
            name: 'Desjardins Automation',
            description:
              'Transforming dealership websites with AI-powered customer engagement.',
          }}
          socialLinks={[
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/sean-desjardins-960b552b8',
            },
          ]}
          columns={[
            {
              title: 'Company',
              links: [
                {
                  name: 'About Us',
                  Icon: IconUsers,
                  href: '#About_Me',
                  onClick: () =>
                    document
                      .querySelector('#About_Me')
                      ?.scrollIntoView({ behavior: 'smooth' }),
                },
                {
                  name: 'Features',
                  Icon: IconRobot,
                  href: '#Features',
                  onClick: () =>
                    document
                      .querySelector('#Features')
                      ?.scrollIntoView({ behavior: 'smooth' }),
                },
                {
                  name: 'Case Studies',
                  Icon: IconBuildingStore,
                  href: '#Testimonials',
                  onClick: () =>
                    document
                      .querySelector('#Testimonials')
                      ?.scrollIntoView({ behavior: 'smooth' }),
                },
              ],
              className: 'pr-8',
            },
            {
              title: 'Contact',
              links: [
                {
                  name: '(330) 805-1563',
                  Icon: IconPhone,
                  href: 'tel:3308051563',
                },
                {
                  name: 'Sean.J@DesjardinsAutomation.com',
                  Icon: IconMail,
                  href: 'mailto:Sean.J@DesjardinsAutomation.com',
                },
              ],
              className: 'pr-16',
            },
            {
              title: 'Legal',
              links: [
                {
                  name: 'Privacy Policy',
                  Icon: IconScale,
                  href: '#',
                  onClick: () => setShowPrivacyModal(true),
                },
                {
                  name: 'Terms of Service',
                  Icon: IconFileText,
                  href: '#',
                  onClick: () => setShowTermsModal(true),
                },
              ],
            },
          ]}
          copyright={`© ${new Date().getFullYear()} Desjardins Automation. All rights reserved.`}
        />
      </div>
    </div>
  );
}

export default App;
