/* ==========================================================================
   GÔM — Editorial Frame Concept Interactive Controller
   ========================================================================== */

(() => {
  // 1. Scroll-reactive Fixed Header (Transparent over Hero -> Solid Cream)
  const header = document.getElementById("siteHeader");
  const hero = document.getElementById("hero");

  const updateHeaderOnScroll = () => {
    const threshold = hero ? Math.max(40, hero.offsetHeight - 180) : 80;
    header.classList.toggle("is-scrolled", window.scrollY > threshold);
  };
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  window.addEventListener("resize", updateHeaderOnScroll, { passive: true });

  // 2. Full-Screen Navigation Drawer
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const drawer = document.getElementById("fullscreenDrawer");

  const setDrawerOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    menuToggleBtn.setAttribute("aria-expanded", String(open));
    header.classList.toggle("is-drawer-open", open);
    document.body.classList.toggle("drawer-open", open);
  };

  menuToggleBtn.addEventListener("click", () => {
    setDrawerOpen(!drawer.classList.contains("is-open"));
  });

  document.querySelectorAll("[data-close-drawer]").forEach((el) => {
    el.addEventListener("click", () => setDrawerOpen(false));
  });

  // Drawer region selector
  const drawerRegionWrap = document.querySelector(".drawer-region-wrap");
  const drawerRegionBtn = document.getElementById("drawerRegionBtn");
  const drawerRegionLabel = document.getElementById("drawerRegionLabel");

  drawerRegionBtn.addEventListener("click", () => {
    const isOpen = drawerRegionWrap.classList.toggle("is-open");
    drawerRegionBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-drawer-region]").forEach((btn) => {
    btn.addEventListener("click", () => {
      drawerRegionLabel.textContent = btn.dataset.drawerRegion;
      drawerRegionWrap.classList.remove("is-open");
      drawerRegionBtn.setAttribute("aria-expanded", "false");
    });
  });

  // 3. Language Dropdown (VI / EN)
  const langDropdown = document.getElementById("langDropdown");
  const langTrigger = document.getElementById("langTrigger");
  const langCurrent = document.getElementById("langCurrent");

  const I18N = {
    vi: {
      navBooking: "ĐẶT BÀN",
      navMenu: "THỰC ĐƠN",
      navGame: "CHƠI CÙNG GÔM",
      wowCopy:
        "Mỗi lượt gắp món, mỗi chén nước chấm chuyền tay là thêm một niềm vui được gôm lại quanh bàn ăn miền Trung.",
      wowLink: "Đọc chuyện GÔM",
      manifestoTitle: "“Gôm” Về Bên Nhau, Quây Tròn Bữa Ăn Vui",
      manifestoSub:
        "Một tiếng gọi mộc mạc của người miền Trung — có khách đến nhà thì thêm đôi đũa, có món ngon thì gắp cho nhau miếng đầu tiên.",
    },
    en: {
      navBooking: "RESERVATION",
      navMenu: "MENU",
      navGame: "PLAY WITH GÔM",
      wowCopy:
        "Every shared dish and passed dipping bowl gathers another warm moment around our Central Vietnamese table.",
      wowLink: "Read GÔM's story",
      manifestoTitle: "“Gôm” Together — Gather Around a Joyful Table",
      manifestoSub:
        "A warm Central Vietnamese call to come sit together — add an extra pair of chopsticks, share the first bite, and linger over good stories.",
    },
  };

  langTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle("is-open");
    langTrigger.setAttribute("aria-expanded", String(isOpen));
  });

  langDropdown.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      langCurrent.textContent = lang.toUpperCase();
      langDropdown
        .querySelectorAll("[data-lang]")
        .forEach((b) => b.classList.toggle("is-active", b === btn));
      const dict = I18N[lang] || I18N.vi;
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
      });
      langDropdown.classList.remove("is-open");
      langTrigger.setAttribute("aria-expanded", "false");
    });
  });

  // 4. Hero Regions Interactive Notes
  const REGION_NOTES = {
    danang: "25 Lê Hồng Phong · Một căn nhà ẩm thực miền Trung giữa lòng Đà Nẵng.",
    hoian: "Cảm hứng từ phố Hội: bánh xèo giòn rụm, cao lầu và chè sen dừa nước Cẩm Thanh.",
    quangnam: "Hương vị làng nghề Phú Chiêm, bánh tráng Đại Lộc và chum rượu Hồng Đào nồng ấm.",
    hue: "Nét tinh tế cố đô trong từng đĩa cơm ruốc ngũ sắc và tô bún bò hầm sả thanh ngọt.",
    culao: "Hải sản tươi rói từ biển Cửa Đại & Cù Lao Chàm cho những nồi lẩu xôm tụ.",
  };

  const regionNote = document.getElementById("heroRegionNote");
  document.querySelectorAll(".region-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".region-item")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      regionNote.textContent = REGION_NOTES[btn.dataset.region] || REGION_NOTES.danang;
    });
  });

  // 5. Mechanical Split-Flap Counter (GÔM!!! Card)
  const flipCounter = document.getElementById("flipCounter");
  let countValue = 1284619;

  const renderCounter = (num) => {
    const formatted = num.toLocaleString("en-US");
    flipCounter.innerHTML = "";
    for (const ch of formatted) {
      if (ch === ",") {
        const comma = document.createElement("span");
        comma.className = "flip-comma";
        comma.textContent = ",";
        flipCounter.appendChild(comma);
      } else {
        const tile = document.createElement("span");
        tile.className = "flip-digit";
        tile.textContent = ch;
        flipCounter.appendChild(tile);
      }
    }
  };
  renderCounter(countValue);
  setInterval(() => {
    countValue += Math.floor(Math.random() * 3) + 1;
    renderCounter(countValue);
  }, 4500);

  // 6. Interactive Editorial Flipbook (Sổ Tay GÔM — 6 Spreads)
  const SPREADS = [
    {
      leftCover: true,
      leftEyebrow: "SỔ TAY GÔM · ẤN BẢN ĐẦU TIÊN",
      leftTitle: "Chuyện Một Tiếng Gọi",
      leftText:
        "Từ những bữa cơm nhà miền Trung đến không gian quây quần hôm nay — mời bạn lật từng trang sổ tay nhỏ của GÔM.",
      leftFolio: "GÔM — ĐÀ NẴNG",
      rightPhoto: "../assets/photos/gathering.webp",
      rightEyebrow: "LỜI NGỎ",
      rightTitle: "Về đây, ăn một bữa hè.",
      rightText:
        "Có khách đến nhà thì thêm đôi đũa. Có món ngon thì gắp cho nhau miếng đầu tiên. GÔM sinh ra từ những bữa ăn như thế.",
      rightFolio: "01",
    },
    {
      leftEyebrow: "CHƯƠNG 01 · TƯƠI TRONG NGUYÊN LIỆU",
      leftTitle: "Từ vùng đất đến bàn ăn.",
      leftText:
        "GÔM tìm kiếm những nguyên liệu tươi ngon nhất của miền Trung: hải sản Cửa Đại – Cù Lao Chàm, rau thơm Trà Quế, cơm dừa nước Cẩm Thanh.",
      leftFolio: "02",
      rightPhoto: "../assets/photos/garden.webp",
      rightEyebrow: "SẢN VẬT BẢN ĐỊA",
      rightTitle: "Mỗi nguyên liệu một câu chuyện.",
      rightText:
        "Giữ trọn vị ngọt tự nhiên của nắng gió miền Trung để mỗi đĩa món đặt ra giữa bàn đều thơm lành, gần gũi.",
      rightFolio: "03",
    },
    {
      leftEyebrow: "CHƯƠNG 02 · ĐẬM TRONG HƯƠNG VỊ",
      leftTitle: "Cách cuốn, cách chấm miền Trung.",
      leftText:
        "Đậm không chỉ ở gia vị. Đó còn là trải nghiệm tự tay cuốn bánh xèo giòn rụm với rau cải con, chấm chén nước lèo đậu phộng béo bùi.",
      leftFolio: "04",
      rightPhoto: "../assets/dishes/banh-xeo-hau-pho-mai.webp",
      rightIsDish: true,
      rightEyebrow: "MÓN SIGNATURE",
      rightTitle: "Bánh xèo hàu phô mai.",
      rightText:
        "Biến tấu hiện đại từ chiếc bánh xèo truyền thống — vỏ giòn ôm trọn hàu sữa béo ngậy và phô mai kéo sợi.",
      rightFolio: "05",
    },
    {
      leftEyebrow: "CHƯƠNG 03 · VUI TRONG TRẢI NGHIỆM",
      leftTitle: "Bàn xoay & chuyện trò.",
      leftText:
        "Từ bàn xoay bốc mâm ngẫu nhiên cho hội bạn khó chọn món đến trò chơi Dino nói từ giọng Quảng Nam — bữa ăn tại GÔM luôn đầy tiếng cười.",
      leftFolio: "06",
      rightPhoto: "../assets/dishes/com-chien-dua-hai-san.webp",
      rightIsDish: true,
      rightEyebrow: "MÂM CHIA SẺ",
      rightTitle: "Càng đông, mâm càng vui.",
      rightText:
        "Bàn 2 người gọn gàng hay mâm đại gia đình 20 người, GÔM đều có cách bày món tròn vị.",
      rightFolio: "07",
    },
    {
      leftEyebrow: "CHƯƠNG 04 · KHÔNG GIAN",
      leftTitle: "Một nơi mát lành để ghé chơi.",
      leftText:
        "Nắng nhẹ qua tán cây, bàn gỗ ấm và sắc đỏ sơn mài trầm ấm — GÔM mong trở thành căn nhà thân quen cho mọi cuộc hẹn ở Đà Nẵng.",
      leftFolio: "08",
      rightPhoto: "../assets/photos/coffee-together.webp",
      rightEyebrow: "TÌNH NGƯỜI TƯƠI TẮN",
      rightTitle: "Mến khách bằng sự chân thành.",
      rightText:
        "Không cầu kỳ kiểu cách, chỉ là lời chào nồng hậu và sự chăm chút để bạn thấy thoải mái như về nhà.",
      rightFolio: "09",
    },
    {
      leftEyebrow: "CHƯƠNG 05 · HẸN GẶP",
      leftTitle: "Gôm đủ người, mình gặp nhau hè!",
      leftText:
        "25 Lê Hồng Phong, Hải Châu, Đà Nẵng · Mở cửa 8AM – 10PM mỗi ngày. Hẹn đón bạn bên một mâm cơm thật vui.",
      leftFolio: "10",
      rightPhoto: "../assets/dishes/ruou-hong-dao.webp",
      rightIsDish: true,
      rightEyebrow: "NÂNG LY CÙNG GÔM",
      rightTitle: "Chum Rượu Hồng Đào chờ sẵn.",
      rightText:
        "Đất Quảng Nam chưa mưa đã thấm — bấm nút Đặt bàn trên thanh đầu trang để GÔM giữ chỗ đẹp cho hội bạn nhé!",
      rightFolio: "11",
    },
  ];

  let currentSpread = 0;
  let zoomLevel = 1;
  const bookletSpread = document.getElementById("bookletSpread");
  const tbPage = document.getElementById("tbPage");
  const bookPrev = document.getElementById("bookPrev");
  const bookNext = document.getElementById("bookNext");

  const renderSpread = () => {
    const s = SPREADS[currentSpread];
    bookletSpread.innerHTML = `
      <div class="book-page book-page-left ${s.leftCover ? "is-cover" : ""}">
        <div>
          <p class="book-eyebrow">${s.leftEyebrow}</p>
          <h3 class="book-title">${s.leftTitle}</h3>
          <p class="book-text">${s.leftText}</p>
        </div>
        <span class="book-folio">${s.leftFolio}</span>
      </div>
      <div class="book-page book-page-right">
        <div>
          <img src="${s.rightPhoto}" alt="${s.rightTitle}" class="book-photo ${s.rightIsDish ? "is-dish" : ""}" />
          <p class="book-eyebrow">${s.rightEyebrow}</p>
          <h3 class="book-title">${s.rightTitle}</h3>
          <p class="book-text">${s.rightText}</p>
        </div>
        <span class="book-folio">${s.rightFolio}</span>
      </div>
    `;
    tbPage.textContent = `${currentSpread + 1} / ${SPREADS.length}`;
    bookPrev.disabled = currentSpread === 0;
    bookNext.disabled = currentSpread === SPREADS.length - 1;
  };

  const goSpread = (delta) => {
    const next = Math.max(0, Math.min(SPREADS.length - 1, currentSpread + delta));
    if (next !== currentSpread) {
      currentSpread = next;
      renderSpread();
    }
  };

  renderSpread();
  bookPrev.addEventListener("click", () => goSpread(-1));
  bookNext.addEventListener("click", () => goSpread(1));
  document.getElementById("tbPrev").addEventListener("click", () => goSpread(-1));
  document.getElementById("tbNext").addEventListener("click", () => goSpread(1));

  document.getElementById("tbZoomIn").addEventListener("click", () => {
    zoomLevel = Math.min(1.12, +(zoomLevel + 0.06).toFixed(2));
    bookletSpread.style.transform = `scale(${zoomLevel})`;
  });
  document.getElementById("tbZoomOut").addEventListener("click", () => {
    zoomLevel = Math.max(0.92, +(zoomLevel - 0.06).toFixed(2));
    bookletSpread.style.transform = `scale(${zoomLevel})`;
  });
  document.getElementById("tbFullscreen").addEventListener("click", () => {
    const stage = document.getElementById("flipbookStage");
    if (!document.fullscreenElement && stage.requestFullscreen) {
      stage.requestFullscreen().catch(() => {});
    } else if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  });
  document.getElementById("tbShare").addEventListener("click", (e) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    const btn = e.currentTarget;
    btn.textContent = "✓";
    setTimeout(() => {
      btn.textContent = "↗";
    }, 1500);
  });

  // 7. Ghé GÔM 50/50 Location Tabs & Select Space Dropdown
  const LOCATION_DATA = {
    danang: {
      address: "25 Lê Hồng Phong, Hải Châu, Đà Nẵng · 8AM – 10PM",
      spaces: [
        "Sân vườn xanh mát (2–8 khách)",
        "Phòng máy lạnh ấm cúng (2–6 khách)",
        "Bàn dài sum vầy hội bạn (8–20 khách)",
        "Góc hẹn hò yên tĩnh (2 khách)",
      ],
    },
    hoian: {
      address: "Cảm hứng ẩm thực Phố Hội · Sắp có mặt trong hành trình tiếp theo",
      spaces: [
        "Bánh xèo Hội An truyền thống",
        "Cao lầu phố cổ & rau Trà Quế",
        "Chè hạt sen dừa nước Cẩm Thanh",
      ],
    },
    quangnam: {
      address: "Sản vật & làng nghề xứ Quảng gửi trọn vào mâm cơm GÔM",
      spaces: [
        "Mì Quảng làng nghề Phú Chiêm",
        "Bánh tráng cuốn thịt heo Đại Lộc",
        "Rượu Hồng Đào ủ men lá",
      ],
    },
  };

  const locSelectWrap = document.getElementById("locSelectWrap");
  const locSelectTrigger = document.getElementById("locSelectTrigger");
  const locSelectLabel = document.getElementById("locSelectLabel");
  const locSelectList = document.getElementById("locSelectList");
  const locAddressText = document.getElementById("locAddressText");

  const renderLocationTab = (key) => {
    const data = LOCATION_DATA[key] || LOCATION_DATA.danang;
    locAddressText.textContent = data.address;
    locSelectLabel.textContent = data.spaces[0];
    locSelectList.innerHTML = "";
    data.spaces.forEach((item) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = item;
      btn.addEventListener("click", () => {
        locSelectLabel.textContent = item;
        locSelectWrap.classList.remove("is-open");
        locSelectTrigger.setAttribute("aria-expanded", "false");
      });
      li.appendChild(btn);
      locSelectList.appendChild(li);
    });
  };

  renderLocationTab("danang");

  document.querySelectorAll(".loc-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".loc-tab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      renderLocationTab(tab.dataset.loc);
    });
  });

  locSelectTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = locSelectWrap.classList.toggle("is-open");
    locSelectTrigger.setAttribute("aria-expanded", String(isOpen));
  });

  // 8. Quick Booking Modal
  const bookingModal = document.getElementById("bookingModal");
  const bookingForm = document.getElementById("bookingForm");
  const bookingSuccess = document.getElementById("bookingSuccess");
  const bookingSummaryText = document.getElementById("bookingSummaryText");
  const bookingDate = document.getElementById("bookingDate");

  if (bookingDate) {
    const today = new Date().toISOString().split("T")[0];
    bookingDate.min = today;
    bookingDate.value = today;
  }

  document.querySelectorAll("[data-open-booking]").forEach((btn) => {
    btn.addEventListener("click", () => {
      bookingForm.hidden = false;
      bookingSuccess.hidden = true;
      bookingModal.showModal();
    });
  });

  document.getElementById("bookingCloseBtn").addEventListener("click", () => {
    bookingModal.close();
  });

  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) bookingModal.close();
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(bookingForm);
    const code = `GOM-${Math.floor(1000 + Math.random() * 9000)}`;
    bookingSummaryText.textContent = `Mã hẹn ${code} · ${fd.get("name")} (${fd.get("phone")}) — Bàn ${fd.get("guests")} khách lúc ${fd.get("time")} ngày ${fd.get("date")}. Lễ tân GÔM sẽ gọi xác nhận ngay!`;
    bookingForm.hidden = true;
    bookingSuccess.hidden = false;
  });

  document.getElementById("bookingResetBtn").addEventListener("click", () => {
    bookingForm.reset();
    bookingForm.hidden = false;
    bookingSuccess.hidden = true;
  });

  // Close dropdowns & drawer on outside click / Escape
  document.addEventListener("click", (e) => {
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove("is-open");
      langTrigger.setAttribute("aria-expanded", "false");
    }
    if (!locSelectWrap.contains(e.target)) {
      locSelectWrap.classList.remove("is-open");
      locSelectTrigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      setDrawerOpen(false);
    }
  });

  // 9. Scroll Reveal
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
