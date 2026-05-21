/* =============================================
   HEY YOUTH! — Global Script (UPDATED)
   ============================================= */

var _cmsLocations = null;

/* ------ UTILITIES ------ */
function _esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

function _escA(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _avatar(name) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&size=100&background=random&color=fff';
}

/* ------ DEFAULT DATA (sama persis dengan CMS) ------ */
var _CMS_DEFAULT = {
    externalTestimonials: [
        { id: 1, name: 'Mr. Rifki Zamzam', title: 'Co-Founder, Qatar HR Forum', quote: 'Kerjasama dengan Hey Youth! memberikan dampak positif yang nyata bagi komunitas kami.', image: 'https://ui-avatars.com/api/?name=Rifki+Zamzam&size=100&background=random&color=fff' },
        { id: 2, name: 'Ms. Rina Nurutami, S.Psi', title: 'Vice Principal, Daarut Tauhid', quote: 'Sangat menginspirasi melihat semangat pemuda yang rela berkontribusi untuk pendidikan.', image: 'https://ui-avatars.com/api/?name=Rina+Nurutami&size=100&background=random&color=fff' },
        { id: 3, name: 'Yiwen Xu', title: 'Student, Univ. of Edinburgh', quote: 'Hey Youth! adalah jembatan yang menghubungkan antusiasme dengan aksi nyata.', image: 'https://ui-avatars.com/api/?name=Yiwen+Xu&size=100&background=random&color=fff' }
    ],
    internalTestimonials: [
        { id: 4, name: 'Alya', role: 'Community Coordinator', quote: 'Sangat bahagia bisa bergabung di Hey Youth! Banyak belajar hal baru setiap hari.', image: 'https://ui-avatars.com/api/?name=Alya&size=100&background=random&color=fff' },
        { id: 5, name: 'Herza', role: 'Web Developer', quote: 'Hey Youth adalah agent of change. Di sini kita bisa membuat dampak nyata.', image: 'https://ui-avatars.com/api/?name=Herza&size=100&background=random&color=fff' },
        { id: 6, name: 'Karyn', role: 'Teacher', quote: 'Hey Youth merayakan rasa ingin tahu dan membentuk sistem kepercayaan.', image: 'https://ui-avatars.com/api/?name=Karyn&size=100&background=random&color=fff' }
    ],
    faqs: [
        { id: 7, question: "Why don't we recruit people per batch?", answer: 'Kami membuka pendaftaran secara terbuka (rolling recruitment) agar talenta terbaik dapat bergabung kapan saja tanpa harus menunggu jadwal batch tertentu. Ini memungkinkan fleksibilitas lebih tinggi.' },
        { id: 8, question: 'Do I need to have high English levels to join Hey Youth?', answer: 'Tidak wajib. Meskipun beberapa program internasional membutuhkan kemampuan Bahasa Inggris, kami menyediakan banyak peran di mana Bahasa Indonesia adalah bahasa utama komunikasi. Yang terpenting adalah semangat berkontribusi.' },
        { id: 9, question: 'How can I donate to foundation?', answer: 'Anda dapat mendukung kami melalui transfer bank atau donasi barang. Silakan kunjungi halaman Donation untuk informasi rekening dan kebutuhan barang terkini.' }
    ],
    locations: [
        { id: 101, name: 'Jakarta', lat: -6.2088, lng: 106.8456, volunteers: 8 },
        { id: 102, name: 'Karawang', lat: -6.3146, lng: 107.3094, volunteers: 1 },
        { id: 103, name: 'Medan', lat: 3.5952, lng: 98.6722, volunteers: 1 },
        { id: 104, name: 'Jakarta Timur', lat: -6.2307, lng: 106.8967, volunteers: 2 },
        { id: 105, name: 'Malang', lat: -7.9826, lng: 112.6308, volunteers: 3 },
        { id: 106, name: 'Jakarta Selatan', lat: -6.2615, lng: 106.8106, volunteers: 2 },
        { id: 107, name: 'Arcamanik, Bandung', lat: -6.9175, lng: 107.6191, volunteers: 1 },
        { id: 108, name: 'Depok', lat: -6.4025, lng: 106.8048, volunteers: 3 },
        { id: 109, name: 'Bogor', lat: -6.5950, lng: 106.7997, volunteers: 4 },
        { id: 110, name: 'Bangka', lat: -2.3216, lng: 106.1086, volunteers: 1 },
        { id: 111, name: 'West Java', lat: -6.9034, lng: 107.6046, volunteers: 1 },
        { id: 112, name: 'Palembang', lat: -2.9761, lng: 104.7754, volunteers: 1 },
        { id: 113, name: 'Sunter, Jakarta Utara', lat: -6.1360, lng: 106.8778, volunteers: 1 },
        { id: 114, name: 'Purwokerto', lat: -7.4239, lng: 109.2215, volunteers: 1 },
        { id: 115, name: 'Cikarang', lat: -6.2737, lng: 107.1352, volunteers: 1 },
        { id: 116, name: 'Bekasi', lat: -6.2369, lng: 106.9715, volunteers: 3 },
        { id: 117, name: 'Tuban, East Java', lat: -6.9079, lng: 112.0560, volunteers: 1 },
        { id: 118, name: 'Sumedang, Jatinangor', lat: -6.9329, lng: 107.7667, volunteers: 1 },
        { id: 119, name: 'Gresik', lat: -7.1666, lng: 112.6568, volunteers: 1 },
        { id: 120, name: 'Purbalingga', lat: -7.3707, lng: 109.3582, volunteers: 1 },
        { id: 121, name: 'Jakarta Barat', lat: -6.1754, lng: 106.8272, volunteers: 1 },
        { id: 122, name: 'Aceh', lat: 5.5524, lng: 95.3188, volunteers: 1 },
        { id: 123, name: 'Batang, Jawa Tengah', lat: -7.0094, lng: 109.7368, volunteers: 1 },
        { id: 124, name: 'Bandung', lat: -6.9175, lng: 107.6191, volunteers: 2 },
        { id: 125, name: 'Surabaya', lat: -7.2504, lng: 112.7688, volunteers: 1 },
        { id: 126, name: 'Bali', lat: -8.4095, lng: 115.1889, volunteers: 1 },
        { id: 127, name: 'Surakarta', lat: -7.5559, lng: 110.8200, volunteers: 1 },
        { id: 128, name: 'Pekanbaru', lat: 0.5071, lng: 101.4478, volunteers: 1 },
        { id: 129, name: 'South Tangerang', lat: -6.2878, lng: 106.7323, volunteers: 1 },
        { id: 130, name: 'Kendari', lat: -3.9806, lng: 122.5160, volunteers: 1 }
    ],

    partners: [
        { id: 1, name: 'Qatar HR Forum', description: 'Membangun jaringan profesional HR global.', icon: 'fa-users-cog', image: '', color: 'blue', link: 'https://qatarhrforum.com' },
        { id: 2, name: 'The Facial Skin Lab', description: 'Klinik kecantikan terpercaya.', icon: 'fa-spa', image: '', color: 'pink', link: 'https://instagram.com' },
        { id: 3, name: 'Shadow A Scientist', description: 'Program mentoring ilmiah.', icon: 'fa-flask', image: '', color: 'purple', link: '#' },
        { id: 4, name: 'SMP Adzkia', description: 'Sekolah Islam terpadu.', icon: 'fa-school', image: '', color: 'green', link: '#' }
    ],
    
    // DATA DONATION BARU
    donationSettings: {
        heroTitle: 'Support Our Mission',
        heroSubtitle: 'Bantu kami menyediakan akses pendidikan yang layak bagi anak-anak Indonesia. Setiap donasi Anda menjadi jembatan menuju masa depan yang lebih cerah.',
        stripText: 'Together We Can',
        stripImage: 'img/Front Card.webp',
        bankName: 'Bank Central Asia (BCA)',
        accountName: 'Yuni Triandini',
        accountNumber: '466 0070 724',
        qrisImage: 'https://via.placeholder.com/200?text=QRIS' 
    },

    // DYNAMIC HOME/ABOUT/ACTIVITIES DATA FOR SYNC
    aboutHero: {
        title: 'Mendidik Untuk <br><span class="text-primary">Masa Depan Indonesia</span>',
        subtitle: 'Hey Youth adalah sebuah komunitas pemuda di Indonesia yang didedikasikan untuk melakukan perubahan melalui pendidikan. Kami menyediakan akses ke pendidikan berkualitas dan peluang mentoring bagi mereka yang membutuhkan.',
        volunteerCount: '1k+',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070&auto=format&fit=crop'
    },
    team: [
        { id: 201, name: 'Yuni Triandini', role: 'Founder', image: 'https://ui-avatars.com/api/?name=Yuni+Triandini&size=100&background=random&color=fff', linkedin: '#', instagram: '#' },
        { id: 202, name: 'Rama', role: 'Head of Marketing', image: 'https://ui-avatars.com/api/?name=Rama&size=100&background=random&color=fff', linkedin: '#', instagram: '#' },
        { id: 203, name: 'Dzikri', role: 'Head of Graphic Designer', image: 'https://ui-avatars.com/api/?name=Dzikri&size=100&background=random&color=fff', linkedin: '#', instagram: '#' }
    ],
    activityCards: [
        { 
            id: 301, 
            category: 'Education', 
            date: '10 November 2025', 
            title: 'Dream Big, Learn Bigger: Inspiring the Next Generation at Yos Sudarso', 
            description: 'Kami mengunjungi sekolah di Yos Sudarso untuk berbagi inspirasi dan materi pendidikan interaktif kepada ratusan siswa, membantu mereka bermimpi lebih besar.',
            image: 'https://placehold.co/400x250?text=Activity+1',
            link: '#',
            fullStory: '<p>Pada hari yang cerah, tim Hey Youth berkunjung ke SD Yos Sudarso. Antusiasme siswa-siswi sangat luar biasa ketika kami memperkenalkan program mentoring kami.</p><p>Kegiatan ini diawali dengan sesi ice breaking yang diikuti oleh seluruh siswa kelas 5 dan 6. Dilanjutkan dengan materi tentang "Membangun Mimpi Sejak Dini".</p><br><p>Kami berharap kunjungan ini dapat menjadi inspirasi bagi mereka untuk terus belajar dan giat meraih cita-cita.</p>'
        },
        { 
            id: 302, 
            category: 'Community', 
            date: '14 April 2025', 
            title: 'Instilling Education, Igniting Dreams: Hey Youth\'s Visit to TBM Kolong', 
            description: 'Kunjungan spesial ke TBM Kolong untuk mendukung literasi di lingkungan sekitar, mendonasikan buku, dan mengadakan sesi membaca bersama anak-anak.',
            image: 'https://placehold.co/400x250?text=Activity+2',
            link: '#',
            fullStory: '<p>TBM Kolong adalah salah satu tempat baca yang sangat bersemangat di daerah kami. Kami mendonasikan 100 eksemplar buku cerita dan ensiklopedia anak.</p><p>Selain donasi buku, relawan kami juga membacakan cerita rakyat Nusantara kepada anak-anak dengan penuh ekspresi.</p>'
        }
    ],
    podcasts: [
        {
            id: 401,
            episode: 'Episode 2',
            title: 'Suicide Is Not The Answer: Here\'s Why',
            thumbnail: 'https://placehold.co/300x300?text=Podcast+2', 
            spotifyLink: 'https://open.spotify.com/episode/5xcQh5HewK3MvIcxkSiWef' 
        },
        {
            id: 402,
            episode: 'Episode 1',
            title: 'The Power of Self-Affirmation: Transforming Our Lives',
            thumbnail: 'https://placehold.co/300x300?text=Podcast+1',
            spotifyLink: 'https://open.spotify.com/episode/1a0xUotfQZAdD6jtHT4l5g?si=l3nk1yvSSzK7XPMMFLMvHA&nd=1&dlsi=746e34d28eaa4e68'
        }
    ]
};

