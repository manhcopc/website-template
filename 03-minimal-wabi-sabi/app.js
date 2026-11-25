(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var IMG = "../assets/dishes/";

  var MENU = [
    { cat: "Món địa phương", items: [
      ["banh-xeo-hau-pho-mai", "Bánh xèo hàu phô mai"],
      ["banh-xeo-hai-san", "Bánh xèo hải sản"],
      ["banh-xeo-truyen-thong", "Bánh xèo truyền thống"],
      ["cao-lau-hoi-an", "Cao lầu Hội An"],
      ["mi-quang-phu-chiem", "Mì Quảng Phú Chiêm"],
      ["bun-bo-hue", "Bún bò Huế"],
      ["pho-bo", "Phở bò"],
      ["banh-mi-thit-nuong", "Bánh mì thịt nướng"],
      ["banh-trang-dai-loc", "Bánh tráng Đại Lộc"],
      ["xien-nuong-hoi-an", "Xiên nướng Hội An"],
      ["nem-lui-cuon", "Nem lụi cuốn"],
      ["bo-la-lot-cuon", "Bò lá lốt cuốn"],
      ["cha-ram-tom-dat", "Chả ram tôm đất"]
    ]},
    { cat: "Gỏi & Rau", items: [
      ["goi-xoai-hai-san-dua-nuoc", "Gỏi xoài hải sản dừa nước"],
      ["goi-buoi-tom-muc-dua-nuoc", "Gỏi bưởi tôm mực dừa nước"],
      ["goi-ngo-sen-hue", "Gỏi ngó sen Huế"],
      ["rau-muong-xao-oc-mong-tay", "Rau muống xào ốc móng tay"]
    ]},
    { cat: "Món hải sản", items: [
      ["tom-sot-bo-toi", "Tôm sốt bơ tỏi"],
      ["muc-nuong-sa-te", "Mực nướng sa tế"],
      ["hau-nuong-pho-mai", "Hàu nướng phô mai"],
      ["so-diep-nuong-pho-mai", "Sò điệp nướng phô mai"],
      ["oc-huong-sot-trung-muoi", "Ốc hương sốt trứng muối"],
      ["hai-san-sot-bo-toi", "Hải sản sốt bơ tỏi"],
      ["ca-bop-kho-tieu", "Cá bớp kho tiêu"]
    ]},
    { cat: "Món thịt", items: [
      ["suon-heo-nuong", "Sườn heo nướng"],
      ["ba-chi-heo-nuong", "Ba chỉ heo nướng"],
      ["canh-ga-nuong-xien-ga", "Cánh gà nướng & xiên gà"],
      ["ngu-qua-luoc-kho-quet", "Ngũ quả luộc kho quẹt"]
    ]},
    { cat: "Canh & Lẩu", items: [
      ["canh-chua-ca", "Canh chua cá"],
      ["canh-rau-tom", "Canh rau tôm"],
      ["canh-khe-ca-dia", "Canh khế cá dìa"],
      ["ga-ham-sam-dua-nuoc", "Gà hầm sâm dừa nước"],
      ["hai-san-ham-sam-ngoc-linh", "Hải sản hầm sâm Ngọc Linh"],
      ["lau-hai-san-cu-lao-cham", "Lẩu hải sản Cù Lao Chàm"]
    ]},
    { cat: "Cơm", items: [
      ["com-nieu", "Cơm niêu"],
      ["com-trang", "Cơm trắng"],
      ["com-ruoc-hue-nhieu-mau", "Cơm ruốc Huế nhiều màu"],
      ["com-chien-dua-hai-san", "Cơm chiên dừa hải sản"],
      ["com-chien-trai-dua", "Cơm chiên trái dừa"]
    ]},
    { cat: "Tráng miệng & Nước", items: [
      ["banh-xu-xe-hoi-an", "Bánh xu xê Hội An"],
      ["che-sen-dua-nuoc", "Chè sen dừa nước"],
      ["flan-dua-non", "Flan dừa non"],
      ["ruou-hong-dao", "Rượu hồng đào"],
      ["tra-sam-dua-thao-moc", "Trà sâm dứa thảo mộc"]
    ]}
  ];

  function $(id) { return document.getElementById(id); }

  /* Header border on scroll + active nav */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Fade-in on scroll */
  var fades = document.querySelectorAll(".fade");
  if (reduce || !("IntersectionObserver" in window)) {
    fades.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    fades.forEach(function (el) { io.observe(el); });
  }

  var navLinks = document.querySelectorAll(".nav a:not(.nav-book)");
  if ("IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["thuc-don", "chuyen-gom", "choi-cung-gom", "ghe-gom"].forEach(function (id) {
      var s = $(id); if (s) navIo.observe(s);
    });
  }

  /* Menu: quiet list, hover reveals dish */
  var tabsEl = document.querySelector(".menu-tabs");
  var listEl = $("menu-list");
  var prevImg = $("menu-preview-img");
  var prevCap = $("menu-preview-cap");
  var current = 0;
  var swapTimer;

  function preview(slug, name) {
    if (prevImg.getAttribute("data-slug") === slug) return;
    prevImg.setAttribute("data-slug", slug);
    clearTimeout(swapTimer);
    if (reduce) { prevImg.src = IMG + slug + ".webp"; prevCap.textContent = name; return; }
    prevImg.classList.add("swap");
    swapTimer = setTimeout(function () {
      prevImg.src = IMG + slug + ".webp";
      prevCap.textContent = name;
      prevImg.onload = function () { prevImg.classList.remove("swap"); };
      setTimeout(function () { prevImg.classList.remove("swap"); }, 400);
    }, 180);
  }

  function setActive(li) {
    listEl.querySelectorAll(".menu-item.active").forEach(function (x) {
      if (x !== li) { x.classList.remove("active"); x.querySelector("button").setAttribute("aria-expanded", "false"); }
    });
    li.classList.add("active");
    li.querySelector("button").setAttribute("aria-expanded", "true");
  }

  function renderList(idx) {
    var group = MENU[idx];
    listEl.innerHTML = "";
    group.items.forEach(function (d, i) {
      var li = document.createElement("li");
      li.className = "menu-item";
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-expanded", "false");
      b.innerHTML = '<span class="num">' + String(i + 1).padStart(2, "0") + "</span><span></span>";
      b.lastChild.textContent = d[1];
      var thumb = document.createElement("div");
      thumb.className = "thumb";
      var im = document.createElement("img");
      im.loading = "lazy";
      im.alt = d[1];
      im.src = IMG + d[0] + ".webp";
      thumb.appendChild(im);
      function show() { setActive(li); preview(d[0], d[1]); }
      b.addEventListener("mouseenter", show);
      b.addEventListener("focus", show);
      b.addEventListener("click", show);
      li.appendChild(b);
      li.appendChild(thumb);
      listEl.appendChild(li);
    });
    var first = listEl.querySelector(".menu-item");
    if (first) { setActive(first); preview(group.items[0][0], group.items[0][1]); }
  }

  MENU.forEach(function (g, i) {
    var t = document.createElement("button");
    t.type = "button";
    t.className = "tab";
    t.setAttribute("role", "tab");
    t.setAttribute("aria-selected", i === 0 ? "true" : "false");
    t.setAttribute("aria-controls", "menu-list");
    t.textContent = g.cat;
    t.addEventListener("click", function () {
      if (i === current) return;
      current = i;
      tabsEl.querySelectorAll(".tab").forEach(function (x, j) {
        x.setAttribute("aria-selected", j === i ? "true" : "false");
      });
      if (reduce) { renderList(i); return; }
      listEl.classList.add("fading");
      setTimeout(function () { renderList(i); listEl.classList.remove("fading"); }, 280);
    });
    tabsEl.appendChild(t);
  });
  renderList(0);

  /* Bốc mâm */
  var n = 4, MIN = 1, MAX = 20;
  var nEl = $("people-n"), minus = $("minus"), plus = $("plus");
  function syncN() {
    nEl.textContent = n;
    minus.disabled = n <= MIN;
    plus.disabled = n >= MAX;
  }
  minus.addEventListener("click", function () { if (n > MIN) { n--; syncN(); } });
  plus.addEventListener("click", function () { if (n < MAX) { n++; syncN(); } });
  syncN();

  function byCat(name) {
    for (var i = 0; i < MENU.length; i++) if (MENU[i].cat === name) return MENU[i];
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function take(cat, k, used) {
    var g = byCat(cat), out = [];
    shuffle(g.items).forEach(function (d) {
      if (out.length < k && !used[d[0]]) { used[d[0]] = 1; out.push({ slug: d[0], name: d[1], cat: cat }); }
    });
    return out;
  }

  function buildTray(people) {
    var used = {}, picks = [];
    var total = Math.min(14, Math.max(2, Math.round(people * 0.75) + 1));
    picks = picks.concat(take("Món địa phương", 1, used));
    if (people >= 2) picks = picks.concat(take("Cơm", 1, used));
    if (people >= 3) picks = picks.concat(take("Canh & Lẩu", 1, used));
    if (people >= 4) picks = picks.concat(take("Tráng miệng & Nước", 1, used));
    var pool = ["Món hải sản", "Món thịt", "Gỏi & Rau", "Món địa phương"];
    var guard = 0;
    while (picks.length < total && guard++ < 60) {
      var c = pool[Math.floor(Math.random() * pool.length)];
      picks = picks.concat(take(c, 1, used));
    }
    return picks;
  }

  var tray = $("tray"), note = $("tray-note");
  $("pick").addEventListener("click", function () {
    var picks = buildTray(n);
    tray.innerHTML = "";
    note.textContent = "Mâm cho " + n + " người · " + picks.length + " món. Bốc lại nếu chưa ưng hè.";
    picks.forEach(function (p, i) {
      var li = document.createElement("li");
      var im = document.createElement("img");
      im.src = IMG + p.slug + ".webp";
      im.alt = p.name;
      im.loading = "lazy";
      var nm = document.createElement("span"); nm.className = "t-name"; nm.textContent = p.name;
      var ct = document.createElement("span"); ct.className = "t-cat"; ct.textContent = p.cat;
      li.appendChild(im); li.appendChild(nm); li.appendChild(ct);
      tray.appendChild(li);
      if (reduce) li.classList.add("in");
      else setTimeout(function () { li.classList.add("in"); }, 120 + i * 110);
    });
    $("f-guests").value = n;
  });

  /* Booking */
  var form = $("book-form"), err = $("form-error"), confirmBox = $("confirm");
  var dateIn = $("f-date");
  var today = new Date();
  var iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  dateIn.min = iso;
  dateIn.value = iso;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var bad = null;
    form.querySelectorAll("input").forEach(function (inp) {
      var ok = inp.checkValidity();
      inp.classList.toggle("invalid", !ok);
      if (!ok && !bad) bad = inp;
    });
    if (bad) {
      var lbl = form.querySelector('label[for="' + bad.id + '"]');
      err.textContent = "Bạn xem lại ô “" + (lbl ? lbl.firstChild.textContent.trim() : "") + "” giúp GÔM nghen.";
      bad.focus();
      return;
    }
    err.textContent = "";
    var d = new Date(dateIn.value + "T00:00");
    var dateStr = d.toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "numeric", year: "numeric" });
    $("confirm-text").textContent =
      $("f-name").value.trim() + " ơi, GÔM đã ghi nhận bàn " + $("f-guests").value + " người lúc " +
      $("f-time").value + ", " + dateStr + ". Mình sẽ gọi lại số " + $("f-phone").value.trim() +
      " để xác nhận. Gôm đủ người, mình gặp nhau hè!";
    form.hidden = true;
    confirmBox.hidden = false;
    confirmBox.focus();
  });
  form.addEventListener("input", function (e) {
    if (e.target.classList.contains("invalid") && e.target.checkValidity()) e.target.classList.remove("invalid");
  });
  $("book-again").addEventListener("click", function () {
    form.reset();
    dateIn.value = iso;
    confirmBox.hidden = true;
    form.hidden = false;
    $("f-name").focus();
  });
})();
