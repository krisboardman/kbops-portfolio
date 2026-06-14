'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../components/Logo';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/meolpepw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo size="md" />
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition">Portfolio</a>
              <a href="#experience" className="text-gray-700 hover:text-primary transition">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 py-4">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Business Automation That Scales With You
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Save 10+ hours/week with simple, affordable tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">US-based</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">PMP-Certified</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Zapier</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Airtable</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Shopify</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Square</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Stripe</span>
              </div>
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/kristen_headshot_round_280_v2.png"
                alt="Kristen Boardman"
                width={280}
                height={280}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-8 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What I Do</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6 italic">
              I help growing businesses automate the messy, manual stuff—without enterprise software costs (Tools cost: $0-20/month).
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">The Problem</h3>
                <p className="text-gray-700">You're drowning in copy-paste tasks, orders live in spreadsheets, and ops breaks when you get busy.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">The Solution</h3>
                <p className="text-gray-700">I build clean, low-cost systems that connect your apps (Shopify/Square/Email → Zapier → Airtable/QuickBooks).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Typical Results</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ 10+ hrs/week saved</li>
                  <li>✅ Fewer errors</li>
                  <li>✅ Clear dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔔', title: 'Instant Order Alerts', desc: 'Get notified the second a customer places an order - no more lost sales' },
              { icon: '🛒', title: 'E-commerce Integration', desc: 'Connect your existing online store to automated workflows and inventory tracking' },
              { icon: '💳', title: 'Payment Automation', desc: 'Automatic receipts, payment tracking, and bookkeeper-ready reports' },
              { icon: '✉️', title: 'Customer Communication', desc: 'Automated order confirmations, shipping updates, and follow-up emails' },
              { icon: '🤖', title: 'Stop Repetitive Tasks', desc: 'Eliminate copying info between systems - it happens automatically' },
              { icon: '📊', title: 'Business at a Glance', desc: 'Simple dashboards showing sales, inventory, and what needs attention today' },
              { icon: '🧼', title: 'Clean Customer Lists', desc: 'Organize contacts, remove duplicates, and find your best customers' },
              { icon: '🎯', title: 'Custom Workflows', desc: 'Tailored automation for your specific business needs' },
              { icon: '📝', title: 'QuickBooks Integration', desc: 'Seamless connection between your sales and accounting' },
            ].map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-8 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Airtable System Setup */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Airtable System Setup</h3>
              <p className="text-base font-semibold text-primary mb-4">Smart Foundations for Organized, Insightful Ops</p>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You get:</p>
                <p className="text-gray-700 text-sm">A tailored Airtable base designed around your business — with clear structure, automations, and dashboards that turn messy data into actionable insight.</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Scope (typical):</p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Design or optimize tables for Projects, Clients, Tasks, Orders, or Finances</li>
                  <li>Link records for visibility across teams and workflows</li>
                  <li>Add calculated fields for totals, profit, margin, or progress</li>
                  <li>Create one-click actions for updates, reminders, or reports</li>
                  <li>Build dashboards + filters for easy decision-making</li>
                  <li>Deliver setup guide + 20-min walkthrough</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Who it's for:</p>
                <p className="text-gray-700 text-sm">Ideal for service providers, creators, consultants, or small operations teams ready to move beyond spreadsheets.</p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="font-semibold text-gray-900">Delivery:</p>
                  <p className="text-gray-700 text-sm">~5 business days</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Investment:</p>
                  <p className="text-gray-700 text-sm">Starting at $1,000</p>
                </div>
              </div>
            </div>

            {/* Business Automation using Zapier */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Automation using Zapier</h3>
              <p className="text-base font-semibold text-primary mb-4">Connect Your Tools and Eliminate Manual Work</p>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You get:</p>
                <p className="text-gray-700 text-sm">A Zapier hub with multiple inputs → multiple outputs, error handling, and handoff SOPs.</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Scope (typical):</p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Map your top 2–3 bottlenecks</li>
                  <li>Build Zapier hub (Shopify/Square/Email → Airtable/Slack/QuickBooks)</li>
                  <li>Add error logging + alerts</li>
                  <li>Deliver short SOPs + 20-min walkthrough</li>
                </ul>
              </div>

              <div className="flex justify-between items-end mt-auto pt-8">
                <div>
                  <p className="font-semibold text-gray-900">Delivery:</p>
                  <p className="text-gray-700 text-sm">~5 business days</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Investment:</p>
                  <p className="text-gray-700 text-sm">Starting at $1,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wireless Infrastructure Company</h3>
              <p className="text-gray-700 mb-4">Airtable + Zapier</p>
              <p className="text-gray-600">Designed a quoting and ops base with tables for Quotes, Services, Products, and Subscriptions. Added price tiers, cloneable quotes, one-click task updates, and margin dashboards for instant financial visibility.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fleet Management System</h3>
              <p className="text-gray-700 mb-4">Prototype — Airtable/Zapier</p>
              <p className="text-gray-600">Intake → approvals → dispatch → returns, with automated checklists and notifications.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopify ↔ Airtable Integration</h3>
              <p className="text-gray-700 mb-4">Backend System</p>
              <p className="text-gray-600">Sync SKUs, BOMs, orders, and inventory; trigger Slack alerts, ShipStation labels, and Klaviyo emails.</p>
            </div>
          </div>
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Outcomes (Recent)</h3>
            <ul className="text-gray-700 space-y-2">
              <li>⏱ <strong>10+ hrs/week saved</strong> by replacing spreadsheet hand-offs with Airtable interfaces</li>
              <li>📦 <strong>50% faster</strong> order processing time</li>
              <li>🔔 <strong>Cleaner fulfillment:</strong> orders flow automatically, customers get updates</li>
              <li>📊 <strong>Fewer surprises:</strong> dashboards + alerts highlight what needs attention today</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Founder & Automation Consultant — KB Ops Collective</h3>
              <p className="text-gray-600 mb-3">Jan 2024–Present</p>
              <p className="text-gray-700 mb-3">Helping small businesses streamline operations with practical, low-code tools.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Build and automate custom workflows using Airtable, Zapier, Shopify, and QuickBooks Online</li>
                <li>Replace manual quotes, invoices, and tracking sheets with connected systems that save 10+ hours/week</li>
                <li>Create lightweight dashboards for margin, profit, and fulfillment visibility</li>
                <li>Develop one-click tools like pricing tiers, status updates, and alerts for service and product-based businesses</li>
                <li>Focus on clarity, simplicity, and quick ROI—automation that scales with each client's growth</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Founder & Operations Lead — Castaway Covers</h3>
              <p className="text-gray-600 mb-3">Sep 2024–Present</p>
              <p className="text-gray-700 mb-3">Built an outdoor-furniture-cover brand from sketch to shipment.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Headless Shopify on Vercel; mobile-first checkout lift ~3–5%</li>
                <li>Airtable base for SKUs, BOMs, orders; Zapier flows for automation</li>
                <li>Cut ~10 manual touches per order</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Global Director, Professional Services Operations — Honeywell</h3>
              <p className="text-gray-600 mb-3">2007–2024</p>
              <p className="text-gray-700 mb-3">Led global delivery ops (Sparta Systems).</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Resourcing, vendor mgmt, project finance, PMO</li>
                <li>Process improvements with Salesforce, SAP, Power BI, Tableau</li>
                <li>Built playbooks/SOPs; improved utilization, transparency, on-time delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Let's Talk</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Share 2–3 pain points + your current tool stack. I'll reply with a quick-wins plan and a flat-fee proposal.
            </p>
            {showSuccess && (
              <div className="bg-green-50 border border-green-400 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-center">Message sent successfully! I'll get back to you within 24 hours.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What are your top 2-3 pain points? What tools are you currently using?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <Logo size="lg" variant="white" />
          </div>
          <p>&copy; 2025 KB Ops. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Business automation that scales with you.</p>
        </div>
      </footer>
    </div>
  );
}