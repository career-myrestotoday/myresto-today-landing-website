import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Zap, BarChart3, QrCode, Brain, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,197,165,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,145,94,0.3),transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent border border-accent/30">
                  <Brain className="h-4 w-4" />
                  AI-Powered Restaurant Tech
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Revolutionizing the <span className="text-accent">Restaurant Industry</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                From POS to Plate – The ultimate SaaS platform for cafes, restaurants, and cloud kitchens. Streamline
                operations, boost sales, and enhance customer experience with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Explore Products
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Restaurants</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent">99%</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Support</div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-restaurant-dashboard-with-analytics.jpg"
                  alt="Restaurant Dashboard"
                  width={800}
                  height={600}
                  className="w-full"
                />
                {/* Floating stats cards */}
                <div className="absolute top-8 left-8 right-8 space-y-4">
                  <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Sales Up</div>
                        <div className="text-xl font-bold text-green-600">+35% this month</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg ml-auto max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Zap className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Fast Billing</div>
                        <div className="text-xl font-bold text-orange-600">{"<"} 3 seconds</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for <span className="text-accent">Modern Restaurants</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful restaurant, all in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart POS</h3>
              <p className="text-muted-foreground">
                Cloud-synced billing, real-time inventory tracking, and comprehensive staff management in one system
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-muted-foreground">
                Understand sales trends, customer behavior, and peak hours with AI-powered analytics
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <QrCode className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">QR Ordering</h3>
              <p className="text-muted-foreground">
                Contactless dine-in ordering that enhances customer experience and reduces wait times
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-muted-foreground">
                Build trust with authentic, diner-only reviews that showcase your restaurant's true quality
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CRM & Loyalty</h3>
              <p className="text-muted-foreground">
                Reward repeat customers and build lasting relationships with integrated loyalty programs
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dining GPT</h3>
              <p className="text-muted-foreground">
                AI-powered recommendations and personalized dining experiences for your customers
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join 500+ restaurants already using myResto Today to streamline operations and boost revenue
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
