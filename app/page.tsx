import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CourseCard } from '@/components/course-card'
import { FeatureCard } from '@/components/feature-card'
import { Users, BookOpen, Briefcase, TrendingUp, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  const stats = [
    { number: '5000+', label: 'Students' },
    { number: '50+', label: 'Courses' },
    { number: '100+', label: 'Faculty Members' },
    { number: '95%', label: 'Graduate Employment' },
  ]

  const features = [
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from industry experts with decades of combined experience',
    },
    {
      icon: BookOpen,
      title: 'Modern Campus',
      description: 'State-of-the-art facilities and cutting-edge learning infrastructure',
    },
    {
      icon: Briefcase,
      title: 'Industry Partnerships',
      description: 'Direct connections with leading companies for internships and careers',
    },
    {
      icon: TrendingUp,
      title: 'Career Support',
      description: 'Comprehensive career guidance and placement assistance',
    },
  ]

  const featuredCourses = [
    {
      title: 'BSc (Hons) Computing',
      description: 'Master the fundamentals of computer science, software development, and digital innovation.',
      duration: '4 Years',
      fee: '$12,000/year',
      image: '/course-computing.png',
    },
    {
      title: 'BBA',
      description: 'Comprehensive business education covering management, finance, and entrepreneurship.',
      duration: '4 Years',
      fee: '$10,000/year',
      image: '/course-business.png',
    },
    {
      title: 'Cyber Security',
      description: 'Specialized program in information security, network protection, and threat management.',
      duration: '2 Years',
      fee: '$11,000/year',
      image: '/course-cybersecurity.png',
    },
  ]

  const testimonials = [
    {
      quote: 'ISMT College transformed my career. The practical approach and industry connections were invaluable.',
      author: 'Priya Singh',
      role: 'Software Engineer at Tech Corp',
    },
    {
      quote: 'The faculty here are not just teachers but mentors. They genuinely care about student success.',
      author: 'Rahul Patel',
      role: 'Business Analyst at Global Finance',
    },
    {
      quote: 'The cybersecurity program prepared me perfectly for real-world challenges in the field.',
      author: 'Aisha Khan',
      role: 'Security Specialist at DataSecure',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/hero-image.png"
          alt="ISMT College Campus"
          fill
          className="absolute inset-0 object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Education Excellence for Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Join 5000+ students who have transformed their careers through our world-class programs and industry partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
                  Explore Courses <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/admissions">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/90 hover:bg-white text-primary border-0"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ISMT Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose ISMT College?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive education with focus on practical skills, industry partnerships, and student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular programs designed to equip you with in-demand skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                fee={course.fee}
                image={course.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="gap-2">
                View All Courses <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who have achieved remarkable success in their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Start your journey with ISMT College today. Apply now and join our community of successful alumni.
          </p>
          <Link href="/admissions">
            <Button size="lg" className="gap-2 bg-primary-foreground hover:bg-gray-100 text-primary">
              Apply Now <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
