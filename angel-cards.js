// 天使落地指引卡（Grounding Angel Oracle Cards）牌組資料：44 張

const ANGEL_PARTS = [
  { id: 1, zh: "星霧澄澈 · 釐清現狀", en: "Stardust Clarity (Assessing Reality)" },
  { id: 2, zh: "大地之息 · 身心校準", en: "Breath of Gaia (Grounding & Alignment)" },
  { id: 3, zh: "光之軌跡 · 具體行動", en: "Trajectory of Light (Practical Action)" },
  { id: 4, zh: "蒼穹之鑰 · 心態轉換", en: "Keys to the Cosmos (Mindset Shift)" },
];

const ANGEL_CARDS_RAW = [
  // Part I — 星霧澄澈 · 釐清現狀
  { part: 1, name: "時光的留白", en: "Pause of Eternity", guidance: "現在不要急著做重大決定，先給自己 24 小時的完全留白與喘息。" },
  { part: 1, name: "風中的回音", en: "Echoes in the Wind", guidance: "別人的期望不是你的責任，把外界的喧囂與自己的聲音分開。" },
  { part: 1, name: "夜空的微光", en: "Glimmer in the Dark", guidance: "迷惘是舊模式瓦解的正常過程，不需要立刻找到標準答案。" },
  { part: 1, name: "星塵的盤點", en: "Inventory of Stardust", guidance: "別只看缺少的，把手頭現有的技能、人脈與資源具體列出來。" },
  { part: 1, name: "隨風飄落的羽翼", en: "Feathers on the Wind", guidance: "已經投入的時間與精力收不回來，只看下一步對你有沒有實質價值。" },
  { part: 1, name: "月影下的休眠", en: "Slumber under the Moon", guidance: "承認自己累了不是軟弱，身體與心靈正在提醒你需要停機維護。" },
  { part: 1, name: "凝視深淵的光", en: "Light in the Abyss", guidance: "問自己最壞的結果是什麼？攤開來看，通常最壞的結果都能承受。" },
  { part: 1, name: "獨行的星軌", en: "Solitary Orbit", guidance: "每個人走在不同的時區，參考別人的進度只會打亂自己的配速。" },
  { part: 1, name: "鏡中的幻象", en: "Mirage in the Mirror", guidance: "這件事是你真心想要，還是為了向外界證明自己的價值？" },
  { part: 1, name: "掌心的微光", en: "Light in Your Palm", guidance: "把精力從無法改變的環境收回，專注在今天自己能做的一件事。" },
  { part: 1, name: "褪色的星圖", en: "Fading Constellations", guidance: "兩年前適合你的夢想，現在可能已經完成使命，允許自己放下。" },

  // Part II — 大地之息 · 身心校準
  { part: 2, name: "大地的深根", en: "Roots of the Earth", guidance: "脫下鞋子踩踩草地或地板，讓浮躁的心神重新回到踏實的肉體。" },
  { part: 2, name: "清泉的洗禮", en: "Baptism of Clear Springs", guidance: "連續做三次深長呼吸，大口喝一杯溫水，重啟你的神經系統。" },
  { part: 2, name: "淨化的神殿", en: "Temple of Sanctuary", guidance: "花 15 分鐘整理桌面或丟掉垃圾，外在環境有序，內在思緒才會清晰。" },
  { part: 2, name: "大地的甘霖", en: "Nourishment of the Earth", guidance: "關掉手機與螢幕，專注品嚐眼前食物的滋味，好好吃一頓飯。" },
  { part: 2, name: "晨曦的召喚", en: "Call of the Dawn", guidance: "給眼睛和大腦 2 小時的數位排毒，走到戶外看看自然的日光與綠意。" },
  { part: 2, name: "夜幕的庇護", en: "Shelter of the Night", guidance: "很多心理上的絕望與焦慮，本質上只是大腦極度缺覺與過載。" },
  { part: 2, name: "潮汐的律動", en: "Rhythm of the Tides", guidance: "去快走、跑步或拉筋 20 分鐘，用身體的活動代謝掉卡住的情緒。" },
  { part: 2, name: "雨露的流動", en: "Flow of Raindrops", guidance: "悲傷或生氣時就讓它自然釋放，不必勉強自己時刻維持正向。" },
  { part: 2, name: "微風的耳語", en: "Whispering Breeze", guidance: "摸摸身邊物件的質地、聞聞空氣的氣味，把意識溫柔拉回當下。" },
  { part: 2, name: "守護結界", en: "Guardian's Boundary", guidance: "對消耗你能量的人事物直接說「不」，設定健康的心理界線。" },
  { part: 2, name: "心靈的甘露", en: "Nectar of Compassion", guidance: "像對待最好的朋友一樣對待自己，停止內在無休止的自我苛責。" },

  // Part III — 光之軌跡 · 具體行動
  { part: 3, name: "微光第一步", en: "First Glimmer Step", guidance: "不用一次看到終點，只要邁出視線所及、最容易執行的微小一步。" },
  { part: 3, name: "羊皮紙上的墨跡", en: "Ink on Parchment", guidance: "拿出實體紙筆，把腦中的混亂全部寫下來，條理會自然浮現。" },
  { part: 3, name: "星火的試煉", en: "Spark of Experiment", guidance: "把重大轉變拆解成低風險的小實驗，親自試試看就知道喜不喜歡。" },
  { part: 3, name: "引路人的低語", en: "Whispers of the Guide", guidance: "找信任的專業前輩或朋友聊 30 分鐘，不要一個人閉門苦思。" },
  { part: 3, name: "晨鐘的定軌", en: "Anchor of the Morning", guidance: "每天固定在同一時間做一件簡單的事，為生活建立踏實的掌控感。" },
  { part: 3, name: "未完成的詩篇", en: "Unfinished Symphony", guidance: "先交出 60 分的成果，遠比一直停留在腦中完美的 100 分更有價值。" },
  { part: 3, name: "未踏之境", en: "Uncharted Realm", guidance: "換一條路線回家、品嚐一道新食物，給大腦注入未曾體驗的刺激。" },
  { part: 3, name: "人間煙火", en: "Pulse of the Living", guidance: "走出房間，去市場、街角或咖啡廳感受人群真實的呼吸與溫度。" },
  { part: 3, name: "斬斷藤蔓", en: "Severing the Vines", guidance: "挑出那件拖延最久的小瑣事，今天就專注把它一次徹底解決。" },
  { part: 3, name: "散落的微光", en: "Scattered Light", guidance: "幫路人扶門或給予真誠的讚美，將善意流動出去，能打破自身的停滯感。" },
  { part: 3, name: "鑄造實體", en: "Manifesting Form", guidance: "別只在腦中空想，今天就動手做出一個初步的草稿或實體樣品。" },

  // Part IV — 蒼穹之鑰 · 心態轉換
  { part: 4, name: "靜默生長", en: "Silent Blooming", guidance: "種子在地底下發芽時看起來毫無動靜，但成長正在暗中深刻發生。" },
  { part: 4, name: "純白畫布", en: "The Pristine Canvas", guidance: "沒有明確方向的時候，正是探索各種可能性、重新彩繪人生的契機。" },
  { part: 4, name: "碎裂之光", en: "Fractured Light", guidance: "每一次行不通的嘗試，都是在幫你排除錯誤選項，指引正確路徑。" },
  { part: 4, name: "純真之眼", en: "Eyes of Wonder", guidance: "把「我必須成功」的執念，換成「我想看看會發生什麼事」的好奇。" },
  { part: 4, name: "迷霧航行", en: "Voyage into Mist", guidance: "未知不等於危險，未知代表著所有全新的機遇與可能性。" },
  { part: 4, name: "歲月的年輪", en: "Rings of Eternity", guidance: "長遠的改變都是複利效應，專注於每天進步 1% 的微小積累。" },
  { part: 4, name: "榮耀之印", en: "Seal of Resilience", guidance: "看看自己一路走過來的關卡，你比自己想像中更有韌性與力量。" },
  { part: 4, name: "旅人的詩行", en: "Poetry of the Journey", guidance: "目的地只是終點站，沿途經歷的酸甜苦辣才是生命的實質內容。" },
  { part: 4, name: "順應風向", en: "Yielding to the Wind", guidance: "當一扇門打不開時，不要一直撞門，轉身看看身旁開著的窗。" },
  { part: 4, name: "執掌星盤", en: "Helm of Destiny", guidance: "你的價值不需要外界打分，你才是自己人生航道的最高負責人。" },
  { part: 4, name: "萬物皆有時", en: "Everything in Its Season", guidance: "此時此刻你所經歷的每一步，都在為下一個章節鋪墊必要的養分。" },
];

function buildAngelDeck() {
  return ANGEL_CARDS_RAW.map((card, index) => {
    const part = ANGEL_PARTS.find((p) => p.id === card.part);
    return {
      id: `angel-${index}`,
      part: part.id,
      partZh: part.zh,
      partEn: part.en,
      name: card.name,
      en: card.en,
      guidance: card.guidance,
    };
  });
}

const ANGEL_DECK = buildAngelDeck();
