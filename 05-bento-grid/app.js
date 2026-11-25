"use strict";

/* =========================================================
   GÔM — 05 Bento Grid / Modular Modern Interactions
   ========================================================= */

const MENU_CATEGORIES = {
  local: {
    title: "Món địa phương",
    countLabel: "13 món · Đặc sản miền Trung",
    desc: "Những hương vị làm nên hồn cốt Quảng – Đà – Huế, ăn là thấy thân quen.",
    dishes: [
      { name: "Mì Quảng Phú Chiêm", img: "../assets/dishes/mi-quang-phu-chiem.webp", note: "Sợi mì mềm, nước nhưn đậm đà, bánh tráng nướng giòn." },
      { name: "Bánh xèo truyền thống", img: "../assets/dishes/banh-xeo-truyen-thong.webp", note: "Vỏ vàng giòn rụm, tôm thịt tươi, cuốn rau sống." },
      { name: "Bánh xèo hải sản", img: "../assets/dishes/banh-xeo-hai-san.webp", note: "Đầy ắp tôm mực tươi rói chấm nước lèo đậu phộng." },
      { name: "Bánh xèo hàu phô mai", img: "../assets/dishes/banh-xeo-hau-pho-mai.webp", note: "Hàu sữa béo ngậy quyện phô mai thơm lừng." },
      { name: "Cao lầu Hội An", img: "../assets/dishes/cao-lau-hoi-an.webp", note: "Sợi cao lầu dai nhẹ, thịt xá xíu và tóp mỡ giòn." },
      { name: "Bún bò Huế", img: "../assets/dishes/bun-bo-hue.webp", note: "Nước dùng thơm sả ruốc, đậm vị cố đô." },
      { name: "Nem lụi cuốn", img: "../assets/dishes/nem-lui-cuon.webp", note: "Nướng than thơm lừng, cuốn bánh tráng chấm tương." },
      { name: "Bánh tráng Đại Lộc", img: "../assets/dishes/banh-trang-dai-loc.webp", note: "Cuốn thịt luộc rau vườn, mắm nêm dậy vị." }
    ]
  },
  seafood: {
    title: "Món hải sản",
    countLabel: "7 món · Tươi từ biển Đà Nẵng",
    desc: "Tôm, mực, hàu, sò điệp và cá biển chế biến đậm đà cho mâm ăn rôm rả.",
    dishes: [
      { name: "Tôm sốt bơ tỏi", img: "../assets/dishes/tom-sot-bo-toi.webp", note: "Tôm chắc thịt phủ lớp bơ tỏi thơm béo." },
      { name: "Ốc hương sốt trứng muối", img: "../assets/dishes/oc-huong-sot-trung-muoi.webp", note: "Sốt trứng muối sánh mịn, chấm bánh mì hết sẩy." },
      { name: "Mực nướng sa tế", img: "../assets/dishes/muc-nuong-sa-te.webp", note: "Mực giòn ngọt, cay ấm vị sa tế nhà làm." },
      { name: "Hàu nướng phô mai", img: "../assets/dishes/hau-nuong-pho-mai.webp", note: "Hàu sữa tươi nướng nóng hổi béo thơm." },
      { name: "Sò điệp nướng phô mai", img: "../assets/dishes/so-diep-nuong-pho-mai.webp", note: "Sò điệp ngọt thịt, lớp phô mai vàng óng." },
      { name: "Cá bớp kho tiêu", img: "../assets/dishes/ca-bop-kho-tieu.webp", note: "Kho tộ đậm đà cay nhẹ, đưa cơm hết ý." }
    ]
  },
  salad: {
    title: "Gỏi & Rau",
    countLabel: "4 món · Thanh mát cân vị",
    desc: "Giòn mát, chua ngọt hài hòa để mâm cơm thêm tròn vị.",
    dishes: [
      { name: "Gỏi bưởi tôm mực dừa nước", img: "../assets/dishes/goi-buoi-tom-muc-dua-nuoc.webp", note: "Tép bưởi mọng nước trộn tôm mực tươi." },
      { name: "Gỏi xoài hải sản dừa nước", img: "../assets/dishes/goi-xoai-hai-san-dua-nuoc.webp", note: "Xoài xanh giòn chua nhẹ cùng dừa nước thanh mát." },
      { name: "Gỏi ngó sen Huế", img: "../assets/dishes/goi-ngo-sen-hue.webp", note: "Ngó sen trắng giòn, thơm rau răm và đậu phộng." },
      { name: "Rau muống xào ốc móng tay", img: "../assets/dishes/rau-muong-xao-oc-mong-tay.webp", note: "Xào lửa lớn thơm tỏi, ốc móng tay giòn ngọt." }
    ]
  },
  meat: {
    title: "Món thịt",
    countLabel: "4 món · Nướng than & kho quẹt",
    desc: "Đậm đà hương vị bếp lửa, hợp cho cả nhà lẫn nhóm bạn.",
    dishes: [
      { name: "Sườn heo nướng", img: "../assets/dishes/suon-heo-nuong.webp", note: "Ướp mật ong sả tỏi, nướng mềm thơm." },
      { name: "Ba chỉ heo nướng", img: "../assets/dishes/ba-chi-heo-nuong.webp", note: "Xém cạnh giòn nhẹ, ăn kèm dưa góp." },
      { name: "Cánh gà nướng & xiên gà", img: "../assets/dishes/canh-ga-nuong-xien-ga.webp", note: "Da vàng óng, thịt mềm ngọt cho cả bé nhỏ." },
      { name: "Ngũ quả luộc kho quẹt", img: "../assets/dishes/ngu-qua-luoc-kho-quet.webp", note: "Rau củ luộc tươi chấm kho quẹt tóp mỡ đậm đà." }
    ]
  },
  soup: {
    title: "Canh & Lẩu",
    countLabel: "6 món · Nóng hổi quây quần",
    desc: "Nồi canh chua thanh và nồi lẩu nghi ngút khói đặt giữa bàn.",
    dishes: [
      { name: "Lẩu hải sản Cù Lao Chàm", img: "../assets/dishes/lau-hai-san-cu-lao-cham.webp", note: "Nước lẩu chua cay dịu, hải sản tươi đầy nồi." },
      { name: "Gà hầm sâm dừa nước", img: "../assets/dishes/ga-ham-sam-dua-nuoc.webp", note: "Nước hầm ngọt thanh, bồi bổ ấm bụng." },
      { name: "Hải sản hầm sâm Ngọc Linh", img: "../assets/dishes/hai-san-ham-sam-ngoc-linh.webp", note: "Hương sâm dịu nhẹ quyện vị ngọt hải sản." },
      { name: "Canh khế cá dìa", img: "../assets/dishes/canh-khe-ca-dia.webp", note: "Món canh dân dã miền Trung, chua thanh dịu nhẹ." },
      { name: "Canh chua cá", img: "../assets/dishes/canh-chua-ca.webp", note: "Đậm đà vị thơm, cà chua và rau ngò om." },
      { name: "Canh rau tôm", img: "../assets/dishes/canh-rau-tom.webp", note: "Nhẹ nhàng, ngọt tự nhiên như cơm nhà nấu." }
    ]
  },
  rice: {
    title: "Cơm",
    countLabel: "5 món · Ấm bụng đúng điệu",
    desc: "Từ niêu cơm trắng dẻo thơm đến cơm chiên trái dừa vui mắt.",
    dishes: [
      { name: "Cơm niêu", img: "../assets/dishes/com-nieu.webp", note: "Hạt cơm dẻo thơm, cháy giòn đáy niêu." },
      { name: "Cơm ruốc Huế nhiều màu", img: "../assets/dishes/com-ruoc-hue-nhieu-mau.webp", note: "Đậm hương mắm ruốc Huế, bày biện bắt mắt." },
      { name: "Cơm chiên trái dừa", img: "../assets/dishes/com-chien-trai-dua.webp", note: "Thơm béo nước dừa, dọn nguyên trái." },
      { name: "Cơm chiên dứa hải sản", img: "../assets/dishes/com-chien-dua-hai-san.webp", note: "Hạt cơm tơi vàng cùng dứa ngọt và tôm mực." },
      { name: "Cơm trắng", img: "../assets/dishes/com-trang.webp", note: "Gạo mới nấu dẻo, ăn kèm cá kho tiêu." }
    ]
  },
  dessert: {
    title: "Tráng miệng & Nước",
    countLabel: "5 món · Ngọt lành & rôm rả",
    desc: "Khép lại bữa ăn bằng chén chè thanh mát hoặc ly rượu Hồng Đào.",
    dishes: [
      { name: "Chè sen dừa nước", img: "../assets/dishes/che-sen-dua-nuoc.webp", note: "Hạt sen bùi bở, dừa nước giòn mát." },
      { name: "Bánh xu xê Hội An", img: "../assets/dishes/banh-xu-xe-hoi-an.webp", note: "Dẻo thơm lá dứa, nhân đậu xanh dừa sợi." },
      { name: "Flan dừa non", img: "../assets/dishes/flan-dua-non.webp", note: "Mềm mịn béo nhẹ hương dừa non." },
      { name: "Trà sâm dứa thảo mộc", img: "../assets/dishes/tra-sam-dua-thao-moc.webp", note: "Thơm mát đặc trưng Đà Nẵng, giải nhiệt cực đã." },
      { name: "Rượu Hồng Đào", img: "../assets/dishes/ruou-hong-dao.webp", note: "Đặc sản đất Quảng cho buổi gặp mặt thêm vui." }
    ]
  }
};

