/* ============================================================
   GÔM — 07 PLAYFUL BRUTALISM
   Pure Vanilla JS: 44-dish sticker board, Máy Bốc Mâm slot
   machine, Dino Quảng Nam teaser, Booking form + CSS confetti
   ============================================================ */

(() => {
  'use strict';

  const DISHES = [
    // 1. Món địa phương (13)
    { slug: 'banh-xeo-hau-pho-mai', name: 'Bánh xèo hàu phô mai', cat: 'Món địa phương', badge: 'MỚI!', badgeType: 'new', desc: 'Vỏ giòn rụm, hàu béo ngậy kéo sợi phô mai cực đã.' },
    { slug: 'banh-xeo-hai-san', name: 'Bánh xèo hải sản', cat: 'Món địa phương', badge: 'ĐẬM ĐÀ', badgeType: 'hot', desc: 'Tôm mực tươi rói đổ chảo gang nóng hổi, cuốn rau sống hết sẩy.' },
    { slug: 'banh-xeo-truyen-thong', name: 'Bánh xèo truyền thống', cat: 'Món địa phương', desc: 'Chuẩn vị miền Trung chấm tương đậu béo bùi.' },
    { slug: 'cao-lau-hoi-an', name: 'Cao lầu Hội An', cat: 'Món địa phương', badge: 'PHẢI THỬ', badgeType: 'gold', desc: 'Sợi mì dai sần sật, thịt xíu thơm lừng, tóp mỡ giòn tan.' },
    { slug: 'mi-quang-phu-chiem', name: 'Mì Quảng Phú Chiêm', cat: 'Món địa phương', badge: 'BÁN CHẠY', badgeType: 'hot', desc: 'Nước nhưn đậm đà, bánh tráng mè bẻ rộp rộp.' },
    { slug: 'bun-bo-hue', name: 'Bún bò Huế', cat: 'Món địa phương', desc: 'Nước dùng thơm sả ruốc, cay nhẹ ấm bụng từ sáng sớm.' },
    { slug: 'pho-bo', name: 'Phở bò', cat: 'Món địa phương', desc: 'Nước hầm xương trong ngọt, thịt bò mềm tái chuẩn gu.' },
    { slug: 'banh-mi-thit-nuong', name: 'Bánh mì thịt nướng', cat: 'Món địa phương', desc: 'Ổ bánh mì nóng giòn kẹp xiên thịt nướng sả thơm phức.' },
    { slug: 'banh-trang-dai-loc', name: 'Bánh tráng Đại Lộc', cat: 'Món địa phương', badge: 'ĐẬM ĐÀ', badgeType: 'gold', desc: 'Cuốn thịt luộc hai đầu da, chấm mắm nêm dứa bằm.' },
    { slug: 'xien-nuong-hoi-an', name: 'Xiên nướng Hội An', cat: 'Món địa phương', desc: 'Nướng than hồng xèo xèo, cuốn bánh tráng chấm tương.' },
    { slug: 'nem-lui-cuon', name: 'Nem lụi cuốn', cat: 'Món địa phương', desc: 'Nem nướng thơm mùi sả, ăn tới đâu cuốn tới đó.' },
    { slug: 'bo-la-lot-cuon', name: 'Bò lá lốt cuốn', cat: 'Món địa phương', desc: 'Bò bằm bọc lá lốt nướng cháy cạnh, thơm nức mũi.' },
    { slug: 'cha-ram-tom-dat', name: 'Chả ram tôm đất', cat: 'Món địa phương', badge: 'BÁN CHẠY', badgeType: 'hot', desc: 'Cuốn nhỏ xíu giòn rụm, tôm đất ngọt thịt ăn hoài không ngán.' },

    // 2. Gỏi & Rau (5)
    { slug: 'goi-xoai-hai-san-dua-nuoc', name: 'Gỏi xoài hải sản dừa nước', cat: 'Gỏi & Rau', badge: 'MỚI!', badgeType: 'new', desc: 'Xoài chua thanh, dừa nước giòn mát trộn hải sản tươi.' },
    { slug: 'goi-buoi-tom-muc-dua-nuoc', name: 'Gỏi bưởi tôm mực dừa nước', cat: 'Gỏi & Rau', desc: 'Tép bưởi mọng nước quyện tôm mực, khai vị mở màn cực đỉnh.' },
    { slug: 'goi-ngo-sen-hue', name: 'Gỏi ngó sen Huế', cat: 'Gỏi & Rau', desc: 'Ngó sen giòn sần sật, chua ngọt vừa miệng kèm phồng tôm.' },
    { slug: 'rau-muong-xao-oc-mong-tay', name: 'Rau muống xào ốc móng tay', cat: 'Gỏi & Rau', badge: 'ĐẬM ĐÀ', badgeType: 'gold', desc: 'Lửa lớn xào tỏi thơm lừng, ốc móng tay dai ngọt.' },
    { slug: 'ngu-qua-luoc-kho-quet', name: 'Ngũ quả luộc kho quẹt', cat: 'Gỏi & Rau', desc: 'Rau củ luộc xanh mướt chấm niêu kho quẹt tóp mỡ kẹo dẻo.' },

    // 3. Món hải sản (7)
    { slug: 'tom-sot-bo-toi', name: 'Tôm sốt bơ tỏi', cat: 'Món hải sản', desc: 'Tôm sú áo sốt bơ tỏi béo thơm, chấm bánh mì hết sẩy.' },
    { slug: 'muc-nuong-sa-te', name: 'Mực nướng sa tế', cat: 'Món hải sản', badge: 'CAY ĐÃ', badgeType: 'hot', desc: 'Mực ống dày mình nướng sa tế cay tê, nhâm nhi cực cuốn.' },
    { slug: 'hau-nuong-pho-mai', name: 'Hàu nướng phô mai', cat: 'Món hải sản', desc: 'Hàu sữa béo múp phủ phô mai tan chảy nóng hổi.' },
    { slug: 'so-diep-nuong-pho-mai', name: 'Sò điệp nướng phô mai', cat: 'Món hải sản', desc: 'Cồi sò điệp ngọt giòn quyện phô mai béo ngậy.' },
    { slug: 'oc-huong-sot-trung-muoi', name: 'Ốc hương sốt trứng muối', cat: 'Món hải sản', badge: 'BÁN CHẠY', badgeType: 'hot', desc: 'Sốt trứng muối sánh mịn bùi béo, vét sạch đĩa mới chịu.' },
    { slug: 'hai-san-sot-bo-toi', name: 'Hải sản sốt bơ tỏi', cat: 'Món hải sản', badge: 'MỚI!', badgeType: 'new', desc: 'Đủ loại hải sản tắm sốt bơ tỏi thơm lừng cho cả bàn.' },
    { slug: 'ca-bop-kho-tieu', name: 'Cá bớp kho tiêu', cat: 'Món hải sản', desc: 'Cá bớp chắc thịt kho tộ tiêu xanh cay nồng, hao cơm cực kỳ.' },

    // 4. Món thịt (3)
    { slug: 'suon-heo-nuong', name: 'Sườn heo nướng', cat: 'Món thịt', badge: 'ĐẬM ĐÀ', badgeType: 'gold', desc: 'Sườn ướp mật ong sả ớt nướng xém cạnh mềm mọng.' },
    { slug: 'ba-chi-heo-nuong', name: 'Ba chỉ heo nướng', cat: 'Món thịt', desc: 'Ba chỉ nướng giòn bì thơm mỡ, cuốn rau chấm mắm tỏi.' },
    { slug: 'canh-ga-nuong-xien-ga', name: 'Cánh gà nướng & xiên gà', cat: 'Món thịt', desc: 'Da gà vàng óng giòn thơm, hội bạn gọi là sạch đĩa.' },

    // 5. Canh & Lẩu (6)
    { slug: 'canh-chua-ca', name: 'Canh chua cá', cat: 'Canh & Lẩu', desc: 'Chua thanh vị dứa cà chua, cá tươi ngọt nước đậm hồn quê.' },
    { slug: 'canh-rau-tom', name: 'Canh rau tôm', cat: 'Canh & Lẩu', desc: 'Tô canh ngọt lành tôm giã tay, húp một muỗng mát ruột.' },
    { slug: 'canh-khe-ca-dia', name: 'Canh khế cá dìa', cat: 'Canh & Lẩu', badge: 'PHẢI THỬ', badgeType: 'gold', desc: 'Đặc sản xứ Quảng: cá dìa béo mềm nấu khế chua dịu.' },
    { slug: 'ga-ham-sam-dua-nuoc', name: 'Gà hầm sâm dừa nước', cat: 'Canh & Lẩu', desc: 'Nước hầm thanh ngọt bổ dưỡng, thịt gà mềm rục.' },
    { slug: 'hai-san-ham-sam-ngoc-linh', name: 'Hải sản hầm sâm Ngọc Linh', cat: 'Canh & Lẩu', badge: 'MỚI!', badgeType: 'new', desc: 'Hải sản tươi hầm sâm Ngọc Linh thơm dịu, bồi bổ cả mâm.' },
    { slug: 'lau-hai-san-cu-lao-cham', name: 'Lẩu hải sản Cù Lao Chàm', cat: 'Canh & Lẩu', badge: 'BÁN CHẠY', badgeType: 'hot', desc: 'Nồi lẩu sôi sùng sục đầy ắp hải sản, quây tròn ấm bụng.' },

    // 6. Cơm (5)
    { slug: 'com-nieu', name: 'Cơm niêu', cat: 'Cơm', desc: 'Hạt cơm dẻo thơm có lớp cháy đáy niêu giòn rụm.' },
    { slug: 'com-trang', name: 'Cơm trắng', cat: 'Cơm', desc: 'Gạo thơm nấu dẻo vừa, ăn kèm cá kho tiêu là hết bài.' },
    { slug: 'com-ruoc-hue-nhieu-mau', name: 'Cơm ruốc Huế nhiều màu', cat: 'Cơm', badge: 'PHẢI THỬ', badgeType: 'gold', desc: 'Rực rỡ sắc màu từ rau củ tự nhiên, đậm vị ruốc Huế.' },
    { slug: 'com-chien-dua-hai-san', name: 'Cơm chiên dứa hải sản', cat: 'Cơm', desc: 'Hạt cơm tơi ráo quyện vị dứa chua ngọt và hải sản.' },
    { slug: 'com-chien-trai-dua', name: 'Cơm chiên trái dừa', cat: 'Cơm', desc: 'Bưng ra nguyên trái dừa thơm béo, chụp hình cực xinh.' },

    // 7. Tráng miệng & Nước (5)
    { slug: 'banh-xu-xe-hoi-an', name: 'Bánh xu xê Hội An', cat: 'Tráng miệng & Nước', desc: 'Vỏ trong dai nhẹ, nhân đậu xanh dừa sợi ngọt thanh.' },
    { slug: 'che-sen-dua-nuoc', name: 'Chè sen dừa nước', cat: 'Tráng miệng & Nước', badge: 'MÁT LỊM', badgeType: 'new', desc: 'Hạt sen bùi bùi kèm dừa nước dẻo mát giải nhiệt Đà Nẵng.' },
    { slug: 'flan-dua-non', name: 'Flan dừa non', cat: 'Tráng miệng & Nước', desc: 'Mềm mịn núng nính, thơm mùi dừa non béo nhẹ.' },
    { slug: 'ruou-hong-dao', name: 'Rượu Hồng Đào', cat: 'Tráng miệng & Nước', badge: 'QUẢNG NAM', badgeType: 'hot', desc: 'Chưa uống đã thấy tình xứ Quảng — nâng ly cho vui bữa.' },
    { slug: 'tra-sam-dua-thao-moc', name: 'Trà sâm dứa thảo mộc', cat: 'Tráng miệng & Nước', desc: 'Thơm dịu mùi lá dứa, uống mát rười rượi cả buổi.' }
  ];

  const CATEGORIES = [
    'Tất cả',
    'Món địa phương',
    'Gỏi & Rau',
    'Món hải sản',
    'Món thịt',
    'Canh & Lẩu',
    'Cơm',
    'Tráng miệng & Nước'
  ];

  const PAD_COLORS = ['#FFF1CC', '#FFD9EC', '#D6F8E3', '#D9F6F8', '#FFE4D6'];
  const ROTATIONS = [-2.2, 1.6, -1.2, 2.1, -1.8, 1.2, -0.9, 1.9];

  const DINO_LINES = [
    { phrase: '“Hôm nay đi ăn chi hè?”', meaning: 'Dịch nghĩa: Hôm nay đi ăn gì thế?' },
    { phrase: '“Gôm hết lại đây biểu nghe!”', meaning: 'Dịch nghĩa: Tụ họp hết lại đây bảo cho nghe nè!' },
    { phrase: '“Mì Quảng chỗ ni ngon nhức nách luôn đó!”', meaning: 'Dịch nghĩa: Mì Quảng chỗ này ngon xuất sắc luôn đấy!' },
    { phrase: '“Răng mà ngồi ngó miết rứa? Gắp đi chớ!”', meaning: 'Dịch nghĩa: Sao cứ ngồi nhìn mãi thế? Gắp ăn đi chứ!' },
    { phrase: '“Mô tê răng rứa, ăn xong rồi tính!”', meaning: 'Dịch nghĩa: Mọi chuyện để sau, ăn ngon đã rồi tính!' },
    { phrase: '“Chừ đi mấy người để GÔM xếp bàn rộng hè?”', meaning: 'Dịch nghĩa: Giờ đi mấy người để GÔM xếp bàn rộng nào?' }
  ];

  const REEL_POOLS = [
    DISHES.filter((d) => d.cat === 'Món địa phương' || d.cat === 'Gỏi & Rau'),
    DISHES.filter((d) => d.cat === 'Món hải sản' || d.cat === 'Món thịt'),
    DISHES.filter((d) => d.cat === 'Canh & Lẩu' || d.cat === 'Cơm' || d.cat === 'Tráng miệng & Nước')
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // MOBILE DRAWER
  // ============================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mobileDrawer.hidden = expanded;
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.hidden = true;
      });
    });
  }

  // ============================================================
  // MENU STICKER BOARD
  // ============================================================
  const menuFiltersEl = document.getElementById('menuFilters');
  const menuGridEl = document.getElementById('menuGrid');
  const menuCountEl = document.getElementById('menuCount');
  const menuMoreWrapEl = document.getElementById('menuMoreWrap');
  const toggleAllDishesBtn = document.getElementById('toggleAllDishesBtn');

  let activeCategory = 'Tất cả';
  let showAllInAllTab = false;
  const INITIAL_ALL_LIMIT = 12;

  function renderFilters() {
    if (!menuFiltersEl) return;
    menuFiltersEl.innerHTML = '';

    CATEGORIES.forEach((cat) => {
      const count = cat === 'Tất cả' ? DISHES.length : DISHES.filter((d) => d.cat === cat).length;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-chip' + (cat === activeCategory ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(cat === activeCategory));
      btn.innerHTML = `<span>${cat}</span> <span class="filter-chip__count">${count}</span>`;
      btn.addEventListener('click', () => {
        activeCategory = cat;
        renderFilters();
        renderDishes();
      });
      menuFiltersEl.appendChild(btn);
    });
  }

  function renderDishes() {
    if (!menuGridEl) return;

    const filtered = activeCategory === 'Tất cả'
      ? DISHES
      : DISHES.filter((d) => d.cat === activeCategory);

    const visible = (activeCategory === 'Tất cả' && !showAllInAllTab)
      ? filtered.slice(0, INITIAL_ALL_LIMIT)
      : filtered;

    if (menuCountEl) {
      menuCountEl.textContent = `${filtered.length} món`;
    }

    menuGridEl.innerHTML = '';

    visible.forEach((dish, idx) => {
      const card = document.createElement('article');
      card.className = 'dish-card';
      const rot = ROTATIONS[idx % ROTATIONS.length];
      const padBg = PAD_COLORS[idx % PAD_COLORS.length];
      card.style.setProperty('--rot', `${rot}deg`);
      card.style.setProperty('--pad-bg', padBg);

      const badgeHtml = dish.badge
        ? `<span class="dish-card__badge dish-card__badge--${dish.badgeType || 'gold'}">${dish.badge}</span>`
        : '';

      card.innerHTML = `
        ${badgeHtml}
        <div class="dish-card__media">
          <img src="../assets/dishes/${dish.slug}.webp" alt="${dish.name}" loading="lazy">
        </div>
        <span class="dish-card__cat">${dish.cat}</span>
        <h3 class="dish-card__name">${dish.name}</h3>
        <p class="dish-card__desc">${dish.desc}</p>
      `;
      menuGridEl.appendChild(card);
    });

    if (menuMoreWrapEl && toggleAllDishesBtn) {
      if (activeCategory === 'Tất cả') {
        menuMoreWrapEl.hidden = false;
        toggleAllDishesBtn.textContent = showAllInAllTab
          ? 'Thu gọn bớt cho đỡ hoa mắt ↑'
          : `Bung hết ${DISHES.length} món luôn hè! ↓`;
      } else {
        menuMoreWrapEl.hidden = true;
      }
    }
  }

  if (toggleAllDishesBtn) {
    toggleAllDishesBtn.addEventListener('click', () => {
      showAllInAllTab = !showAllInAllTab;
      renderDishes();
    });
  }

  renderFilters();
  renderDishes();

  // ============================================================
  // MÁY BỐC MÂM — 3-REEL SLOT MACHINE
  // ============================================================
  const guestRange = document.getElementById('guestRange');
  const guestCountDisplay = document.getElementById('guestCountDisplay');
  const guestMinus = document.getElementById('guestMinus');
  const guestPlus = document.getElementById('guestPlus');
  const presetChips = document.querySelectorAll('.preset-chip');
  const spinBtn = document.getElementById('spinBtn');
  const spinBtnText = document.getElementById('spinBtnText');
  const slotStatus = document.getElementById('slotStatus');
  const feastTitle = document.getElementById('feastTitle');
  const feastList = document.getElementById('feastList');
  const feastNote = document.getElementById('feastNote');
  const applyFeastBtn = document.getElementById('applyFeastToBooking');

  const reelBoxes = [
    document.querySelector('[data-reel="0"]'),
    document.querySelector('[data-reel="1"]'),
    document.querySelector('[data-reel="2"]')
  ];
  const reelImgs = [
    document.getElementById('reelImg0'),
    document.getElementById('reelImg1'),
    document.getElementById('reelImg2')
  ];
  const reelNames = [
    document.getElementById('reelName0'),
    document.getElementById('reelName1'),
    document.getElementById('reelName2')
  ];

  let currentGuests = 4;
  let isSpinning = false;
  let currentFeastDishes = [];

  function pickRandom(arr, excludeSlugs = new Set()) {
    const pool = arr.filter((item) => !excludeSlugs.has(item.slug));
    const source = pool.length ? pool : arr;
    return source[Math.floor(Math.random() * source.length)];
  }

  function updateGuestUI(val) {
    currentGuests = Math.max(1, Math.min(20, Number(val) || 1));
    if (guestRange) guestRange.value = String(currentGuests);
    if (guestCountDisplay) guestCountDisplay.textContent = `${currentGuests} người`;
    if (slotStatus && !isSpinning) {
      slotStatus.textContent = `Sẵn sàng quay mâm cho ${currentGuests} người!`;
    }
    presetChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.guests) === currentGuests);
    });
  }

  if (guestRange) {
    guestRange.addEventListener('input', (e) => updateGuestUI(e.target.value));
  }
  if (guestMinus) {
    guestMinus.addEventListener('click', () => updateGuestUI(currentGuests - 1));
  }
  if (guestPlus) {
    guestPlus.addEventListener('click', () => updateGuestUI(currentGuests + 1));
  }
  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => updateGuestUI(chip.dataset.guests));
  });

  function buildFeast(reelWinners, guests) {
    const used = new Set(reelWinners.map((d) => d.slug));
    const list = [...reelWinners];

    let targetCount = 3;
    if (guests >= 3 && guests <= 5) targetCount = 5;
    else if (guests >= 6 && guests <= 9) targetCount = 7;
    else if (guests >= 10 && guests <= 14) targetCount = 9;
    else if (guests >= 15) targetCount = 11;

    while (list.length < targetCount) {
      const next = pickRandom(DISHES, used);
      used.add(next.slug);
      list.push(next);
    }

    currentFeastDishes = list;

    if (feastTitle) {
      let vibe = 'gọn gàng mà đậm đà';
      if (guests >= 4 && guests <= 8) vibe = 'rôm rả đầy bàn';
      else if (guests >= 9) vibe = 'đại tiệc miền Trung linh đình';
      feastTitle.textContent = `Mâm ${guests} người (${list.length} món) — ${vibe}!`;
    }

    if (feastList) {
      feastList.innerHTML = '';
      list.forEach((dish) => {
        const li = document.createElement('li');
        li.className = 'feast-item';
        li.innerHTML = `
          <img src="../assets/dishes/${dish.slug}.webp" alt="">
          <span>${dish.name}</span>
        `;
        feastList.appendChild(li);
      });
    }

    if (feastNote) {
      if (guests <= 2) {
        feastNote.textContent = 'Mách nhỏ: Đi ít người cứ gọi thêm ly Trà sâm dứa thảo mộc là vừa vặn hết sẩy!';
      } else if (guests <= 8) {
        feastNote.textContent = 'Mách nhỏ: Nhóm cỡ này thêm niêu Cơm niêu hoặc chén Rượu Hồng Đào là cười quên lối về!';
      } else {
        feastNote.textContent = 'Mách nhỏ: Bàn đông trên 9 người nhớ đặt trước để tụi mình ghép bàn dài & lên món cùng lúc nha!';
      }
    }
  }

  function setReelDisplay(idx, dish) {
    if (reelImgs[idx]) {
      reelImgs[idx].src = `../assets/dishes/${dish.slug}.webp`;
      reelImgs[idx].alt = dish.name;
    }
    if (reelNames[idx]) {
      reelNames[idx].textContent = dish.name;
    }
  }

  function spinSlotMachine() {
    if (isSpinning) return;
    isSpinning = true;

    if (spinBtn) spinBtn.disabled = true;
    if (spinBtnText) spinBtnText.textContent = 'ĐANG QUAY MÂM...';
    if (slotStatus) slotStatus.textContent = `Đang xào bài chọn mâm ngon cho ${currentGuests} người...`;

    const winners = [
      pickRandom(REEL_POOLS[0]),
      pickRandom(REEL_POOLS[1]),
      pickRandom(REEL_POOLS[2])
    ];

    if (prefersReducedMotion) {
      winners.forEach((dish, i) => setReelDisplay(i, dish));
      buildFeast(winners, currentGuests);
      isSpinning = false;
      if (spinBtn) spinBtn.disabled = false;
      if (spinBtnText) spinBtnText.textContent = 'GẠT CẦN BỐC MÂM!';
      if (slotStatus) slotStatus.textContent = `Chốt xong mâm ${currentGuests} người! Không ưng cứ gạt tiếp hè!`;
      return;
    }

    const stopDelays = [750, 1250, 1750];
    const intervals = [];

    reelBoxes.forEach((box, idx) => {
      if (box) {
        box.classList.remove('is-landed');
        box.classList.add('is-spinning');
      }

      intervals[idx] = window.setInterval(() => {
        const temp = pickRandom(REEL_POOLS[idx]);
        setReelDisplay(idx, temp);
      }, 85);

      window.setTimeout(() => {
        window.clearInterval(intervals[idx]);
        setReelDisplay(idx, winners[idx]);
        if (box) {
          box.classList.remove('is-spinning');
          box.classList.add('is-landed');
        }

        if (idx === 2) {
          buildFeast(winners, currentGuests);
          isSpinning = false;
          if (spinBtn) spinBtn.disabled = false;
          if (spinBtnText) spinBtnText.textContent = 'GẠT CẦN BỐC MÂM LẠI!';
          if (slotStatus) slotStatus.textContent = `Ra mâm cho ${currentGuests} người rồi nè! Thấy đã chưa?`;
        }
      }, stopDelays[idx]);
    });
  }

  if (spinBtn) {
    spinBtn.addEventListener('click', spinSlotMachine);
  }

  // Initial feast population
  buildFeast([DISHES[4], DISHES[22], DISHES[33]], currentGuests);

  // Apply feast to booking form
  if (applyFeastBtn) {
    applyFeastBtn.addEventListener('click', () => {
      const bookGuests = document.getElementById('bookGuests');
      const bookNote = document.getElementById('bookNote');
      const bookingSection = document.getElementById('dat-ban');

      if (bookGuests) bookGuests.value = String(currentGuests);
      if (bookNote) {
        const names = currentFeastDishes.map((d) => d.name).join(', ');
        bookNote.value = `Mâm gợi ý (${currentGuests} người): ${names}.`;
      }
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  }

  // ============================================================
  // DINO QUẢNG NAM INTERACTIVE TEASER
  // ============================================================
  const dinoSpeakBtn = document.getElementById('dinoSpeakBtn');
  const dinoPhrase = document.getElementById('dinoPhrase');
  const dinoMeaning = document.getElementById('dinoMeaning');
  let dinoIdx = 0;

  if (dinoSpeakBtn && dinoPhrase && dinoMeaning) {
    dinoSpeakBtn.addEventListener('click', () => {
      dinoIdx = (dinoIdx + 1) % DINO_LINES.length;
      dinoPhrase.textContent = DINO_LINES[dinoIdx].phrase;
      dinoMeaning.textContent = DINO_LINES[dinoIdx].meaning;
    });
  }

  // ============================================================
  // BOOKING FORM + PURE CSS/DOM CONFETTI
  // ============================================================
  const bookingForm = document.getElementById('bookingForm');
  const formError = document.getElementById('formError');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const bookingSummary = document.getElementById('bookingSummary');
  const resetBookingBtn = document.getElementById('resetBookingBtn');
  const bookDateInput = document.getElementById('bookDate');
  const confettiLayer = document.getElementById('confettiLayer');

  // Set default date to today
  if (bookDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const iso = `${yyyy}-${mm}-${dd}`;
    bookDateInput.value = iso;
    bookDateInput.min = iso;
  }

  function launchConfetti() {
    if (!confettiLayer || prefersReducedMotion) return;
    const colors = ['#B81D2B', '#F2B830', '#FF7AB8', '#2CC974', '#5CE1E6', '#FFF6E5'];
    const count = 48;

    for (let i = 0; i < count; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.setProperty('--dur', `${1.6 + Math.random() * 1.4}s`);
      piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
      piece.style.setProperty('--spin', `${(Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 420)}deg`);
      piece.style.animationDelay = `${Math.random() * 0.28}s`;
      confettiLayer.appendChild(piece);

      window.setTimeout(() => {
        piece.remove();
      }, 3400);
    }
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formError) formError.hidden = true;

      const name = (document.getElementById('bookName')?.value || '').trim();
      const phone = (document.getElementById('bookPhone')?.value || '').trim();
      const guests = Number(document.getElementById('bookGuests')?.value || 0);
      const date = document.getElementById('bookDate')?.value || '';
      const time = document.getElementById('bookTime')?.value || '';
      const note = (document.getElementById('bookNote')?.value || '').trim();

      if (!name || !phone || !date || guests < 1 || guests > 20) {
        if (formError) {
          formError.textContent = 'Ê khoan! Bạn điền đủ tên, số điện thoại, ngày ghé và số người (1–20) nha!';
          formError.hidden = false;
        }
        return;
      }

      if (bookingSummary) {
        const noteLine = note ? `<br><strong>Ghi chú:</strong> ${note.replace(/</g, '&lt;')}` : '';
        bookingSummary.innerHTML = `
          <strong>Khách:</strong> ${name.replace(/</g, '&lt;')} (${phone.replace(/</g, '&lt;')})<br>
          <strong>Thời gian:</strong> ${time} · ngày ${date}<br>
          <strong>Số lượng:</strong> ${guests} người${noteLine}
        `;
      }

      bookingForm.hidden = true;
      if (bookingSuccess) bookingSuccess.hidden = false;
      launchConfetti();
    });
  }

  if (resetBookingBtn && bookingForm && bookingSuccess) {
    resetBookingBtn.addEventListener('click', () => {
      bookingSuccess.hidden = true;
      bookingForm.hidden = false;
      bookingForm.reset();
      if (bookDateInput) {
        const today = new Date();
        const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        bookDateInput.value = iso;
      }
      const bookGuests = document.getElementById('bookGuests');
      if (bookGuests) bookGuests.value = String(currentGuests);
    });
  }
})();
