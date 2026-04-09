# 🍼 台南媽媽禮地圖 Tainan Mama Gift Map

一個整理台南地區媽媽禮兌換資訊的靜態網頁 App。憑媽媽手冊就能領取店家/品牌的免費贈品,本站依地區與百貨公司分類,讓孕媽咪一次掌握所有資源。

## ✨ 功能特色

- 🏪 **實體店家** — 依台南行政區(中西區、東區、北區、安平區、永康區、新化區、佳里區...)分類
- 🏬 **百貨公司** — 南紡、新光三越(新天地/中山/小北門)、三井 Outlet 內的婦幼專櫃集中顯示
- 📦 **全台品牌郵寄** — 12 個可線上申請郵寄的品牌(貝親、亞培、桂格、雪印、惠氏、能恩...)
- 🏥 **醫院診所** — 台南主要婦產科的媽媽禮/待產包資訊
- 🏛️ **政府補助** — 2026 中央 10 萬生育給付、台南市生育獎勵金、育兒津貼、14 次免費產檢
- 🔍 **搜尋 & 品牌篩選** — 快速找到想去的店家
- ⭐ **收藏 / 已領取紀錄** — 儲存在瀏覽器,跨分頁保留
- 🗺️ **Google 地圖導航** — 一鍵開啟地圖導航
- 🌙 **深色模式** — 護眼夜間模式,自動記住偏好
- 📱 **純靜態、RWD** — 無需後端,手機電腦都好用

## 📂 專案結構

```
.
├── index.html          # 主頁面
├── css/
│   └── style.css       # 樣式(含深色模式)
├── js/
│   ├── data.js         # 所有資料(店家、百貨、品牌、醫院、補助)
│   └── app.js          # 主程式邏輯
└── README.md
```

## 🚀 GitHub Pages 部署步驟

### 1. 在 GitHub 建立新 Repo

到 [github.com/new](https://github.com/new) 建立一個 repo,例如命名為 `tainan-mama-gift`。

### 2. Push 本專案

在本地專案資料夾執行:

```bash
git init
git add .
git commit -m "Initial commit: 台南媽媽禮地圖"
git branch -M main
git remote add origin https://github.com/你的帳號/tainan-mama-gift.git
git push -u origin main
```

### 3. 啟用 GitHub Pages

1. 到 repo 頁面 → **Settings** → 左側選單 **Pages**
2. **Source** 選 `Deploy from a branch`
3. **Branch** 選 `main`,資料夾選 `/ (root)`
4. 按 **Save**
5. 等 1~2 分鐘,頁面會顯示網址: `https://你的帳號.github.io/tainan-mama-gift/`

### 4. 完成 🎉

分享網址給親朋好友的媽咪們吧!

## 🛠️ 本地開發 / 預覽

因為是純靜態網站,最簡單的方式:

- **直接用瀏覽器開啟** `index.html` (部分瀏覽器可能因 CORS 問題影響某些功能)
- **用 Python 啟動本地伺服器** (推薦):

  ```bash
  python3 -m http.server 8000
  ```

  然後打開 http://localhost:8000

- **用 Node 的 http-server**:

  ```bash
  npx http-server -p 8000
  ```

## ✏️ 如何更新資料

所有資料都集中在 `js/data.js`。要新增店家只需編輯對應的陣列:

```javascript
const STORES = [
  {
    district: "中西區",         // 台南行政區
    mall: "新光三越 台南中山店", // 若在百貨內,填百貨名稱;否則 null
    name: "店名",
    brand: "品牌",
    addr: "完整地址",
    gift: "可領取的贈品",
    note: "備註(例如電話、申請方式)"
  },
  // ...
];
```

新增百貨:編輯 `MALLS` 陣列。
新增郵寄品牌:編輯 `ONLINE_BRANDS` 陣列。
新增醫院:編輯 `HOSPITALS` 陣列。
新增政府補助:編輯 `GOV_BENEFITS` 陣列。

編輯後 push 到 GitHub,Pages 會自動更新。

## 📝 資料來源

- [媽媽禮、媽媽手冊 育兒教養經](https://mummy.com.tw)
- [黃豆媽咪媽媽禮懶人包](https://huangmomtaiwan.com)
- [vocus - 38家線上申請媽媽禮整理](https://vocus.cc/article/664fbd80fd8978000147cfd0)
- [小丁婦幼官網](https://www.eding.com.tw)
- [台南市政府社會局](https://social.tainan.gov.tw)
- [臺南人口政策資源網](https://people.tainan.gov.tw)
- 各品牌官方網站

## ⚠️ 免責聲明

本站資料僅供參考,各店家/品牌的媽媽禮活動可能隨時變動,**實際優惠以各店家或官方公告為準**。前往領取前建議先電話確認,避免白跑一趟。

## 📄 授權

MIT License — 歡迎自由使用、修改、分享。

---

Made with 💗 for 台南媽咪
