import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Haris I M",
    role: "Founder & CEO",
    image: "/professional-portrait-placeholder-ceo.jpg",
    bio: "Leading the charge in revolutionizing restaurant technology",
  },
  {
    name: "Muhammed Rafi",
    role: "Co-Founder, CMO",
    image: "/professional-portrait-placeholder-cmo.jpg",
    bio: "Driving marketing strategy and brand development",
  },
  {
    name: "Abdul Kareem",
    role: "Co-Founder, CTO",
    image: "/professional-portrait-placeholder-cto.jpg",
    bio: "Building cutting-edge AI solutions for the food industry",
  },
  {
    name: "Ansal P S",
    role: "COO & Partner",
    image: "/professional-portrait-placeholder-coo.jpg",
    bio: "Optimizing operations and driving business excellence",
  },
]

const boardMembers = [
  {
    name: "HARIS I M",
    role: "M D & Chairman of the Board",
    image: "/professional-portrait-placeholder-chairman.jpg",
    bio: "Providing strategic direction and governance oversight",
  },
  {
    name: "Ashik Ahmed",
    role: "V-Chairman & Investor",
    image: "/professional-portrait-placeholder-vchairman.jpg",
    bio: "Supporting growth through strategic investment and guidance",
  },
  {
    name: "Muhammed Rafi",
    role: "Director & Board Member",
    image: "/professional-portrait-placeholder-director1.jpg",
    bio: "Contributing expertise in marketing and business development",
  },
  {
    name: "Jishnu G P",
    role: "Director & Board Member",
    image: "/professional-portrait-placeholder-director2.jpg",
    bio: "Providing strategic oversight and industry insights",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Our People</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Who Made <span className="text-accent">It</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            The innovators and leaders driving the future of restaurant technology
          </p>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              The innovators and leaders driving the future of restaurant technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Board of Directors</h2>
            <p className="text-lg text-muted-foreground">Strategic leadership guiding our vision and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
