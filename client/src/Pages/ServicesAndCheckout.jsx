import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Code, Brain, Cpu, Layers, Calendar, User, Mail, Phone, FileText, ArrowLeft } from 'lucide-react';

const SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Web Dev',
    basePrice: '₹3,999',
    icon: Code,
    description: 'Custom, high-performance responsive websites, landing pages, and full-stack web applications tailored to your business needs.'
  },
  {
    id: 'ai-ml',
    title: 'Model Fine-Tuning & AI',
    category: 'AI/ML',
    basePrice: '₹1,999',
    icon: Brain,
    description: 'Custom dataset fine-tuning for LLMs, computer vision model deployment, and intelligent prompt engineering solutions.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Smart Contracts',
    category: 'Web3',
    basePrice: '₹4,999',
    icon: Layers,
    description: 'Secure smart contract development (Solidity), decentralized application (dApp) integration, and tokenomics consulting.'
  },
  {
    id: 'coding-assist',
    title: 'Coding Assistance & Debugging',
    category: 'Collaboration',
    basePrice: '₹499',
    icon: Cpu,
    description: '1-on-1 technical assistance, system architecture planning, code optimization, and complex bug squashing.'
  }
];

export default function ServicesAndCheckout() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    description: '',
    stack: '',
    expectedDate: '',
    offeredPrice: '4999',
    transactionId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const formRef = useRef(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, offeredPrice: service.basePrice.replace(/[^0-9]/g, '') }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: selectedService.id,
          serviceTitle: selectedService.title,
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Project request submitted successfully! I will contact you shortly.' });
        setFormData({
          name: '', email: '', contact: '', description: '', stack: '', expectedDate: '', offeredPrice: '', transactionId: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again or reach out directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080710] text-slate-100 font-sans overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      
      {/* FIXED Ambient Patches Area - Placed cleanly above base layout canvas */}
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] bg-amber-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse duration-[6000ms] z-0" />
      <div className="absolute bottom-[25%] right-[5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-yellow-600/15 rounded-full mix-blend-screen filter blur-[140px] pointer-events-none animate-pulse duration-[8000ms] z-0" />

      {/* Main Container Elements set with z-10 index layout layer */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Action Back Button */}
        <button 
          onClick={() => navigate('/')} 
          className="group mb-8 flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 px-4 py-2 rounded-xl border border-white/10 transition-all text-xs font-semibold tracking-wide uppercase"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-amber-400 tracking-wide uppercase">Services & Collaboration</h2>
          <p className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Let's Build Something Great
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Select a service below to view details, pricing options, and initiate a project request instantly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`text-left transition-all duration-300 rounded-2xl p-6 backdrop-blur-md border ${
                  isSelected 
                    ? 'bg-amber-500/10 border-amber-400/50 shadow-lg shadow-amber-500/5 scale-[1.02]' 
                    : 'bg-white/5 border-white/10 hover:border-amber-500/30 hover:bg-white/10'
                }`}
              >
                <div className={`p-3 rounded-xl inline-block ${isSelected ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300'}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <span className="inline-block mt-1 text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-400/10 px-2 py-0.5 rounded">
                  {service.category}
                </span>
                <p className="mt-3 text-sm text-slate-400 line-clamp-3">{service.description}</p>
                <div className="mt-6 flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Starting from</span>
                  <span className="text-lg font-extrabold text-amber-400">{service.basePrice}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Checkout Container */}
        <div ref={formRef} className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: QR Payment Info */}
          <div className="lg:col-span-5 p-8 lg:p-12 bg-gradient-to-b from-amber-500/5 to-transparent border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Step 1: Secure Offer</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">Pricing & Token Booking</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                To guarantee execution at minimal rates, scan the UPI QR code below to complete your payment or a secure advanced commitment. Note down your Transaction ID to submit alongside your proposal.
              </p>

              {/* Dynamic Service Overview Badge */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
                <p className="text-xs text-slate-400 uppercase">Selected Service</p>
                <p className="text-base font-bold text-white mt-0.5">{selectedService.title}</p>
                <div className="mt-2 flex items-center text-sm font-semibold text-amber-400">
                  <span className="text-xs text-slate-500 mr-2">Base Pricing:</span> {selectedService.basePrice} INR
                </div>
              </div>
            </div>

            {/* UPI QR Scanner Placeholder */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/60 border border-white/5 rounded-2xl">
              <div className="w-44 h-44 bg-white p-2 rounded-xl shadow-inner relative flex items-center justify-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=yourupiid@bank%26pn=YourName%26cu=INR" 
                  alt="UPI QR Code Scanner"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-xs text-slate-400 font-mono tracking-tight bg-slate-950 px-3 py-1 rounded-full border border-white/5">
                UPI ID: yourupiid@bank
              </p>
            </div>
          </div>

          {/* Right Column: Order Route Submission Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 lg:p-12 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Step 2: Project Specifications</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-6">Submit Your Requirement Router</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email / Contact */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone / Discord / Telegram handles */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Contact Info (Phone/Social)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text" name="contact" required value={formData.contact} onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX or @telegram"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Expected Tech Stack */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Expected Tech Stack</label>
                <div className="relative">
                  <Code className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text" name="stack" value={formData.stack} onChange={handleInputChange}
                    placeholder="e.g., Python, React, Solidity"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <textarea
                  name="description" required rows={3} value={formData.description} onChange={handleInputChange}
                  placeholder="Detail your goals, project outline, core features, or fine-tuning datasets..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Expected Completion Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Expected Timeline/Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="date" name="expectedDate" required value={formData.expectedDate} onChange={handleInputChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Offered Price in Rs */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Offered Budget (Rs.)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">₹</span>
                  <input
                    type="number" name="offeredPrice" required value={formData.offeredPrice} onChange={handleInputChange}
                    placeholder="Enter value in INR"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Advance Transaction ID */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Advance Transaction ID <span className="text-slate-500 text-[10px] lowercase">(optional token validation)</span>
              </label>
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text" name="transactionId" value={formData.transactionId} onChange={handleInputChange}
                  placeholder="UPI Ref / UTR / Txn Number"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Action Feedback State Notification */}
            {submitStatus && (
              <div className={`p-4 rounded-xl text-sm ${submitStatus.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Router Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold py-3 px-6 rounded-xl hover:opacity-95 transition-all shadow-lg shadow-amber-500/10 disabled:opacity-50 text-sm tracking-wide uppercase"
            >
              {isSubmitting ? 'Routing Secure Data...' : `Submit ${selectedService.category} Proposal`}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}