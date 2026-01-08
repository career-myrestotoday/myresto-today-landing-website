module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/myResto Today/myresto-today-landing-website/lib/mysql.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "ensureTables",
    ()=>ensureTables,
    "getPool",
    ()=>getPool,
    "getVisitorCount",
    ()=>getVisitorCount,
    "incrementVisitor",
    ()=>incrementVisitor,
    "listPosts",
    ()=>listPosts
]);
(()=>{
    const e = new Error("Cannot find module 'mysql2/promise'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const { MYSQL_HOST = '', MYSQL_USER = '', MYSQL_PASSWORD = '', MYSQL_DATABASE = '', MYSQL_PORT = '3306' } = process.env;
let pool = null;
function getPool() {
    if (pool) return pool;
    if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
        throw new Error('MySQL environment variables not set (MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE)');
    }
    pool = mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        port: Number(MYSQL_PORT),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    return pool;
}
async function ensureTables() {
    const p = getPool();
    // posts table
    await p.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
    // visitors table (single row stores count)
    await p.query(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INT PRIMARY KEY AUTO_INCREMENT,
      count BIGINT DEFAULT 0,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
    // ensure at least one row in visitors
    const [rows] = await p.query('SELECT COUNT(*) as c FROM visitors');
    if (rows && rows[0] && rows[0].c === 0) {
        await p.query('INSERT INTO visitors (count) VALUES (0)');
    }
}
async function incrementVisitor() {
    const p = getPool();
    await ensureTables();
    await p.query('UPDATE visitors SET count = count + 1');
    const [rows] = await p.query('SELECT count FROM visitors LIMIT 1');
    return rows && rows[0] ? Number(rows[0].count) : 0;
}
async function getVisitorCount() {
    const p = getPool();
    await ensureTables();
    const [rows] = await p.query('SELECT count FROM visitors LIMIT 1');
    return rows && rows[0] ? Number(rows[0].count) : 0;
}
async function listPosts() {
    const p = getPool();
    await ensureTables();
    const [rows] = await p.query('SELECT id,title,slug,content,created_at FROM posts ORDER BY created_at DESC');
    return rows;
}
async function createPost({ title, slug, content }) {
    const p = getPool();
    await ensureTables();
    const [res] = await p.query('INSERT INTO posts (title,slug,content) VALUES (?,?,?)', [
        title,
        slug,
        content || null
    ]);
    return res.insertId;
}
}),
"[project]/OneDrive/Documents/myResto Today/myresto-today-landing-website/app/api/track/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$myResto__Today$2f$myresto$2d$today$2d$landing$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/myResto Today/myresto-today-landing-website/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$myResto__Today$2f$myresto$2d$today$2d$landing$2d$website$2f$lib$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/myResto Today/myresto-today-landing-website/lib/mysql.ts [app-route] (ecmascript)");
;
;
async function POST() {
    try {
        const count = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$myResto__Today$2f$myresto$2d$today$2d$landing$2d$website$2f$lib$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["incrementVisitor"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$myResto__Today$2f$myresto$2d$today$2d$landing$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            count
        });
    } catch (err) {
        console.error('track error', err.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$myResto__Today$2f$myresto$2d$today$2d$landing$2d$website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e133747a._.js.map