import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Target, Heart, Lightbulb, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Delight in Every <span className="text-accent">Dining Moment</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            India's First Verified Diner-Only Review & AI-Driven Restaurant Management Platform
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The restaurant industry faces three critical challenges: fake reviews eroding customer trust,
                  fragmented tools creating operational chaos, and high SaaS costs limiting profitability.
                </p>
                <p>
                  We founded myResto Today with a vision to build a trust-based, AI-powered farm-to-fork ecosystem that
                  solves these problems comprehensively.
                </p>
                <p>
                  As a B2B2C FoodTech SaaS platform, we're building a trusted, data-driven bridge between food
                  producers, restaurants, and consumers - transforming how the entire food industry operates.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/restaurant-chef-preparing-food-in-modern-kitchen.jpg"
                alt="Restaurant Kitchen"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Mission */}
          <Card className="p-8 lg:p-12 bg-accent/5 border-accent/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building a trusted, data-driven bridge between food producers, restaurants, and consumers through
                  innovative AI technology and authentic verification systems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-muted-foreground">Only verified diner reviews to build genuine trust</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Cutting-edge AI technology for modern restaurants</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordability</h3>
              <p className="text-muted-foreground">Pay-as-you-go pricing accessible to all restaurants</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-muted-foreground">Growing with you from startup to enterprise</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Recognition & <span className="text-accent">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading institutions and recognized across the industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Badge className="bg-accent text-accent-foreground mb-2">Top 100</Badge>
              <p className="font-semibold text-sm">AIC NMIMS</p>
              <p className="text-xs text-muted-foreground">Cohort 14</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-accent mb-2" />
              <p className="font-semibold text-sm">Incubated at</p>
              <p className="text-xs text-muted-foreground">AIC IIIT Kottayam</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-accent mb-2" />
              <p className="font-semibold text-sm">DPIIT Recognized</p>
              <p className="text-xs text-muted-foreground">Startup India</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
              <Badge className="bg-accent text-accent-foreground mb-2">Certified</Badge>
              <p className="font-semibold text-sm">KSUM</p>
              <p className="text-xs text-muted-foreground">Kerala Startup</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">491 / 2,295</div>
              <p className="text-lg font-semibold mb-1">Tracxn Rank</p>
              <p className="text-sm text-muted-foreground">Among FoodTech startups in India</p>
            </Card>

            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-lg font-semibold mb-1">Early Validation</p>
              <p className="text-sm text-muted-foreground">From Tier II & III MSMEs across India</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in building myResto Today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden lg:block" />
            <div className="space-y-8">
              {[
                {
                  date: "Feb 2024",
                  title: "Idea Started",
                  description: "Identified the problem and began initial research",
                },
                {
                  date: "Mar 2024",
                  title: "Market Study & Company Incorporated",
                  description: "Deep market analysis and official company registration",
                },
                {
                  date: "Jun 2024",
                  title: "App Prototyping",
                  description: "First prototypes and user feedback sessions",
                },
                { date: "Feb 2025", title: "Seed Support", description: "Initial funding from friends & family" },
                { date: "Apr 2025", title: "App Development", description: "Full-scale development begins" },
                { date: "Oct 2025", title: "Test Release", description: "Beta testing with select restaurants" },
                { date: "Nov 2025", title: "MVP Trial Run", description: "Minimum viable product in pilot locations" },
                { date: "Dec 2025", title: "Official Launch", description: "Public launch and market entry" },
              ].map((milestone, index) => (
                <div key={index} className="relative lg:grid lg:grid-cols-2 lg:gap-8">
                  <Card className={`p-6 ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                      <div>
                        <Badge className="bg-accent/20 text-accent mb-2">{milestone.date}</Badge>
                        <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
