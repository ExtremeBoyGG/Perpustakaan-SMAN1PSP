const Books = [
    {"id":41,title:"About Friend","author":"Tere Liye",url:"#"},
    {"id":42,title:"About Life","author":"Tere Liye",url:"#"},
    {"id":2,title:"Amiko_Te Amo","author":"Anjar Lembayung",url:"#"},
    {"id":20,title:"Ancika","author":"Pidi Baiq",url:"#"},
    {"id":28,title:"Autopilot Romance","author":"RevelRebel",url:"#"},
    {"id":43,title:"Ayahku Bukan Pembohong","author":"Tere Liye",url:"#"},
    {"id":44,title:"Bedebah di Ujung Tanduk","author":"Tere Liye",url:"#"},
    {"id":29,title:"Behind The Scene","author":"RevelRebel",url:"#"},
    {"id":45,title:"Bibi Gill","author":"Tere Liye",url:"#"},
    {"id":5,title:"Boulevard of Wedding Dreams","author":"Ika Vihara",url:"#"},
    {"id":46,title:"Bulan","author":"Tere Liye",url:"#"},
    {"id":47,title:"Bumi","author":"Tere Liye",url:"#"},
    {"id":48,title:"Ceroz Batozar","author":"Tere Liye",url:"#"},
    {"id":30,title:"Cut The Crap 1 & 2","author":"RevelRebel",url:"#"},
    {"id":50,title:"DIKATAKAN ATAU TIDAK DIKATAKAN","author":"Tere Liye",url:"#"},
    {"id":7,title:"Dangerous Sister","author":"Enniyy",url:"#"},
    {"id":49,title:"Daun Yang Jatuh Tak Pernah Membenci Angin","author":"Tere Liye",url:"#"},
    {"id":8,title:"Diandra (The Real Pelakor)","author":"Rahmanana030",url:"#"},
    {"id":85,title:"Eray Dewi Pringgo","author":"Vero Lala",url:"#"},
    {"id":9,title:"Ex Cetera","author":"mrs_sasasmayaya",url:"#"},
    {"id":10,title:"Forgive Me","author":"Cha Riyadi",url:"#"},
    {"id":51,title:"Gnalup Pergi","author":"Tere Liye",url:"#"},
    {"id":23,title:"Heavenly","author":"Prisca Primasari",url:"#"},
    {"id":18,title:"Hello cello","author":"Nadia Ristivani",url:"#"},
    {"id":24,title:"Hope","author":"Prisca Primasari",url:"#"},
    {"id":52,title:"Hujan","author":"Tere Liye",url:"#"},
    {"id":39,title:"Ilusi","author":"Sinar Rembulan",url:"#"},
    {"id":11,title:"Istri Muda Sang Pewaris","author":"Di evil",url:"#"},
    {"id":12,title:"Kanthi(L)","author":"Shofie Hapsari",url:"#"},
    {"id":25,title:"Kastil Es & Air Mancur yang Berdansa","author":"Prisca Primasari",url:"#"},
    {"id":53,title:"Kau Aku dan Sepucuk Angpau Merah-1","author":"Tere Liye",url:"#"},
    {"id":54,title:"Komet Minor","author":"Tere Liye",url:"#"},
    {"id":55,title:"LUMPU ","author":"Tere Liye",url:"#"},
    {"id":31,title:"Love Paint","author":"RevelRebel",url:"#"},
    {"id":13,title:"Love The Way You Lie","author":"Carmen LaBohemian",url:"#"},
    {"id":26,title:"Love Theft","author":"Prisca Primasari",url:"#"},
    {"id":14,title:"Lovely Natalie","author":"Dindin Thabita",url:"#"},
    {"id":56,title:"Matahari","author":"Tere Liye",url:"#"},
    {"id":79,title:"Melarung Mimpi","author":"Titi Sanaria",url:"#"},
    {"id":80,title:"Melarung Mimpi Extra Part","author":"Titi Sanaria",url:"#"},
    {"id":16,title:"Midnight Secretary","author":"Nev Nov",url:"#"},
    {"id":83,title:"Mr. Perfect","author":"Twoprince_Oneking",url:"#"},
    {"id":84,title:"Mr. Perfect Extra Part","author":"Twoprince_Oneking",url:"#"},
    {"id":17,title:"My Friends Wife Maia","author":"Kevin Prasastha",url:"#"},
    {"id":57,title:"Nebula (unedited version)","author":"Tere Liye",url:"#"},
    {"id":59,title:"Negeri Para bedebah","author":"Tere Liye",url:"#"},
    {"id":58,title:"Negeri di Ujung Tanduk","author":"Tere Liye",url:"#"},
    {"id":32,title:"Never Been Kissed","author":"RevelRebel",url:"#"},
    {"id":19,title:"Only With Me","author":"Sabila Septiani",url:"#"},
    {"id":33,title:"Partner with benefit","author":"RevelRebel",url:"#"},
    {"id":34,title:"Partner with benefit extra part","author":"RevelRebel",url:"#"},
    {"id":60,title:"Pergi","author":"Tere Liye",url:"#"},
    {"id":35,title:"Philosophy of Love","author":"RevelRebel",url:"#"},
    {"id":61,title:"Pulang","author":"Tere Liye",url:"#"},
    {"id":27,title:"Purple Eyes","author":"Prisca Primasari",url:"#"},
    {"id":62,title:"Rasa","author":"Tere Liye",url:"#"},
    {"id":1,title:"Relationshit ","author":"Alnira",url:"#"},
    {"id":63,title:"Rembulan Tenggelam Di Wajahmu","author":"Tere Liye",url:"#"},
    {"id":37,title:"Revenge","author":"Alfylla",url:"#"},
    {"id":64,title:"Rindu","author":"Tere Liye",url:"#"},
    {"id":65,title:"Sagaras","author":"Tere Liye",url:"#"},
    {"id":66,title:"Sang Panandai","author":"Tere Liye",url:"#"},
    {"id":38,title:"Sang Perawan","author":"Anjar Lembayung",url:"#"},
    {"id":67,title:"Selena","author":"Tere Liye",url:"#"},
    {"id":68,title:"Selena (unedited version)","author":"Tere Liye",url:"#"},
    {"id":69,title:"Sepotong Hati Yang Baru","author":"Tere Liye",url:"#"},
    {"id":70,title:"Sesuk","author":"Tere Liye",url:"#"},
    {"id":71,title:"Si Anak Badai","author":"Tere Liye",url:"#"},
    {"id":73,title:"Si Anak Kuat","author":"Tere Liye",url:"#"},
    {"id":75,title:"Si Anak Pintar","author":"Tere Liye",url:"#"},
    {"id":76,title:"Si Anak Spesial","author":"Tere Liye",url:"#"},
    {"id":77,title:"Si Putih","author":"Tere Liye",url:"#"},
    {"id":72,title:"Si anak cahaya","author":"Tere Liye",url:"#"},
    {"id":74,title:"Si anak pemberani","author":"Tere Liye",url:"#"},
    {"id":86,title:"Silencio","author":"Winnyraca",url:"#"},
    {"id":40,title:"Suami Pengganti","author":"Nah_Wa",url:"#"},
    {"id":78,title:"TENTANG KAMU","author":"Tere Liye",url:"#"},
    {"id":36,title:"The DaddyS Affair","author":"RevelRebel",url:"#"},
    {"id":6,title:"The Marriage Cure","author":"Citra Novy",url:"#"},
    {"id":81,title:"Titik Tanpa Koma","author":"Masda Raimunda",url:"#"},
    {"id":15,title:"To Forgive","author":"Midgardst",url:"#"},
    {"id":82,title:"Trapped","author":"Agustini Tandean",url:"#"},
    {"id":21,title:"Trapped By You","author":"Pipit Chie",url:"#"},
    {"id":22,title:"Trapped By You Extra Part","author":"Pipit Chie",url:"#"},
    {"id":3,title:"Apa Daya Hati Ini","author":"Twoprince_Oneking",url:"#"}
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
        const filteredBooks = Books.filter(book => book.title.toLowerCase().includes(query));
        
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
