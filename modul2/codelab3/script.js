document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let valid = true;

    // Validasi nama
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        valid = false;
    }

    // Validasi email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi.';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        valid = false;
    }

    // Validasi kata sandi
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Kata sandi harus diisi.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Kata sandi harus lebih dari 6 karakter.';
        valid = false;
    }

    // Jika semua validasi berhasil
    if (valid) {
        alert('Form berhasil dikirim!');
        // Di sini Anda bisa menambahkan logika untuk mengirim form
    }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}