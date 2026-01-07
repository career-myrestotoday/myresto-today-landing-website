"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Let's <span className="text-accent">Connect</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            We're here to help your restaurant succeed. Get in touch with our team today
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-4">Get a response within 24 hours</p>
              <a href="mailto:hello@myrestotoday.com" className="text-accent hover:underline font-medium">
                hello@myrestotoday.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-4">Mon-Fri, 9 AM - 6 PM IST</p>
              <a href="tel:+918888888888" className="text-accent hover:underline font-medium">
                +91 88888 88888
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground mb-4">Our office location</p>
              <p className="text-accent font-medium">Kerala, India</p>
            </Card>
          </div>

          {/* Contact Form & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Restaurant / Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Restaurant Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule a Demo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See myResto Today in action with a personalized demo
                </p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book a Demo</Button>
              </Card>

              <Card className="p-6">
                <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sales Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-4">Talk to our sales team about pricing and plans</p>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Trusted by 500+ Restaurants</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of restaurants across India who trust myResto Today for their restaurant management needs.
              DPIIT Recognized & KSUM Certified.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-background rounded-lg font-medium">DPIIT Recognized</span>
              <span className="px-4 py-2 bg-background rounded-lg font-medium">KSUM Certified</span>
              <span className="px-4 py-2 bg-background rounded-lg font-medium">AIC NMIMS Top 100</span>
              <span className="px-4 py-2 bg-background rounded-lg font-medium">99% Uptime</span>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
