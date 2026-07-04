'use client'

import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ismtcollege.edu',
      subtext: 'We usually reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (800) 123-4567',
      subtext: 'Monday - Friday, 9:00 AM - 5:00 PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Education Street',
      subtext: 'Tech City, TC 12345',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '9:00 AM - 5:00 PM (IST)',
      subtext: 'Monday to Friday',
    },
  ]

  const departments = [
    {
      name: 'Admissions',
      email: 'admissions@ismtcollege.edu',
      phone: '+1 (800) 123-4567',
    },
    {
      name: 'Academics',
      email: 'academics@ismtcollege.edu',
      phone: '+1 (800) 123-4568',
    },
    {
      name: 'Student Services',
      email: 'student.services@ismtcollege.edu',
      phone: '+1 (800) 123-4569',
    },
    {
      name: 'Career Services',
      email: 'careers@ismtcollege.edu',
      phone: '+1 (800) 123-4570',
    },
    {
      name: 'Finance',
      email: 'finance@ismtcollege.edu',
      phone: '+1 (800) 123-4571',
    },
    {
      name: 'Technical Support',
      email: 'support@ismtcollege.edu',
      phone: '+1 (800) 123-4572',
    },
  ]

  const faqs = [
    {
      question: 'What is the application deadline?',
      answer: 'The application deadline for the upcoming semester is June 30, 2025. However, we accept applications on a rolling basis until all seats are filled.',
    },
    {
      question: 'How can I pay my tuition fees?',
      answer: 'We accept various payment methods including credit/debit cards, bank transfers, and installment plans. Please contact our finance department for more details.',
    },
    {
      question: 'Are there scholarship opportunities?',
      answer: 'Yes, we offer merit-based scholarships, need-based scholarships, and special scholarships for minority students. Contact admissions for eligibility criteria.',
    },
    {
      question: 'Can I defer my admission to the next semester?',
      answer: 'Students can request deferment to the next available semester. Please contact the admissions office within 30 days of receiving your admission letter.',
    },
    {
      question: 'What is the student-to-faculty ratio?',
      answer: 'Our student-to-faculty ratio is maintained at 20:1, ensuring personalized attention and quality education for each student.',
    },
    {
      question: 'Do you offer online or hybrid learning?',
      answer: 'We offer both in-person and hybrid learning options for select programs. Check with the admissions office about availability for your chosen program.',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 text-center">
                  <Icon size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="font-semibold text-primary mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Find Us</h2>
              <div className="bg-background rounded-xl overflow-hidden border border-border mb-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">123 Education Street</p>
                  <p className="text-muted-foreground">Tech City, TC 12345</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary hover:underline font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground font-medium">Main Campus</p>
                  <p className="text-foreground">Open Monday - Friday, 9:00 AM - 5:00 PM</p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground font-medium">Library</p>
                  <p className="text-foreground">Open Monday - Sunday, 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to specific departments for specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary flex-shrink-0" />
                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline text-sm">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <a href={`tel:${dept.phone}`} className="text-primary hover:underline text-sm">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
