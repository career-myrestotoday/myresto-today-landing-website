import { NextResponse } from 'next/server'
import { listPosts, createPost } from '@/lib/mysql'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'RestoAdmin123@'

function checkAuth(req: Request) {
  const pw = req.headers.get('x-admin-password') || ''
  return pw === ADMIN_PASSWORD
}

export async function GET(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  try {
    const posts = await listPosts()
    return NextResponse.json({ ok: true, posts })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  const data = await req.json()
  const { title, slug, content } = data
  if (!title || !slug) return NextResponse.json({ ok: false, error: 'missing fields' }, { status: 400 })
  try {
    const id = await createPost({ title, slug, content })
    return NextResponse.json({ ok: true, id })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
