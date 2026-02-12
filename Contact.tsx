import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mail, User, MessageSquare, Send, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="clinical-card p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                  Connect With Us
                </h2>
                <p className="text-[#A7ACB8] text-base">
                  Have a question or a partnership opportunity? Reach out directly.
                </p>
              </div>

              {/* Founder Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-teal" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    Abhilash Singha
                  </h3>
                  <p className="text-[#A7ACB8] text-sm mb-2">Founder</p>
                  <a 
                    href="mailto:abhilashsingha17.as@gmail.com"
                    className="flex items-center gap-2 text-teal text-sm hover:underline"
                  >
                    <Mail size={14} />
                    abhilashsingha17.as@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#A7ACB8] mb-2">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7ACB8]" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A7ACB8]/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#A7ACB8] mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7ACB8]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A7ACB8]/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-[#A7ACB8] mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A7ACB8]" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A7ACB8]/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#A7ACB8] text-sm">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="font-heading font-bold text-xl text-white">
              NeuroPulse<span className="text-teal">™</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A7ACB8] hover:text-teal hover:bg-teal/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A7ACB8] hover:text-teal hover:bg-teal/10 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:abhilashsingha17.as@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A7ACB8] hover:text-teal hover:bg-teal/10 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[#A7ACB8] text-sm">
              © NeuroPulse™. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
