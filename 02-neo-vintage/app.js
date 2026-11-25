(function () {
  "use strict";

  const CATEGORIES = [
    { id: "dia-phuong", label: "Món địa phương" },
    { id: "goi-rau", label: "Gỏi & Rau" },
    { id: "hai-san", label: "Món hải sản" },
    { id: "mon-thit", label: "Món thịt" },
    { id: "canh-lau", label: "Canh & Lẩu" },
    { id: "com", label: "Cơm" },
    { id: "trang-mieng", label: "Tráng miệng & Nước" },
    { id: "tat-ca", label: "Tất cả 44 món" }
  ];

  const DISHES = [
    // 1. Món địa phương (13)
    { slug: "banh-xeo-hau-pho-mai", name: "Bánh xèo hàu phô mai", category: "dia-phuong", tag: "Quán gợi ý", note: "Vỏ giòn rụm, hàu sữa béo quyện phô mai tan chảy." },
    { slug: "banh-xeo-hai-san", name: "Bánh xèo hải sản", category: "dia-phuong", tag: "Giòn rụm", note: "Tôm mực tươi cuốn rau sống, chấm mắm nêm đậm đà." },
    { slug: "banh-xeo-truyen-thong", name: "Bánh xèo truyền thống", category: "dia-phuong", tag: "Vị xưa", note: "Nhân tôm thịt giá đỗ chuẩn vị miền Trung." },
    { slug: "cao-lau-hoi-an", name: "Cao lầu Hội An", category: "dia-phuong", tag: "Đặc sản", note: "Sợi mì dai thơm, thịt xá xíu, tóp mỡ và rau Trà Quế." },
    { slug: "mi-quang-phu-chiem", name: "Mì Quảng Phú Chiêm", category: "dia-phuong", tag: "Đậm vị", note: "Nước nhưn sánh vàng nghệ, ăn kèm bánh tráng nướng giòn." },
    { slug: "bun-bo-hue", name: "Bún bò Huế", category: "dia-phuong", tag: "Nóng hổi", note: "Nước dùng sả ruốc thơm lừng, bắp bò mềm ngọt." },
    { slug: "pho-bo", name: "Phở bò", category: "dia-phuong", tag: "Nước thanh", note: "Nước xương hầm kỹ, thịt bò tái nạm mềm thơm." },
    { slug: "banh-mi-thit-nuong", name: "Bánh mì thịt nướng", category: "dia-phuong", tag: "Thơm lừng", note: "Ổ giòn rụm kẹp thịt nướng than hồng và đồ chua." },
    { slug: "banh-trang-dai-loc", name: "Bánh tráng cuốn Đại Lộc", category: "dia-phuong", tag: "Quán gợi ý", note: "Thịt heo hai đầu da cuốn bánh tráng dẻo chấm mắm nêm." },
    { slug: "xien-nuong-hoi-an", name: "Xiên nướng Hội An", category: "dia-phuong", tag: "Nướng than", note: "Thịt ướp sả mè nướng thơm, cuốn bánh tráng rau thơm." },
    { slug: "nem-lui-cuon", name: "Nem lụi cuốn", category: "dia-phuong", tag: "Đậm đà", note: "Nem nướng thơm mùi sả, ăn kèm nước lèo đậu phộng." },
    { slug: "bo-la-lot-cuon", name: "Bò lá lốt cuốn", category: "dia-phuong", tag: "Thơm lá lốt", note: "Thịt bò bằm cuộn lá lốt nướng chín tới, thơm ngào ngạt." },
    { slug: "cha-ram-tom-dat", name: "Chả ram tôm đất", category: "dia-phuong", tag: "Giòn tan", note: "Cuốn nhỏ giòn rụm với tôm đất nguyên con ngọt thịt." },

    // 2. Gỏi & Rau (5)
    { slug: "goi-xoai-hai-san-dua-nuoc", name: "Gỏi xoài hải sản dừa nước", category: "goi-rau", tag: "Chua ngọt", note: "Xoài xanh giòn, tôm mực tươi và dừa nước mát lành." },
    { slug: "goi-buoi-tom-muc-dua-nuoc", name: "Gỏi bưởi tôm mực dừa nước", category: "goi-rau", tag: "Thanh mát", note: "Tép bưởi mọng nước trộn tôm mực giòn sần sật." },
    { slug: "goi-ngo-sen-hue", name: "Gỏi ngó sen Huế", category: "goi-rau", tag: "Giòn mát", note: "Ngó sen trắng giòn trộn tôm thịt, rắc đậu phộng rang." },
    { slug: "rau-muong-xao-oc-mong-tay", name: "Rau muống xào ốc móng tay", category: "goi-rau", tag: "Xào lửa lớn", note: "Rau xanh giòn quyện vị tỏi thơm và ốc móng tay ngọt." },
    { slug: "ngu-qua-luoc-kho-quet", name: "Ngũ quả luộc kho quẹt", category: "goi-rau", tag: "Cơm nhà", note: "Rau củ luộc giữ trọn độ ngọt, chấm kho quẹt tóp mỡ." },

    // 3. Món hải sản (7)
    { slug: "tom-sot-bo-toi", name: "Tôm sốt bơ tỏi", category: "hai-san", tag: "Thơm béo", note: "Tôm tươi áo lớp sốt bơ tỏi vàng óng, chấm bánh mì hết sẩy." },
    { slug: "muc-nuong-sa-te", name: "Mực nướng sa tế", category: "hai-san", tag: "Cay nhẹ", note: "Mực ghe sớm nướng than hồng, phết sa tế nhà làm." },
    { slug: "hau-nuong-pho-mai", name: "Hàu nướng phô mai", category: "hai-san", tag: "Béo ngậy", note: "Hàu sữa tươi nướng cùng sốt phô mai mịn thơm." },
    { slug: "so-diep-nuong-pho-mai", name: "Sò điệp nướng phô mai", category: "hai-san", tag: "Tươi ngọt", note: "Cồi sò điệp dày ngọt phủ lớp phô mai nướng xém." },
    { slug: "oc-huong-sot-trung-muoi", name: "Ốc hương sốt trứng muối", category: "hai-san", tag: "Quán gợi ý", note: "Ốc hương giòn sần sật hòa sốt trứng muối sánh mịn." },
    { slug: "hai-san-sot-bo-toi", name: "Hải sản sốt bơ tỏi", category: "hai-san", tag: "Mâm chung", note: "Tổng hợp tôm, mực, nghêu đảo bơ tỏi thơm nức bàn." },
    { slug: "ca-bop-kho-tieu", name: "Cá bớp kho tiêu", category: "hai-san", tag: "Đưa cơm", note: "Khúc cá bớp săn chắc kho tộ với tiêu đen thơm nồng." },

    // 4. Món thịt (3)
    { slug: "suon-heo-nuong", name: "Sườn heo nướng", category: "mon-thit", tag: "Nướng mật", note: "Sườn ướp gia vị đậm đà, nướng xém cạnh mềm mọng." },
    { slug: "ba-chi-heo-nuong", name: "Ba chỉ heo nướng", category: "mon-thit", tag: "Xém giòn", note: "Ba chỉ thái vừa miếng, nướng thơm ăn kèm dưa góp." },
    { slug: "canh-ga-nuong-xien-ga", name: "Cánh gà nướng & xiên gà", category: "mon-thit", tag: "Vui bàn", note: "Da gà vàng óng, thịt mềm ngọt cho cả nhà nhâm nhi." },

    // 5. Canh & Lẩu (6)
    { slug: "canh-chua-ca", name: "Canh chua cá", category: "canh-lau", tag: "Chua thanh", note: "Cá biển tươi nấu thơm, cà chua, bạc hà và ngò om." },
    { slug: "canh-rau-tom", name: "Canh rau tôm", category: "canh-lau", tag: "Ngọt dịu", note: "Rau vườn nấu tôm giã tay, ngọt thanh như cơm mẹ nấu." },
    { slug: "canh-khe-ca-dia", name: "Canh khế cá dìa", category: "canh-lau", tag: "Chuẩn Quảng", note: "Cá dìa béo thịt nấu khế chua dịu, thơm mùi hành ngò." },
    { slug: "ga-ham-sam-dua-nuoc", name: "Gà hầm sâm dừa nước", category: "canh-lau", tag: "Bồi bổ", note: "Gà ta hầm mềm trong nước dừa ngọt thanh và sâm." },
    { slug: "hai-san-ham-sam-ngoc-linh", name: "Hải sản hầm sâm Ngọc Linh", category: "canh-lau", tag: "Thượng hạng", note: "Hải sản tươi quyện hương sâm Ngọc Linh ấm áp." },
    { slug: "lau-hai-san-cu-lao-cham", name: "Lẩu hải sản Cù Lao Chàm", category: "canh-lau", tag: "Quây quần", note: "Nồi lẩu chua cay nghi ngút khói với hải sản tươi rói." },

    // 6. Cơm (5)
    { slug: "com-nieu", name: "Cơm niêu", category: "com", tag: "Cháy giòn", note: "Gạo dẻo nấu niêu đất, có lớp cơm cháy vàng thơm." },
    { slug: "com-trang", name: "Cơm trắng", category: "com", tag: "Gạo mới", note: "Cơm trắng dẻo thơm, ăn kèm cá kho tiêu hết ý." },
    { slug: "com-ruoc-hue-nhieu-mau", name: "Cơm ruốc Huế nhiều màu", category: "com", tag: "Đậm vị Huế", note: "Cơm trộn ruốc xào sả ớt cùng trứng, lạp xưởng, dưa leo." },
    { slug: "com-chien-dua-hai-san", name: "Cơm chiên dứa hải sản", category: "com", tag: "Thơm dứa", note: "Hạt cơm tơi vàng chiên tôm mực và dứa chín ngọt." },
    { slug: "com-chien-trai-dua", name: "Cơm chiên trái dừa", category: "com", tag: "Độc đáo", note: "Cơm chiên hạt sen tôm thịt ủ trong trái dừa thơm bùi." },

    // 7. Tráng miệng & Nước (5)
    { slug: "banh-xu-xe-hoi-an", name: "Bánh xu xê Hội An", category: "trang-mieng", tag: "Ngọt thanh", note: "Vỏ trong dẻo nhân đậu xanh dừa nạo gói lá chuối." },
    { slug: "che-sen-dua-nuoc", name: "Chè sen dừa nước", category: "trang-mieng", tag: "Mát lành", note: "Hạt sen bùi nấu đường phèn thanh nhẹ cùng dừa nước." },
    { slug: "flan-dua-non", name: "Flan dừa non", category: "trang-mieng", tag: "Mềm mịn", note: "Bánh flan béo thơm mùi trứng sữa và cơm dừa non." },
    { slug: "ruou-hong-dao", name: "Rượu Hồng Đào", category: "trang-mieng", tag: "Đặc sản Quảng", note: "Chén rượu đất Quảng êm dịu, nâng ly cho câu chuyện thêm vui." },
    { slug: "tra-sam-dua-thao-moc", name: "Trà sâm dứa thảo mộc", category: "trang-mieng", tag: "Giải nhiệt", note: "Hương lá dứa thoang thoảng, mát họng sau bữa ăn đậm đà." }
  ];

  const DIALECT_WORDS = [
    {
      word: "“Hè”",
      meaning: "Nhỉ, nhé — tiếng đệm đầy thân tình cuối câu của người miền Trung.",
      example: "“Gôm đủ người, mình gặp nhau hè!”"
    },
    {
      word: "“Chi”",
      meaning: "Gì — nghe vừa mộc mạc vừa gần gũi trong mỗi bữa cơm nhà.",
      example: "“Hôm nay đi mấy người, ăn mâm chi hè?”"
    },
    {
      word: "“Gôm”",
      meaning: "Gom lại, tụ họp bên nhau — có khách thì thêm đôi đũa, có món ngon gắp cho nhau trước.",
      example: "“Chiều ni gôm cả xóm ra 25 Lê Hồng Phong ăn bánh xèo!”"
    },
    {
      word: "“Rứa”",
      meaning: "Thế, vậy — câu cửa miệng nghe là nhận ra ngay người miền Trung.",
      example: "“Món cá bớp kho tiêu ni ngon chi mà ngon rứa!”"
    },
    {
      word: "“Mô”",
      meaning: "Đâu — dùng khi hỏi đường, hỏi chỗ hẹn hò.",
      example: "“Tối ni mình hẹn ăn ở mô? Ra GÔM cho ấm cúng!”"
    },
    {
      word: "“Thương chi lạ”",
      meaning: "Thương quá chừng — lời khen chân thành nhất dành cho người hoặc món ăn.",
      example: "“Nồi canh khế cá dìa nóng hổi, ăn mà thương chi lạ!”"
    }
  ];

  const CATEGORY_MAP = CATEGORIES.reduce(function (acc, cat) {
    acc[cat.id] = cat.label;
    return acc;
  }, {});

  // --------------------------------------------------------------------------
  // Mobile Navigation Toggle
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --------------------------------------------------------------------------
  // Chapter 2: Printed Menu Board Tabs & Rendering
  // --------------------------------------------------------------------------
  const menuTabsEl = document.getElementById("menuTabs");
  const menuLedgerEl = document.getElementById("menuLedger");
  const menuCountEl = document.getElementById("menuCount");
  let activeCategory = "dia-phuong";

  function renderMenuTabs() {
    if (!menuTabsEl) return;
    menuTabsEl.innerHTML = "";
    CATEGORIES.forEach(function (cat) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "menu-tab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(cat.id === activeCategory));
      btn.textContent = cat.label;
      btn.addEventListener("click", function () {
        activeCategory = cat.id;
        renderMenuTabs();
        renderMenuLedger();
      });
      menuTabsEl.appendChild(btn);
    });
  }

  function renderMenuLedger() {
    if (!menuLedgerEl) return;
    const filtered = activeCategory === "tat-ca"
      ? DISHES
      : DISHES.filter(function (d) { return d.category === activeCategory; });

    if (menuCountEl) {
      const label = CATEGORY_MAP[activeCategory] || "Thực đơn";
      menuCountEl.textContent = "Đang xem: " + label + " (" + filtered.length + " món)";
    }

    const fragment = document.createDocumentFragment();
    filtered.forEach(function (dish) {
      const item = document.createElement("article");
      item.className = "dish-row";

      const img = document.createElement("img");
      img.className = "dish-thumb";
      img.src = "../assets/dishes/" + dish.slug + ".webp";
      img.alt = dish.name;
      img.loading = "lazy";
      img.width = 62;
      img.height = 62;

      const info = document.createElement("div");
      info.className = "dish-info";

      const line = document.createElement("div");
      line.className = "dish-line";

      const nameEl = document.createElement("span");
      nameEl.className = "dish-name";
      nameEl.textContent = dish.name;

      const leader = document.createElement("span");
      leader.className = "dish-leader";
      leader.setAttribute("aria-hidden", "true");

      const tagEl = document.createElement("span");
      tagEl.className = "dish-tag";
      tagEl.textContent = dish.tag;

      line.appendChild(nameEl);
      line.appendChild(leader);
      line.appendChild(tagEl);

      const noteEl = document.createElement("p");
      noteEl.className = "dish-note";
      noteEl.textContent = dish.note;

      info.appendChild(line);
      info.appendChild(noteEl);

      item.appendChild(img);
      item.appendChild(info);
      fragment.appendChild(item);
    });

    menuLedgerEl.innerHTML = "";
    menuLedgerEl.appendChild(fragment);
  }

  renderMenuTabs();
  renderMenuLedger();

  // --------------------------------------------------------------------------
  // Chapter 3: Phiếu bốc mâm (4–6 random dishes)
  // --------------------------------------------------------------------------
  const guestRange = document.getElementById("guestRange");
  const guestMinus = document.getElementById("guestMinus");
  const guestPlus = document.getElementById("guestPlus");
  const guestCountDisplay = document.getElementById("guestCountDisplay");
  const guestHint = document.getElementById("guestHint");
  const drawTrayBtn = document.getElementById("drawTrayBtn");
  const trayResult = document.getElementById("trayResult");
  const ticketSerial = document.getElementById("ticketSerial");
  let serialCounter = 1;

  function dishCountForGuests(guests) {
    if (guests <= 2) return 4;
    if (guests <= 6) return 5;
    return 6;
  }

  function updateGuestUI() {
    if (!guestRange) return;
    const guests = Number(guestRange.value);
    const count = dishCountForGuests(guests);
    if (guestCountDisplay) {
      guestCountDisplay.textContent = guests + " người";
    }
    if (guestHint) {
      guestHint.textContent = "Mâm " + guests + " người gợi ý " + count + " món cân bằng hương vị miền Trung.";
    }
  }

  if (guestRange) {
    guestRange.addEventListener("input", updateGuestUI);
    updateGuestUI();
  }

  if (guestMinus && guestRange) {
    guestMinus.addEventListener("click", function () {
      const next = Math.max(1, Number(guestRange.value) - 1);
      guestRange.value = String(next);
      updateGuestUI();
    });
  }

  if (guestPlus && guestRange) {
    guestPlus.addEventListener("click", function () {
      const next = Math.min(20, Number(guestRange.value) + 1);
      guestRange.value = String(next);
      updateGuestUI();
    });
  }

  function pickRandomTray(count) {
    // Shuffle a shallow copy of DISHES and prefer diverse categories
    const pool = DISHES.slice();
    for (let i = pool.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = pool[i];
      pool[i] = pool[j];
      pool[j] = tmp;
    }

    const chosen = [];
    const seenCategories = {};

    // First pass: pick dishes from distinct categories for a balanced mâm
    for (let i = 0; i < pool.length && chosen.length < count; i += 1) {
      const dish = pool[i];
      if (!seenCategories[dish.category]) {
        seenCategories[dish.category] = true;
        chosen.push(dish);
      }
    }

    // Fallback if count exceeds distinct categories
    for (let i = 0; i < pool.length && chosen.length < count; i += 1) {
      if (chosen.indexOf(pool[i]) === -1) {
        chosen.push(pool[i]);
      }
    }

    return chosen;
  }

  function renderDrawnTray() {
    if (!trayResult || !guestRange) return;
    const guests = Number(guestRange.value);
    const count = dishCountForGuests(guests);
    const dishes = pickRandomTray(count);

    serialCounter += 1;
    const serialCode = "GOM-" + String(serialCounter).padStart(3, "0");
    if (ticketSerial) {
      ticketSerial.textContent = serialCode;
    }

    const wrapper = document.createElement("div");

    const bar = document.createElement("div");
    bar.className = "tray-summary-bar";
    bar.innerHTML =
      "<strong>Gợi ý mâm " + guests + " người (" + count + " món)</strong>" +
      "<span class=\"tray-stamp-badge\">PHIẾU #" + serialCode + "</span>";
    wrapper.appendChild(bar);

    const grid = document.createElement("div");
    grid.className = "tray-dishes-grid";

    dishes.forEach(function (dish) {
      const card = document.createElement("div");
      card.className = "tray-dish-card";

      const img = document.createElement("img");
      img.src = "../assets/dishes/" + dish.slug + ".webp";
      img.alt = dish.name;
      img.width = 54;
      img.height = 54;

      const meta = document.createElement("div");
      const cat = document.createElement("span");
      cat.className = "tray-dish-cat";
      cat.textContent = CATEGORY_MAP[dish.category] || "";

      const title = document.createElement("span");
      title.className = "tray-dish-name";
      title.textContent = dish.name;

      meta.appendChild(cat);
      meta.appendChild(title);
      card.appendChild(img);
      card.appendChild(meta);
      grid.appendChild(card);
    });

    wrapper.appendChild(grid);

    const footer = document.createElement("div");
    footer.className = "tray-footer-actions";
    footer.innerHTML =
      "<span>Ưng mâm ni rồi thì đặt bàn trước cho bếp chuẩn bị hè!</span>" +
      "<a href=\"#dat-ban\" class=\"btn-secondary\">Đặt bàn theo mâm này</a>";
    wrapper.appendChild(footer);

    trayResult.innerHTML = "";
    trayResult.appendChild(wrapper);
  }

  if (drawTrayBtn) {
    drawTrayBtn.addEventListener("click", renderDrawnTray);
  }

  // --------------------------------------------------------------------------
  // Chapter 3 Side: Dino nói giọng Quảng Nam
  // --------------------------------------------------------------------------
  const dialectTag = document.getElementById("dialectTag");
  const dialectWord = document.getElementById("dialectWord");
  const dialectMeaning = document.getElementById("dialectMeaning");
  const dialectExample = document.getElementById("dialectExample");
  const nextDialectBtn = document.getElementById("nextDialectBtn");
  let dialectIdx = 0;

  if (nextDialectBtn) {
    nextDialectBtn.addEventListener("click", function () {
      dialectIdx = (dialectIdx + 1) % DIALECT_WORDS.length;
      const entry = DIALECT_WORDS[dialectIdx];
      const num = String(dialectIdx + 1).padStart(2, "0");
      const total = String(DIALECT_WORDS.length).padStart(2, "0");

      if (dialectTag) dialectTag.textContent = "TỪ #" + num + " / " + total;
      if (dialectWord) dialectWord.textContent = entry.word;
      if (dialectMeaning) dialectMeaning.innerHTML = "<strong>Nghĩa:</strong> " + entry.meaning;
      if (dialectExample) dialectExample.innerHTML = "<em>Ví dụ: " + entry.example + "</em>";
    });
  }

  // --------------------------------------------------------------------------
  // Chapter 4: Ticket Booking Form (Client-side confirmation)
  // --------------------------------------------------------------------------
  const bookingForm = document.getElementById("bookingForm");
  const visitDateInput = document.getElementById("visitDate");
  const formError = document.getElementById("formError");
  const bookingConfirmation = document.getElementById("bookingConfirmation");
  const confirmName = document.getElementById("confirmName");
  const confirmCode = document.getElementById("confirmCode");
  const confirmSummary = document.getElementById("confirmSummary");
  const newBookingBtn = document.getElementById("newBookingBtn");

  // Default booking date to today
  if (visitDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const iso = yyyy + "-" + mm + "-" + dd;
    visitDateInput.min = iso;
    visitDateInput.value = iso;
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (formError) formError.textContent = "";

      const name = String(bookingForm.guestName.value || "").trim();
      const phone = String(bookingForm.guestPhone.value || "").trim();
      const date = String(bookingForm.visitDate.value || "").trim();
      const time = String(bookingForm.visitTime.value || "").trim();
      const party = Number(bookingForm.partySize.value);
      const note = String(bookingForm.guestNote.value || "").trim();

      if (!name || !phone || !date || !time || !party || party < 1 || party > 20) {
        if (formError) {
          formError.textContent = "Vui lòng điền đủ họ tên, số điện thoại, ngày giờ và số khách (1–20 người) hè!";
        }
        return;
      }

      const code = "GOM-" + Math.floor(1000 + Math.random() * 9000);
      if (confirmName) confirmName.textContent = name;
      if (confirmCode) confirmCode.textContent = code;

      if (confirmSummary) {
        confirmSummary.innerHTML = "";
        const rows = [
          ["Số điện thoại", phone],
          ["Thời gian", time + " · " + date],
          ["Số khách", party + " người"],
          ["Ghi chú", note || "Không có ghi chú thêm"]
        ];
        rows.forEach(function (pair) {
          const wrap = document.createElement("div");
          const dt = document.createElement("dt");
          dt.textContent = pair[0];
          const dd = document.createElement("dd");
          dd.textContent = pair[1];
          wrap.appendChild(dt);
          wrap.appendChild(dd);
          confirmSummary.appendChild(wrap);
        });
      }

      bookingForm.hidden = true;
      if (bookingConfirmation) bookingConfirmation.hidden = false;
    });
  }

  if (newBookingBtn && bookingForm && bookingConfirmation) {
    newBookingBtn.addEventListener("click", function () {
      bookingConfirmation.hidden = true;
      bookingForm.hidden = false;
      bookingForm.reset();
      if (visitDateInput && visitDateInput.min) {
        visitDateInput.value = visitDateInput.min;
      }
      bookingForm.partySize.value = "4";
    });
  }
})();
