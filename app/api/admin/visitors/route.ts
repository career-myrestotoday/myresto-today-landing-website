import { NextResponse } from 'next/server'
import { getVisitorCount } from '@/lib/mysql'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'RestoAdmin123@'

function checkAuth(req: Request) {
  const pw = req.headers.get('x-admin-password') || ''
  return pw === ADMIN_PASSWORD
}

export async function GET(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  try {
    const count = await getVisitorCount()
    return NextResponse.json({ ok: true, count })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
