import { NextResponse } from 'next/server'
import { incrementVisitor } from '@/lib/mysql'

export async function POST() {
  try {
    const count = await incrementVisitor()
    return NextResponse.json({ ok: true, count })
  } catch (err: any) {
    console.error('track error', err.message)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
