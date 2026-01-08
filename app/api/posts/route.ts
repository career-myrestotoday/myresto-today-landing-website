import { NextResponse } from 'next/server'
import { listPosts } from '@/lib/mysql'

export async function GET() {
  try {
    const posts = await listPosts()
    return NextResponse.json({ ok: true, posts })
  } catch (err: any) {
    console.error('posts error', err.message)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
