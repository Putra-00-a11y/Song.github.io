// login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Simulasi proses login
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Cek validitas login (contoh sederhana)
        if (email == "playlistAline@song.com" && username && password == "SONG FOREVER") {
            alert('Login successful!');
        } else {
            alert('Please fill in all fields.');
        }
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const loading = document.getElementById('loading');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Tampilkan elemen loading
        loading.style.display = 'flex';

        // Simulasikan proses loading
        setTimeout(function() {
            // Setelah proses loading selesai, arahkan ke halaman playlist
            window.location.href = 'index.html';
        }, 2000); // Waktu loading dalam milidetik
    });
});
