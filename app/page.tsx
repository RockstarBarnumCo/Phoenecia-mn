import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Search, Users, Globe, Shield, Zap, ArrowRight, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">Phoenecia Online</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/browse" className="text-sm font-medium hover:text-red-600 transition-colors">
            Browse Talent
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:text-red-600 transition-colors">
            Find Work
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About
          </Link>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 via-white to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Lebanese Talent with Lebanese Businesses <span className="text-red-600">Worldwide</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Phoenecia Online bridges Lebanese entrepreneurs and freelancers across the globe. Find skilled
                    professionals or discover opportunities within our thriving diaspora community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Hire Lebanese Talent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Find Work Opportunities
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>10,000+ Lebanese Professionals</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>50+ Countries</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                    height="400"
                    alt="Lebanese professionals working globally"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">2,847 active projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="w-full py-12 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Find the Perfect Match</h2>
                <p className="text-gray-600">
                  Search through thousands of Lebanese professionals ready to help your business grow
                </p>
              </div>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search skills, services, or professionals..." className="pl-10 h-12" />
                </div>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Search
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">Graphic Design</Badge>
                <Badge variant="secondary">Digital Marketing</Badge>
                <Badge variant="secondary">Translation</Badge>
                <Badge variant="secondary">Business Consulting</Badge>
                <Badge variant="secondary">Mobile Apps</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Freelancers */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Featured Lebanese Professionals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover top-rated freelancers from Lebanon working with businesses worldwide
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Khoury",
                  title: "Full-Stack Developer",
                  location: "Beirut, Lebanon",
                  rating: 4.9,
                  reviews: 127,
                  skills: ["React", "Node.js", "Python"],
                  hourlyRate: "$45",
                },
                {
                  name: "Ahmad Mansour",
                  title: "Digital Marketing Expert",
                  location: "Dubai, UAE",
                  rating: 5.0,
                  reviews: 89,
                  skills: ["SEO", "Social Media", "PPC"],
                  hourlyRate: "$35",
                },
                {
                  name: "Lina Habib",
                  title: "UI/UX Designer",
                  location: "Montreal, Canada",
                  rating: 4.8,
                  reviews: 156,
                  skills: ["Figma", "Adobe XD", "Prototyping"],
                  hourlyRate: "$50",
                },
              ].map((freelancer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/placeholder-user.jpg`} />
                        <AvatarFallback>
                          {freelancer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{freelancer.name}</CardTitle>
                        <CardDescription>{freelancer.title}</CardDescription>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{freelancer.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{freelancer.rating}</span>
                      </div>
                      <span className="text-gray-600">({freelancer.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {freelancer.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">{freelancer.hourlyRate}/hr</span>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">How Phoenecia Online Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to connect Lebanese talent with Lebanese businesses worldwide
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Post Your Project",
                  description:
                    "Describe your project needs and budget. Our Lebanese business community is ready to help.",
                  icon: <Zap className="h-6 w-6" />,
                },
                {
                  step: "2",
                  title: "Receive Proposals",
                  description: "Get proposals from qualified Lebanese freelancers within hours.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  step: "3",
                  title: "Choose & Collaborate",
                  description: "Select the best freelancer and work together using our secure platform.",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  step: "4",
                  title: "Pay Securely",
                  description: "Release payment only when you're 100% satisfied with the work delivered.",
                  icon: <Clock className="h-6 w-6" />,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-600">{item.icon}</div>
                  </div>
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-red-100">Lebanese Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-red-100">Countries Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$2M+</div>
                <div className="text-red-100">Paid to Freelancers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-red-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-green-50 to-red-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Connect with Lebanese Talent?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of Lebanese businesses and freelancers building success together across the globe.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Start Hiring Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Join as a Freelancer
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-green-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="text-sm font-medium">Phoenecia Online</span>
        </div>
        <p className="text-xs text-gray-600 sm:ml-4">Connecting Lebanese talent worldwide since 2024.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="/support" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
