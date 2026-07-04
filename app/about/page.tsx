import Image from 'next/image'
import { FeatureCard } from '@/components/feature-card'
import { Target, Eye, Heart, Zap } from 'lucide-react'

export const metadata = {
  title: 'About ISMT College | Our Story & Mission',
  description: 'Learn about ISMT College\'s vision, mission, values, and commitment to educational excellence.',
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards of education and student achievement',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and cutting-edge curriculum',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding ethical standards and fostering honest relationships',
    },
    {
      icon: Zap,
      title: 'Empowerment',
      description: 'Enabling students to achieve their full potential and lead with purpose',
    },
  ]

  const facilities = [
    {
      name: 'Advanced Computing Labs',
      description: 'State-of-the-art facilities with latest technology and software',
    },
    {
      name: 'Smart Classrooms',
      description: 'Interactive learning spaces equipped with multimedia technology',
    },
    {
      name: 'Modern Library',
      description: 'Comprehensive collection of resources including digital databases',
    },
    {
      name: 'Sports Complex',
      description: 'World-class facilities for athletic and recreational activities',
    },
    {
      name: 'Research Centers',
      description: 'Dedicated spaces for student and faculty research initiatives',
    },
    {
      name: 'Campus Connectivity',
      description: 'High-speed internet and collaborative spaces throughout campus',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">About ISMT College</h1>
          <p className="text-xl text-primary-foreground/90">
            Leading the way in educational excellence since our foundation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to transform education, ISMT College has grown to become a leading institution of higher learning. Our commitment to academic excellence and practical education has shaped the careers of thousands of students.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Over the years, we have established ourselves as pioneers in innovative education, bridging the gap between theoretical knowledge and real-world application. Our programs are designed in collaboration with industry leaders to ensure relevance and excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, ISMT College stands as a beacon of quality education with a diverse student body, accomplished faculty, and strong industry partnerships.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/campus-image.png"
                alt="ISMT College Campus"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a globally recognized institution that develops graduates with the knowledge, skills, and values to excel in their professions and contribute meaningfully to society. We envision ISMT College as a center of excellence where innovation, creativity, and ethical leadership flourish.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide world-class education that empowers students to become skilled professionals and responsible global citizens. We are committed to fostering an environment of learning, research, and innovation while maintaining strong connections with industry and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do at ISMT College
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Facilities</h2>
            <p className="text-lg text-muted-foreground">
              World-class infrastructure designed to enhance the learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{facility.name}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/hero-image.png"
                alt="ISMT College Faculty"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Faculty</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our faculty members are experienced professionals and scholars with a passion for teaching and research. They bring real-world expertise and industry insights into the classroom, making education relevant and engaging.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With advanced degrees from prestigious institutions worldwide and years of professional experience, our faculty are committed to mentoring students and fostering a culture of continuous learning.
              </p>
              <div className="space-y-3">
                {['PhD Holders', 'Industry Experts', 'Research Scholars', 'Mentor Advisors'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '5000+', label: 'Successful Graduates' },
              { number: '50+', label: 'Academic Programs' },
              { number: '100+', label: 'Faculty Members' },
              { number: '95%', label: 'Employment Rate' },
            ].map((achievement, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <p className="text-4xl font-bold text-primary mb-2">{achievement.number}</p>
                <p className="text-foreground font-semibold">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
