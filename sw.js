// ============================================
// Service Worker - 強制每次都取得最新版本
// 策略: Network First (優先網路,離線才用快取)
// ============================================

const CACHE_NAME = "mama-gift-v1";

// 安裝時不預先快取,等實際請求再決定
self.addEventListener("install", event => {
  // 立即接管,不等待舊 SW 結束
  self.skipWaiting();
});

// 啟動時清除所有舊快取
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 每次請求都先嘗試網路,失敗才用快取
self.addEventListener("fetch", event => {
  // 只處理 GET 請求
  if (event.request.method !== "GET") return;
  // Firebase API 不快取
  if (event.request.url.includes("firebasedatabase")) return;

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then(response => {
        // 成功取得:更新快取並回傳
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // 網路失敗:回傳快取 (離線模式)
        return caches.match(event.request);
      })
  );
});