const BOC_MAM_POOLS = {
  main: [
    { name: "Mì Quảng Phú Chiêm", img: "../assets/dishes/mi-quang-phu-chiem.webp", tag: "Món chính" },
    { name: "Bánh xèo hải sản", img: "../assets/dishes/banh-xeo-hai-san.webp", tag: "Món chính" },
    { name: "Cao lầu Hội An", img: "../assets/dishes/cao-lau-hoi-an.webp", tag: "Món chính" },
    { name: "Sườn heo nướng", img: "../assets/dishes/suon-heo-nuong.webp", tag: "Món mặn" },
    { name: "Cá bớp kho tiêu", img: "../assets/dishes/ca-bop-kho-tieu.webp", tag: "Món mặn" },
    { name: "Tôm sốt bơ tỏi", img: "../assets/dishes/tom-sot-bo-toi.webp", tag: "Hải sản" }
  ],
  side: [
    { name: "Gỏi bưởi tôm mực", img: "../assets/dishes/goi-buoi-tom-muc-dua-nuoc.webp", tag: "Gỏi mát" },
    { name: "Nem lụi cuốn", img: "../assets/dishes/nem-lui-cuon.webp", tag: "Ăn chơi" },
    { name: "Ngũ quả luộc kho quẹt", img: "../assets/dishes/ngu-qua-luoc-kho-quet.webp", tag: "Rau củ" },
    { name: "Ốc hương trứng muối", img: "../assets/dishes/oc-huong-sot-trung-muoi.webp", tag: "Hải sản" },
    { name: "Chả ram tôm đất", img: "../assets/dishes/cha-ram-tom-dat.webp", tag: "Giòn rụm" }
  ],
  warm: [
    { name: "Lẩu hải sản Cù Lao Chàm", img: "../assets/dishes/lau-hai-san-cu-lao-cham.webp", tag: "Quây quần" },
    { name: "Gà hầm sâm dừa nước", img: "../assets/dishes/ga-ham-sam-dua-nuoc.webp", tag: "Canh hầm" },
    { name: "Canh khế cá dìa", img: "../assets/dishes/canh-khe-ca-dia.webp", tag: "Canh chua" },
    { name: "Cơm niêu", img: "../assets/dishes/com-nieu.webp", tag: "Cơm nóng" },
    { name: "Chè sen dừa nước", img: "../assets/dishes/che-sen-dua-nuoc.webp", tag: "Tráng miệng" }
  ]
};

