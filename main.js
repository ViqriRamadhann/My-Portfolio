document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const messageInput = document.querySelector("textarea");
    
    // Mengosongkan input saat halaman dimuat ulang atau dikunjungi kembali
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            form.reset();
        }
    });
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari reload default
        
        // Simpan data ke server atau lakukan aksi lain di sini
        alert("Pesan terkirim!");
        
        // Reset form setelah mengirim
        form.reset();
    });
});
