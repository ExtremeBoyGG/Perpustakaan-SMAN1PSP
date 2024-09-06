const books = [
    { title: 'Judul Buku 1', description: 'Deskripsi singkat buku 1...', url: '#' },
    { title: 'Judul Buku 2', description: 'Deskripsi singkat buku 2...', url: '#' },
    // Tambahkan lebih banyak buku sesuai kebutuhan
];

let hasScrolled = window.scrollY > 10;

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const navbar = document.getElementById('navbar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');

// Handle search input and results
searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('hidden'); // Sembunyikan ikon pencarian
    searchInput.classList.remove('hidden'); // Tampilkan form input
    searchInput.focus(); // Fokus pada form input
    if (!hasScrolled) {
        navbar.classList.add('navbar-solid');
        navbar.classList.remove('navbar-transparent');
    }
});

searchInput.addEventListener('blur', () => {
    // Hanya sembunyikan form input jika tidak ada teks yang diketik
    if (!searchInput.value.trim()) {
        searchIcon.classList.remove('hidden'); // Tampilkan ikon pencarian
        searchInput.classList.add('hidden'); // Sembunyikan form input
        if (!hasScrolled) {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-transparent');}
    }
});

searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase(); // Trim untuk menghapus spasi di awal dan akhir
    const minLength = 3; // Jumlah minimum karakter untuk menampilkan hasil

    // Kosongkan hasil pencarian sebelumnya
    searchResults.innerHTML = '';

    if (query.length < minLength || query === "") {
        // Sembunyikan hasil pencarian jika input kurang dari minLength atau kosong
        searchResults.classList.add('hidden');
    } else {
        // Filter dan tampilkan hasil pencarian
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
        
        if (filteredBooks.length === 0) {
            searchResults.classList.add('hidden');
        } else {
            searchResults.classList.remove('hidden');
            filteredBooks.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'p-2 hover:bg-gray-100';
                bookItem.innerHTML = `<a href="${book.url}" class="block text-blue-600 hover:underline">${book.title}</a>`;
                searchResults.appendChild(bookItem);
            });
        }
    }
});





// Toggle sidebar on mobile
sidebarToggle.addEventListener('click', () => {
	const isSidebarOpen = !sidebar.classList.contains('-translate-x-full');

    sidebar.classList.toggle('-translate-x-full');
    navbar.classList.add('navbar-solid');
    sidebar.classList.toggle('translate-x-0');
    overlay.classList.toggle('overlay-visible');
    overlay.classList.toggle('overlay-hidden');
    if (isSidebarOpen) {
        // Jika sidebar baru saja ditutup dan posisi scroll kurang dari 10px, kembalikan navbar ke transparan
        if (!hasScrolled) {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    } else {
        // Jika sidebar baru saja dibuka dan posisi scroll kurang dari 10px, tambahkan background solid
        if (!hasScrolled) {
            navbar.classList.add('navbar-solid');
            navbar.classList.remove('navbar-transparent');
        }
        }
    
});

// Close sidebar on clicking the overlay or button
closeSidebar.addEventListener('click', () => {
    closeSidebarFunction();
});

overlay.addEventListener('click', () => {
    closeSidebarFunction();
});

function closeSidebarFunction() {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    overlay.classList.add('overlay-hidden');
    overlay.classList.remove('overlay-visible');
    
}

// Mengubah background navbar ketika scroll
window.addEventListener('scroll', function () {
    hasScrolled = window.scrollY > 10; // Update status scroll

    if (hasScrolled) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
    } else {
        // Hanya ubah background jika sidebar dan search bar tidak sedang terbuka
        if (!sidebar.classList.contains('translate-x-0') && searchInput.classList.contains('hidden')) {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-solid');
        }
    }
});