async function _getCMS() {
    return await window.getFirebaseData(_CMS_DEFAULT);
}

/* ------ CMS: RENDER EXTERNAL TESTIMONIALS ------ */
function _renderExternal(data) {
    var el = document.getElementById('external-testimonials');
    if (!el || !data || !data.length) return;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        var t = data[i];
        html += '<div class="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col h-full">'
            + '<p class="text-body italic mb-6 flex-grow">"' + _esc(t.quote) + '"</p>'
            + '<div class="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-50 mt-auto">'
            + '<div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">'
            + '<img src="' + _escA(t.image) + '" alt="' + _escA(t.name) + '" class="w-full h-full object-cover" onerror="this.src=\'' + _avatar(t.name) + '\'">'
            + '</div>'
            + '<div class="flex-grow min-w-[120px]">'
            + '<h4 class="font-bold text-heading text-sm leading-tight">' + _esc(t.name) + '</h4>'
            + '<p class="text-xs text-primary font-semibold leading-tight mt-0.5">' + _esc(t.title) + '</p>'
            + '</div></div></div>';
    }
    el.innerHTML = html;
}

/* ------ CMS: RENDER INTERNAL TESTIMONIALS ------ */
function _renderInternal(data) {
    var el = document.getElementById('internal-testimonials');
    if (!el || !data || !data.length) return;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        var t = data[i];
        html += '<div class="bg-surface p-8 rounded-2xl border border-blue-100 flex flex-col h-full">'
            + '<p class="text-body italic mb-6 flex-grow">"' + _esc(t.quote) + '"</p>'
            + '<div class="flex flex-wrap items-center gap-3 pt-4 border-t border-blue-50 mt-auto">'
            + '<div class="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">'
            + '<img src="' + _escA(t.image) + '" alt="' + _escA(t.name) + '" class="w-full h-full object-cover" onerror="this.src=\'' + _avatar(t.name) + '\'">'
            + '</div>'
            + '<div class="flex-grow min-w-[120px]">'
            + '<h4 class="font-bold text-heading text-sm leading-tight">' + _esc(t.name) + '</h4>'
            + '<p class="text-xs text-gray-500 leading-tight mt-0.5">' + _esc(t.role) + '</p>'
            + '</div></div></div>';
    }
    el.innerHTML = html;
}

