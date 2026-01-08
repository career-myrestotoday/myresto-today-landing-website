"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TrialPage() {
  const [formData, setFormData] = useState({ name: "", email: "", restaurant: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Trial signup:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-primary text-primary-foreground pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Start Your <span className="text-accent">Free Trial</span></h1>
          <p className="text-lg text-primary-foreground/90">Get hands-on with myResto Today — no credit card required.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Card className="p-8">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">You're all set!</h2>
                <p className="text-muted-foreground">We'll email instructions to get started with your trial.</p>
                <div className="mt-6">
                  <Link href="/">
                    <Button className="bg-accent text-accent-foreground">Return Home</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant">Restaurant / Company Name</Label>
                  <Input id="restaurant" name="restaurant" value={formData.restaurant} onChange={handleChange} />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground">Start Free Trial</Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
