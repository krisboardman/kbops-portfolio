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
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition">Work</a>
              <a href="#experience" className="text-gray-700 hover:text-primary transition">About</a>
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
                Business Operations, Systems &amp; Automation
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                I help Professional Services organizations and growing businesses improve the operational backbone behind delivery — resource planning, partner/vendor management, reporting, workflows, systems, and automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">US-based</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">PMP-Certified</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">17 yrs Professional Services Ops</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Resource &amp; Capacity Planning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Reporting &amp; Dashboards</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Airtable</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Zapier</span>
              </div>
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Let&apos;s Talk
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

      {/* Two Service Areas */}
      <section className="py-8 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Two Ways I Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Services Operations</h3>
              <p className="text-gray-700">
                Resource &amp; capacity planning, utilization, partner/vendor operations, project financial visibility, reporting, forecasting, and process improvement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Systems &amp; Automation</h3>
              <p className="text-gray-700">
                Airtable, workflow design, dashboards, integrations, automation, reporting, and practical systems that reduce manual work.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What Usually Prompts a Call</h3>
                <p className="text-gray-700">Staffing decisions are made from stale spreadsheets, utilization and project margin are hard to see, and reporting takes days to pull together.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How I Work</h3>
                <p className="text-gray-700">I start with how the work actually flows today — planning, delivery, partners, billing — then fix the process and build only the system it needs.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What You End Up With</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ Clear staffing and capacity visibility</li>
                  <li>✅ Reporting you can trust and repeat</li>
                  <li>✅ Documented process, not tribal knowledge</li>
                  <li>✅ Less manual work between systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services</h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Services Operations</h3>
          <p className="text-gray-700 mb-6">Improving how delivery is planned, staffed, measured, and reported.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📅', title: 'Resource & Capacity Planning', desc: 'Know who is available, what is committed, and where the gaps are before they turn into escalations' },
              { icon: '📈', title: 'Utilization & Staffing Visibility', desc: 'Track billable utilization, bench, and forecast demand so staffing decisions are based on current data' },
              { icon: '🤝', title: 'Partner & Vendor Operations', desc: 'Onboarding, rates, assignments, and performance tracking for subcontractor and partner networks' },
              { icon: '💰', title: 'Project Financial Operations', desc: 'Budget vs. actuals, revenue recognition inputs, billing hygiene, and margin visibility by engagement' },
              { icon: '🔮', title: 'Forecasting & Reporting', desc: 'Recurring reporting on pipeline demand, backlog, revenue, and delivery health that leadership can act on' },
              { icon: '🔧', title: 'Process & Workflow Improvement', desc: 'Fix handoffs across sales, delivery, finance, and partners — from staffing requests to project closeout' },
              { icon: '📋', title: 'Operational Governance', desc: 'Playbooks, SOPs, and operating cadences so the process holds up as the team grows and people change' },
              { icon: '🚀', title: 'PMO & Delivery Support', desc: 'Practical PMO structure: intake, prioritization, status reporting, and escalation paths that get used' },
              { icon: '🧩', title: 'Ops Assessment', desc: 'A clear-eyed look at how delivery runs today, what is breaking, and what to fix first' },
            ].map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Systems &amp; Automation</h3>
          <p className="text-gray-700 mb-6">Building the systems that make those operational improvements stick.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🗂️', title: 'Airtable Systems', desc: 'Bases designed around how your business actually runs — projects, clients, resources, and finances in one place' },
              { icon: '🎯', title: 'Workflow Design', desc: 'Map the process first, then build intake, approvals, assignments, and status tracking that people will follow' },
              { icon: '📊', title: 'Dashboards & Reporting', desc: 'Views and dashboards that answer the real questions: what is at risk, what is booked, what is profitable' },
              { icon: '🔗', title: 'Integrations', desc: 'Connect the tools you already pay for so data moves once instead of being re-entered' },
              { icon: '🤖', title: 'Lightweight Automation', desc: 'Zapier and native automations for the repetitive steps — reminders, updates, notifications, and handoffs' },
              { icon: '🧼', title: 'Data Cleanup & Structure', desc: 'Deduplicate, standardize, and restructure messy data so reporting can be trusted' },
              { icon: '📉', title: 'Beyond Spreadsheets', desc: 'Replace spreadsheet-heavy and manual processes with systems that hold up when volume increases' },
              { icon: '📝', title: 'Finance & Billing Workflows', desc: 'Time, invoicing, and QuickBooks handoffs connected to delivery so billing is not a monthly scramble' },
              { icon: '📚', title: 'Documentation & Handoff', desc: 'Short SOPs and a walkthrough so your team owns the system after I hand it over' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ways to Work Together</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Operations Review & Roadmap */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Review &amp; Roadmap</h3>
              <p className="text-base font-semibold text-primary mb-4">Understand How Delivery Actually Runs Today</p>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You get:</p>
                <p className="text-gray-700 text-sm">A clear picture of how work is planned, staffed, tracked, and reported — plus a prioritized list of what to fix first and what it would take.</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Scope (typical):</p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Review resource planning, utilization, and staffing process</li>
                  <li>Walk the delivery lifecycle: intake → staffing → delivery → billing → closeout</li>
                  <li>Assess partner/vendor coordination and project financial visibility</li>
                  <li>Review current reporting and where the numbers come from</li>
                  <li>Deliver findings, recommendations, and a phased roadmap</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Who it&apos;s for:</p>
                <p className="text-gray-700 text-sm">Professional Services teams and growing businesses where delivery works but the operations behind it are held together manually.</p>
              </div>

              <div className="flex justify-between items-end mt-auto">
                <div>
                  <p className="font-semibold text-gray-900">Delivery:</p>
                  <p className="text-gray-700 text-sm">2–3 weeks</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Investment:</p>
                  <p className="text-gray-700 text-sm">Scoped after intro call</p>
                </div>
              </div>
            </div>

            {/* Airtable System Setup */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operations System Build</h3>
              <p className="text-base font-semibold text-primary mb-4">Airtable Foundations for Organized, Visible Ops</p>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You get:</p>
                <p className="text-gray-700 text-sm">A tailored Airtable system designed around your business — clear structure, automations, and dashboards that turn scattered data into decisions you can make quickly.</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Scope (typical):</p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Design or optimize tables for Projects, Clients, Resources, Tasks, or Finances</li>
                  <li>Link records for visibility across teams and workflows</li>
                  <li>Add calculated fields for totals, margin, utilization, or progress</li>
                  <li>Create one-click actions for updates, reminders, or reports</li>
                  <li>Build dashboards + filters for easy decision-making</li>
                  <li>Deliver setup guide + 20-min walkthrough</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Who it&apos;s for:</p>
                <p className="text-gray-700 text-sm">Service businesses, consultancies, and small operations teams ready to move beyond spreadsheets.</p>
              </div>

              <div className="flex justify-between items-end mt-auto">
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

            {/* Workflow Automation & Integrations */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workflow Automation &amp; Integrations</h3>
              <p className="text-base font-semibold text-primary mb-4">Connect Your Tools and Cut the Manual Steps</p>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">You get:</p>
                <p className="text-gray-700 text-sm">A connected workflow across the tools you already use — multiple inputs to multiple outputs, with error handling and handoff SOPs.</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Scope (typical):</p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Map your top 2–3 bottlenecks and the handoffs around them</li>
                  <li>Build the integration hub (Airtable, Zapier, Slack, QuickBooks, e-commerce, forms)</li>
                  <li>Automate notifications, status updates, and recurring reporting</li>
                  <li>Add error logging + alerts</li>
                  <li>Deliver short SOPs + 20-min walkthrough</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Who it&apos;s for:</p>
                <p className="text-gray-700 text-sm">Teams re-entering the same data in several places, or chasing status updates by email.</p>
              </div>

              <div className="flex justify-between items-end mt-auto">
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
          <p className="text-gray-700 text-center mt-6">
            Ongoing operations support is also available on a monthly basis for teams that need consistent reporting, planning, and system upkeep.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Professional Services Organization</h3>
              <p className="text-gray-700 mb-4">Enterprise Software — Resource Planning &amp; Delivery Operations</p>
              <p className="text-gray-600">Ran the operations behind an approximately $30M annual Professional Services organization: resource and capacity planning across 50+ concurrent customer engagements, a global partner network of roughly 100–150 external resources, project financial operations, and the forecasting and reporting leadership used to make staffing and revenue decisions.</p>
            </div>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Changes for Clients</h3>
            <ul className="text-gray-700 space-y-2">
              <li>🗓 <strong>Planning gets easier:</strong> capacity, commitments, and gaps are visible in one place instead of assembled by hand</li>
              <li>⏱ <strong>Less manual work:</strong> spreadsheet hand-offs and duplicate data entry get replaced with connected workflows</li>
              <li>📊 <strong>Reporting becomes routine:</strong> the numbers come from the system, so updates take minutes rather than a rebuild each time</li>
              <li>🔔 <strong>Fewer surprises:</strong> dashboards and alerts surface what needs attention before it becomes an escalation</li>
              <li>📚 <strong>The process holds:</strong> documented workflows and SOPs so the system survives turnover and growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About &amp; Experience</h2>
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              I spent 17 years in Professional Services at Sparta Systems, later acquired by Honeywell, leading the operations behind an approximately $30M annual Professional Services organization. That work covered resource and capacity planning, utilization, partner and vendor management, project financial operations, forecasting, reporting, business systems, and process improvement.
            </p>
            <p className="text-lg text-gray-700">
              Today I do that same work independently through KB Ops — for Professional Services teams and growing businesses that need their operations to run better, and need the systems and automation to support it. I have sat in the seat where the staffing decision, the margin question, and the month-end report all land, which is why I start with the process and build only the system it actually needs.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Founder &amp; Operations Consultant — KB Ops</h3>
              <p className="text-gray-600 mb-3">Jan 2024–Present</p>
              <p className="text-gray-700 mb-3">Operations, systems, and automation consulting for Professional Services teams and small, growing businesses.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Improve operational workflows and process across planning, delivery, billing, and reporting</li>
                <li>Design and build operational systems in Airtable, with integrations to Zapier, QuickBooks Online, Shopify, and Slack</li>
                <li>Replace manual quotes, invoices, and tracking sheets with connected systems and documented workflows</li>
                <li>Build lightweight dashboards and recurring reporting for margin, capacity, and delivery visibility</li>
                <li>Focus on clarity, simplicity, and systems the client&apos;s team can own after handoff</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Professional Services Operations Leadership — Sparta Systems (acquired by Honeywell)</h3>
              <p className="text-gray-600 mb-3">2007–2024 · 17 years</p>
              <p className="text-gray-700 mb-3">Led global operations for an approximately $30M annual Professional Services organization.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Supported 50+ concurrent customer engagements</li>
                <li>Owned resource and capacity planning, managing approximately 85–90% utilization</li>
                <li>Coordinated a global partner network of approximately 100–150 external resources</li>
                <li>Partner and vendor management: onboarding, rates, assignments, and performance</li>
                <li>Project financial operations, forecasting, and leadership reporting</li>
                <li>Business systems and process improvement across Salesforce, SAP, Power BI, and Tableau</li>
                <li>Built the playbooks, SOPs, and operating cadences the organization ran on</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900">Founder &amp; Operations Lead — Castaway Covers</h3>
              <p className="text-gray-600 mb-3">Sep 2024–Present</p>
              <p className="text-gray-700 mb-3">Built an outdoor-furniture-cover brand from sketch to shipment — useful proof of what these systems do when you are the one relying on them.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Headless Shopify on Vercel with a mobile-first checkout</li>
                <li>Airtable base for SKUs, BOMs, and orders; Zapier flows connecting fulfillment and notifications</li>
                <li>Removed most of the manual steps between an order arriving and a label being printed</li>
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
              Tell me what is not working — resource planning, utilization, partner coordination, reporting, or a process that still lives in spreadsheets. Share 2–3 pain points and your current tool stack, and I&apos;ll reply with where I would start and a flat-fee proposal.
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
                  What are you trying to fix? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What are your top 2-3 operational pain points? What tools are you currently using?"
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
          <p className="mt-2 text-gray-400">Business operations, systems &amp; automation.</p>
        </div>
      </footer>
    </div>
  );
}