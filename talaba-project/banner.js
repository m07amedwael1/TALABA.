/* ════════════════════════════════════════════
   HERO BANNER SLIDER
   سلايدر الإعلانات فوق Explore — auto-play، dots، swipe
   - بيحقن الـ HTML لوحده قبل .explore-wrap
   - بيظهر/يختفي مع الصفحة الرئيسية تلقائي
   productId (اختياري): يفتح صفحة المنتج عند الضغط
════════════════════════════════════════════ */
var BANNERS = [
  { img: 'images/banner-1.jpg', productId: null },   // ← حط رابط صورة البانر هنا
  { img: 'images/banner-1.jpg', productId: null },
];

(function initBanner() {
  var explore = document.querySelector('.explore-wrap');
  if (!explore || !BANNERS.length) return;

  /* inject markup */
  var wrap = document.createElement('section');
  wrap.className = 'banner-wrap';
  wrap.id = 'bannerWrap';
  wrap.innerHTML = '<div class="banner-slider" id="bannerSlider">'
    + '<div class="banner-track" id="bannerTrack"></div>'
    + '<div class="banner-dots" id="bannerDots"></div></div>';
  explore.parentNode.insertBefore(wrap, explore);

  var track = document.getElementById('bannerTrack');
  var dots  = document.getElementById('bannerDots');
  var box   = document.getElementById('bannerSlider');
  var cur = 0, timer = null, startX = 0, moved = false;

  track.innerHTML = BANNERS.map(function(b, i) {
    return '<div class="banner-slide" data-i="' + i + '"><img src="' + b.img + '" alt="" draggable="false"/></div>';
  }).join('');
  dots.innerHTML = BANNERS.map(function(_, i) {
    return '<button class="banner-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
  }).join('');
  if (BANNERS.length < 2) dots.style.display = 'none';

  function go(i) {
    cur = (i + BANNERS.length) % BANNERS.length;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.querySelectorAll('.banner-dot').forEach(function(d, idx) {
      d.classList.toggle('active', idx === cur);
    });
  }
  function stop()  { if (timer) clearInterval(timer); timer = null; }
  function start() { stop(); if (BANNERS.length > 1) timer = setInterval(function() { go(cur + 1); }, 5000); }

  dots.addEventListener('click', function(e) {
    var d = e.target.closest('.banner-dot');
    if (!d) return;
    go(parseInt(d.dataset.i, 10)); start();
  });
  track.addEventListener('click', function(e) {
    if (moved) return;
    var s = e.target.closest('.banner-slide');
    if (!s) return;
    var b = BANNERS[parseInt(s.dataset.i, 10)];
    if (b && b.productId && typeof openPD === 'function') openPD(b.productId);
  });

  box.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; moved = false; stop(); }, { passive: true });
  box.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { moved = true; go(dx < 0 ? cur + 1 : cur - 1); setTimeout(function() { moved = false; }, 50); }
    start();
  });
  box.addEventListener('mouseenter', stop);
  box.addEventListener('mouseleave', start);

  /* follow the home page visibility (script.js hides .explore-wrap on other pages) */
  function sync() {
    var hidden = explore.style.display === 'none';
    wrap.style.display = hidden ? 'none' : '';
    if (hidden) stop(); else start();
  }
  new MutationObserver(sync).observe(explore, { attributes: true, attributeFilter: ['style'] });

  go(0);
  sync();
})();
