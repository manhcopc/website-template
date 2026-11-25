/* ==========================================================================
   GÔM — 06 Cinematic / Full-Bleed Visual
   Pure Vanilla JS: Menu overlay, IntersectionObserver reveals,
   44-dish spotlight carousel, Bốc mâm circular reveal, Dino Quảng Nam, Booking
   ========================================================================== */

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. Complete 44-Dish Menu Data (7 Groups)
     ------------------------------------------------------------------------ */
  const DISHES = [
    // Món địa phương (13)
    { id: 'banh-xeo-hau-pho-mai', name: 'Bánh xèo hàu phô mai', group: 'Món địa phương', featured: true, desc: 'Vỏ giòn rụm vàng ươm, nhân hàu sữa béo thơm quyện phô mai kéo sợi.' },
    { id: 'banh-xeo-hai-san', name: 'Bánh xèo hải sản', group: 'Món địa phương', featured: false, desc: 'Tôm mực tươi rói đổ khuôn gang nóng, cuốn bánh tráng rau sống.' },
    { id: 'banh-xeo-truyen-thong', name: 'Bánh xèo truyền thống', group: 'Món địa phương', featured: true, desc: 'Đúng vị Đà Nẵng với tôm đất, thịt ba chỉ, giá đỗ và nước lèo đậu phộng.' },
    { id: 'cao-lau-hoi-an', name: 'Cao lầu Hội An', group: 'Món địa phương', featured: true, desc: 'Sợi mì dai nhẹ, thịt xá xíu đậm đà, da heo chiên giòn và rau Trà Quế.' },
    { id: 'mi-quang-phu-chiem', name: 'Mì Quảng Phú Chiêm', group: 'Món địa phương', featured: true, desc: 'Nước nhưn sánh vàng nghệ, tôm thịt rim kỹ, bánh tráng mè bẻ giòn.' },
    { id: 'bun-bo-hue', name: 'Bún bò Huế', group: 'Món địa phương', featured: false, desc: 'Nước dùng thơm sả ruốc Huế, giò heo mềm và chả cua đậm vị.' },
    { id: 'pho-bo', name: 'Phở bò', group: 'Món địa phương', featured: false, desc: 'Nước xương hầm trong ngọt tự nhiên, thịt bò thái mỏng ăn nóng buổi sáng.' },
    { id: 'banh-mi-thit-nuong', name: 'Bánh mì thịt nướng', group: 'Món địa phương', featured: false, desc: 'Ổ bánh giòn nóng kẹp thịt nướng than hoa, đồ chua và nước sốt riêng.' },
    { id: 'banh-trang-dai-loc', name: 'Bánh tráng cuốn Đại Lộc', group: 'Món địa phương', featured: true, desc: 'Thịt heo luộc hai đầu da, bánh tráng mềm dẻo, chấm mắm nêm dứa thơm.' },
    { id: 'xien-nuong-hoi-an', name: 'Xiên nướng Hội An', group: 'Món địa phương', featured: false, desc: 'Thịt ướp sả mè nướng thơm lừng trên than hồng, cuốn rau sống.' },
    { id: 'nem-lui-cuon', name: 'Nem lụi cuốn', group: 'Món địa phương', featured: true, desc: 'Nem nướng sả thơm béo, chấm nước lèo tương đậu sánh mịn.' },
    { id: 'bo-la-lot-cuon', name: 'Bò lá lốt cuốn', group: 'Món địa phương', featured: false, desc: 'Thịt bò băm cuộn lá lốt nướng xém cạnh, dậy mùi thơm mộc mạc.' },
    { id: 'cha-ram-tom-dat', name: 'Chả ram tôm đất', group: 'Món địa phương', featured: false, desc: 'Cuốn nhỏ giòn tan với tôm đất nguyên con, ăn kèm rau thơm.' },

    // Gỏi & Rau (5)
    { id: 'goi-xoai-hai-san-dua-nuoc', name: 'Gỏi xoài hải sản dừa nước', group: 'Gỏi & Rau', featured: true, desc: 'Xoài xanh giòn chua thanh, tôm mực tươi và dừa nước mát lịm.' },
    { id: 'goi-buoi-tom-muc-dua-nuoc', name: 'Gỏi bưởi tôm mực dừa nước', group: 'Gỏi & Rau', featured: false, desc: 'Tép bưởi mọng nước trộn tôm mực giòn ngọt, rắc đậu phộng rang.' },
    { id: 'goi-ngo-sen-hue', name: 'Gỏi ngó sen Huế', group: 'Gỏi & Rau', featured: false, desc: 'Ngó sen trắng giòn trộn chua ngọt thanh tao kiểu cố đô.' },
    { id: 'rau-muong-xao-oc-mong-tay', name: 'Rau muống xào ốc móng tay', group: 'Gỏi & Rau', featured: false, desc: 'Rau muống giòn xanh xào lửa lớn cùng ốc móng tay ngọt thịt.' },
    { id: 'ngu-qua-luoc-kho-quet', name: 'Ngũ quả luộc kho quẹt', group: 'Gỏi & Rau', featured: false, desc: 'Rau củ luộc vừa chín tới chấm nồi kho quẹt tóp mỡ tiêu xanh.' },

    // Món hải sản (7)
    { id: 'tom-sot-bo-toi', name: 'Tôm sốt bơ tỏi', group: 'Món hải sản', featured: false, desc: 'Tôm sú áo lớp bơ tỏi béo thơm, chấm bánh mì nóng hết sảy.' },
    { id: 'muc-nuong-sa-te', name: 'Mực nướng sa tế', group: 'Món hải sản', featured: true, desc: 'Mực ống tươi dày mình ướp sa tế ớt cay dịu, nướng cháy cạnh.' },
    { id: 'hau-nuong-pho-mai', name: 'Hàu nướng phô mai', group: 'Món hải sản', featured: false, desc: 'Hàu sữa béo ngậy phủ phô mai nướng vàng thơm.' },
    { id: 'so-diep-nuong-pho-mai', name: 'Sò điệp nướng phô mai', group: 'Món hải sản', featured: false, desc: 'Cồi sò điệp ngọt mềm quyện phô mai béo nhẹ.' },
    { id: 'oc-huong-sot-trung-muoi', name: 'Ốc hương sốt trứng muối', group: 'Món hải sản', featured: true, desc: 'Ốc hương giòn sần sật tắm sốt trứng muối sánh mịn béo bùi.' },
    { id: 'hai-san-sot-bo-toi', name: 'Hải sản sốt bơ tỏi', group: 'Món hải sản', featured: false, desc: 'Tổng hợp tôm, mực, ngao hòa quyện sốt bơ tỏi thơm nồng.' },
    { id: 'ca-bop-kho-tieu', name: 'Cá bớp kho tiêu', group: 'Món hải sản', featured: false, desc: 'Cá bớp chắc thịt kho tộ keo nước mắm nhĩ, cay ấm mùi tiêu đen.' },

    // Món thịt (3)
    { id: 'suon-heo-nuong', name: 'Sườn heo nướng', group: 'Món thịt', featured: false, desc: 'Sườn non ướp mật ong sả ớt nướng mềm ngọt, thơm mùi khói.' },
    { id: 'ba-chi-heo-nuong', name: 'Ba chỉ heo nướng', group: 'Món thịt', featured: false, desc: 'Ba chỉ xém vàng giòn bì, ăn kèm rau sống và mắm nêm.' },
    { id: 'canh-ga-nuong-xien-ga', name: 'Cánh gà nướng & xiên gà', group: 'Món thịt', featured: false, desc: 'Cánh gà và xiên thịt gà ướp đậm vị, nướng vàng ruộm cho cả bàn.' },

    // Canh & Lẩu (6)
    { id: 'canh-chua-ca', name: 'Canh chua cá', group: 'Canh & Lẩu', featured: false, desc: 'Nồi canh chua thanh vị dứa, cà chua, giá đỗ và rau ngò om.' },
    { id: 'canh-rau-tom', name: 'Canh rau tôm', group: 'Canh & Lẩu', featured: false, desc: 'Tô canh nhà nấu ngọt thanh từ tôm giã tay và rau xanh theo mùa.' },
    { id: 'canh-khe-ca-dia', name: 'Canh khế cá dìa', group: 'Canh & Lẩu', featured: false, desc: 'Đặc sản biển miền Trung với cá dìa béo ngọt nấu khế chua dịu.' },
    { id: 'ga-ham-sam-dua-nuoc', name: 'Gà hầm sâm dừa nước', group: 'Canh & Lẩu', featured: false, desc: 'Gà ta hầm mềm với sâm và dừa nước, nước dùng ngọt sâu bổ dưỡng.' },
    { id: 'hai-san-ham-sam-ngoc-linh', name: 'Hải sản hầm sâm Ngọc Linh', group: 'Canh & Lẩu', featured: false, desc: 'Nồi hầm thanh quý từ hải sản tươi và hương sâm Ngọc Linh.' },
    { id: 'lau-hai-san-cu-lao-cham', name: 'Lẩu hải sản Cù Lao Chàm', group: 'Canh & Lẩu', featured: true, desc: 'Nồi lẩu sôi sùng sục giữa bàn với tôm, mực, cá tươi và rau biển.' },

    // Cơm (5)
    { id: 'com-nieu', name: 'Cơm niêu', group: 'Cơm', featured: false, desc: 'Niêu cơm nóng hổi, hạt gạo dẻo thơm có lớp cháy vàng nhẹ.' },
    { id: 'com-trang', name: 'Cơm trắng', group: 'Cơm', featured: false, desc: 'Cơm gạo mới dẻo mềm, ăn cùng các món kho và canh chua.' },
    { id: 'com-ruoc-hue-nhieu-mau', name: 'Cơm ruốc Huế nhiều màu', group: 'Cơm', featured: false, desc: 'Cơm trộn mắm ruốc thơm nhẹ, bày cùng thịt rim, trứng, xoài bào.' },
    { id: 'com-chien-dua-hai-san', name: 'Cơm chiên dứa hải sản', group: 'Cơm', featured: false, desc: 'Hạt cơm tơi vàng quyện tôm mực và vị ngọt thanh của dứa.' },
    { id: 'com-chien-trai-dua', name: 'Cơm chiên trái dừa', group: 'Cơm', featured: false, desc: 'Cơm chiên thơm béo hương dừa non, bày tròn trong trái dừa.' },

    // Tráng miệng & Nước (5)
    { id: 'banh-xu-xe-hoi-an', name: 'Bánh xu xê Hội An', group: 'Tráng miệng & Nước', featured: false, desc: 'Vỏ bánh trong dẻo, nhân đậu xanh dừa nạo ngọt thanh.' },
    { id: 'che-sen-dua-nuoc', name: 'Chè sen dừa nước', group: 'Tráng miệng & Nước', featured: false, desc: 'Hạt sen bùi bở nấu đường phèn mát lành cùng dừa nước giòn.' },
    { id: 'flan-dua-non', name: 'Flan dừa non', group: 'Tráng miệng & Nước', featured: false, desc: 'Bánh flan mịn mượt hòa vị béo dịu của nước cốt dừa non.' },
    { id: 'ruou-hong-dao', name: 'Rượu Hồng Đào', group: 'Tráng miệng & Nước', featured: false, desc: 'Chén rượu quê xứ Quảng êm dịu, nâng ly cho bữa ăn thêm vui.' },
    { id: 'tra-sam-dua-thao-moc', name: 'Trà sâm dứa thảo mộc', group: 'Tráng miệng & Nước', featured: false, desc: 'Ấm trà sâm dứa Đà Nẵng thơm dịu, giải ngấy sau bữa tiệc.' }
  ];

  const CATEGORIES = [
    'Tiêu biểu',
    'Món địa phương',
    'Gỏi & Rau',
    'Món hải sản',
    'Món thịt',
    'Canh & Lẩu',
    'Cơm',
    'Tráng miệng & Nước'
  ];

  const DINO_QUESTIONS = [
    {
      prompt: '“Răng mà ngon dữ rứa hè?” — Từ <strong>“răng”</strong> nghĩa là chi?',
      options: ['Sao / tại sao', 'Cái răng', 'Nhanh lên'],
      correct: 0,
      explain: 'Đúng rồi hè! “Răng” trong tiếng Quảng nghĩa là “sao / tại sao”.'
    },
    {
      prompt: '“Đi ăn GÔM mô rồi?” — Từ <strong>“mô”</strong> nghĩa là chi?',
      options: ['Khi nào', 'Ở đâu', 'Bao nhiêu'],
      correct: 1,
      explain: 'Chuẩn luôn! “Mô” nghĩa là “đâu / ở đâu”.'
    },
    {
      prompt: '“Mâm ni có món chi ngon?” — Từ <strong>“ni”</strong> nghĩa là chi?',
      options: ['Kia', 'Này', 'Nhỏ'],
      correct: 1,
      explain: 'Quá chuẩn hè! “Ni” là “này”, “nớ” là “kia”.'
    },
    {
      prompt: '“Gôm đủ người rồi, ăn thôi hè!” — Từ <strong>“gôm”</strong> gợi điều chi?',
      options: ['Tụ họp, gom về bên nhau', 'Dọn dẹp bàn', 'Đi về sớm'],
      correct: 0,
      explain: 'Đúng điệu GÔM! Tiếng gọi thân thương gom người thương về một mâm.'
    }
  ];

  /* ------------------------------------------------------------------------
     2. Header Scroll State & Fullscreen Menu Overlay
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('siteHeader');
  const menuTrigger = document.getElementById('menuTrigger');
  const navOverlay = document.getElementById('navOverlay');
  const navClose = document.getElementById('navClose');
  const navLinks = document.querySelectorAll('[data-nav-link]');

  function onScrollHeader() {
    if (!siteHeader) return;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  function setMenuOpen(open) {
    if (!navOverlay || !menuTrigger) return;
    navOverlay.classList.toggle('is-open', open);
    navOverlay.setAttribute('aria-hidden', String(!open));
    menuTrigger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
    if (open) {
      navClose && navClose.focus();
    } else {
      menuTrigger.focus();
    }
  }

  menuTrigger && menuTrigger.addEventListener('click', () => setMenuOpen(true));
  navClose && navClose.addEventListener('click', () => setMenuOpen(false));
  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('is-open')) {
      setMenuOpen(false);
    }
  });

  /* ------------------------------------------------------------------------
     3. Hero Video Controls & Reduced Motion
     ------------------------------------------------------------------------ */
  const heroVideo = document.getElementById('heroVideo');
  const videoToggle = document.getElementById('videoToggle');
  const videoToggleText = document.getElementById('videoToggleText');

  if (heroVideo && prefersReducedMotion) {
    heroVideo.pause();
    if (videoToggleText) videoToggleText.textContent = 'Phát video';
  }

  if (heroVideo && videoToggle && videoToggleText) {
    videoToggle.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
        videoToggleText.textContent = 'Tạm dừng';
        videoToggle.setAttribute('aria-label', 'Tạm dừng video nền');
      } else {
        heroVideo.pause();
        videoToggleText.textContent = 'Phát video';
        videoToggle.setAttribute('aria-label', 'Phát video nền');
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Scroll-Driven Reveals via IntersectionObserver
     ------------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll('[data-scene], [data-reveal]');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.22, rootMargin: '0px 0px -6% 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     5. Signature Dishes Spotlight Carousel (44 Dishes, 7 Groups)
     ------------------------------------------------------------------------ */
  const categoryTabsEl = document.getElementById('categoryTabs');
  const dishCarouselEl = document.getElementById('dishCarousel');
  const dishCounterEl = document.getElementById('dishCounter');
  const dishPrevBtn = document.getElementById('dishPrev');
  const dishNextBtn = document.getElementById('dishNext');

  let activeCategory = 'Tiêu biểu';
  let currentDishList = [];

  function formatIndex(num) {
    return String(num).padStart(2, '0');
  }

  function renderCategoryTabs() {
    if (!categoryTabsEl) return;
    categoryTabsEl.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat-tab' + (cat === activeCategory ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(cat === activeCategory));
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeCategory = cat;
        renderCategoryTabs();
        renderDishCarousel();
      });
      categoryTabsEl.appendChild(btn);
    });
  }

  function renderDishCarousel() {
    if (!dishCarouselEl) return;
    currentDishList =
      activeCategory === 'Tiêu biểu'
        ? DISHES.filter((d) => d.featured)
        : DISHES.filter((d) => d.group === activeCategory);

    dishCarouselEl.innerHTML = '';
    currentDishList.forEach((dish) => {
      const card = document.createElement('article');
      card.className = 'dish-slide';
      card.innerHTML = `
        <div class="dish-spotlight">
          <img src="../assets/dishes/${dish.id}.webp" alt="${dish.name}" loading="lazy">
        </div>
        <div>
          <p class="dish-group">${dish.group}</p>
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-desc">${dish.desc}</p>
        </div>
      `;
      dishCarouselEl.appendChild(card);
    });

    dishCarouselEl.scrollTo({ left: 0, behavior: 'auto' });
    updateDishCounter();
  }

  function updateDishCounter() {
    if (!dishCarouselEl || !dishCounterEl || !currentDishList.length) return;
    const firstSlide = dishCarouselEl.querySelector('.dish-slide');
    const step = firstSlide ? firstSlide.offsetWidth + 24 : 360;
    const idx = Math.min(
      currentDishList.length,
      Math.max(1, Math.round(dishCarouselEl.scrollLeft / step) + 1)
    );
    dishCounterEl.textContent = `${formatIndex(idx)} / ${formatIndex(currentDishList.length)}`;
  }

  function scrollCarousel(direction) {
    if (!dishCarouselEl) return;
    const firstSlide = dishCarouselEl.querySelector('.dish-slide');
    const step = firstSlide ? firstSlide.offsetWidth + 24 : 360;
    dishCarouselEl.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  if (dishCarouselEl) {
    dishCarouselEl.addEventListener('scroll', updateDishCounter, { passive: true });
  }
  dishPrevBtn && dishPrevBtn.addEventListener('click', () => scrollCarousel(-1));
  dishNextBtn && dishNextBtn.addEventListener('click', () => scrollCarousel(1));

  renderCategoryTabs();
  renderDishCarousel();

  /* ------------------------------------------------------------------------
     6. Bốc Mâm — Dramatic Circular Table Reveal
     ------------------------------------------------------------------------ */
  const partyMinusBtn = document.getElementById('partyMinus');
  const partyPlusBtn = document.getElementById('partyPlus');
  const partyValueEl = document.getElementById('partyValue');
  const presetChips = document.querySelectorAll('.preset-chip');
  const bayMamBtn = document.getElementById('bayMamBtn');
  const mamOrbitEl = document.getElementById('mamOrbit');
  const mamCenterCaption = document.getElementById('mamCenterCaption');
  const mamManifestTitle = document.getElementById('mamManifestTitle');
  const mamManifestNote = document.getElementById('mamManifestNote');
  const mamDishListEl = document.getElementById('mamDishList');
  const mamBookLink = document.getElementById('mamBookLink');
  const bookGuestsInput = document.getElementById('bookGuests');
  const bookNoteInput = document.getElementById('bookNote');

  let partySize = 4;
  let revealTimers = [];
  let lastRevealedDishes = [];

  function setPartySize(next) {
    partySize = Math.max(1, Math.min(20, next));
    if (partyValueEl) partyValueEl.textContent = `${partySize} người`;
    presetChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.party) === partySize);
    });
  }

  partyMinusBtn && partyMinusBtn.addEventListener('click', () => setPartySize(partySize - 1));
  partyPlusBtn && partyPlusBtn.addEventListener('click', () => setPartySize(partySize + 1));
  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => setPartySize(Number(chip.dataset.party)));
  });

  function pickRandom(list, count) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
  }

  function composeMam(guests) {
    const byGroup = (g) => DISHES.filter((d) => d.group === g);
    let picks = [];

    if (guests <= 2) {
      picks = [
        ...pickRandom(byGroup('Món địa phương'), 1),
        ...pickRandom(byGroup('Gỏi & Rau'), 1),
        ...pickRandom([...byGroup('Món hải sản'), ...byGroup('Món thịt')], 1),
        ...pickRandom(byGroup('Tráng miệng & Nước'), 1)
      ];
    } else if (guests <= 5) {
      picks = [
        ...pickRandom(byGroup('Món địa phương'), 2),
        ...pickRandom(byGroup('Gỏi & Rau'), 1),
        ...pickRandom(byGroup('Món hải sản'), 1),
        ...pickRandom(byGroup('Canh & Lẩu'), 1),
        ...pickRandom(byGroup('Tráng miệng & Nước'), 1)
      ];
    } else if (guests <= 10) {
      picks = [
        ...pickRandom(byGroup('Món địa phương'), 2),
        ...pickRandom(byGroup('Gỏi & Rau'), 1),
        ...pickRandom(byGroup('Món hải sản'), 2),
        ...pickRandom(byGroup('Món thịt'), 1),
        ...pickRandom(byGroup('Canh & Lẩu'), 1),
        ...pickRandom(byGroup('Cơm'), 1)
      ];
    } else {
      picks = [
        ...pickRandom(byGroup('Món địa phương'), 2),
        ...pickRandom(byGroup('Gỏi & Rau'), 2),
        ...pickRandom(byGroup('Món hải sản'), 2),
        ...pickRandom(byGroup('Món thịt'), 1),
        ...pickRandom(byGroup('Canh & Lẩu'), 1),
        ...pickRandom(byGroup('Cơm'), 1),
        ...pickRandom(byGroup('Tráng miệng & Nước'), 1)
      ];
    }
    return picks;
  }

  function clearRevealTimers() {
    revealTimers.forEach((id) => window.clearTimeout(id));
    revealTimers = [];
  }

  function revealMam() {
    if (!mamOrbitEl || !mamDishListEl) return;
    clearRevealTimers();

    const picks = composeMam(partySize);
    lastRevealedDishes = picks;

    mamOrbitEl.innerHTML = '';
    mamDishListEl.innerHTML = '';

    if (mamCenterCaption) {
      mamCenterCaption.textContent = `Mâm ${partySize} người`;
    }
    if (mamManifestTitle) {
      mamManifestTitle.textContent = `Mâm ${picks.length} món cho ${partySize} người`;
    }
    if (mamManifestNote) {
      mamManifestNote.textContent =
        partySize <= 2
          ? 'Gọn gàng mà tròn vị — vừa đủ ngồi lâu hàn huyên.'
          : partySize <= 6
          ? 'Đủ món cuốn, món gỏi, hải sản và nồi canh nóng giữa bàn.'
          : 'Mâm lớn rộn ràng, có thể gọi nhân đôi các món yêu thích khi ghé bàn.';
    }
    if (bayMamBtn) {
      const span = bayMamBtn.querySelector('.gold-btn-text');
      if (span) span.textContent = 'Bày mâm khác';
    }

    const total = picks.length;
    const radiusPct = total >= 9 ? 39 : 37;

    picks.forEach((dish, index) => {
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      const x = 50 + radiusPct * Math.cos(angle);
      const y = 50 + radiusPct * Math.sin(angle);

      const node = document.createElement('div');
      node.className = 'mam-dish-node';
      node.style.setProperty('--x', `${x.toFixed(2)}%`);
      node.style.setProperty('--y', `${y.toFixed(2)}%`);
      node.title = dish.name;
      node.innerHTML = `
        <img src="../assets/dishes/${dish.id}.webp" alt="${dish.name}">
        <span class="mam-dish-badge">${formatIndex(index + 1)}</span>
      `;
      mamOrbitEl.appendChild(node);

      const li = document.createElement('li');
      li.innerHTML = `
        <span class="mam-dish-list-name">${formatIndex(index + 1)}. ${dish.name}</span>
        <span class="mam-dish-list-cat">${dish.group}</span>
      `;
      mamDishListEl.appendChild(li);

      if (prefersReducedMotion) {
        node.classList.add('is-shown');
        li.classList.add('is-shown');
      } else {
        const timerId = window.setTimeout(() => {
          node.classList.add('is-shown');
          li.classList.add('is-shown');
        }, 160 + index * 240);
        revealTimers.push(timerId);
      }
    });
  }

  bayMamBtn && bayMamBtn.addEventListener('click', revealMam);

  if (mamBookLink) {
    mamBookLink.addEventListener('click', () => {
      if (bookGuestsInput) bookGuestsInput.value = String(partySize);
      if (bookNoteInput && lastRevealedDishes.length) {
        const names = lastRevealedDishes.map((d) => d.name).join(', ');
        bookNoteInput.value = `Gợi ý mâm ${partySize} người: ${names}`;
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. Dino Quảng Nam Mini-Game
     ------------------------------------------------------------------------ */
  const dinoPromptEl = document.getElementById('dinoPrompt');
  const dinoOptionsEl = document.getElementById('dinoOptions');
  const dinoFeedbackEl = document.getElementById('dinoFeedback');
  const dinoNextBtn = document.getElementById('dinoNextBtn');

  let dinoIndex = 0;

  function renderDinoQuestion() {
    if (!dinoPromptEl || !dinoOptionsEl || !dinoFeedbackEl) return;
    const q = DINO_QUESTIONS[dinoIndex];
    dinoPromptEl.innerHTML = q.prompt;
    dinoFeedbackEl.textContent = '';
    dinoOptionsEl.innerHTML = '';

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dino-opt';
      btn.textContent = optText;
      btn.addEventListener('click', () => {
        const allBtns = dinoOptionsEl.querySelectorAll('.dino-opt');
        allBtns.forEach((b, i) => {
          b.disabled = true;
          if (i === q.correct) b.classList.add('is-correct');
          else if (i === idx) b.classList.add('is-wrong');
        });
        dinoFeedbackEl.textContent =
          idx === q.correct
            ? q.explain
            : `Chưa trúng rồi hè! Đáp án đúng là “${q.options[q.correct]}”.`;
      });
      dinoOptionsEl.appendChild(btn);
    });
  }

  dinoNextBtn &&
    dinoNextBtn.addEventListener('click', () => {
      dinoIndex = (dinoIndex + 1) % DINO_QUESTIONS.length;
      renderDinoQuestion();
    });

  renderDinoQuestion();

  /* ------------------------------------------------------------------------
     8. Booking Form (Client-Side Confirmation)
     ------------------------------------------------------------------------ */
  const bookingForm = document.getElementById('bookingForm');
  const bookingError = document.getElementById('bookingError');
  const bookingConfirmation = document.getElementById('bookingConfirmation');
  const confirmationSummary = document.getElementById('confirmationSummary');
  const bookingResetBtn = document.getElementById('bookingResetBtn');
  const bookDateInput = document.getElementById('bookDate');

  if (bookDateInput && !bookDateInput.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    bookDateInput.value = `${yyyy}-${mm}-${dd}`;
    bookDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (bookingError) bookingError.textContent = '';

      const formData = new FormData(bookingForm);
      const name = String(formData.get('name') || '').trim();
      const phone = String(formData.get('phone') || '').trim();
      const date = String(formData.get('date') || '').trim();
      const time = String(formData.get('time') || '').trim();
      const guests = Number(formData.get('guests') || 0);

      if (!name || !phone || !date || guests < 1 || guests > 20) {
        if (bookingError) {
          bookingError.textContent = 'Bạn điền giúp GÔM họ tên, số điện thoại, ngày ghé và số khách (1–20) hè.';
        }
        return;
      }

      if (confirmationSummary) {
        confirmationSummary.textContent = `Cảm ơn ${name} (${phone}) — bàn ${guests} người lúc ${time} ngày ${date} tại 25 Lê Hồng Phong đã được ghi nhận.`;
      }
      bookingForm.hidden = true;
      if (bookingConfirmation) bookingConfirmation.hidden = false;
    });
  }

  bookingResetBtn &&
    bookingResetBtn.addEventListener('click', () => {
      if (bookingForm) {
        bookingForm.reset();
        bookingForm.hidden = false;
      }
      if (bookingConfirmation) bookingConfirmation.hidden = true;
      if (bookDateInput) {
        const today = new Date();
        bookDateInput.value = today.toISOString().slice(0, 10);
      }
    });
})();
