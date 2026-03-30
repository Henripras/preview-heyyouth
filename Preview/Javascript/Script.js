document.addEventListener('DOMContentLoaded', function () {

    /* =============================================
       1. NAVBAR SCROLL EFFECT
       ============================================= */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md', 'bg-white/95');
                navbar.classList.remove('py-2');
            } else {
                navbar.classList.remove('shadow-md', 'bg-white/95');
                navbar.classList.add('py-2');
            }
        });
    }

    /* =============================================
       2. MOBILE MENU TOGGLE
       ============================================= */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (mobileBtn && mobileMenu && iconMenu && iconClose) {
        mobileBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    /* =============================================
       3. FAQ ACCORDION  (hanya di index.html)
       ============================================= */
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(function (item) {
            var header = item.querySelector('.faq-header');
            header.addEventListener('click', function () {
                var content = item.querySelector('.faq-content');
                var isActive = item.classList.contains('active');

                // Tutup semua dulu
                faqItems.forEach(function (other) {
                    other.classList.remove('active');
                    other.querySelector('.faq-content').classList.remove('open');
                });

                // Buka yang diklik (jika sebelumnya tertutup)
                if (!isActive) {
                    item.classList.add('active');
                    content.classList.add('open');
                }
            });
        });
    }

    /* =============================================
       4. LEAFLET MAP  (hanya di index.html)
       ============================================= */
    var mapElement = document.getElementById('map');

    if (mapElement && typeof L !== 'undefined') {
        var map = L.map('map').setView([-2.5489, 118.0149], 6);
        L.control.zoom({ position: 'bottomright' }).addTo(map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Fungsi pembuat pin kustom (user icon + badge jumlah relawan)
        function createCustomPin(volunteers) {
            return L.divIcon({
                className: 'custom-div-icon',
                html: '<div class="marker-pin-container">' +
                          '<div class="marker-pin-body">' +
                              '<div class="marker-icon">' +
                                  '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                                      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>' +
                                      '<circle cx="12" cy="7" r="4"></circle>' +
                                  '</svg>' +
                              '</div>' +
                              '<div class="marker-badge">' + volunteers + '</div>' +
                          '</div>' +
                      '</div>',
                iconSize: [40, 50],
                iconAnchor: [20, 50],
                popupAnchor: [0, -50]
            });
        }

        var locations = [
            { name: "Jakarta", lat: -6.2088, lng: 106.8456, volunteers: 8 },
            { name: "Karawang", lat: -6.3146, lng: 107.3094, volunteers: 1 },
            { name: "Medan", lat: 3.5952, lng: 98.6722, volunteers: 1 },
            { name: "Jakarta Timur", lat: -6.2307, lng: 106.8967, volunteers: 2 },
            { name: "Malang", lat: -7.9826, lng: 112.6308, volunteers: 3 },
            { name: "Jakarta Selatan", lat: -6.2615, lng: 106.8106, volunteers: 2 },
            { name: "Arcamanik, Bandung", lat: -6.9175, lng: 107.6191, volunteers: 1 },
            { name: "Depok", lat: -6.4025, lng: 106.8048, volunteers: 3 },
            { name: "Bogor", lat: -6.5950, lng: 106.7997, volunteers: 4 },
            { name: "Bangka", lat: -2.3216, lng: 106.1086, volunteers: 1 },
            { name: "West Java", lat: -6.9034, lng: 107.6046, volunteers: 1 },
            { name: "Palembang", lat: -2.9761, lng: 104.7754, volunteers: 1 },
            { name: "Sunter, Jakarta Utara", lat: -6.1360, lng: 106.8778, volunteers: 1 },
            { name: "Purwokerto", lat: -7.4239, lng: 109.2215, volunteers: 1 },
            { name: "Cikarang", lat: -6.2737, lng: 107.1352, volunteers: 1 },
            { name: "Bekasi", lat: -6.2369, lng: 106.9715, volunteers: 3 },
            { name: "Tuban, East Java", lat: -6.9079, lng: 112.0560, volunteers: 1 },
            { name: "Sumedang, Jatinangor", lat: -6.9329, lng: 107.7667, volunteers: 1 },
            { name: "Gresik", lat: -7.1666, lng: 112.6568, volunteers: 1 },
            { name: "Purbalingga", lat: -7.3707, lng: 109.3582, volunteers: 1 },
            { name: "Jakarta Barat", lat: -6.1754, lng: 106.8272, volunteers: 1 },
            { name: "Aceh", lat: 5.5524, lng: 95.3188, volunteers: 1 },
            { name: "Batang, Jawa Tengah", lat: -7.0094, lng: 109.7368, volunteers: 1 },
            { name: "Bandung", lat: -6.9175, lng: 107.6191, volunteers: 2 },
            { name: "Surabaya", lat: -7.2504, lng: 112.7688, volunteers: 1 },
            { name: "Bali", lat: -8.4095, lng: 115.1889, volunteers: 1 },
            { name: "Surakarta", lat: -7.5559, lng: 110.8200, volunteers: 1 },
            { name: "Pekanbaru", lat: 0.5071, lng: 101.4478, volunteers: 1 },
            { name: "South Tangerang", lat: -6.2878, lng: 106.7323, volunteers: 1 },
            { name: "Kendari", lat: -3.9806, lng: 122.5160, volunteers: 1 }
        ];

        locations.forEach(function (loc) {
            L.marker([loc.lat, loc.lng], { icon: createCustomPin(loc.volunteers) })
                .addTo(map)
                .bindPopup('<strong>' + loc.name + '</strong><br>Volunteers: ' + loc.volunteers);
        });

        // Render ulang peta jika layout berubah saat load
        setTimeout(function () {
            map.invalidateSize();
        }, 100);
    }
});