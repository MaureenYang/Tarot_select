// 日日微光：給心靈的44個溫暖指引卡（Daily Radiance）牌組資料：44 張

const DAILY_PARTS = [
  { id: 1, zh: "晨光啟程", zhSub: "喚醒希望・開啟全新一天", en: "Morning Dawn (Awakening Hope)" },
  { id: 2, zh: "日常錨定", zhSub: "回歸當下・感受生活滋味", en: "Daily Anchor (Presence & Everyday Joy)" },
  { id: 3, zh: "溫柔賦能", zhSub: "找回力量・自我肯定", en: "Gentle Empowerment (Reclaiming Your Strength)" },
  { id: 4, zh: "暮光晚安", zhSub: "釋放感恩・安心安眠", en: "Dusk Goodnight (Gratitude & Rest)" },
];

const DAILY_CARDS_RAW = [
  // Part I — 晨光啟程
  { part: 1, name: "破曉的邀請", en: "Invitation of Dawn", guide: "今天是一張全新的白紙，昨天的遺憾已經翻篇，你隨時可以重新落筆。", action: "起床後推開窗，深吸一口早晨清新的空氣，對自己微笑一下。" },
  { part: 1, name: "種子的信念", en: "Faith of the Seed", guide: "只要土壤還在，小小的種子就擁有破土而出的無限可能，相信你內在的生機。", action: "喝一杯溫水，感受水分滋潤身體，像植物一樣展開新的一天。" },
  { part: 1, name: "伸展的日光", en: "Stretching Sunlight", guide: "像剛睡醒的小貓一樣伸個懶腰，身體放鬆了，好運自然會走進來。", action: "站在窗邊伸展雙臂 30 秒，讓陽光曬一曬微涼的手心。" },
  { part: 1, name: "初心的羅盤", en: "Compass of the Heart", guide: "別管外界的時鐘走得多快，跟隨內心最初的渴望，你的步調永遠剛剛好。", action: "出門前問自己一句：「今天做什麼事會讓我打從心底感到開心？」" },
  { part: 1, name: "輕裝上陣", en: "Traveling Light", guide: "出門時只帶上希望與好奇，把無謂的擔憂和預設留在門後。", action: "出門前清理包包，拿出一件今天根本用不到的沉重雜物。" },
  { part: 1, name: "微小的奇蹟", en: "Everyday Miracle", guide: "今天的生活裡藏著三顆驚喜糖果，張開眼睛，去把屬於你的美好找出來。", action: "路上特別留意一朵路邊盛開的小花或一片形狀特別的雲。" },
  { part: 1, name: "溫柔的啟航", en: "Gentle Departure", guide: "不必急著一次衝到終點，平穩地邁出第一步，路就會在腳下鋪展開來。", action: "挑出今天待辦清單裡最簡單的一件小事，立刻動手完成它。" },
  { part: 1, name: "純淨的呼吸", en: "Pure Inhale", guide: "吸進清新與寧靜，吐出緊繃與濁氣，每一次呼吸都是生命送你的禮物。", action: "做三次緩慢深長的腹式呼吸，將肩膀徹底沉下來。" },
  { part: 1, name: "早安的善意", en: "Morning Kindness", guide: "將一份溫暖的善意投遞出去，整個世界都會以明亮的色彩回應你。", action: "真誠地對今天遇到的第一個人（店員、警衛或家人）說聲早安。" },
  { part: 1, name: "雀躍的音符", en: "Cheerful Melody", guide: "給今天的心情選一首輕快的背景音樂，讓步伐隨著旋律輕盈起來。", action: "播放一首會讓你忍不住跟著哼唱的輕快歌曲。" },
  { part: 1, name: "敞開的雙手", en: "Open Arms", guide: "放下對一天的所有預設立場，帶著開放的心，迎接所有可能的驚喜。", action: "手掌朝上放平，默念三次：「我願意接納今天一切美好的發生。」" },

  // Part II — 日常錨定
  { part: 2, name: "一杯茶的溫度", en: "Warmth of a Cup", guide: "世界再忙，也要留下一杯熱飲的時間，讓溫暖由內而外慢慢漫開。", action: "專注地喝完一杯茶或咖啡，不看手機，只品嚐它的香氣。" },
  { part: 2, name: "大地給的支撐", en: "Supported by Earth", guide: "你的雙腳深深扎根於大地，無論外界風雨多大，你始終穩固而安全。", action: "感受腳底板踩實地面的重量，體驗重力帶來的踏實感。" },
  { part: 2, name: "食物的甘甜", en: "Joy of Nourishment", guide: "每一口咀嚼都是大地的饋贈，好好吃飯，就是愛護自己最好的方式。", action: "午餐時細嚼慢嚥，專心感受食物原汁原味的美好。" },
  { part: 2, name: "微風的問候", en: "Greeting of the Breeze", guide: "讓微風吹過髮梢，帶走你額頭上的皺褶與思慮，一切都會順利化解。", action: "走到戶外閉上眼睛一分鐘，感受風吹過皮膚的涼爽。" },
  { part: 2, name: "片刻的留白", en: "A Breath of Space", guide: "留白不是浪費時間，是在給你的大腦和心靈開一扇通風透氣的窗。", action: "設定五分鐘計時器，什麼都不想、不做，單純放空。" },
  { part: 2, name: "掌心的微光", en: "Light in Your Hands", guide: "專注做好眼前這件微小的事，聚沙成塔，你正在親手創造屬於你的美好。", action: "花十分鐘將眼前的桌面或工作區整理得乾淨清爽。" },
  { part: 2, name: "綠意的療癒", en: "Healing Greens", guide: "看看植物如何不慌不忙地生長，生命的節奏本該如此從容自在。", action: "摸摸身邊植物的葉片，或凝視窗外的樹木一分鐘。" },
  { part: 2, name: "真誠的傾聽", en: "Heartfelt Listening", guide: "用心去聽周遭的聲音，當你的心安靜下來，世界的善意便清晰可辨。", action: "在今天的一場對話中，放下想插話的念頭，全神貫注地聽對方說完。" },
  { part: 2, name: "步伐的節奏", en: "Pace of Your Own", guide: "不用跟著別人的速度跑，按照自己的步調散步，沿途的風景才是精華。", action: "刻意將走路的速度放慢三分之一，感受腳步與地面的接觸。" },
  { part: 2, name: "水滴的洗滌", en: "Cleansing Flow", guide: "讓流動的水帶走一整天的疲憊與塵埃，洗去沉重，重獲一身清爽。", action: "洗手時感受水流滑過指縫的觸感，想像所有煩惱順著水流被沖走。" },
  { part: 2, name: "定格的美好", en: "Capturing the Moment", guide: "美不是遠方的風景，而是此時此刻光影灑在牆角的那份動人。", action: "拍下一張今天讓你覺得溫馨、美麗或有趣的日常照片。" },

  // Part III — 溫柔賦能
  { part: 3, name: "本自具足的珍珠", en: "The Inherent Pearl", guide: "你的價值不需要經過任何人的打分與核准，你本來就足夠美好且珍貴。", action: "對著鏡子裡的自己由衷地誇獎一句：「你今天真的很棒！」" },
  { part: 3, name: "溫柔的防空洞", en: "Gentle Boundary", guide: "保護好自己的時間與心力，學會說『不』，是深愛自己的成熟表現。", action: "溫和而堅定地推掉一個今天不想去、也不必要的聚會或請求。" },
  { part: 3, name: "羽翼的韌性", en: "Resilience of Wings", guide: "看看你一路走過來的路，你比自己想像中更有力量、更能跨越難關。", action: "想起過去克服過的一個困難，在心裡為自己的勇敢鼓鼓掌。" },
  { part: 3, name: "允許不完美", en: "Embracing Imperfection", guide: "裂痕是光照進來的地方，有瑕疵的真實，遠比完美的偽裝更動人。", action: "寬容看待今天出現的一個小失誤，對自己說：「沒關係，這很正常。」" },
  { part: 3, name: "內在的泉源", en: "Inner Spring", guide: "你的心裡有一座永不枯竭的愛之泉，先把自己灌滿，愛才能自然溢出。", action: "今天做一件單純為了取悅自己、不求任何回報的小事。" },
  { part: 3, name: "點亮心燈", en: "Igniting Hope", guide: "即使周圍光線昏暗，只要守住心中的那盞小燈，黑暗就永遠無法將你吞噬。", action: "點燃一顆香氛蠟燭，或在心裡默念一句給自己力量的格言。" },
  { part: 3, name: "勇敢的微步", en: "Courageous Step", guide: "不需要巨大的勇氣才能改變，今天前進一厘米，明天就完全不一樣。", action: "去做那件一直想試、卻因為微小恐懼而拖延的事。" },
  { part: 3, name: "溫柔以待", en: "Treating Yourself Softly", guide: "像對待最心疼的小朋友一樣對待自己，給自己多一點耐心與擁抱。", action: "用雙手環抱自己的肩膀，輕輕拍三下，告訴自己辛苦了。" },
  { part: 3, name: "相信時機", en: "Trusting the Timing", guide: "花朵不會在同一天盛開，每個人都有自己的花期，耐心等候你的綻放。", action: "放下一件你一直急於求成的事，告訴自己：「時間會給出最好的答案。」" },
  { part: 3, name: "釋放過期的包袱", en: "Letting Go of the Old", guide: "清空雙手，才能接住即將到來的全新禮物；放手是為了迎接更好。", action: "丟掉一張過期的收據、刪除手機裡一張模糊的照片。" },
  { part: 3, name: "自在如風", en: "Free as the Wind", guide: "別把別人的眼光當成自己的牢籠，隨心所欲地呼吸，做最真實的自己。", action: "穿一套讓自己感覺最舒服、最自在的衣服出門。" },

  // Part IV — 暮光晚安
  { part: 4, name: "黃昏的溫柔", en: "Twilight Grace", guide: "太陽下山了，今天的一切努力都已足夠，允許自己劃下句點。", action: "望向窗外的夕陽或漸暗的天空，在心裡對今天說一聲謝謝。" },
  { part: 4, name: "卸下行囊", en: "Unpacking the Day", guide: "回到家，把白天的身分與疲憊掛在門口，現在只有放鬆與陪伴自己。", action: "換上最舒服的居家服，好好洗一把臉。" },
  { part: 4, name: "溫熱的擁抱", en: "Cozy Embrace", guide: "鑽進柔軟的被窩裡，這裡是你專屬的城堡，沒有任何煩惱能打擾你。", action: "把被子拉好，深深感受床鋪帶來的安全感與支撐感。" },
  { part: 4, name: "細數微光", en: "Counting the Sparkles", guide: "回想今天發生的溫暖小事，心裡裝滿感激，夜晚便會溫柔如水。", action: "在心裡默數今天發生的三件小確幸（如吃到好吃的、看到美麗的雲）。" },
  { part: 4, name: "原諒今天的一切", en: "Absolution of the Night", guide: "今天沒做完的就留給明天吧，原諒自己的不足，安然享受今夜的靜謐。", action: "躺在床上深吐一口長氣，告訴自己：「今天已經結束了，我很棒。」" },
  { part: 4, name: "星光的守候", en: "Starlight Vigil", guide: "漫天繁星正在夜空中為你站崗，放下一萬個擔心，安心沉入夢鄉。", action: "睡前抬頭看一眼夜空或星星，感受宇宙的平靜。" },
  { part: 4, name: "身心的融解", en: "Melting into Sleep", guide: "從頭頂到腳趾，一塊塊肌肉放鬆軟化，像冰淇淋一樣在溫暖中融解。", action: "從腳趾開始，依序放鬆小腿、腹部、肩膀到面部肌肉。" },
  { part: 4, name: "夜的搖籃曲", en: "Nighttime Lullaby", guide: "聽聽窗外安靜的夜聲，讓這份靜謐成為搖籃曲，帶你進入甜美的夢境。", action: "播放助眠白噪音（雨聲、海浪聲）或維持全然的安靜。" },
  { part: 4, name: "明天的約定", en: "Promise of Tomorrow", guide: "明天太陽依然會升起，帶著滿滿的生機與可能，在清晨等著擁抱你。", action: "帶著對明天早餐或第一杯咖啡的微小期待閉上眼睛。" },
  { part: 4, name: "全然的安全感", en: "Total Sanctuary", guide: "此時此刻，你被整個宇宙深深守護著，無憂無慮，萬物皆安。", action: "把雙手輕輕放在腹部，感受呼吸平穩的起伏。" },
  { part: 4, name: "甜甜的晚安", en: "Sweet Goodnight", guide: "晚安，辛苦了一整天的你。做個好夢，明天見。", action: "閉上眼，對自己輕聲說一句：「晚安，祝我有個好夢。」" },
];

function buildDailyDeck() {
  return DAILY_CARDS_RAW.map((card, index) => {
    const part = DAILY_PARTS.find((p) => p.id === card.part);
    return {
      id: `daily-${index}`,
      part: part.id,
      partZh: part.zh,
      partZhSub: part.zhSub,
      partEn: part.en,
      name: card.name,
      en: card.en,
      guide: card.guide,
      action: card.action,
    };
  });
}

const DAILY_DECK = buildDailyDeck();
