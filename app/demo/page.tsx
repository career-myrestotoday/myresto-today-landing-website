"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function DemoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-primary text-primary-foreground pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Request a <span className="text-accent">Demo</span></h1>
          <p className="text-lg text-primary-foreground/90">See myResto Today in action with a personalized walkthrough.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Card className="p-8">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Thanks — we received your request</h2>
                <p className="text-muted-foreground">Our team will contact you within 24 hours to schedule the demo.</p>
                <div className="mt-6">
                  <Link href="/">
                    <Button className="bg-accent text-accent-foreground">Return Home</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Restaurant</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" name="notes" onChange={() => {}} placeholder="Preferred demo times, questions, etc." />
                </div>

                <Button type="submit" className="w-full bg-accent text-accent-foreground">Request Demo</Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
