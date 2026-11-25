(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* =========================================================
     1. DATA — 44 món, 7 nhóm (đúng đường dẫn ../assets/dishes/)
     ========================================================= */
  const CATEGORIES = [
    'Tất cả',
    'Món địa phương',
    'Gỏi & Rau',
    'Món hải sản',
    'Món thịt',
    'Canh & Lẩu',
    'Cơm',
    'Tráng miệng & Nước',
  ];

  const DISHES = [
    // Món địa phương (13)
    { slug: 'banh-xeo-hau-pho-mai', name: 'Bánh xèo hàu phô mai', cat: 'Món địa phương', desc: 'Vỏ giòn rụm, hàu sữa béo quyện phô mai kéo sợi.' },
    { slug: 'banh-xeo-hai-san', name: 'Bánh xèo hải sản', cat: 'Món địa phương', desc: 'Tôm mực tươi rói, cuốn rau sống chấm nước lèo.' },
    { slug: 'banh-xeo-truyen-thong', name: 'Bánh xèo truyền thống', cat: 'Món địa phương', desc: 'Giòn vàng vị nghệ miền Trung, ăn kèm mắm nêm.' },
    { slug: 'cao-lau-hoi-an', name: 'Cao lầu Hội An', cat: 'Món địa phương', desc: 'Sợi mì dai tro củi, thịt xá xíu và tóp mỡ giòn.' },
    { slug: 'mi-quang-phu-chiem', name: 'Mì Quảng Phú Chiêm', cat: 'Món địa phương', desc: 'Nước nhưn đậm đà, bánh tráng mè nướng giòn tan.' },
    { slug: 'bun-bo-hue', name: 'Bún bò Huế', cat: 'Món địa phương', desc: 'Thơm sả ruốc Huế, giò heo mềm và chả cua.' },
    { slug: 'pho-bo', name: 'Phở bò', cat: 'Món địa phương', desc: 'Nước dùng ninh xương trong ngọt, thịt bò mềm.' },
    { slug: 'banh-mi-thit-nuong', name: 'Bánh mì thịt nướng', cat: 'Món địa phương', desc: 'Ổ giòn nóng, thịt nướng than hoa và đồ chua.' },
    { slug: 'banh-trang-dai-loc', name: 'Bánh tráng cuốn thịt heo Đại Lộc', cat: 'Món địa phương', desc: 'Bánh tráng phơi sương, mắm nêm dứa đậm vị.' },
    { slug: 'xien-nuong-hoi-an', name: 'Xiên nướng Hội An', cat: 'Món địa phương', desc: 'Thịt ướp sả mật ong nướng than thơm lừng.' },
    { slug: 'nem-lui-cuon', name: 'Nem lụi cuốn', cat: 'Món địa phương', desc: 'Nem nướng xiên sả, chấm tương đậu phộng béo.' },
    { slug: 'bo-la-lot-cuon', name: 'Bò lá lốt cuốn', cat: 'Món địa phương', desc: 'Bò băm cuộn lá lốt nướng thơm, cuốn bánh tráng.' },
    { slug: 'cha-ram-tom-dat', name: 'Chả ram tôm đất', cat: 'Món địa phương', desc: 'Giòn rụm từng cuốn nhỏ, ngọt thịt tôm đất.' },

    // Gỏi & Rau (5)
    { slug: 'goi-xoai-hai-san-dua-nuoc', name: 'Gỏi xoài hải sản dừa nước', cat: 'Gỏi & Rau', desc: 'Xoài xanh giòn chua, tôm mực tươi và dừa nước.' },
    { slug: 'goi-buoi-tom-muc-dua-nuoc', name: 'Gỏi bưởi tôm mực dừa nước', cat: 'Gỏi & Rau', desc: 'Tép bưởi mọng nước trộn tôm mực chua ngọt.' },
    { slug: 'goi-ngo-sen-hue', name: 'Gỏi ngó sen Huế', cat: 'Gỏi & Rau', desc: 'Ngó sen trắng giòn, tôm thịt và đậu phộng rang.' },
    { slug: 'rau-muong-xao-oc-mong-tay', name: 'Rau muống xào ốc móng tay', cat: 'Gỏi & Rau', desc: 'Ốc móng tay giòn ngọt xào tỏi lửa lớn.' },
    { slug: 'ngu-qua-luoc-kho-quet', name: 'Ngũ quả luộc kho quẹt', cat: 'Gỏi & Rau', desc: 'Rau củ luộc xanh mướt chấm kho quẹt tóp mỡ.' },

    // Món hải sản (7)
    { slug: 'tom-sot-bo-toi', name: 'Tôm sốt bơ tỏi', cat: 'Món hải sản', desc: 'Tôm sú áo sốt bơ tỏi thơm béo, chấm bánh mì.' },
    { slug: 'muc-nuong-sa-te', name: 'Mực nướng sa tế', cat: 'Món hải sản', desc: 'Mực ống tươi nướng sa tế cay nồng miền Trung.' },
    { slug: 'hau-nuong-pho-mai', name: 'Hàu nướng phô mai', cat: 'Món hải sản', desc: 'Hàu sữa béo ngậy phủ phô mai nướng vàng.' },
    { slug: 'so-diep-nuong-pho-mai', name: 'Sò điệp nướng phô mai', cat: 'Món hải sản', desc: 'Cồi sò điệp ngọt thịt, béo thơm phô mai.' },
    { slug: 'oc-huong-sot-trung-muoi', name: 'Ốc hương sốt trứng muối', cat: 'Món hải sản', desc: 'Ốc hương giòn sần sật quyện sốt trứng muối sánh.' },
    { slug: 'hai-san-sot-bo-toi', name: 'Hải sản sốt bơ tỏi', cat: 'Món hải sản', desc: 'Mâm hải sản tổng hợp đẫm sốt bơ tỏi thơm.' },
    { slug: 'ca-bop-kho-tieu', name: 'Cá bớp kho tiêu', cat: 'Món hải sản', desc: 'Cá bớp kho tộ sánh kẹo, cay thơm tiêu xanh.' },

    // Món thịt (3)
    { slug: 'suon-heo-nuong', name: 'Sườn heo nướng', cat: 'Món thịt', desc: 'Sườn non ướp mật ong nướng xém cạnh mềm ngọt.' },
    { slug: 'ba-chi-heo-nuong', name: 'Ba chỉ heo nướng', cat: 'Món thịt', desc: 'Ba chỉ nướng giòn bì, ăn kèm rau thơm.' },
    { slug: 'canh-ga-nuong-xien-ga', name: 'Cánh gà nướng & xiên gà', cat: 'Món thịt', desc: 'Da giòn đậm vị, ăn vui tay cho cả hội.' },

    // Canh & Lẩu (6)
    { slug: 'canh-chua-ca', name: 'Canh chua cá', cat: 'Canh & Lẩu', desc: 'Vị chua thanh dứa cà, rau thơm dậy mùi.' },
    { slug: 'canh-rau-tom', name: 'Canh rau tôm', cat: 'Canh & Lẩu', desc: 'Canh rau ngọt mát nấu tôm tươi băm nhuyễn.' },
    { slug: 'canh-khe-ca-dia', name: 'Canh khế cá dìa', cat: 'Canh & Lẩu', desc: 'Cá dìa biển nấu khế chua dịu chuẩn vị Đà Nẵng.' },
    { slug: 'ga-ham-sam-dua-nuoc', name: 'Gà hầm sâm dừa nước', cat: 'Canh & Lẩu', desc: 'Nồi gà hầm thanh ngọt, bổ dưỡng ấm bụng.' },
    { slug: 'hai-san-ham-sam-ngoc-linh', name: 'Hải sản hầm sâm Ngọc Linh', cat: 'Canh & Lẩu', desc: 'Hải sản tươi hầm sâm Ngọc Linh thơm dịu.' },
    { slug: 'lau-hai-san-cu-lao-cham', name: 'Lẩu hải sản Cù Lao Chàm', cat: 'Canh & Lẩu', desc: 'Nồi lẩu chua cay nghi ngút, đầy ắp hải sản.' },

    // Cơm (5)
    { slug: 'com-nieu', name: 'Cơm niêu', cat: 'Cơm', desc: 'Hạt cơm dẻo thơm, đáy niêu có lớp cháy giòn.' },
    { slug: 'com-trang', name: 'Cơm trắng', cat: 'Cơm', desc: 'Cơm gạo mới dẻo thơm ăn kèm món kho.' },
    { slug: 'com-ruoc-hue-nhieu-mau', name: 'Cơm ruốc Huế nhiều màu', cat: 'Cơm', desc: 'Đủ sắc vị Huế với mắm ruốc, xoài, trứng, thịt.' },
    { slug: 'com-chien-dua-hai-san', name: 'Cơm chiên dứa hải sản', cat: 'Cơm', desc: 'Hạt cơm tơi vàng, thơm dứa chín và tôm mực.' },
    { slug: 'com-chien-trai-dua', name: 'Cơm chiên trái dừa', cat: 'Cơm', desc: 'Cơm chiên béo dịu hương dừa, trình bày đẹp mắt.' },

    // Tráng miệng & Nước (5)
    { slug: 'banh-xu-xe-hoi-an', name: 'Bánh xu xê Hội An', cat: 'Tráng miệng & Nước', desc: 'Dẻo trong nhân đậu xanh dừa sợi ngọt thanh.' },
    { slug: 'che-sen-dua-nuoc', name: 'Chè sen dừa nước', cat: 'Tráng miệng & Nước', desc: 'Hạt sen bùi bở, dừa nước giòn mát lạnh.' },
    { slug: 'flan-dua-non', name: 'Flan dừa non', cat: 'Tráng miệng & Nước', desc: 'Mềm mịn thơm béo vị dừa non và caramel.' },
    { slug: 'ruou-hong-dao', name: 'Rượu Hồng Đào', cat: 'Tráng miệng & Nước', desc: 'Đặc sản đất Quảng — chưa uống đã thấy vui.' },
    { slug: 'tra-sam-dua-thao-moc', name: 'Trà sâm dứa thảo mộc', cat: 'Tráng miệng & Nước', desc: 'Thơm dịu lá dứa, giải nhiệt cho bữa ăn trọn vị.' },
  ];

  const dishImg = (slug) => `../assets/dishes/${slug}.webp`;

  /* =========================================================
     2. TOAST HELPER
     ========================================================= */
  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-show'), 2800);
  }

  /* =========================================================
     3. CUSTOM CURSOR + MAGNETIC BUTTONS + HOVER TILT
     ========================================================= */
  function initCursorAndMotion() {
    if (!finePointer || reducedMotion) return;

    const cursor = document.querySelector('.cursor');
    const cursorLabel = cursor?.querySelector('.cursor__label');
    if (cursor) {
      let cx = -100, cy = -100, tx = -100, ty = -100;
      let rafId = null;

      const tick = () => {
        cx += (tx - cx) * 0.22;
        cy += (ty - cy) * 0.22;
        cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
        if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) {
          rafId = requestAnimationFrame(tick);
        } else {
          rafId = null;
        }
      };

      window.addEventListener('pointermove', (e) => {
        tx = e.clientX;
        ty = e.clientY;
        cursor.classList.add('is-visible');
        if (!rafId) rafId = requestAnimationFrame(tick);

        const labeled = e.target.closest('[data-cursor]');
        const interactive = e.target.closest('a, button, input, textarea');
        if (labeled) {
          cursor.classList.add('is-label');
          cursor.classList.remove('is-hover');
          if (cursorLabel) cursorLabel.textContent = labeled.dataset.cursor;
        } else if (interactive) {
          cursor.classList.remove('is-label');
          cursor.classList.add('is-hover');
          if (cursorLabel) cursorLabel.textContent = '';
        } else {
          cursor.classList.remove('is-label', 'is-hover');
          if (cursorLabel) cursorLabel.textContent = '';
        }
      });

      document.addEventListener('pointerleave', () => {
        cursor.classList.remove('is-visible');
      });
    }

    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
        el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transform = '';
      });
    });

    // Hover tilt cards (delegated so dynamically rendered dish cards work too)
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.tilt');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-3px)`;
    });

    document.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.tilt');
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = '';
      }
    });
  }

  /* =========================================================
     4. HERO LAZY-SUSAN GAME ("QUAY MÂM")
     ========================================================= */
  const WHEEL_SLUGS = [
    'mi-quang-phu-chiem',
    'banh-xeo-truyen-thong',
    'cao-lau-hoi-an',
    'goi-xoai-hai-san-dua-nuoc',
    'muc-nuong-sa-te',
    'lau-hai-san-cu-lao-cham',
    'nem-lui-cuon',
    'oc-huong-sot-trung-muoi',
    'suon-heo-nuong',
    'com-nieu',
  ];

  const wheelDishes = WHEEL_SLUGS.map((s) => DISHES.find((d) => d.slug === s)).filter(Boolean);

  let heroPeople = 4;
  let currentRotation = 0;
  let isSpinning = false;
  let lastSpunTray = null;

  const peopleOut = document.getElementById('people');
  const chopsticksEl = document.getElementById('chopsticks');
  const spinBtn = document.getElementById('spin-btn');
  const respinBtn = document.getElementById('respin-btn');
  const bookWithTrayBtn = document.getElementById('book-with-tray');
  const tableEl = document.getElementById('table');
  const discEl = document.getElementById('disc');
  const pointerEl = document.querySelector('.table__pointer');
  const resultEl = document.getElementById('result');
  const resultTitleEl = document.getElementById('result-title');
  const resultFirstEl = document.getElementById('result-first');
  const resultListEl = document.getElementById('result-list');

  function renderWheelDishes() {
    if (!discEl) return;
    const count = wheelDishes.length;
    const radiusPct = 36.5;

    wheelDishes.forEach((dish, i) => {
      const angleDeg = (360 / count) * i;
      const rad = ((angleDeg - 90) * Math.PI) / 180;
      const x = 50 + radiusPct * Math.cos(rad);
      const y = 50 + radiusPct * Math.sin(rad);

      const plate = document.createElement('div');
      plate.className = 'table__dish';
      plate.dataset.index = String(i);
      plate.style.left = `${x.toFixed(2)}%`;
      plate.style.top = `${y.toFixed(2)}%`;
      plate.title = dish.name;

      const img = document.createElement('img');
      img.src = dishImg(dish.slug);
      img.alt = dish.name;
      img.width = 90;
      img.height = 90;
      plate.appendChild(img);
      discEl.appendChild(plate);
    });
  }

  function renderPeople() {
    if (peopleOut) peopleOut.textContent = String(heroPeople);
    document.querySelectorAll('[data-step]').forEach((btn) => {
      const step = Number(btn.dataset.step);
      btn.disabled = (step < 0 && heroPeople <= 1) || (step > 0 && heroPeople >= 20);
    });
    if (chopsticksEl) {
      chopsticksEl.innerHTML = '';
      const shown = Math.min(heroPeople, 12);
      for (let i = 0; i < shown; i++) {
        const pair = document.createElement('span');
        pair.className = 'chopstick-pair';
        pair.innerHTML = '<span></span><span></span>';
        chopsticksEl.appendChild(pair);
      }
      if (heroPeople > 12) {
        const more = document.createElement('span');
        more.style.fontSize = '0.8125rem';
        more.style.fontWeight = '800';
        more.style.color = 'var(--green)';
        more.textContent = `+${heroPeople - 12} đôi đũa nữa`;
        chopsticksEl.appendChild(more);
      }
    }
  }

  function pickTray(people, firstDish) {
    const targetCount = Math.min(9, Math.max(3, Math.ceil(people * 0.75) + 1));
    const chosen = [firstDish];
    const used = new Set([firstDish.slug]);

    const buckets = [
      'Gỏi & Rau',
      'Món hải sản',
      'Món thịt',
      'Canh & Lẩu',
      'Cơm',
      'Món địa phương',
      'Tráng miệng & Nước',
    ];

    for (const cat of buckets) {
      if (chosen.length >= targetCount) break;
      const pool = DISHES.filter((d) => d.cat === cat && !used.has(d.slug));
      if (pool.length) {
        const pick = pool[Math.floor(Math.random() * pool.length)];
        chosen.push(pick);
        used.add(pick.slug);
      }
    }

    while (chosen.length < targetCount) {
      const pool = DISHES.filter((d) => !used.has(d.slug));
      if (!pool.length) break;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      chosen.push(pick);
      used.add(pick.slug);
    }

    return chosen;
  }

  function showTrayResult(winnerIndex) {
    const firstDish = wheelDishes[winnerIndex] || wheelDishes[0];
    const tray = pickTray(heroPeople, firstDish);
    lastSpunTray = { people: heroPeople, firstDish, tray };

    discEl?.querySelectorAll('.table__dish').forEach((el, idx) => {
      el.classList.toggle('is-winner', idx === winnerIndex);
    });

    if (resultTitleEl) {
      resultTitleEl.textContent = `Mâm ${heroPeople} người · ${tray.length} món vừa vặn`;
    }
    if (resultFirstEl) {
      resultFirstEl.textContent = `Miếng đầu tiên gắp cho nhau: ${firstDish.name}`;
    }
    if (resultListEl) {
      resultListEl.innerHTML = tray
        .map(
          (d, idx) => `
          <li class="result__item${idx === 0 ? ' is-first' : ''}">
            <img src="${dishImg(d.slug)}" alt="${d.name}" width="56" height="56">
            <div>
              <span class="result__item-name">${d.name}</span>
              <span class="result__item-cat">${idx === 0 ? '★ Món mở mâm · ' : ''}${d.cat}</span>
            </div>
          </li>`
        )
        .join('');
    }
    if (resultEl) {
      resultEl.hidden = false;
    }
  }

  function spinTable(extraSpins = 4) {
    if (isSpinning || !discEl) return;
    isSpinning = true;
    spinBtn?.classList.add('is-spinning');
    if (spinBtn) spinBtn.disabled = true;

    const count = wheelDishes.length;
    const stepDeg = 360 / count;
    const winnerIndex = Math.floor(Math.random() * count);

    // Align winnerIndex to top (0 deg): wheel dish i sits at i * stepDeg
    const targetMod = (360 - winnerIndex * stepDeg) % 360;
    const currentMod = ((currentRotation % 360) + 360) % 360;
    let delta = targetMod - currentMod;
    if (delta <= 0) delta += 360;

    const finalRotation = currentRotation + extraSpins * 360 + delta;

    if (reducedMotion) {
      currentRotation = finalRotation;
      discEl.style.transform = `rotate(${currentRotation}deg)`;
      isSpinning = false;
      spinBtn?.classList.remove('is-spinning');
      if (spinBtn) spinBtn.disabled = false;
      showTrayResult(winnerIndex);
      return;
    }

    const startRotation = currentRotation;
    const duration = 2700;
    const startTime = performance.now();
    let lastTickSegment = Math.floor(startRotation / stepDeg);

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutQuart(progress);
      const angle = startRotation + (finalRotation - startRotation) * eased;
      discEl.style.transform = `rotate(${angle.toFixed(2)}deg)`;

      const seg = Math.floor(angle / stepDeg);
      if (seg !== lastTickSegment) {
        lastTickSegment = seg;
        pointerEl?.classList.add('is-tick');
        setTimeout(() => pointerEl?.classList.remove('is-tick'), 90);
      }

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        currentRotation = finalRotation;
        isSpinning = false;
        spinBtn?.classList.remove('is-spinning');
        if (spinBtn) spinBtn.disabled = false;
        showTrayResult(winnerIndex);
      }
    }

    requestAnimationFrame(frame);
  }

  function initHeroGame() {
    renderWheelDishes();
    renderPeople();

    document.querySelectorAll('[data-step]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = heroPeople + Number(btn.dataset.step);
        heroPeople = Math.min(20, Math.max(1, next));
        renderPeople();
      });
    });

    spinBtn?.addEventListener('click', () => spinTable(4));
    respinBtn?.addEventListener('click', () => spinTable(3));

    bookWithTrayBtn?.addEventListener('click', () => {
      if (!lastSpunTray) return;
      setBookingPeople(lastSpunTray.people);
      const noteEl = document.getElementById('b-note');
      if (noteEl) {
        const names = lastSpunTray.tray.slice(0, 5).map((d) => d.name).join(', ');
        noteEl.value = `Mâm quay ${lastSpunTray.people} người: ${names}${lastSpunTray.tray.length > 5 ? '...' : ''}`;
      }
      showToast('Đã điền sẵn số người & mâm vừa quay vào mục Đặt bàn!');
    });

    // Pointer drag on table to spin
    if (tableEl && discEl) {
      let dragging = false;
      let startAngle = 0;
      let dragStartRot = 0;
      let lastAngle = 0;
      let velocity = 0;

      const getAngle = (e) => {
        const rect = tableEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        return (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
      };

      tableEl.addEventListener('pointerdown', (e) => {
        if (isSpinning) return;
        dragging = true;
        tableEl.setPointerCapture(e.pointerId);
        startAngle = getAngle(e);
        lastAngle = startAngle;
        dragStartRot = currentRotation;
        velocity = 0;
      });

      tableEl.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const a = getAngle(e);
        let diff = a - startAngle;
        velocity = a - lastAngle;
        lastAngle = a;
        currentRotation = dragStartRot + diff;
        discEl.style.transform = `rotate(${currentRotation.toFixed(2)}deg)`;
      });

      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        if (Math.abs(velocity) > 1.2) {
          spinTable(2);
        } else {
          // Snap to nearest dish at top
          const stepDeg = 360 / wheelDishes.length;
          const norm = ((360 - (currentRotation % 360)) + 360) % 360;
          const idx = Math.round(norm / stepDeg) % wheelDishes.length;
          showTrayResult(idx);
        }
      };

      tableEl.addEventListener('pointerup', endDrag);
      tableEl.addEventListener('pointercancel', endDrag);
    }
  }

  /* =========================================================
     5. FLIP CARDS (ĐẬM / TƯƠI / VUI)
     ========================================================= */
  function initFlipCards() {
    document.querySelectorAll('.flip').forEach((card) => {
      card.addEventListener('click', () => {
        const flipped = card.getAttribute('aria-pressed') === 'true';
        card.setAttribute('aria-pressed', String(!flipped));
      });
    });
  }

  /* =========================================================
     6. MENU HORIZONTAL DRAG / SNAP STRIP + FILTER CHIPS
     ========================================================= */
  function initMenuStrip() {
    const chipsEl = document.getElementById('menu-chips');
    const stripEl = document.getElementById('strip');
    const countEl = document.getElementById('strip-count');
    const prevBtn = document.getElementById('strip-prev');
    const nextBtn = document.getElementById('strip-next');
    if (!chipsEl || !stripEl) return;

    let activeCat = 'Tất cả';

    function renderChips() {
      chipsEl.innerHTML = '';
      CATEGORIES.forEach((cat) => {
        const count = cat === 'Tất cả' ? DISHES.length : DISHES.filter((d) => d.cat === cat).length;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip';
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', String(cat === activeCat));
        btn.textContent = `${cat} (${count})`;
        btn.addEventListener('click', () => {
          activeCat = cat;
          renderChips();
          renderDishes();
          stripEl.scrollTo({ left: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        });
        chipsEl.appendChild(btn);
      });
    }

    function renderDishes() {
      const list = activeCat === 'Tất cả' ? DISHES : DISHES.filter((d) => d.cat === activeCat);
      stripEl.innerHTML = list
        .map(
          (d) => `
          <article class="dish-card tilt">
            <div class="dish-card__plate">
              <img src="${dishImg(d.slug)}" alt="${d.name}" loading="lazy" width="180" height="180">
            </div>
            <span class="dish-card__cat">${d.cat}</span>
            <h3 class="dish-card__name">${d.name}</h3>
            <p class="dish-card__desc">${d.desc}</p>
          </article>`
        )
        .join('');

      if (countEl) {
        countEl.textContent = `Đang xem ${list.length} món (${activeCat}) · Kéo ngang hoặc bấm mũi tên để lướt.`;
      }
    }

    prevBtn?.addEventListener('click', () => {
      stripEl.scrollBy({ left: -280, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
    nextBtn?.addEventListener('click', () => {
      stripEl.scrollBy({ left: 280, behavior: reducedMotion ? 'auto' : 'smooth' });
    });

    // Mouse drag-to-scroll on strip
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    stripEl.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      isDown = true;
      stripEl.classList.add('is-dragging');
      startX = e.pageX;
      startScroll = stripEl.scrollLeft;
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      stripEl.scrollLeft = startScroll - (e.pageX - startX) * 1.25;
    });

    window.addEventListener('pointerup', () => {
      if (!isDown) return;
      isDown = false;
      stripEl.classList.remove('is-dragging');
    });

    renderChips();
    renderDishes();
  }

  /* =========================================================
     7. MINI QUIZ ("ĐOÁN MÓN") + DINO NÓI TỪ
     ========================================================= */
  function initQuiz() {
    const scoreEl = document.getElementById('quiz-score');
    const totalEl = document.getElementById('quiz-total');
    const barEl = document.getElementById('quiz-bar');
    const imgEl = document.getElementById('quiz-img');
    const qEl = document.getElementById('quiz-q');
    const choicesEl = document.getElementById('quiz-choices');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next');
    if (!choicesEl || !imgEl) return;

    const TOTAL = 5;
    let rounds = [];
    let current = 0;
    let score = 0;
    let answered = false;

    function shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function startQuiz() {
      rounds = shuffle(DISHES).slice(0, TOTAL);
      current = 0;
      score = 0;
      if (scoreEl) scoreEl.textContent = '0';
      if (totalEl) totalEl.textContent = String(TOTAL);
      renderRound();
    }

    function renderRound() {
      answered = false;
      const target = rounds[current];
      const distractors = shuffle(DISHES.filter((d) => d.slug !== target.slug)).slice(0, 2);
      const options = shuffle([target, ...distractors]);

      imgEl.src = dishImg(target.slug);
      imgEl.alt = 'Món ăn bí ẩn cần đoán';
      if (qEl) qEl.textContent = `Câu ${current + 1}/${TOTAL}: Món ni là món chi?`;
      if (barEl) barEl.style.width = `${(current / TOTAL) * 100}%`;
      if (feedbackEl) {
        feedbackEl.textContent = '';
        feedbackEl.classList.remove('is-wrong');
      }
      if (nextBtn) {
        nextBtn.hidden = true;
        nextBtn.textContent = current < TOTAL - 1 ? 'Câu tiếp →' : 'Xem kết quả';
      }

      choicesEl.innerHTML = '';
      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz__choice';
        btn.textContent = opt.name;
        btn.addEventListener('click', () => handleChoice(btn, opt.slug === target.slug, target));
        choicesEl.appendChild(btn);
      });
    }

    function handleChoice(clickedBtn, isCorrect, target) {
      if (answered) return;
      answered = true;

      const allBtns = choicesEl.querySelectorAll('.quiz__choice');
      allBtns.forEach((b) => {
        b.disabled = true;
        if (b.textContent === target.name) b.classList.add('is-correct');
      });

      if (isCorrect) {
        score += 1;
        if (scoreEl) scoreEl.textContent = String(score);
        if (feedbackEl) {
          feedbackEl.textContent = `Chuẩn quá hè! Đúng là ${target.name}.`;
          feedbackEl.classList.remove('is-wrong');
        }
      } else {
        clickedBtn.classList.add('is-wrong');
        if (feedbackEl) {
          feedbackEl.textContent = `Gần trúng rồi — món ni là ${target.name} nghe!`;
          feedbackEl.classList.add('is-wrong');
        }
      }

      if (barEl) barEl.style.width = `${((current + 1) / TOTAL) * 100}%`;
      if (nextBtn) nextBtn.hidden = false;
    }

    nextBtn?.addEventListener('click', () => {
      if (current < TOTAL - 1) {
        current += 1;
        renderRound();
      } else if (nextBtn.dataset.mode === 'restart') {
        delete nextBtn.dataset.mode;
        startQuiz();
      } else {
        const verdict =
          score === TOTAL
            ? 'Thổ địa Đà Nẵng chính hiệu!'
            : score >= 3
              ? 'Rành món miền Trung dữ hè!'
              : 'Ghé GÔM thử thêm vài mâm là thuộc liền!';
        if (qEl) qEl.textContent = `Hoàn thành: ${score}/${TOTAL} điểm`;
        choicesEl.innerHTML = '';
        if (feedbackEl) {
          feedbackEl.textContent = verdict;
          feedbackEl.classList.remove('is-wrong');
        }
        nextBtn.textContent = 'Chơi lại từ đầu';
        nextBtn.dataset.mode = 'restart';
      }
    });

    startQuiz();
  }

  function initDinoWords() {
    const card = document.getElementById('word-card');
    const wordEl = document.getElementById('word-word');
    const meanEl = document.getElementById('word-mean');
    if (!card || !wordEl || !meanEl) return;

    const WORDS = [
      { w: 'Mô', m: 'Đâu — "Bữa ni đi ăn ở mô?"' },
      { w: 'Rứa', m: 'Thế, vậy — "Đi mấy người rứa?"' },
      { w: 'Chi', m: 'Gì — "Hôm nay ăn món chi hè?"' },
      { w: 'Răng', m: 'Sao — "Răng mà ngon dữ rứa!"' },
      { w: 'Gôm', m: 'Gom lại, tụ họp bên mâm cơm ấm cúng.' },
      { w: 'Bữa ni', m: 'Hôm nay — "Bữa ni trời mát, đi ăn lẩu!"' },
      { w: 'Nghe', m: 'Nhé, nha — "Kéo tay vào bàn cũng xoay được nghe!"' },
    ];

    let idx = 0;
    let revealed = false;

    card.addEventListener('click', () => {
      if (!revealed) {
        revealed = true;
        card.classList.add('is-revealed');
        meanEl.textContent = WORDS[idx].m;
      } else {
        revealed = false;
        idx = (idx + 1) % WORDS.length;
        card.classList.remove('is-revealed');
        wordEl.textContent = WORDS[idx].w;
        meanEl.textContent = 'Chạm để nghe Dino giải nghĩa';
      }
    });
  }

  /* =========================================================
     8. STEP-BY-STEP BOOKING FORM
     ========================================================= */
  let bookingPeople = 4;
  let bookingStep = 1;
  let selectedTime = '18:30';

  const bPeopleOut = document.getElementById('b-people');

  function setBookingPeople(val) {
    bookingPeople = Math.min(20, Math.max(1, val));
    if (bPeopleOut) bPeopleOut.textContent = String(bookingPeople);
    document.querySelectorAll('[data-bstep]').forEach((btn) => {
      const s = Number(btn.dataset.bstep);
      btn.disabled = (s < 0 && bookingPeople <= 1) || (s > 0 && bookingPeople >= 20);
    });
    document.querySelectorAll('[data-quick]').forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.quick) === bookingPeople);
    });
  }

  function initBooking() {
    const form = document.getElementById('booking-form');
    const confirmBox = document.getElementById('confirm');
    const confirmText = document.getElementById('confirm-text');
    const stepLabel = document.getElementById('step-label');
    const backBtn = document.getElementById('b-back');
    const nextBtn = document.getElementById('b-next');
    const resetBtn = document.getElementById('b-reset');
    const errorEl = document.getElementById('form-error');
    const dateInput = document.getElementById('b-date');
    const timeGrid = document.getElementById('time-grid');
    const progressItems = document.querySelectorAll('.progress li');
    const fieldsets = document.querySelectorAll('.step');
    if (!form) return;

    // Default date = today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    if (dateInput) {
      dateInput.min = todayStr;
      dateInput.value = todayStr;
    }

    // Populate time slots (8AM – 10PM)
    const SLOTS = ['08:30', '10:00', '11:30', '12:30', '17:30', '18:30', '19:30', '20:30'];
    if (timeGrid) {
      timeGrid.innerHTML = '';
      SLOTS.forEach((slot) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'time-slot';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', String(slot === selectedTime));
        btn.textContent = slot;
        btn.addEventListener('click', () => {
          selectedTime = slot;
          timeGrid.querySelectorAll('.time-slot').forEach((el) => {
            el.setAttribute('aria-checked', String(el.textContent === selectedTime));
          });
        });
        timeGrid.appendChild(btn);
      });
    }

    document.querySelectorAll('[data-bstep]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setBookingPeople(bookingPeople + Number(btn.dataset.bstep));
      });
    });

    document.querySelectorAll('[data-quick]').forEach((chip) => {
      chip.addEventListener('click', () => {
        setBookingPeople(Number(chip.dataset.quick));
      });
    });

    function renderStep() {
      if (errorEl) errorEl.textContent = '';
      if (stepLabel) stepLabel.textContent = `Bước ${bookingStep}/3`;

      fieldsets.forEach((fs) => {
        fs.classList.toggle('is-active', Number(fs.dataset.step) === bookingStep);
      });

      progressItems.forEach((li, idx) => {
        const n = idx + 1;
        li.classList.toggle('is-active', n === bookingStep);
        li.classList.toggle('is-done', n < bookingStep);
      });

      if (backBtn) backBtn.hidden = bookingStep === 1;
      if (nextBtn) {
        nextBtn.textContent = bookingStep === 3 ? 'Xác nhận đặt bàn ✓' : 'Tiếp nghe →';
      }
    }

    function validateStep() {
      if (bookingStep === 2) {
        if (!dateInput?.value) {
          if (errorEl) errorEl.textContent = 'Chọn ngày ghé GÔM trước nghe!';
          dateInput?.focus();
          return false;
        }
      }
      if (bookingStep === 3) {
        const nameEl = document.getElementById('b-name');
        const phoneEl = document.getElementById('b-phone');
        const name = nameEl?.value.trim() || '';
        const phone = phoneEl?.value.trim() || '';
        if (name.length < 2) {
          if (errorEl) errorEl.textContent = 'Cho GÔM xin tên để tiện gọi nghe!';
          nameEl?.focus();
          return false;
        }
        if (!/^[0-9+\s.-]{8,15}$/.test(phone)) {
          if (errorEl) errorEl.textContent = 'Số điện thoại chưa đúng lắm, kiểm tra lại chút hè!';
          phoneEl?.focus();
          return false;
        }
      }
      return true;
    }

    backBtn?.addEventListener('click', () => {
      if (bookingStep > 1) {
        bookingStep -= 1;
        renderStep();
      }
    });

    nextBtn?.addEventListener('click', () => {
      if (!validateStep()) return;
      if (bookingStep < 3) {
        bookingStep += 1;
        renderStep();
      } else {
        const name = document.getElementById('b-name')?.value.trim();
        const phone = document.getElementById('b-phone')?.value.trim();
        const note = document.getElementById('b-note')?.value.trim();
        const dateVal = dateInput?.value || todayStr;
        const [y, m, d] = dateVal.split('-');
        const formattedDate = `${d}/${m}/${y}`;

        form.hidden = true;
        if (confirmBox) confirmBox.hidden = false;
        if (confirmText) {
          confirmText.textContent = `GÔM đã ghi nhận bàn cho ${name} (${phone}) — ${bookingPeople} người, lúc ${selectedTime} ngày ${formattedDate}.${note ? ` Ghi chú: ${note}.` : ''} Hẹn gặp cả nhà tại 25 Lê Hồng Phong!`;
        }
        showToast('Đặt bàn thành công — hẹn gặp tại GÔM!');
      }
    });

    resetBtn?.addEventListener('click', () => {
      form.reset();
      if (dateInput) dateInput.value = todayStr;
      bookingStep = 1;
      setBookingPeople(4);
      form.hidden = false;
      if (confirmBox) confirmBox.hidden = true;
      renderStep();
    });

    setBookingPeople(4);
    renderStep();
  }

  /* =========================================================
     INIT
     ========================================================= */
  initCursorAndMotion();
  initHeroGame();
  initFlipCards();
  initMenuStrip();
  initQuiz();
  initDinoWords();
  initBooking();
})();
