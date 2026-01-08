"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'RestoAdmin123@') {
      // store in sessionStorage for simple auth
      sessionStorage.setItem('admin-auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form className="p-8 bg-card rounded-lg w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <div className="mb-4">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <Button type="submit" className="w-full bg-accent text-accent-foreground">Sign In</Button>
      </form>
    </div>
  )
}