const DINO_PHRASES = [
  "“Ăn chi hè?” — Hỏi nhỏ mà thương lắm!",
  "“Gôm lại cho vui!” — Đủ người mâm mới rôm rả.",
  "“Răng mà ngon dữ rứa!” — Khen thật lòng kiểu Quảng.",
  "“Chừ đi ăn liền hè?” — Đi ngay cho nóng giòn!",
  "“Mô tê răng rứa?” — Nghe là thấy nhớ miền Trung."
];

/* 1. Live Open/Closed Status (Asia/Ho_Chi_Minh, 8AM–10PM) */
function updateOpenStatus() {
  const pill = document.getElementById("open-status-pill");
  const statusText = document.getElementById("open-status-text");
  const statusSub = document.getElementById("open-status-sub");
  const clockEl = document.getElementById("danang-clock");
  if (!pill || !statusText || !clockEl) return;

  const now = new Date();
  const parts = new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(now);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");

  clockEl.textContent = `${hh}:${mm} · ĐN`;

  const isOpen = hour >= 8 && hour < 22;
  pill.dataset.state = isOpen ? "open" : "closed";

  if (isOpen) {
    statusText.textContent = "Đang mở cửa";
    if (statusSub) {
      const remaining = 22 - hour;
      statusSub.textContent =
        remaining <= 1
          ? "Sắp đóng bếp lúc 10PM, ghé sớm bạn hè!"
          : "Đón khách suốt tuần tại 25 Lê Hồng Phong.";
    }
  } else {
    statusText.textContent = "Đang nghỉ";
    if (statusSub) {
      statusSub.textContent = "Mở cửa lại lúc 8:00 AM · Bạn có thể đặt bàn trước.";
    }
  }
}

