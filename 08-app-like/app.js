(() => {
  'use strict';

  /* ========================================================================
     1. DATA — 44 Món Thực Đơn GÔM (7 nhóm)
     ======================================================================== */
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
    {
      id: 'mi-quang-phu-chiem',
      name: 'Mì Quảng Phú Chiêm',
      category: 'Món địa phương',
      img: '../assets/dishes/mi-quang-phu-chiem.webp',
      desc: 'Sợi mì mềm mịn, nước nhân đậm đà tôm thịt, ăn kèm bánh tráng nướng giòn và rau sống Trà Quế.',
      tags: ['Đậm vị Quảng', 'Món đặc trưng'],
      signature: true,
    },
    {
      id: 'cao-lau-hoi-an',
      name: 'Cao lầu Hội An',
      category: 'Món địa phương',
      img: '../assets/dishes/cao-lau-hoi-an.webp',
      desc: 'Sợi cao lầu dai giòn đặc trưng, thịt xá xíu thơm ngũ vị, tóp mỡ giòn rụm và rau thơm xứ Quảng.',
      tags: ['Đặc sản phố Hội', 'Đậm đà'],
      signature: true,
    },
    {
      id: 'banh-xeo-hau-pho-mai',
      name: 'Bánh xèo hàu phô mai',
      category: 'Món địa phương',
      img: '../assets/dishes/banh-xeo-hau-pho-mai.webp',
      desc: 'Vỏ bánh giòn rụm ôm trọn hàu sữa béo ngậy và lớp phô mai kéo sợi thơm lừng, cuốn rau chấm mắm nêm hoặc tương đậu.',
      tags: ['Bán chạy', 'Giòn béo'],
      signature: true,
    },
    {
      id: 'banh-xeo-hai-san',
      name: 'Bánh xèo hải sản',
      category: 'Món địa phương',
      img: '../assets/dishes/banh-xeo-hai-san.webp',
      desc: 'Tôm mực tươi rói đổ cùng bột gạo pha nghệ vàng ươm, ăn nóng kèm nước tương đậu phộng đặc sánh.',
      tags: ['Hải sản tươi', 'Dễ chia sẻ'],
    },
    {
      id: 'banh-xeo-truyen-thong',
      name: 'Bánh xèo truyền thống',
      category: 'Món địa phương',
      img: '../assets/dishes/banh-xeo-truyen-thong.webp',
      desc: 'Bánh xèo miền Trung nhỏ gọn, giòn rụm với tôm đất, thịt ba chỉ và giá đỗ, cuốn bánh tráng rau xanh.',
      tags: ['Hương vị cũ', 'Giòn rụm'],
    },
    {
      id: 'bun-bo-hue',
      name: 'Bún bò Huế',
      category: 'Món địa phương',
      img: '../assets/dishes/bun-bo-hue.webp',
      desc: 'Nước dùng hầm xương thơm sả ruốc Huế, thịt bắp bò mềm, chả cua ngọt tự nhiên.',
      tags: ['Nóng hổi', 'Đậm vị sả ruốc'],
    },
    {
      id: 'pho-bo',
      name: 'Phở bò',
      category: 'Món địa phương',
      img: '../assets/dishes/pho-bo.webp',
      desc: 'Nước dùng trong thanh ninh nhiều giờ với quế hồi thảo quả, thịt bò mềm ngọt.',
      tags: ['Thanh ngọt', 'Ăn sáng & trưa'],
    },
    {
      id: 'banh-mi-thit-nuong',
      name: 'Bánh mì thịt nướng',
      category: 'Món địa phương',
      img: '../assets/dishes/banh-mi-thit-nuong.webp',
      desc: 'Ổ bánh mì nóng giòn kẹp thịt nướng than hoa thơm lừng, đồ chua giòn và sốt đậm vị nhà GÔM.',
      tags: ['Nướng than hoa', 'Gọn nhẹ'],
    },
    {
      id: 'banh-trang-dai-loc',
      name: 'Bánh tráng Đại Lộc',
      category: 'Món địa phương',
      img: '../assets/dishes/banh-trang-dai-loc.webp',
      desc: 'Bánh tráng dẻo thơm cuốn thịt heo hai đầu da, rau sống mướt xanh, chấm mắm nêm cay nồng.',
      tags: ['Món cuốn vui', 'Mắm nêm đậm'],
      signature: true,
    },
    {
      id: 'xien-nuong-hoi-an',
      name: 'Xiên nướng Hội An',
      category: 'Món địa phương',
      img: '../assets/dishes/xien-nuong-hoi-an.webp',
      desc: 'Thịt ướp sả mè nướng xém cạnh, cuốn bánh tráng ướt và chấm tương đậu bùi béo.',
      tags: ['Thơm lừng', 'Hợp nhóm bạn'],
    },
    {
      id: 'nem-lui-cuon',
      name: 'Nem lụi cuốn',
      category: 'Món địa phương',
      img: '../assets/dishes/nem-lui-cuon.webp',
      desc: 'Nem lụi bọc sả nướng vàng ruộm, ăn kèm bánh tráng, khế chua, chuối chát và nước lèo đặc trưng.',
      tags: ['Cuốn tay vui', 'Đặc sản miền Trung'],
    },
    {
      id: 'bo-la-lot-cuon',
      name: 'Bò lá lốt cuốn',
      category: 'Món địa phương',
      img: '../assets/dishes/bo-la-lot-cuon.webp',
      desc: 'Thịt bò băm ướp gia vị gói lá lốt nướng thơm nồng, ăn kèm bún tươi và mắm nêm dứa.',
      tags: ['Thơm lá lốt', 'Đậm vị'],
    },
    {
      id: 'cha-ram-tom-dat',
      name: 'Chả ram tôm đất',
      category: 'Món địa phương',
      img: '../assets/dishes/cha-ram-tom-dat.webp',
      desc: 'Cuốn nhỏ giòn tan với nguyên con tôm đất ngọt thịt bên trong, rất hợp làm món khai vị.',
      tags: ['Khai vị', 'Giòn tan'],
    },

    // Gỏi & Rau (5)
    {
      id: 'goi-xoai-hai-san-dua-nuoc',
      name: 'Gỏi xoài hải sản dừa nước',
      category: 'Gỏi & Rau',
      img: '../assets/dishes/goi-xoai-hai-san-dua-nuoc.webp',
      desc: 'Xoài xanh giòn chua nhẹ trộn tôm mực tươi và dừa nước Cẩm Thanh mát rượi.',
      tags: ['Tươi mát', 'Khai vị'],
      signature: true,
    },
    {
      id: 'goi-buoi-tom-muc-dua-nuoc',
      name: 'Gỏi bưởi tôm mực dừa nước',
      category: 'Gỏi & Rau',
      img: '../assets/dishes/goi-buoi-tom-muc-dua-nuoc.webp',
      desc: 'Tép bưởi mọng nước kết hợp tôm mực ngọt giòn, thêm dừa nước dẻo thanh và đậu phộng rang.',
      tags: ['Thanh nhẹ', 'Tươi ngon'],
    },
    {
      id: 'goi-ngo-sen-hue',
      name: 'Gỏi ngó sen Huế',
      category: 'Gỏi & Rau',
      img: '../assets/dishes/goi-ngo-sen-hue.webp',
      desc: 'Ngó sen trắng giòn trộn nước mắm chua ngọt hài hòa, ăn kèm bánh phồng tôm giòn rụm.',
      tags: ['Giòn mát', 'Dễ ăn'],
    },
    {
      id: 'rau-muong-xao-oc-mong-tay',
      name: 'Rau muống xào ốc móng tay',
      category: 'Gỏi & Rau',
      img: '../assets/dishes/rau-muong-xao-oc-mong-tay.webp',
      desc: 'Rau muống xanh mướt xào lửa lớn thơm tỏi cùng ốc móng tay giòn ngọt.',
      tags: ['Xào lửa lớn', 'Bắt cơm'],
    },
    {
      id: 'ngu-qua-luoc-kho-quet',
      name: 'Ngũ quả luộc kho quẹt',
      category: 'Gỏi & Rau',
      img: '../assets/dishes/ngu-qua-luoc-kho-quet.webp',
      desc: 'Rau củ luộc chín tới giữ trọn độ ngọt, chấm niêu kho quẹt tóp mỡ tiêu xanh đậm đà.',
      tags: ['Cơm nhà', 'Đậm đà'],
    },

    // Món hải sản (7)
    {
      id: 'tom-sot-bo-toi',
      name: 'Tôm sốt bơ tỏi',
      category: 'Món hải sản',
      img: '../assets/dishes/tom-sot-bo-toi.webp',
      desc: 'Tôm biển chắc thịt áo lớp sốt bơ tỏi béo thơm, chấm kèm bánh mì nóng cực kỳ cuốn.',
      tags: ['Béo thơm', 'Hải sản Đà Nẵng'],
      signature: true,
    },
    {
      id: 'muc-nuong-sa-te',
      name: 'Mực nướng sa tế',
      category: 'Món hải sản',
      img: '../assets/dishes/muc-nuong-sa-te.webp',
      desc: 'Mực lá tươi dày mình ướp sa tế sả ớt nướng vừa chín tới, giòn ngọt tự nhiên.',
      tags: ['Cay ấm', 'Nướng thơm'],
    },
    {
      id: 'hau-nuong-pho-mai',
      name: 'Hàu nướng phô mai',
      category: 'Món hải sản',
      img: '../assets/dishes/hau-nuong-pho-mai.webp',
      desc: 'Hàu sữa tươi phủ phô mai nướng vàng óng, béo ngậy hòa cùng vị ngọt biển cả.',
      tags: ['Béo ngậy', 'Nóng hổi'],
    },
    {
      id: 'so-diep-nuong-pho-mai',
      name: 'Sò điệp nướng phô mai',
      category: 'Món hải sản',
      img: '../assets/dishes/so-diep-nuong-pho-mai.webp',
      desc: 'Cồi sò điệp ngọt mềm nướng phô mai thơm béo, thêm chút hành lá dậy mùi.',
      tags: ['Ngọt thịt', 'Thơm béo'],
    },
    {
      id: 'oc-huong-sot-trung-muoi',
      name: 'Ốc hương sốt trứng muối',
      category: 'Món hải sản',
      img: '../assets/dishes/oc-huong-sot-trung-muoi.webp',
      desc: 'Ốc hương giòn sần sật quyện sốt trứng muối sánh mịn, mằn mặn béo bùi.',
      tags: ['Sốt trứng muối', 'Hợp nhóm bạn'],
    },
    {
      id: 'hai-san-sot-bo-toi',
      name: 'Hải sản sốt bơ tỏi',
      category: 'Món hải sản',
      img: '../assets/dishes/hai-san-sot-bo-toi.webp',
      desc: 'Mâm hải sản tổng hợp tôm, mực, ngao áo sốt bơ tỏi nóng hổi cho cả bàn quây quần.',
      tags: ['Chia sẻ', 'Đầy đặn'],
    },
    {
      id: 'ca-bop-kho-tieu',
      name: 'Cá bớp kho tiêu',
      category: 'Món hải sản',
      img: '../assets/dishes/ca-bop-kho-tieu.webp',
      desc: 'Khúc cá bớp béo chắc kho tộ sánh kẹo với tiêu xanh cay thơm, ăn cùng cơm niêu hết sẩy.',
      tags: ['Bắt cơm', 'Kho tộ'],
    },

    // Món thịt (3)
    {
      id: 'suon-heo-nuong',
      name: 'Sườn heo nướng',
      category: 'Món thịt',
      img: '../assets/dishes/suon-heo-nuong.webp',
      desc: 'Sườn non ướp mật ong và gia vị miền Trung nướng mềm mọng, thơm lừng cạnh cháy.',
      tags: ['Nướng mềm', 'Trẻ nhỏ thích'],
    },
    {
      id: 'ba-chi-heo-nuong',
      name: 'Ba chỉ heo nướng',
      category: 'Món thịt',
      img: '../assets/dishes/ba-chi-heo-nuong.webp',
      desc: 'Ba chỉ thái vừa miếng nướng xém vàng, ăn kèm kim chi củ cải và rau sống chống ngán.',
      tags: ['Thơm giòn', 'Đậm vị'],
    },
    {
      id: 'canh-ga-nuong-xien-ga',
      name: 'Cánh gà nướng & xiên gà',
      category: 'Món thịt',
      img: '../assets/dishes/canh-ga-nuong-xien-ga.webp',
      desc: 'Cánh gà và xiên gà nướng da giòn thịt mọng, chấm muối ớt xanh đậm đà.',
      tags: ['Hợp gia đình', 'Nướng than'],
    },

    // Canh & Lẩu (6)
    {
      id: 'canh-chua-ca',
      name: 'Canh chua cá',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/canh-chua-ca.webp',
      desc: 'Nước canh chua thanh vị dứa, cà chua và rau thơm, thịt cá biển ngọt chắc.',
      tags: ['Thanh mát', 'Cơm nhà'],
    },
    {
      id: 'canh-rau-tom',
      name: 'Canh rau tôm',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/canh-rau-tom.webp',
      desc: 'Tô canh rau tươi nấu tôm giã tay ngọt lành, nhẹ bụng cho bữa cơm gia đình.',
      tags: ['Ngọt lành', 'Nhẹ bụng'],
    },
    {
      id: 'canh-khe-ca-dia',
      name: 'Canh khế cá dìa',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/canh-khe-ca-dia.webp',
      desc: 'Cá dìa biển miền Trung nấu khế chua dịu và hành ngò, giữ trọn vị biển mộc mạc.',
      tags: ['Đậm chất miền Trung', 'Chua dịu'],
    },
    {
      id: 'ga-ham-sam-dua-nuoc',
      name: 'Gà hầm sâm dừa nước',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/ga-ham-sam-dua-nuoc.webp',
      desc: 'Gà ta hầm mềm cùng thảo mộc và dừa nước ngọt thanh, bồi bổ ấm bụng.',
      tags: ['Bổ dưỡng', 'Nóng ấm'],
    },
    {
      id: 'hai-san-ham-sam-ngoc-linh',
      name: 'Hải sản hầm sâm Ngọc Linh',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/hai-san-ham-sam-ngoc-linh.webp',
      desc: 'Nước dùng thanh tao nấu cùng hải sản tươi và hương sâm Ngọc Linh quý giá xứ Quảng.',
      tags: ['Đặc biệt', 'Thanh ngọt'],
    },
    {
      id: 'lau-hai-san-cu-lao-cham',
      name: 'Lẩu hải sản Cù Lao Chàm',
      category: 'Canh & Lẩu',
      img: '../assets/dishes/lau-hai-san-cu-lao-cham.webp',
      desc: 'Nồi lẩu chua cay dịu nhẹ ngập tràn tôm, mực, cá, nghêu tươi cùng rau xanh cho cả bàn quây quần.',
      tags: ['Cho nhóm đông', 'Nóng hổi'],
      signature: true,
    },

    // Cơm (5)
    {
      id: 'com-nieu',
      name: 'Cơm niêu',
      category: 'Cơm',
      img: '../assets/dishes/com-nieu.webp',
      desc: 'Cơm nấu niêu đất dẻo thơm, có lớp cháy vàng giòn nhẹ ở đáy niêu.',
      tags: ['Cơm nhà', 'Ăn kèm món kho'],
    },
    {
      id: 'com-trang',
      name: 'Cơm trắng',
      category: 'Cơm',
      img: '../assets/dishes/com-trang.webp',
      desc: 'Gạo thơm nấu chín tơi dẻo, ăn cùng canh chua và cá kho tiêu cực kỳ tròn vị.',
      tags: ['Dẻo thơm', 'Cơ bản'],
    },
    {
      id: 'com-ruoc-hue-nhieu-mau',
      name: 'Cơm ruốc Huế nhiều màu',
      category: 'Cơm',
      img: '../assets/dishes/com-ruoc-hue-nhieu-mau.webp',
      desc: 'Đĩa cơm trình bày rực rỡ với thịt rim mắm ruốc, trứng cắt sợi, xoài xanh và dưa leo giòn mát.',
      tags: ['Rực rỡ', 'Đậm vị Huế'],
      signature: true,
    },
    {
      id: 'com-chien-dua-hai-san',
      name: 'Cơm chiên dứa hải sản',
      category: 'Cơm',
      img: '../assets/dishes/com-chien-dua-hai-san.webp',
      desc: 'Hạt cơm tơi vàng chiên cùng tôm mực tươi và dứa chín chua ngọt dịu nhẹ.',
      tags: ['Thơm lừng', 'Hợp cả nhà'],
    },
    {
      id: 'com-chien-trai-dua',
      name: 'Cơm chiên trái dừa',
      category: 'Cơm',
      img: '../assets/dishes/com-chien-trai-dua.webp',
      desc: 'Cơm chiên thơm béo đựng gọn trong trái dừa tươi, dậy mùi cùi dừa non bùi ngọt.',
      tags: ['Bắt mắt', 'Béo thơm'],
    },

    // Tráng miệng & Nước (5)
    {
      id: 'banh-xu-xe-hoi-an',
      name: 'Bánh xu xê Hội An',
      category: 'Tráng miệng & Nước',
      img: '../assets/dishes/banh-xu-xe-hoi-an.webp',
      desc: 'Vỏ bánh dẻo trong điểm sợi dừa, nhân đậu xanh bùi ngọt thanh tao.',
      tags: ['Ngọt thanh', 'Truyền thống'],
    },
    {
      id: 'che-sen-dua-nuoc',
      name: 'Chè sen dừa nước',
      category: 'Tráng miệng & Nước',
      img: '../assets/dishes/che-sen-dua-nuoc.webp',
      desc: 'Hạt sen bở bùi nấu cùng dừa nước giòn mát và đường phèn thanh nhẹ.',
      tags: ['Giải nhiệt', 'Mát lành'],
      signature: true,
    },
    {
      id: 'flan-dua-non',
      name: 'Flan dừa non',
      category: 'Tráng miệng & Nước',
      img: '../assets/dishes/flan-dua-non.webp',
      desc: 'Bánh flan mềm mịn béo trứng sữa hòa quyện hương dừa non thơm dịu.',
      tags: ['Mềm mịn', 'Tráng miệng'],
    },
    {
      id: 'ruou-hong-dao',
      name: 'Rượu Hồng Đào',
      category: 'Tráng miệng & Nước',
      img: '../assets/dishes/ruou-hong-dao.webp',
      desc: 'Đặc sản xứ Quảng ấm nồng, dịu êm cho những buổi gôm bạn thêm rôm rả.',
      tags: ['Đặc sản Quảng Nam', 'Ấm nồng'],
    },
    {
      id: 'tra-sam-dua-thao-moc',
      name: 'Trà sâm dứa thảo mộc',
      category: 'Tráng miệng & Nước',
      img: '../assets/dishes/tra-sam-dua-thao-moc.webp',
      desc: 'Trà xanh ướp lá dứa và thảo mộc Đà Nẵng thơm ngát, uống mát lành suốt bữa ăn.',
      tags: ['Thơm lá dứa', 'Mát lành'],
    },
  ];

  const DINO_PHRASES = [
    {
      word: '“Ăn chi hè?”',
      meaning: 'Nghĩa là: Hôm nay mình ăn gì nhỉ? — câu mở đầu quen thuộc mỗi lần gôm bạn.',
    },
    {
      word: '“Gôm đủ người chưa?”',
      meaning: 'Nghĩa là: Mọi người tới đông đủ hết chưa? — có đủ người mới gắp miếng đầu tiên.',
    },
    {
      word: '“Ngon dữ thần hè!”',
      meaning: 'Nghĩa là: Ngon quá trời luôn! — câu khen thật lòng nhất của người xứ Quảng.',
    },
    {
      word: '“Mô rồi, ra GÔM liền đi!”',
      meaning: 'Nghĩa là: Đang ở đâu rồi, ghé GÔM ngay thôi — bàn đã dọn sẵn chờ bạn.',
    },
    {
      word: '“Chừ ăn mâm chi?”',
      meaning: 'Nghĩa là: Bây giờ mình gọi mâm gì? — khó chọn thì bấm sang tab Bốc mâm liền!',
    },
  ];

  const SCREENS = ['home', 'menu', 'boc-mam', 'dat-ban', 'ghe-gom'];

  /* ========================================================================
     2. STATE
     ======================================================================== */
  const state = {
    activeScreen: 'home',
    voiceMode: 'VI', // 'VI' | 'QNA'
    menuCategory: 'Tất cả',
    menuQuery: '',
    tray: new Map(), // dishId -> qty
    activeDishId: null,
    activeDishQty: 1,
    bocGuests: 4,
    bocDishes: [],
    dinoIndex: 0,
    booking: {
      dateOffset: 0,
      timeSlot: '18:30',
      guests: 4,
      note: '',
    },
    toastTimer: null,
  };

  /* ========================================================================
     3. HELPERS
     ======================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function normalizeVN(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .trim();
  }

  function getDishById(id) {
    return DISHES.find((d) => d.id === id) || null;
  }

  function getHCMNow() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(now);

    const map = {};
    for (const p of parts) {
      if (p.type !== 'literal') map[p.type] = Number(p.value);
    }
    return {
      year: map.year,
      month: map.month,
      day: map.day,
      hour: map.hour === 24 ? 0 : map.hour,
      minute: map.minute,
    };
  }

  function formatDateOffsetHCM(offsetDays) {
    const base = new Date();
    const target = new Date(base.getTime() + offsetDays * 86400000);
    return new Intl.DateTimeFormat('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: '2-digit',
    }).format(target);
  }

  function showToast(message) {
    const toast = $('#appToast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }

  function getTotalTrayCount() {
    let total = 0;
    for (const qty of state.tray.values()) total += qty;
    return total;
  }

  /* ========================================================================
     4. OPEN / CLOSED STATUS (Asia/Ho_Chi_Minh 08:00–22:00)
     ======================================================================== */
  function updateOpenStatus() {
    const { hour, minute } = getHCMNow();
    const totalMinutes = hour * 60 + minute;
    const isOpen = totalMinutes >= 8 * 60 && totalMinutes < 22 * 60;

    const pill = $('#openStatusPill');
    const text = $('#openStatusText');
    const visitStatus = $('#visitOpenStatus');

    if (pill && text) {
      pill.classList.toggle('is-closed', !isOpen);
      text.textContent = isOpen ? 'Đang mở · 22:00' : 'Đóng · mở 08:00';
    }
    if (visitStatus) {
      visitStatus.classList.toggle('is-closed', !isOpen);
      visitStatus.textContent = isOpen
        ? 'Đang mở cửa đón khách (giờ Đà Nẵng)'
        : 'Hiện đang nghỉ · Mở cửa lại lúc 08:00 sáng';
    }
  }

  /* ========================================================================
     5. NAVIGATION (Hash-based Single-Page Tab Views with Slide Transition)
     ======================================================================== */
  function navigateTo(screenName, updateHash = true) {
    const target = SCREENS.includes(screenName) ? screenName : 'home';
    const prevIdx = SCREENS.indexOf(state.activeScreen);
    const nextIdx = SCREENS.indexOf(target);

    if (updateHash && window.location.hash !== `#${target}`) {
      history.replaceState(null, '', `#${target}`);
    }

    if (target === state.activeScreen && $(`#screen-${target}`)?.classList.contains('is-active')) {
      return;
    }

    const directionClass = nextIdx >= prevIdx ? 'slide-from-right' : 'slide-from-left';

    $$('.screen').forEach((sec) => {
      sec.classList.remove('is-active', 'slide-from-right', 'slide-from-left');
    });

    const nextEl = $(`#screen-${target}`);
    if (nextEl) {
      nextEl.classList.add('is-active', directionClass);
    }

    $$('.dock-item').forEach((btn) => {
      const active = btn.dataset.nav === target;
      btn.classList.toggle('is-active', active);
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });

    $$('.side-link-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.nav === target);
    });

    state.activeScreen = target;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function syncFromHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (SCREENS.includes(hash)) {
      navigateTo(hash, false);
    } else {
      navigateTo('home', false);
    }
  }

  /* ========================================================================
     6. RENDER HOME SIGNATURE CAROUSEL & DINO
     ======================================================================== */
  function renderSignatureCarousel() {
    const container = $('#signatureCarousel');
    if (!container) return;

    const signatures = DISHES.filter((d) => d.signature);
    container.innerHTML = signatures
      .map(
        (dish) => `
        <article class="dish-slide" data-open-dish="${dish.id}" tabindex="0" role="button" aria-label="Xem chi tiết ${dish.name}">
          <div class="dish-slide__thumb">
            <img src="${dish.img}" alt="${dish.name}" loading="lazy" />
          </div>
          <span class="dish-slide__cat">${dish.category}</span>
          <h3 class="dish-slide__name">${dish.name}</h3>
          <div class="dish-slide__foot">
            <span class="dish-slide__tag">${dish.tags[0] || 'Món ngon'}</span>
            <button type="button" class="quick-add-btn" data-quick-add="${dish.id}" aria-label="Thêm ${dish.name} vào mâm">+</button>
          </div>
        </article>
      `
      )
      .join('');
  }

  function renderDino() {
    const item = DINO_PHRASES[state.dinoIndex % DINO_PHRASES.length];
    const wordEl = $('#dinoWord');
    const meaningEl = $('#dinoMeaning');
    if (wordEl) wordEl.textContent = item.word;
    if (meaningEl) meaningEl.textContent = item.meaning;
  }

  /* ========================================================================
     7. RENDER MENU (Sticky Category Chips + Search Filter)
     ======================================================================== */
  function renderCategoryChips() {
    const container = $('#categoryChips');
    if (!container) return;
    container.innerHTML = CATEGORIES.map((cat) => {
      const count = cat === 'Tất cả' ? DISHES.length : DISHES.filter((d) => d.category === cat).length;
      const active = state.menuCategory === cat ? 'is-active' : '';
      return `
        <button type="button" class="cat-chip ${active}" role="tab" aria-selected="${state.menuCategory === cat}" data-cat="${cat}">
          ${cat} (${count})
        </button>
      `;
    }).join('');
  }

  function renderMenuList() {
    const listEl = $('#menuDishList');
    const emptyEl = $('#menuEmptyState');
    const countEl = $('#menuCountLabel');
    if (!listEl) return;

    const q = normalizeVN(state.menuQuery);
    const filtered = DISHES.filter((dish) => {
      const matchCat = state.menuCategory === 'Tất cả' || dish.category === state.menuCategory;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = normalizeVN(`${dish.name} ${dish.desc} ${dish.category} ${dish.tags.join(' ')}`);
      return haystack.includes(q);
    });

    if (countEl) {
      countEl.textContent = `${filtered.length} món`;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.hidden = false;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;
    listEl.innerHTML = filtered
      .map(
        (dish) => `
        <article class="dish-row" data-open-dish="${dish.id}" tabindex="0" role="button" aria-label="Xem chi tiết ${dish.name}">
          <div class="dish-row__img-wrap">
            <img src="${dish.img}" alt="${dish.name}" loading="lazy" />
          </div>
          <div class="dish-row__info">
            <span class="dish-row__cat">${dish.category}</span>
            <h2 class="dish-row__name">${dish.name}</h2>
            <p class="dish-row__desc">${dish.desc}</p>
          </div>
          <button type="button" class="quick-add-btn" data-quick-add="${dish.id}" aria-label="Thêm ${dish.name} vào mâm">+</button>
        </article>
      `
      )
      .join('');
  }

  /* ========================================================================
     8. BỐC MÂM (1–20 Guests Balanced Random Feast)
     ======================================================================== */
  function pickRandom(arr, count) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
  }

  function getTargetDishCount(guests) {
    if (guests <= 1) return 3;
    if (guests <= 2) return 4;
    if (guests <= 4) return 6;
    if (guests <= 6) return 8;
    if (guests <= 10) return 10;
    if (guests <= 15) return 12;
    return 14;
  }

  function generateBocMam(guests) {
    const targetCount = getTargetDishCount(guests);
    const byCat = (cat) => DISHES.filter((d) => d.category === cat);

    const chosen = [];
    const addUnique = (items) => {
      for (const item of items) {
        if (!chosen.some((c) => c.id === item.id)) chosen.push(item);
      }
    };

    // Always build a balanced Central Vietnamese feast
    addUnique(pickRandom(byCat('Món địa phương'), guests >= 6 ? 3 : guests >= 3 ? 2 : 1));
    addUnique(pickRandom(byCat('Gỏi & Rau'), guests >= 8 ? 2 : 1));
    addUnique(pickRandom(byCat('Món hải sản'), guests >= 10 ? 3 : guests >= 4 ? 2 : 1));
    if (guests >= 3) addUnique(pickRandom(byCat('Món thịt'), guests >= 12 ? 2 : 1));
    if (guests >= 2) addUnique(pickRandom(byCat('Canh & Lẩu'), guests >= 10 ? 2 : 1));
    if (guests >= 3) addUnique(pickRandom(byCat('Cơm'), guests >= 12 ? 2 : 1));
    addUnique(pickRandom(byCat('Tráng miệng & Nước'), guests >= 8 ? 2 : 1));

    // Top up or trim to exact target count
    if (chosen.length < targetCount) {
      const remaining = DISHES.filter((d) => !chosen.some((c) => c.id === d.id));
      addUnique(pickRandom(remaining, targetCount - chosen.length));
    }

    state.bocDishes = chosen.slice(0, targetCount);
    renderBocMam(true);
  }

  function updateBocGuestUI() {
    const g = state.bocGuests;
    const count = getTargetDishCount(g);
    const out = $('#bocGuestCount');
    const hint = $('#bocHintText');
    const minus = $('#bocMinusBtn');
    const plus = $('#bocPlusBtn');

    if (out) out.textContent = String(g);
    if (hint) hint.textContent = `Mâm ${g} người · khoảng ${count} món tròn vị`;
    if (minus) minus.disabled = g <= 1;
    if (plus) plus.disabled = g >= 20;

    $$('[data-boc-preset]').forEach((btn) => {
      btn.classList.toggle('is-selected', Number(btn.dataset.bocPreset) === g);
    });
  }

  function renderBocMam(animate = false) {
    const listEl = $('#bocDishList');
    const titleEl = $('#bocResultTitle');
    const subEl = $('#bocResultSub');
    if (!listEl) return;

    if (titleEl) {
      titleEl.textContent = `Mâm gợi ý cho ${state.bocGuests} người (${state.bocDishes.length} món)`;
    }
    if (subEl) {
      subEl.textContent = 'Cân bằng món địa phương, gỏi rau, hải sản, canh và tráng miệng';
    }

    listEl.innerHTML = state.bocDishes
      .map(
        (dish) => `
        <article class="dish-row" data-open-dish="${dish.id}" tabindex="0" role="button" aria-label="Xem chi tiết ${dish.name}">
          <div class="dish-row__img-wrap">
            <img src="${dish.img}" alt="${dish.name}" loading="lazy" />
          </div>
          <div class="dish-row__info">
            <span class="dish-row__cat">${dish.category}</span>
            <h3 class="dish-row__name">${dish.name}</h3>
            <p class="dish-row__desc">${dish.desc}</p>
          </div>
          <button type="button" class="quick-add-btn" data-quick-add="${dish.id}" aria-label="Thêm ${dish.name} vào mâm">+</button>
        </article>
      `
      )
      .join('');

    if (animate) {
      listEl.classList.remove('is-shuffling');
      void listEl.offsetWidth;
      listEl.classList.add('is-shuffling');
    }
  }

  /* ========================================================================
     9. TRAY MANAGEMENT & SHEETS
     ======================================================================== */
  function addToTray(dishId, qty = 1, silent = false) {
    const dish = getDishById(dishId);
    if (!dish) return;
    const prev = state.tray.get(dishId) || 0;
    state.tray.set(dishId, prev + qty);
    updateTrayUI();

    const trayBtn = $('#openTrayBtn');
    if (trayBtn) {
      trayBtn.classList.remove('is-bumping');
      void trayBtn.offsetWidth;
      trayBtn.classList.add('is-bumping');
    }

    if (!silent) {
      showToast(`Đã thêm ${dish.name} vào mâm`);
    }
  }

  function updateTrayQty(dishId, delta) {
    const current = state.tray.get(dishId) || 0;
    const next = current + delta;
    if (next <= 0) state.tray.delete(dishId);
    else state.tray.set(dishId, next);
    updateTrayUI();
    renderTraySheet();
  }

  function updateTrayUI() {
    const total = getTotalTrayCount();
    const badge = $('#trayCountBadge');
    const sideCount = $('#sideTrayCount');
    const sideDesc = $('#sideTrayDesc');
    const bookingSummary = $('#bookingTraySummary');
    const bookingCount = $('#bookingTrayCount');

    if (badge) badge.textContent = String(total);
    if (sideCount) sideCount.textContent = `${total} món`;
    if (sideDesc) {
      sideDesc.textContent =
        total === 0
          ? 'Chưa có món nào. Chọn món từ Thực đơn hoặc thử Bốc mâm ngẫu nhiên hè!'
          : `Bạn đang chọn ${total} món trong mâm. Mở danh sách để xem hoặc đặt bàn kèm mâm ngay.`;
    }
    if (bookingSummary && bookingCount) {
      bookingSummary.hidden = total === 0;
      bookingCount.textContent = String(total);
    }
  }

  function closeAllSheets() {
    const backdrop = $('#sheetBackdrop');
    if (backdrop) backdrop.hidden = true;
    $$('.bottom-sheet').forEach((sheet) => {
      sheet.hidden = true;
    });
  }

  function openSheet(sheetId) {
    closeAllSheets();
    const backdrop = $('#sheetBackdrop');
    const sheet = $(`#${sheetId}`);
    if (backdrop) backdrop.hidden = false;
    if (sheet) sheet.hidden = false;
  }

  function openDishSheet(dishId) {
    const dish = getDishById(dishId);
    if (!dish) return;
    state.activeDishId = dish.id;
    state.activeDishQty = 1;

    $('#dishSheetImg').src = dish.img;
    $('#dishSheetImg').alt = dish.name;
    $('#dishSheetCat').textContent = dish.category;
    $('#dishSheetTitle').textContent = dish.name;
    $('#dishSheetDesc').textContent = dish.desc;
    $('#dishQtyVal').textContent = '1';
    $('#dishQtyMinus').disabled = true;

    $('#dishSheetTags').innerHTML = dish.tags
      .map((t) => `<span class="dish-tag">${t}</span>`)
      .join('');

    openSheet('dishSheet');
  }

  function renderTraySheet() {
    const listEl = $('#trayList');
    const emptyEl = $('#trayEmptyState');
    const footerEl = $('#traySheetFooter');
    const clearBtn = $('#clearTrayBtn');
    if (!listEl) return;

    const entries = Array.from(state.tray.entries());
    if (entries.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.hidden = false;
      if (footerEl) footerEl.hidden = true;
      if (clearBtn) clearBtn.hidden = true;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;
    if (footerEl) footerEl.hidden = false;
    if (clearBtn) clearBtn.hidden = false;

    listEl.innerHTML = entries
      .map(([id, qty]) => {
        const dish = getDishById(id);
        if (!dish) return '';
        return `
          <div class="tray-item">
            <img src="${dish.img}" alt="${dish.name}" />
            <div class="tray-item__info">
              <p class="tray-item__name">${dish.name}</p>
              <span class="tray-item__cat">${dish.category}</span>
            </div>
            <div class="stepper stepper--sm">
              <button type="button" class="stepper__btn" data-tray-minus="${dish.id}" aria-label="Giảm ${dish.name}">−</button>
              <output class="stepper__val">${qty}</output>
              <button type="button" class="stepper__btn" data-tray-plus="${dish.id}" aria-label="Tăng ${dish.name}">+</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  /* ========================================================================
     10. ĐẶT BÀN (Date Chips, 30-min Slots 08:00–21:30, VN Phone Validation)
     ======================================================================== */
  function initBookingForm() {
    // Populate date subtitles
    for (let i = 0; i <= 2; i += 1) {
      const el = $(`#dateLabel${i}`);
      if (el) el.textContent = formatDateOffsetHCM(i);
    }

    // Generate 30-minute slots from 08:00 to 21:30
    const slotGrid = $('#timeSlotGrid');
    if (slotGrid) {
      const slots = [];
      for (let h = 8; h <= 21; h += 1) {
        slots.push(`${String(h).padStart(2, '0')}:00`);
        slots.push(`${String(h).padStart(2, '0')}:30`);
      }
      slotGrid.innerHTML = slots
        .map(
          (slot) => `
          <button type="button" class="time-slot-btn ${slot === state.booking.timeSlot ? 'is-selected' : ''}" role="radio" aria-checked="${slot === state.booking.timeSlot}" data-time-slot="${slot}">
            ${slot}
          </button>
        `
        )
        .join('');
    }

    updateBookingSummaryBar();
  }

  function getSelectedDateText() {
    const names = ['Hôm nay', 'Ngày mai', 'Ngày kia'];
    const label = names[state.booking.dateOffset] || 'Hôm nay';
    return `${label} (${formatDateOffsetHCM(state.booking.dateOffset)})`;
  }

  function updateBookingSummaryBar() {
    const names = ['Hôm nay', 'Ngày mai', 'Ngày kia'];
    const dayName = names[state.booking.dateOffset] || 'Hôm nay';
    const summaryEl = $('#stickyBookingSummary');
    const timeLabel = $('#selectedTimeLabel');
    const guestOut = $('#bookGuestCount');
    const minus = $('#bookMinusBtn');
    const plus = $('#bookPlusBtn');

    if (summaryEl) {
      summaryEl.textContent = `${dayName} · ${state.booking.timeSlot} · ${state.booking.guests} khách`;
    }
    if (timeLabel) timeLabel.textContent = state.booking.timeSlot;
    if (guestOut) guestOut.textContent = String(state.booking.guests);
    if (minus) minus.disabled = state.booking.guests <= 1;
    if (plus) plus.disabled = state.booking.guests >= 20;
  }

  function validateVNPhone(raw) {
    const cleaned = (raw || '').replace(/[\s.-]/g, '');
    return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(cleaned);
  }

  function generateBookingCode() {
    const { day, month } = getHCMNow();
    const rand = Math.floor(100 + Math.random() * 900);
    return `GOM-${String(day).padStart(2, '0')}${String(month).padStart(2, '0')}-${rand}`;
  }

  function handleBookingSubmit(e) {
    e.preventDefault();

    const nameInput = $('#guestNameInput');
    const phoneInput = $('#guestPhoneInput');
    const noteInput = $('#guestNoteInput');
    const nameError = $('#guestNameError');
    const phoneError = $('#guestPhoneError');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const note = noteInput.value.trim();

    let valid = true;

    if (name.length < 2) {
      nameInput.classList.add('is-invalid');
      nameError.textContent = 'Vui lòng nhập tên người đặt (ít nhất 2 ký tự).';
      nameError.hidden = false;
      valid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameError.hidden = true;
    }

    if (!validateVNPhone(phone)) {
      phoneInput.classList.add('is-invalid');
      phoneError.textContent = 'Số điện thoại Việt Nam chưa đúng (vd: 0905 123 456 hoặc +84905123456).';
      phoneError.hidden = false;
      valid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneError.hidden = true;
    }

    if (!valid) {
      showToast('Kiểm tra lại tên và số điện thoại giúp GÔM nhé!');
      return;
    }

    const code = generateBookingCode();
    const trayCount = getTotalTrayCount();

    $('#bookingCodeValue').textContent = code;
    const rows = [
      ['Khách hàng', name],
      ['Số điện thoại', phone],
      ['Thời gian', `${state.booking.timeSlot} · ${getSelectedDateText()}`],
      ['Số khách', `${state.booking.guests} người`],
    ];
    if (trayCount > 0) rows.push(['Mâm kèm theo', `${trayCount} món đã chọn`]);
    if (note) rows.push(['Lời nhắn', note]);

    $('#bookingSummaryDetails').innerHTML = rows
      .map(
        ([k, v]) => `
        <div class="booking-summary-row">
          <dt>${k}</dt>
          <dd>${v}</dd>
        </div>
      `
      )
      .join('');

    openSheet('bookingSuccessSheet');
  }

  /* ========================================================================
     11. LANGUAGE / VOICE TOGGLE (VI / Quảng)
     ======================================================================== */
  function toggleVoiceMode() {
    state.voiceMode = state.voiceMode === 'VI' ? 'QNA' : 'VI';
    const chip = $('#langChip');
    const title = $('#greetingTitle');
    const eyebrow = $('#greetingEyebrow');

    if (state.voiceMode === 'QNA') {
      if (chip) chip.textContent = 'QNA';
      if (title) title.textContent = 'Chào bạn, chừ ăn chi hè?';
      if (eyebrow) eyebrow.textContent = 'GÔM ĐÀ NẴNG · GIỌNG QUẢNG THÂN THƯƠNG';
      showToast('Đang bật sắc thái giọng Quảng Nam hè!');
    } else {
      if (chip) chip.textContent = 'VI';
      if (title) title.textContent = 'Chào bạn, nay ăn chi hè?';
      if (eyebrow) eyebrow.textContent = 'GÔM ĐÀ NẴNG · ẨM THỰC MIỀN TRUNG';
      showToast('Tiếng Việt chuẩn giọng GÔM');
    }
  }

  /* ========================================================================
     12. EVENT LISTENERS & INIT
     ======================================================================== */
  function bindEvents() {
    // Global click delegation for navigation, dish opening, quick-add, tray controls
    document.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[data-nav]');
      if (navBtn) {
        navigateTo(navBtn.dataset.nav, true);
        return;
      }

      const quickAdd = e.target.closest('[data-quick-add]');
      if (quickAdd) {
        e.stopPropagation();
        addToTray(quickAdd.dataset.quickAdd, 1);
        return;
      }

      const dishCard = e.target.closest('[data-open-dish]');
      if (dishCard) {
        openDishSheet(dishCard.dataset.openDish);
        return;
      }

      const catChip = e.target.closest('[data-cat]');
      if (catChip) {
        state.menuCategory = catChip.dataset.cat;
        renderCategoryChips();
        renderMenuList();
        return;
      }

      const presetBtn = e.target.closest('[data-boc-preset]');
      if (presetBtn) {
        state.bocGuests = Number(presetBtn.dataset.bocPreset);
        updateBocGuestUI();
        generateBocMam(state.bocGuests);
        return;
      }

      const dateChip = e.target.closest('[data-date-offset]');
      if (dateChip) {
        state.booking.dateOffset = Number(dateChip.dataset.dateOffset);
        $$('[data-date-offset]').forEach((btn) => {
          const active = btn === dateChip;
          btn.classList.toggle('is-selected', active);
          btn.setAttribute('aria-checked', String(active));
        });
        updateBookingSummaryBar();
        return;
      }

      const slotBtn = e.target.closest('[data-time-slot]');
      if (slotBtn) {
        state.booking.timeSlot = slotBtn.dataset.timeSlot;
        $$('[data-time-slot]').forEach((btn) => {
          const active = btn === slotBtn;
          btn.classList.toggle('is-selected', active);
          btn.setAttribute('aria-checked', String(active));
        });
        updateBookingSummaryBar();
        return;
      }

      const noteChip = e.target.closest('[data-note]');
      if (noteChip) {
        const input = $('#guestNoteInput');
        const noteText = noteChip.dataset.note;
        const already = noteChip.classList.contains('is-selected');
        $$('[data-note]').forEach((b) => b.classList.remove('is-selected'));
        if (!already) {
          noteChip.classList.add('is-selected');
          if (input) input.value = noteText;
        } else if (input) {
          input.value = '';
        }
        return;
      }

      const trayMinus = e.target.closest('[data-tray-minus]');
      if (trayMinus) {
        updateTrayQty(trayMinus.dataset.trayMinus, -1);
        return;
      }

      const trayPlus = e.target.closest('[data-tray-plus]');
      if (trayPlus) {
        updateTrayQty(trayPlus.dataset.trayPlus, 1);
        return;
      }

      if (e.target.closest('[data-close-sheet]') || e.target.id === 'sheetBackdrop') {
        closeAllSheets();
      }
    });

    // Keyboard activation on dish cards
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllSheets();
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-open-dish]');
        if (card && !e.target.closest('button')) {
          e.preventDefault();
          openDishSheet(card.dataset.openDish);
        }
      }
    });

    // Hash changes
    window.addEventListener('hashchange', syncFromHash);

    // Language / Voice chip
    $('#langChip')?.addEventListener('click', toggleVoiceMode);

    // Dino next button
    $('#nextDinoBtn')?.addEventListener('click', () => {
      state.dinoIndex = (state.dinoIndex + 1) % DINO_PHRASES.length;
      renderDino();
    });

    // Menu search
    const searchInput = $('#menuSearchInput');
    const clearSearchBtn = $('#clearSearchBtn');
    searchInput?.addEventListener('input', () => {
      state.menuQuery = searchInput.value;
      if (clearSearchBtn) clearSearchBtn.hidden = !state.menuQuery;
      renderMenuList();
    });

    clearSearchBtn?.addEventListener('click', () => {
      state.menuQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearSearchBtn.hidden = true;
      renderMenuList();
    });

    $('#resetMenuFilterBtn')?.addEventListener('click', () => {
      state.menuCategory = 'Tất cả';
      state.menuQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.hidden = true;
      renderCategoryChips();
      renderMenuList();
    });

    // Dish detail sheet stepper & CTA
    $('#dishQtyMinus')?.addEventListener('click', () => {
      if (state.activeDishQty > 1) {
        state.activeDishQty -= 1;
        $('#dishQtyVal').textContent = String(state.activeDishQty);
        $('#dishQtyMinus').disabled = state.activeDishQty <= 1;
      }
    });

    $('#dishQtyPlus')?.addEventListener('click', () => {
      if (state.activeDishQty < 20) {
        state.activeDishQty += 1;
        $('#dishQtyVal').textContent = String(state.activeDishQty);
        $('#dishQtyMinus').disabled = false;
      }
    });

    $('#addDishToTrayBtn')?.addEventListener('click', () => {
      if (state.activeDishId) {
        addToTray(state.activeDishId, state.activeDishQty);
        closeAllSheets();
      }
    });

    // Tray sheet openers & actions
    const openTrayHandler = () => {
      renderTraySheet();
      openSheet('traySheet');
    };
    $('#openTrayBtn')?.addEventListener('click', openTrayHandler);
    $('#sideOpenTrayBtn')?.addEventListener('click', openTrayHandler);
    $('#bookingOpenTrayBtn')?.addEventListener('click', openTrayHandler);

    $('#clearTrayBtn')?.addEventListener('click', () => {
      state.tray.clear();
      updateTrayUI();
      renderTraySheet();
      showToast('Đã xóa toàn bộ mâm');
    });

    $('#trayGoMenuBtn')?.addEventListener('click', () => {
      closeAllSheets();
      navigateTo('menu', true);
    });

    $('#trayGoBocBtn')?.addEventListener('click', () => {
      closeAllSheets();
      navigateTo('boc-mam', true);
    });

    $('#trayProceedBookingBtn')?.addEventListener('click', () => {
      closeAllSheets();
      navigateTo('dat-ban', true);
    });

    // Bốc mâm controls
    $('#bocMinusBtn')?.addEventListener('click', () => {
      if (state.bocGuests > 1) {
        state.bocGuests -= 1;
        updateBocGuestUI();
      }
    });

    $('#bocPlusBtn')?.addEventListener('click', () => {
      if (state.bocGuests < 20) {
        state.bocGuests += 1;
        updateBocGuestUI();
      }
    });

    $('#rollMamBtn')?.addEventListener('click', () => {
      generateBocMam(state.bocGuests);
      showToast(`Đã bốc mâm ${state.bocDishes.length} món cho ${state.bocGuests} người!`);
    });

    $('#rerollMamBtn')?.addEventListener('click', () => {
      generateBocMam(state.bocGuests);
      showToast('Đã đổi mâm mới cho bạn hè!');
    });

    $('#addWholeMamBtn')?.addEventListener('click', () => {
      if (state.bocDishes.length === 0) return;
      for (const dish of state.bocDishes) {
        addToTray(dish.id, 1, true);
      }
      showToast(`Đã thêm cả mâm (${state.bocDishes.length} món) vào mâm của bạn!`);
    });

    // Đặt bàn controls
    $('#bookMinusBtn')?.addEventListener('click', () => {
      if (state.booking.guests > 1) {
        state.booking.guests -= 1;
        updateBookingSummaryBar();
      }
    });

    $('#bookPlusBtn')?.addEventListener('click', () => {
      if (state.booking.guests < 20) {
        state.booking.guests += 1;
        updateBookingSummaryBar();
      }
    });

    $('#guestNameInput')?.addEventListener('input', () => {
      $('#guestNameInput').classList.remove('is-invalid');
      $('#guestNameError').hidden = true;
    });

    $('#guestPhoneInput')?.addEventListener('input', () => {
      $('#guestPhoneInput').classList.remove('is-invalid');
      $('#guestPhoneError').hidden = true;
    });

    $('#bookingForm')?.addEventListener('submit', handleBookingSubmit);

    $('#copyBookingCodeBtn')?.addEventListener('click', async () => {
      const code = $('#bookingCodeValue')?.textContent || '';
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(code);
          showToast(`Đã sao chép mã ${code}`);
        } else {
          showToast(`Mã đặt bàn của bạn: ${code}`);
        }
      } catch {
        showToast(`Mã đặt bàn của bạn: ${code}`);
      }
    });

    // Ghé GÔM Call button
    $('#callGomBtn')?.addEventListener('click', () => {
      showToast('Hotline đang cập nhật — mời bạn đặt bàn trực tiếp trên ứng dụng hè!');
    });
  }

  function init() {
    updateOpenStatus();
    setInterval(updateOpenStatus, 60000);

    renderSignatureCarousel();
    renderDino();
    renderCategoryChips();
    renderMenuList();

    updateBocGuestUI();
    generateBocMam(state.bocGuests);

    initBookingForm();
    updateTrayUI();

    bindEvents();
    syncFromHash();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