/* ------ CMS: RENDER FAQ ------ */
function _renderFAQ(data) {
    var el = document.getElementById('faq-container');
    if (!el || !data || !data.length) return;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        var f = data[i];
        html += '<div class="faq-item bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">'
            + '<button class="faq-header w-full text-left p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors">'
            + '<span class="faq-header-text text-heading font-medium text-lg pr-4 transition-colors">' + _esc(f.question) + '</span>'
            + '<div class="faq-icon bg-gray-100 text-gray-500 p-1.5 rounded-full flex-shrink-0 transition-transform duration-300"><svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>'
            + '</button>'
            + '<div class="faq-content"><div class="faq-inner overflow-hidden"><div class="px-6 pb-6 pt-2 text-body text-gray-600 leading-relaxed border-t border-transparent">' + _esc(f.answer) + '</div></div></div>'
            + '</div>';
    }
    el.innerHTML = html;
}

/* ------ CMS: RENDER PARTNERS (PUBLIC VIEW) ------ */
function _renderPartners(data) {
    var el = document.getElementById('partners-grid-container');
    if (!el || !data || !data.length) {
        if(el) el.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">Belum ada data partner.</div>';
        return;
    }

    var colorMap = {
        'blue': 'bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white',
        'pink': 'bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white',
        'purple': 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
        'green': 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white',
        'yellow': 'bg-yellow-50 text-yellow-600 hover:bg-yellow-600 hover:text-white',
        'gray': 'bg-gray-100 text-gray-500 hover:bg-gray-500 hover:text-white',
    };

    var html = '';
    for (var i = 0; i < data.length; i++) {
        var p = data[i];
        var colorClass = colorMap[p.color] || colorMap['blue'];
        
        var targetLink = p.link && p.link !== '#' ? p.link : '#';
        var targetAttr = (targetLink !== '#') ? 'target="_blank" rel="noopener noreferrer"' : '';
        var btnText = (targetLink !== '#') ? 'Visit Website <i class="fas fa-external-link-alt ml-1 text-xs"></i>' : 'Learn More';

        var logoHtml = '';
        if (p.image) {
            var imgSrc = p.image.startsWith('data:') || p.image.startsWith('http') ? p.image : p.image;
            logoHtml = '<div class="w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-white border border-gray-100 shadow-sm flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">' +
                         '<img src="' + _escA(imgSrc) + '" class="max-w-full max-h-full object-contain">' +
                       '</div>';
        } else {
            logoHtml = '<div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 transition-all duration-300 ' + colorClass + '">' +
                         '<i class="fas ' + (p.icon || 'fa-building') + '"></i>' +
                       '</div>';
        }

        html += '<div class="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center h-full">' +
            logoHtml +
            '<h3 class="text-xl font-bold text-heading mb-6 leading-tight">' + _esc(p.name) + '</h3>' +
            '<p class="text-sm text-gray-500 mb-6 flex-grow line-clamp-3">' + _esc(p.description) + '</p>' + 
            
            '<div class="mt-auto w-full">' +
                '<a href="' + _escA(targetLink) + '" ' + targetAttr + ' class="block w-full py-2.5 px-4 rounded-lg bg-accent/10 text-accent font-bold text-sm hover:bg-accent hover:text-white transition-colors border border-accent/20 text-center">' +
                    btnText +
                '</a>' +
            '</div>' +
        '</div>';
    }
    el.innerHTML = html;
}

