import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Courses | ISMT College - Education Programs',
  description: 'Explore all ISMT College programs including Computing, BBA, MBA, Cyber Security, Data Science, and AI.',
}

export default function Courses() {
  const allCourses = [
    {
      title: 'BSc (Hons) Computing',
      description: 'Master the fundamentals of computer science, software development, and digital innovation with hands-on experience.',
      duration: '4 Years',
      fee: '$12,000/year',
      image: '/course-computing.png',
    },
    {
      title: 'BBA',
      description: 'Comprehensive business education covering management, finance, entrepreneurship, and organizational leadership.',
      duration: '4 Years',
      fee: '$10,000/year',
      image: '/course-business.png',
    },
    {
      title: 'MBA',
      description: 'Advanced business management program for aspiring leaders. Focus on strategy, innovation, and global business practices.',
      duration: '2 Years',
      fee: '$15,000/year',
      image: '/course-mba.png',
    },
    {
      title: 'Cyber Security',
      description: 'Specialized program in information security, network protection, threat management, and ethical hacking.',
      duration: '2 Years',
      fee: '$11,000/year',
      image: '/course-cybersecurity.png',
    },
    {
      title: 'Data Science',
      description: 'Learn data analytics, machine learning, statistical analysis, and data visualization from industry experts.',
      duration: '2 Years',
      fee: '$12,500/year',
      image: '/course-data-science.png',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Cutting-edge AI program covering machine learning, deep learning, neural networks, and AI applications.',
      duration: '2 Years',
      fee: '$13,000/year',
      image: '/course-ai.png',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Our Courses</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore our diverse range of programs designed to meet the demands of today&apos;s job market
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
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
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Get</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive benefits included in all our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Relevant Curriculum',
                description: 'Programs designed with input from leading companies to ensure you learn in-demand skills.',
              },
              {
                title: 'Experienced Faculty',
                description: 'Learn from professors who are practitioners in their fields with real-world expertise.',
              },
              {
                title: 'Internship Opportunities',
                description: 'Gain practical experience through partnerships with top companies in your field.',
              },
              {
                title: 'Career Services',
                description: 'Dedicated support for resume building, interview preparation, and job placement.',
              },
              {
                title: 'Modern Learning Facilities',
                description: 'Access to state-of-the-art labs, libraries, and collaborative learning spaces.',
              },
              {
                title: 'Global Network',
                description: 'Connect with alumni worldwide and expand your professional network globally.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Structure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Semester Format</h3>
              <ul className="space-y-4">
                {[
                  'Interactive classroom sessions',
                  'Practical laboratory work',
                  'Project-based learning',
                  'Seminar presentations',
                  'Industry guest lectures',
                  'Final assessments & exams',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Assessment Methods</h3>
              <ul className="space-y-4">
                {[
                  'Continuous assessment (30%)',
                  'Practical projects (20%)',
                  'Mid-term examinations (20%)',
                  'Final examinations (20%)',
                  'Participation & attendance (10%)',
                  'Real-world case studies',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Choose the program that aligns with your goals and start your journey today.
          </p>
          <Link href="/admissions">
            <Button size="lg" className="gap-2 bg-primary-foreground hover:bg-gray-100 text-primary">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
