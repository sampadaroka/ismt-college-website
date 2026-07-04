import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, Heart, Briefcase } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IS</span>
              </div>
              <span className="font-bold text-primary">ISMT College</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering minds through quality education and industry partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses', href: '/courses' },
                { label: 'Admissions', href: '/admissions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@ismtcollege.edu</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Heart, href: '#', label: 'Follow' },
                { icon: Share2, href: '#', label: 'Share' },
                { icon: Briefcase, href: '#', label: 'LinkedIn' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} ISMT College. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