/* ------ CMS: RENDER DONATION PAGE (BARU) ------ */
function _renderDonation(data) {
    if (!data || !data.donationSettings) return;
    var s = data.donationSettings;

    // 1. Update Hero Text
    var heroSubEl = document.querySelector('#hero-donation p.text-lg');
    if (heroSubEl) heroSubEl.textContent = s.heroSubtitle;

    // 2. Update Image Strip
    var stripImgEl = document.getElementById('strip-img-display');
    var stripTextEl = document.getElementById('strip-text-display');
    if (stripImgEl && s.stripImage) {
        stripImgEl.src = s.stripImage.startsWith('data:') ? s.stripImage : s.stripImage;
    }
    if (stripTextEl) stripTextEl.textContent = s.stripText;

    // 3. Update Payment Details
    var bankNameEl = document.getElementById('bank-name-display');
    var accNameEl = document.getElementById('acc-name-display');
    var accNumEl = document.getElementById('acc-num-display');
    
    if (bankNameEl) bankNameEl.textContent = s.bankName;
    if (accNameEl) accNameEl.textContent = s.accountName;
    if (accNumEl) accNumEl.textContent = s.accountNumber;
    
    // 4. Update QRIS
    var qrisImgEl = document.getElementById('qris-img-display');
    if (qrisImgEl && s.qrisImage) {
        qrisImgEl.src = s.qrisImage.startsWith('data:') ? s.qrisImage : s.qrisImage;
        qrisImgEl.classList.remove('hidden'); // Tampilkan gambar asli
        // Sembunyikan placeholder icon jika ada
        var placeholder = qrisImgEl.nextElementSibling;
        if (placeholder && placeholder.tagName === 'I') placeholder.classList.add('hidden');
    }
}