/* 2. Mini Bốc Mâm (Stepper 1–20 + Pick 3 Dishes Inline) */
function initBocMam() {
  const minusBtn = document.getElementById("guests-minus");
  const plusBtn = document.getElementById("guests-plus");
  const countEl = document.getElementById("guests-count");
  const rollBtn = document.getElementById("bocmam-btn");
  const resultsEl = document.getElementById("bocmam-results");
  if (!minusBtn || !plusBtn || !countEl || !rollBtn || !resultsEl) return;

  let guests = 4;

  function renderCount() {
    countEl.textContent = `${guests} người`;
    minusBtn.disabled = guests <= 1;
    plusBtn.disabled = guests >= 20;
  }

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function renderPicks() {
    const picks = [
      pickRandom(BOC_MAM_POOLS.main),
      pickRandom(BOC_MAM_POOLS.side),
      guests >= 4
        ? BOC_MAM_POOLS.warm[Math.floor(Math.random() * 3)]
        : pickRandom(BOC_MAM_POOLS.warm)
    ];

    resultsEl.innerHTML = picks
      .map(
        (dish) => `
        <div class="bocmam-card">
          <img src="${dish.img}" alt="${dish.name}" loading="lazy" />
          <div>
            <div class="bocmam-card-tag">${dish.tag}</div>
            <div class="bocmam-card-name">${dish.name}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  minusBtn.addEventListener("click", () => {
    if (guests > 1) {
      guests -= 1;
      renderCount();
    }
  });

  plusBtn.addEventListener("click", () => {
    if (guests < 20) {
      guests += 1;
      renderCount();
    }
  });

  rollBtn.addEventListener("click", () => {
    renderPicks();
  });

  renderCount();
  renderPicks();
}

/* 3. Dino Dialect Teaser */
function initDinoTeaser() {
  const quoteEl = document.getElementById("dino-quote");
  const btn = document.getElementById("dino-btn");
  if (!quoteEl || !btn) return;

  let index = 0;
  btn.addEventListener("click", () => {
    index = (index + 1) % DINO_PHRASES.length;
    quoteEl.textContent = DINO_PHRASES[index];
  });
}

/* 4. Video Control & Prefers-Reduced-Motion */
function initVideoControl() {
  const video = document.getElementById("hero-video");
  const toggleBtn = document.getElementById("video-toggle");
  const icon = document.getElementById("video-toggle-icon");
  if (!video || !toggleBtn || !icon) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    video.pause();
    icon.textContent = "▶";
    toggleBtn.setAttribute("aria-label", "Phát video");
    toggleBtn.setAttribute("aria-pressed", "true");
  }

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
      icon.textContent = "❚❚";
      toggleBtn.setAttribute("aria-label", "Tạm dừng video");
      toggleBtn.setAttribute("aria-pressed", "false");
    } else {
      video.pause();
      icon.textContent = "▶";
      toggleBtn.setAttribute("aria-label", "Phát video");
      toggleBtn.setAttribute("aria-pressed", "true");
    }
  });
}

/* 5. Menu Category Dialog */
function initMenuDialog() {
  const dialog = document.getElementById("menu-dialog");
  const titleEl = document.getElementById("dialog-title");
  const countEl = document.getElementById("dialog-count");
  const descEl = document.getElementById("dialog-desc");
  const gridEl = document.getElementById("dialog-dishes");
  const closeBtn = document.getElementById("dialog-close");
  const closeFootBtn = document.getElementById("dialog-close-foot");
  const bookLink = document.getElementById("dialog-book-link");
  if (!dialog || !titleEl || !countEl || !descEl || !gridEl) return;

  function openCategory(key) {
    const cat = MENU_CATEGORIES[key];
    if (!cat) return;

    countEl.textContent = cat.countLabel;
    titleEl.textContent = cat.title;
    descEl.textContent = cat.desc;
    gridEl.innerHTML = cat.dishes
      .map(
        (d) => `
        <article class="dialog-dish">
          <img src="${d.img}" alt="${d.name}" loading="lazy" />
          <div>
            <h3>${d.name}</h3>
            <p>${d.note}</p>
          </div>
        </article>
      `
      )
      .join("");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  document.querySelectorAll("[data-open-category]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openCategory(trigger.dataset.openCategory);
    });
  });

  function closeDialog() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  closeBtn?.addEventListener("click", closeDialog);
  closeFootBtn?.addEventListener("click", closeDialog);
  bookLink?.addEventListener("click", closeDialog);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
}

/* 6. Compact Booking Form (Client-Side Confirmation) */
function initBookingForm() {
  const form = document.getElementById("booking-form");
  const formWrap = document.getElementById("booking-form-wrap");
  const confirmWrap = document.getElementById("booking-confirm");
  const summaryEl = document.getElementById("confirm-summary");
  const codeEl = document.getElementById("confirm-code");
  const errorEl = document.getElementById("booking-error");
  const resetBtn = document.getElementById("booking-reset");
  const dateInput = document.getElementById("bf-date");
  if (!form || !formWrap || !confirmWrap || !summaryEl || !codeEl) return;

  if (dateInput && !dateInput.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("bf-name")?.value.trim() || "";
    const phone = document.getElementById("bf-phone")?.value.trim() || "";
    const date = dateInput?.value || "";
    const time = document.getElementById("bf-time")?.value || "";
    const guests = Number(document.getElementById("bf-guests")?.value || 0);
    const note = document.getElementById("bf-note")?.value.trim() || "";

    if (!name || !phone || !date || guests < 1 || guests > 20) {
      if (errorEl) {
        errorEl.textContent = "Bạn vui lòng điền đủ họ tên, số điện thoại, ngày ghé và số người (1–20).";
        errorEl.hidden = false;
      }
      return;
    }

    if (errorEl) errorEl.hidden = true;

    const code = `GOM-${Math.floor(1000 + Math.random() * 9000)}`;
    codeEl.textContent = code;
    summaryEl.textContent = `Bàn cho ${guests} người dưới tên ${name} (${phone}) vào lúc ${time} ngày ${date}${note ? ` · Ghi chú: ${note}` : ""}.`;

    formWrap.hidden = true;
    confirmWrap.hidden = false;
  });

  resetBtn?.addEventListener("click", () => {
    form.reset();
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
    confirmWrap.hidden = true;
    formWrap.hidden = false;
  });
}

/* 7. Mobile Nav Drawer */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const isOpen = !drawer.hidden;
    drawer.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
  initBocMam();
  initDinoTeaser();
  initVideoControl();
  initMenuDialog();
  initBookingForm();
  initMobileNav();
});
