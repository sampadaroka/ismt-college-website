'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2, FileText, Clock, Users } from 'lucide-react'
import { useState } from 'react'

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const admissionProcess = [
    {
      step: '1',
      title: 'Apply Online',
      description: 'Submit your application form with required documents online',
      icon: FileText,
    },
    {
      step: '2',
      title: 'Review & Assessment',
      description: 'Our admissions team reviews your application and credentials',
      icon: Users,
    },
    {
      step: '3',
      title: 'Interview',
      description: 'Qualifying candidates are invited for an interview',
      icon: Clock,
    },
    {
      step: '4',
      title: 'Admission Decision',
      description: 'Receive your admission decision and enrollment details',
      icon: CheckCircle2,
    },
  ]

  const eligibility = [
    {
      program: 'BSc (Hons) Computing',
      requirements: ['High School Diploma or Equivalent', 'Mathematics: Min 60%', 'English: Min 50%', 'Basic Computer Knowledge'],
    },
    {
      program: 'BBA',
      requirements: ['High School Diploma or Equivalent', 'Mathematics: Min 55%', 'English: Min 50%', 'General Knowledge Test'],
    },
    {
      program: 'MBA',
      requirements: ['Bachelor\'s Degree in any field', 'Work Experience: Min 2 years', 'GMAT/CAT Score (Optional)', 'Statement of Purpose'],
    },
    {
      program: 'Cyber Security',
      requirements: ['Bachelor\'s Degree in IT/CS', 'Programming Knowledge', 'Min 2 years IT Experience', 'Technical Assessment'],
    },
  ]

  const requiredDocuments = [
    'Original Birth Certificate',
    'School/College Leaving Certificate',
    'Mark Sheets (Last 2 Years)',
    'Character Certificate',
    'Medical Certificate',
    'Photograph (4 x 6 cm)',
    'Valid ID Proof (Passport/National ID)',
    'Admission Form (Duly Filled)',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', phone: '', program: '', message: '' })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Admissions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join our community of learners. Start your educational journey with ISMT College
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple and transparent process to get you admitted
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg -translate-y-1/2">
                    {item.step}
                  </div>
                  <div className="mt-6">
                    <Icon size={32} className="text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Eligibility Requirements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eligibility.map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">{item.program}</h3>
                <ul className="space-y-3">
                  {item.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Required Documents</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl border border-border">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tuition Fees</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Fee</th>
                  <th className="px-6 py-4 text-left font-semibold">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'BSc (Hons) Computing', duration: '4 Years', annual: '$12,000', total: '$48,000' },
                  { name: 'BBA', duration: '4 Years', annual: '$10,000', total: '$40,000' },
                  { name: 'MBA', duration: '2 Years', annual: '$15,000', total: '$30,000' },
                  { name: 'Cyber Security', duration: '2 Years', annual: '$11,000', total: '$22,000' },
                  { name: 'Data Science', duration: '2 Years', annual: '$12,500', total: '$25,000' },
                  { name: 'Artificial Intelligence', duration: '2 Years', annual: '$13,000', total: '$26,000' },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-background transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.duration}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.annual}</td>
                    <td className="px-6 py-4 text-foreground font-semibold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quick Inquiry</h2>
            <p className="text-lg text-muted-foreground">
              Fill out this form and our admissions team will contact you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (XXX) XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Program of Interest</label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a program</option>
                  <option value="bsc-computing">BSc (Hons) Computing</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                  <option value="cyber-security">Cyber Security</option>
                  <option value="data-science">Data Science</option>
                  <option value="ai">Artificial Intelligence</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-foreground font-medium mb-2">Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={4}
                placeholder="Any questions or additional information..."
              ></textarea>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! We&apos;ve received your inquiry. Our admissions team will contact you soon.
              </div>
            )}

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Important Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { event: 'Application Deadline', date: 'June 30, 2025' },
              { event: 'Entrance Exam', date: 'July 15, 2025' },
              { event: 'Interview Schedule', date: 'July 20 - 31, 2025' },
              { event: 'Results Declaration', date: 'August 10, 2025' },
              { event: 'Document Verification', date: 'August 15 - 25, 2025' },
              { event: 'Classes Begin', date: 'September 1, 2025' },
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <p className="text-muted-foreground font-medium">{item.event}</p>
                <p className="text-lg font-bold text-foreground mt-2">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Questions?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Get in touch with our admissions team. We&apos;re here to help guide you through the process.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 bg-primary-foreground hover:bg-gray-100 text-primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