/* ------ FAQ ACCORDION ------ */
function _initFAQ() {
    var items = document.querySelectorAll('.faq-item');
    for (var i = 0; i < items.length; i++) {
        (function(item) {
            var btn = item.querySelector('.faq-header');
            if (!btn) return;
            var newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            newBtn.addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                for (var j = 0; j < items.length; j++) {
                    items[j].classList.remove('active');
                    var c = items[j].querySelector('.faq-content');
                    if (c) c.classList.remove('open');
                }
                if (!isActive) {
                    item.classList.add('active');
                    var c = item.querySelector('.faq-content');
                    if (c) c.classList.add('open');
                }
            });
        })(items[i]);
    }
}

/* ------ COPY TO CLIPBOARD ------ */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        var btn = document.querySelector('#acc-num-display').nextElementSibling;
        var originalHtml = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check text-green-500 text-xl"></i>';
        
        setTimeout(function() {
            btn.innerHTML = originalHtml;
        }, 2000);
    }).catch(function(err) {
        console.error('Gagal menyalin: ', err);
    });
}

/* ------ NAVBAR SCROLL ------ */
function _initNavbar() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            nav.classList.add('shadow-md', 'bg-white/95');
            nav.classList.remove('py-2');
        } else {
            nav.classList.remove('shadow-md', 'bg-white/95');
            nav.classList.add('py-2');
        }
    });
}

