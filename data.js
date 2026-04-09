// ============================================
// 台南媽媽禮 App - 資料檔
// 最後更新: 2026/04
// 資料來源: mummy.com.tw, vocus, huangmomtaiwan, 各品牌官網
// ============================================

// 實體店家 (含百貨專櫃 — 以 mall 欄位標示)
const STORES = [
  // ===== 中西區 =====
  { district: "中西區", mall: null, name: "麗嬰房 台南河樂店", brand: "麗嬰房", addr: "台南市中西區金華路三段259號", gift: "入會寵兒禮包 + 育兒金 $12,000", note: "憑媽媽手冊+身分證加入 LINE 會員申請" },
  { district: "中西區", mall: null, name: "俏媽咪親子生活館 台南總店", brand: "俏媽咪", addr: "台南市中西區民生路一段129號", gift: "不限金額消費可兌換孕婦服飾一件", note: "電話 06-2211711" },
  { district: "中西區", mall: "新光三越 台南中山店", name: "奇哥 新光三越中山店", brand: "奇哥", addr: "台南市中西區中山路162號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄媽咪孕友會審核" },
  { district: "中西區", mall: "新光三越 台南新天地(西門店)", name: "奇哥 新光三越新天地", brand: "奇哥", addr: "台南市中西區西門路一段658號 3F", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "電話 06-3030089;先線上登錄" },
  { district: "中西區", mall: "新光三越 台南新天地(西門店)", name: "麗嬰房 新光三越新天地", brand: "麗嬰房", addr: "台南市中西區西門路一段658號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },

  // ===== 東區 =====
  { district: "東區", mall: "南紡購物中心", name: "麗嬰房 南紡店", brand: "麗嬰房", addr: "台南市東區中華東路一段366號 4F", gift: "寵兒禮包 + 育兒金 $12,000", note: "電話 06-2086930" },
  { district: "東區", mall: "南紡購物中心", name: "奇哥 南紡店", brand: "奇哥", addr: "台南市東區中華東路一段366號 4F", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "電話 06-2095192;先線上登錄" },
  { district: "東區", mall: null, name: "麗嬰房 台南崇學店", brand: "麗嬰房", addr: "台南市東區崇學路146號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },
  { district: "東區", mall: null, name: "麗嬰房 台南東環店", brand: "麗嬰房", addr: "台南市東區大同路一段49號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },
  { district: "東區", mall: null, name: "麗嬰房 台南崇道店", brand: "麗嬰房", addr: "台南市東區崇道路63號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },
  { district: "東區", mall: null, name: "麗嬰房 台南東寧店", brand: "麗嬰房", addr: "台南市東區東寧路436號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },
  { district: "東區", mall: null, name: "奇哥 中華店", brand: "奇哥", addr: "台南市東區中華東路三段116號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄媽咪孕友會" },

  // ===== 北區 =====
  { district: "北區", mall: null, name: "奇哥 西門店", brand: "奇哥", addr: "台南市北區西門路四段226號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄審核" },
  { district: "北區", mall: "新光三越 台南小北門店", name: "新光三越小北門 婦幼樓層", brand: "新光三越", addr: "台南市北區公園路591-101號", gift: "年度媽咪節/週年慶不定期贈禮", note: "2024 新開幕,含 180+ 品牌" },

  // ===== 安平區 =====
  { district: "安平區", mall: null, name: "奇哥 文平店", brand: "奇哥", addr: "台南市安平區文平路275號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄審核" },

  // ===== 永康區 =====
  { district: "永康區", mall: null, name: "麗嬰房 永康鹽行店", brand: "麗嬰房", addr: "台南市永康區中正北路197號", gift: "寵兒禮包 + 育兒金 $12,000", note: "需加入 LINE 會員" },
  { district: "永康區", mall: null, name: "奇哥 開元店", brand: "奇哥", addr: "台南市永康區中山南路97號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄審核" },
  { district: "永康區", mall: "三井 MITSUI OUTLET PARK 台南", name: "三井 Outlet 台南 婦幼區", brand: "MITSUI", addr: "台南市永康區中華路", gift: "不定期媽咪檔期贈禮", note: "留意官方 FB/LINE 公告" },

  // ===== 新化區 =====
  { district: "新化區", mall: null, name: "奇哥 新化店", brand: "奇哥", addr: "台南市新化區中正路705號", gift: "奇妮 mini 包 / 雲朵豆趣安撫巾", note: "先線上登錄審核" },

  // ===== 佳里區 =====
  { district: "佳里區", mall: null, name: "小丁婦幼嬰兒用品專門店", brand: "小丁婦幼", addr: "台南市佳里區仁愛路388號", gift: "新手媽咪媽媽禮", note: "先線上填表審核;電話 06-7232730" },

  // ===== 連鎖藥局 =====
  { district: "連鎖藥局(多區)", mall: null, name: "日藥本鋪 台南各門市", brand: "日藥本鋪", addr: "台南中山門市等", gift: "當期媽媽禮 (不定期)", note: "憑媽媽手冊 + APP 會員即可領,無須消費" },
];

// 百貨公司總覽
const MALLS = [
  { name: "南紡購物中心", addr: "台南市東區中華東路一段366號", phone: "06-2366222", hours: "11:00–22:00", note: "台南東區最大複合型購物中心,婦幼品牌集中在 4F" },
  { name: "新光三越 台南新天地(西門店)", addr: "台南市中西區西門路一段658號", phone: "06-3030089", hours: "11:00–22:00", note: "台南最大單體百貨,奇哥在 3F" },
  { name: "新光三越 台南中山店", addr: "台南市中西區中山路162號", phone: "06-2223141", hours: "11:00–22:00", note: "台南火車站旁,婦幼/童裝多在中層樓" },
  { name: "新光三越 台南小北門店", addr: "台南市北區公園路591-101號", phone: "—", hours: "11:00–22:00", note: "2024 開幕,破萬坪面積,含 180+ 品牌" },
  { name: "三井 MITSUI OUTLET PARK 台南", addr: "台南市永康區中華路", phone: "—", hours: "11:00–21:30", note: "永康區暢貨中心,不定期有婦幼檔期特賣" },
];

// 全台品牌 (郵寄/線上申請)
const ONLINE_BRANDS = [
  { name: "貝親 Pigeon", category: "用品/奶粉", gift: "貝親媽咪包、試用品組合", how: "官網線上登錄媽媽手冊,審核後郵寄" },
  { name: "亞培 Abbott", category: "奶粉", gift: "心美力試喝組、媽媽專刊", how: "官網填表,附電話確認" },
  { name: "桂格 Quaker", category: "奶粉/營養品", gift: "孕婦專用奶粉試喝、孕期營養品", how: "線上申請,免費郵寄" },
  { name: "雪印 Snow", category: "奶粉", gift: "雪印金強摯/愛斯佳試用罐", how: "官網填表" },
  { name: "S-26 惠氏", category: "奶粉", gift: "惠氏媽媽迎新禮、試用罐", how: "上傳媽媽手冊到惠氏官網" },
  { name: "能恩 Nestlé", category: "奶粉", gift: "能恩試喝包、水解配方試用", how: "官網線上登錄" },
  { name: "啟賦 illuma", category: "奶粉", gift: "啟賦有機奶粉試用", how: "官網申請" },
  { name: "卡洛塔妮", category: "羊奶粉", gift: "羊奶粉試喝包", how: "官網或 LINE 官方帳號" },
  { name: "豐力富", category: "奶粉", gift: "試喝組合包", how: "官網填單" },
  { name: "美強生", category: "奶粉", gift: "親舒系列試用", how: "官網登錄" },
  { name: "六甲村 Mammy Village", category: "孕婦保養", gift: "孕婦保養品試用組", how: "官網會員登錄" },
  { name: "Combi", category: "用品", gift: "媽咪日來店禮 / 試用品", how: "會員登錄 + 預約媽媽教室" },
];

// 台南醫院 / 診所
const HOSPITALS = [
  { name: "奇美醫院 (永康總院)", district: "永康區", gift: "待產包、新生兒紀念品", addr: "台南市永康區中華路901號" },
  { name: "郭綜合醫院", district: "中西區", gift: "媽媽禮、產檢贈品", addr: "台南市中西區民生路二段22號" },
  { name: "成大醫院", district: "北區", gift: "新生兒紀念包、衛教禮品", addr: "台南市北區勝利路138號" },
  { name: "台南市立醫院", district: "東區", gift: "孕婦保健品、產後禮", addr: "台南市東區崇德路670號" },
  { name: "佳里奇美醫院", district: "佳里區", gift: "媽媽包、產檢贈禮", addr: "台南市佳里區佳里興606號" },
  { name: "柳營奇美醫院", district: "柳營區", gift: "媽媽禮、新生兒包", addr: "台南市柳營區太康里太康201號" },
];

// 政府補助
const GOV_BENEFITS = [
  { title: "中央生育給付 (2026 新制)", content: "中央普發每名新生兒 <strong>NT$100,000</strong> (10萬元),無論父母投保身份皆可領。可與地方生育津貼同時請領。" },
  { title: "台南市生育獎勵金", content: "設籍台南連續 6 個月以上可申請:<br>• 第 1、2 胎:每名 <strong>$20,000</strong><br>• 第 3、4 胎:每名 <strong>$30,000</strong><br>• 第 5 胎以後:每名 <strong>$50,000</strong><br>新生兒出生後 180 日內至戶政事務所辦理。" },
  { title: "育兒津貼 (0-未滿5歲)", content: "中央+地方發放:第 1 名每月 <strong>$5,000</strong>、第 2 名 <strong>$6,000</strong>、第 3 名以上 <strong>$7,000</strong>。" },
  { title: "孕婦產前檢查補助", content: "健保署提供 <strong>14 次免費產檢</strong>,包含超音波、妊娠糖尿病篩檢等。台南額外補助乙型鏈球菌篩檢。" },
  { title: "孕婦心理健康支持", content: "台南市提供孕產婦心理健康評估與諮詢服務,洽社會局或衛生局。" },
  { title: "國民年金生育給付", content: "參加國保並生產的女性被保險人可請領 <strong>2 個月</strong>投保金額,向勞保局申請。" },
];

// 匯出 (全域)
window.DATA = { STORES, MALLS, ONLINE_BRANDS, HOSPITALS, GOV_BENEFITS };
