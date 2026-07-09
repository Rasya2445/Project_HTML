const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html; charset=UTF-8");

    if (req.url === "/") {

        res.writeHead(200);
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Informasi Kampus</title>
        </head>
        <body>
            <h1>🏫 Selamat Datang di Server Informasi Kampus</h1>

            <ul>
                <li><a href="/profil">Profil Kampus</a></li>
                <li><a href="/fakultas">Fakultas</a></li>
                <li><a href="/prodi">Program Studi</a></li>
                <li><a href="/kontak">Kontak</a></li>
                <li><a href="/tentang">Tentang</a></li>
            </ul>

        </body>
        </html>
        `);

    }

    else if (req.url === "/profil") {

        res.writeHead(200);
        res.end(`
        <h1>Profil Kampus</h1>

        <p>Universitas Insan Pembangunan Indonesia merupakan perguruan tinggi yang berfokus pada pendidikan, penelitian, dan pengabdian kepada masyarakat.</p>

        <a href="/">Kembali</a>
        `);

    }

    else if (req.url === "/fakultas") {

        res.writeHead(200);
        res.end(`
        <h1>Daftar Fakultas</h1>

        <ul>
            <li>Fakultas Ilmu Komputer</li>
            <li>Fakultas Ilmu Bisnis</li>
            <li>Fakultas Hukum</li>
        </ul>

        <a href="/">Kembali</a>
        `);

    }

    else if (req.url === "/prodi") {

        res.writeHead(200);
        res.end(`
        <h1>Program Studi</h1>

        <ul>
            <li>Teknologi Informasi</li>
            <li>Sistem Informasi</li>
            <li>Software Engineering</li>
            <li>Manajemen</li>
            <li>Akuntansi</li>
            <li>Hukum</li>
        </ul>

        <a href="/">Kembali</a>
        `);

    }

    else if (req.url === "/kontak") {

        res.writeHead(200);
        res.end(`
        <h1>Kontak Kampus</h1>

        <p>Email : info@unipem.ac.id</p>
        <p>Telepon : +628811005452</p>

        <a href="/">Kembali</a>
        `);

    }

    else if (req.url === "/tentang") {

        res.writeHead(200);
        res.end(`
        <h1>Tentang Website</h1>

        <p>Website ini dibuat menggunakan Node.js HTTP Module.</p>

        <a href="/">Kembali</a>
        `);

    }

    else {

        res.writeHead(404);

        res.end(`
        <h1>404 - Halaman Tidak Ditemukan</h1>

        <a href="/">Kembali ke Home</a>
        `);

    }

});

server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});