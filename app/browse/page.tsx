"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, Search, MapPin, Filter, Heart } from "lucide-react"
import Link from "next/link"

export default function BrowsePage() {
  const [priceRange, setPriceRange] = useState([0, 100])

  const freelancers = [
    {
      id: 1,
      name: "Sarah Khoury",
      title: "Full-Stack Developer & Tech Lead",
      location: "Beirut, Lebanon",
      rating: 4.9,
      reviews: 127,
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      hourlyRate: 45,
      description:
        "Experienced full-stack developer with 8+ years building scalable web applications for Lebanese and international businesses.",
      completedProjects: 89,
      responseTime: "1 hour",
    },
    {
      id: 2,
      name: "Ahmad Mansour",
      title: "Digital Marketing Strategist",
      location: "Dubai, UAE",
      rating: 5.0,
      reviews: 89,
      skills: ["SEO", "Social Media", "PPC", "Analytics", "Content Strategy"],
      hourlyRate: 35,
      description:
        "Digital marketing expert helping Lebanese businesses expand their reach across MENA region and beyond.",
      completedProjects: 156,
      responseTime: "30 minutes",
    },
    {
      id: 3,
      name: "Lina Habib",
      title: "Senior UI/UX Designer",
      location: "Montreal, Canada",
      rating: 4.8,
      reviews: 156,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Branding"],
      hourlyRate: 50,
      description:
        "Creative designer specializing in modern, user-centered designs for Lebanese startups and enterprises.",
      completedProjects: 203,
      responseTime: "2 hours",
    },
    {
      id: 4,
      name: "Karim Fares",
      title: "Mobile App Developer",
      location: "São Paulo, Brazil",
      rating: 4.7,
      reviews: 94,
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      hourlyRate: 40,
      description: "Mobile development specialist creating innovative apps for Lebanese businesses in Latin America.",
      completedProjects: 67,
      responseTime: "1 hour",
    },
    {
      id: 5,
      name: "Nadia Sleiman",
      title: "Business Consultant & Translator",
      location: "Paris, France",
      rating: 4.9,
      reviews: 78,
      skills: ["Business Strategy", "Arabic Translation", "French", "Market Research"],
      hourlyRate: 55,
      description:
        "Bilingual consultant helping Lebanese businesses navigate European markets with cultural expertise.",
      completedProjects: 134,
      responseTime: "45 minutes",
    },
    {
      id: 6,
      name: "Tony Khalil",
      title: "DevOps Engineer",
      location: "Sydney, Australia",
      rating: 4.8,
      reviews: 112,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
      hourlyRate: 60,
      description: "Infrastructure expert ensuring Lebanese businesses have robust, scalable cloud solutions.",
      completedProjects: 78,
      responseTime: "3 hours",
    },
  ]

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
          <Link href="/browse" className="text-sm font-medium text-red-600">
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
            Post a Job
          </Button>
        </nav>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar Filters */}
        <aside className="w-80 border-r bg-gray-50 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Search Skills</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="e.g. React, Design..." className="pl-10" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="translation">Translation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lebanon">Lebanon</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">
                Hourly Rate: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider value={priceRange} onValueChange={setPriceRange} max={100} step={5} className="w-full" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Experience Level</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Browse Lebanese Talent</h1>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-gray-600">{freelancers.length} Lebanese professionals found</p>
          </div>

          <div className="grid gap-6">
            {freelancers.map((freelancer) => (
              <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={`/placeholder-user.jpg`} />
                      <AvatarFallback className="text-lg">
                        {freelancer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{freelancer.name}</CardTitle>
                          <CardDescription className="text-base font-medium">{freelancer.title}</CardDescription>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{freelancer.location}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{freelancer.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{freelancer.rating}</span>
                      </div>
                      <span className="text-gray-600">({freelancer.reviews} reviews)</span>
                    </div>
                    <div>
                      <div className="font-medium">{freelancer.completedProjects}</div>
                      <span className="text-gray-600">Projects completed</span>
                    </div>
                    <div>
                      <div className="font-medium">{freelancer.responseTime}</div>
                      <span className="text-gray-600">Response time</span>
                    </div>
                    <div>
                      <div className="font-medium text-lg">${freelancer.hourlyRate}/hr</div>
                      <span className="text-gray-600">Hourly rate</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-red-600 hover:bg-red-700">Contact {freelancer.name.split(" ")[0]}</Button>
                    <Button variant="outline">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Professionals
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
