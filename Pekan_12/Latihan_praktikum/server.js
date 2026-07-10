const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Selamat Datang di Praktikum Pemrograman Dasar</h1>");

    } else if (req.url === "/profil") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Profil Mahasiswa</h1>
            <p>Nama : Muhammad Firasya Alfath Suyanto</p>
            <p>Jurusan : Teknologi Informasi</p>
        `);

    } else if (req.url === "/mata-kuliah") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Mata Kuliah</h1>
            <ul>
                <li>Pemrograman Dasar</li>
                <li>Sistem Basis Data</li>
                <li>Struktur Data</li>
                <li>Komputer Data & Jaringan Komputer</li>
            </ul>
        `);

    } else if (req.url === "/kontak") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Kontak</h1>
            <p>Email : rasyasuyanto12@email.com</p>
            <p>WhatsApp : 0811-1010-871</p>
        `);

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Halaman Tidak Ditemukan</h1>");
    }

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});