/* ------ INIT (MAIN SITES) ------ */
document.addEventListener('DOMContentLoaded', async function () {
    // 1. Mobile Menu
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    var iconO = document.getElementById('icon-menu');
    var iconC = document.getElementById('icon-close');
    
    if(btn && menu && iconO && iconC) {
        btn.addEventListener('click', function() {
            menu.classList.toggle('hidden');
            iconO.classList.toggle('hidden');
            iconC.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
        var links = menu.querySelectorAll('a');
        for(var i=0; i<links.length; i++){
            links[i].addEventListener('click', function(){
                menu.classList.add('hidden');
                iconO.classList.remove('hidden');
                iconC.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        }
    }

    // 2. Fetch CMS Data
    var cms = await _getCMS();

    /* --- 1. Load CMS data --- */
    try {
        _renderExternal(cms.externalTestimonials);
        _renderInternal(cms.internalTestimonials);
        _renderFAQ(cms.faqs);
        _renderPartners(cms.partners);
        _renderDonation(cms); // RENDER DONATION

        if (cms.locations && cms.locations.length) {
            _cmsLocations = cms.locations;
        }
    } catch (e) {
        console.error('CMS error:', e);
    }
    
    /* --- 2. FAQ accordion --- */
    _initFAQ();

    /* --- 3. Navbar --- */
    _initNavbar();

    /* --- 5. Map (Updated) --- */
    _initMap();

});

/* =============================================
   LEAFLET MAP (FINAL PRODUCTION VERSION)
   ============================================= */
function _initMap() {
    var el = document.getElementById('map');
    if (!el || typeof L === 'undefined') return;

    // 1. Setup Peta (Fokus Indonesia)
    var map = L.map('map').setView([-2.5489, 118.0149], 5); 

    // 2. Kontrol Zoom
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // 3. Layer Peta Dasar (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // 4. FUNGSI PEMBUAT PIN KUSTOM
    function createPinIcon(volunteerCount) {
        return L.divIcon({
            className: 'custom-div-icon',
            html: `
                <div class="marker-pin-container">
                    <div class="marker-pin-body">
                        <div class="marker-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                    <div class="marker-badge">${volunteerCount}</div>
                </div>
            `,
            iconSize: [40, 50],
            iconAnchor: [20, 50],
            popupAnchor: [0, -55]
        });
    }

    // 5. Ambil data lokasi
    var locs = _cmsLocations || _CMS_DEFAULT.locations;
    
    // 6. Loop lokasi untuk render marker
    for (var i = 0; i < locs.length; i++) {
        var l = locs[i];
        L.marker([l.lat, l.lng], { icon: createPinIcon(l.volunteers) })
         .addTo(map)
         .bindPopup('<strong>' + l.name + '</strong><br>Volunteers: ' + l.volunteers);
    }
    
    // 7. Fix render issue saat layout berubah
    setTimeout(function() { map.invalidateSize(); }, 100);
}

/* =============================================
   LANGUAGE TOGGLE LOGIC
   ============================================= */
function initLanguageToggle() {
    var groups = document.querySelectorAll('.lang-toggle-group');
    if (!groups.length) return;

    var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
    
    function setLang(lang) {
        document.body.classList.remove('lang-en', 'lang-id');
        document.body.classList.add('lang-' + lang);
        localStorage.setItem('heyyouth_lang', lang);
        
        groups.forEach(function(group) {
            var slider = group.querySelector('.lang-slider-bg');
            if (slider) {
                if (lang === 'en') {
                    slider.style.transform = 'translateX(40px)'; // Move to EN
                } else {
                    slider.style.transform = 'translateX(0px)';  // Move to ID
                }
            }
        });
    }

    setLang(currentLang);

    groups.forEach(function(group) {
        var btns = group.querySelectorAll('.lang-btn');
        btns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var lang = e.currentTarget.getAttribute('data-lang');
                if (lang) {
                    setLang(lang);
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
});