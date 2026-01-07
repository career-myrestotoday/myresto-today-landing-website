"use client"

import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

type Props = {
  children: React.ReactNode
}

export function Suprait({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Suprait
