import mysql from 'mysql2/promise'

const {
  MYSQL_HOST = '',
  MYSQL_USER = '',
  MYSQL_PASSWORD = '',
  MYSQL_DATABASE = '',
  MYSQL_PORT = '3306',
} = process.env

let pool: mysql.Pool | null = null

export function getPool() {
  if (pool) return pool
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
    throw new Error('MySQL environment variables not set (MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE)')
  }

  pool = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: Number(MYSQL_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })

  return pool
}

export async function ensureTables() {
  const p = getPool()
  // posts table
  await p.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `)

  // visitors table (single row stores count)
  await p.query(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INT PRIMARY KEY AUTO_INCREMENT,
      count BIGINT DEFAULT 0,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `)

  // ensure at least one row in visitors
  const [rows]: any = await p.query('SELECT COUNT(*) as c FROM visitors')
  if (rows && rows[0] && rows[0].c === 0) {
    await p.query('INSERT INTO visitors (count) VALUES (0)')
  }
}

export async function incrementVisitor() {
  const p = getPool()
  await ensureTables()
  await p.query('UPDATE visitors SET count = count + 1')
  const [rows]: any = await p.query('SELECT count FROM visitors LIMIT 1')
  return rows && rows[0] ? Number(rows[0].count) : 0
}

export async function getVisitorCount() {
  const p = getPool()
  await ensureTables()
  const [rows]: any = await p.query('SELECT count FROM visitors LIMIT 1')
  return rows && rows[0] ? Number(rows[0].count) : 0
}

export async function listPosts() {
  const p = getPool()
  await ensureTables()
  const [rows]: any = await p.query('SELECT id,title,slug,content,created_at FROM posts ORDER BY created_at DESC')
  return rows
}

export async function createPost({ title, slug, content }: { title: string; slug: string; content?: string }) {
  const p = getPool()
  await ensureTables()
  const [res]: any = await p.query('INSERT INTO posts (title,slug,content) VALUES (?,?,?)', [title, slug, content || null])
  return res.insertId
}
