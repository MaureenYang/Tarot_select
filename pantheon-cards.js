// 萬神歸途指引卡（Pantheon Wayfinder Oracle）牌組資料：44 張

const PANTHEON_PARTS = [
  { id: 1, zh: "破局、前行與意志", en: "Breakthrough, Advance & Will" },
  { id: 2, zh: "滋養、療癒與內在", en: "Nourishment, Healing & the Inner Self" },
  { id: 3, zh: "轉化、釋懷與深層智慧", en: "Transformation, Release & Deep Wisdom" },
  { id: 4, zh: "機遇、流動與豐盛創造", en: "Opportunity, Flow & Abundant Creation" },
];

const PANTHEON_CARDS_RAW = [
  // Part I — 破局、前行與意志
  { part: 1, name: "象頭神", en: "Ganesha", epithet: "破除障礙", voice: "孩子，別被眼前的巨石擋住去路。我已為你開闢蹊徑，收起怯懦，邁出你的第一步。" },
  { part: 1, name: "索爾", en: "Thor", epithet: "純粹力量", voice: "收起無謂的退讓！握緊你手中的武器，亮出你的底線，今日由你正面迎擊風暴。" },
  { part: 1, name: "雅典娜", en: "Athena", epithet: "策略智慧", voice: "收斂盲目的怒火。退後三步看清整個棋局，用你的清醒與智謀，去贏下這場對弈。" },
  { part: 1, name: "大天使米迦勒", en: "Michael", epithet: "斬斷恐懼", voice: "我賜你光之利刃。那些消耗你、恐嚇你的陰影，在此刻揮劍斬斷，不再受其擺佈。" },
  { part: 1, name: "羽蛇神", en: "Quetzalcoatl", epithet: "文明開拓", voice: "舊有的土地已無養分。張開雙翼飛向未知，去習得新的智慧，開闢屬於你的新天地。" },
  { part: 1, name: "須佐之男", en: "Susanoo", epithet: "打破重組", voice: "僵死的秩序由你來打破。不必害怕當下的混亂，在暴風雨之後，重掌你的乾坤。" },
  { part: 1, name: "關聖帝君", en: "Guan Yu", epithet: "誠信與忠義", voice: "行事當頂天立地。守住你的承諾與氣節，莫為蠅頭小利折腰，此乃你立身之本。" },
  { part: 1, name: "提爾", en: "Tyr", epithet: "犧牲與契約", voice: "欲成大事，必承其重。放下那些次要的安逸，敢於付出代價之人，方配得上最終的勝利。" },
  { part: 1, name: "荷魯斯", en: "Horus", epithet: "重掌主權", voice: "拭去眼角的塵土。跌落谷底不是你的結局，昂首站起，拿回本就屬於你的王座。" },
  { part: 1, name: "阿波羅", en: "Apollo", epithet: "看清真相", voice: "讓我的光芒驅散你眼前的幻象。直面真實雖需勇氣，但唯有真相能引你走出迷宮。" },
  { part: 1, name: "不動明王", en: "Acala", epithet: "堅定不移", voice: "心若磐石，八風吹不動。鎖定你的誓願，莫讓世間雜音與誘惑動搖你分毫。" },

  // Part II — 滋養、療癒與內在
  { part: 2, name: "觀世音菩薩", en: "Guanyin", epithet: "慈悲與包容", voice: "莫再苛責自己。世間受苦之人我皆憐憫，你亦在其中；先將這份慈悲，留給疲憊的自己。" },
  { part: 2, name: "伊西斯", en: "Isis", epithet: "自我修復", voice: "即使身心碎落一地，我亦能助你重聚。每一道裂痕，都將化為你重生的印記。" },
  { part: 2, name: "地藏菩薩", en: "Ksitigarbha", epithet: "深層陪伴", voice: "若你此刻身處黑暗深淵，莫怕，我在此處陪你。不必勉強歡笑，待你歇夠，我們再啟程。" },
  { part: 2, name: "阿芙蘿黛蒂", en: "Aphrodite", epithet: "看見自身價值", voice: "看著鏡中的自己。你的存在本就是造物的恩賜，無須乞求外界認可，你自帶光芒。" },
  { part: 2, name: "西王母", en: "Queen Mother of the West", epithet: "身心調養", voice: "萬物生長皆需節制。停下奔波的腳步，飲水、安眠、調和氣息，養足精魄方能長久。" },
  { part: 2, name: "巴德爾", en: "Baldr", epithet: "找回初心", voice: "撥開層層功利與算計，回想你最初出發時的那份純粹。找回它，你的心便不再沉重。" },
  { part: 2, name: "辯才天女", en: "Saraswati", epithet: "暢快表達", voice: "我將靈感之泉注入你的心海。莫壓抑你的聲音，去書寫、去傾吐，讓真實的才華流淌。" },
  { part: 2, name: "月讀命", en: "Tsukuyomi", epithet: "安靜沉潛", voice: "晝日喧囂已過，此刻屬於黑夜。收斂你的鋒芒，靜觀其變，在靜默中凝聚力量。" },
  { part: 2, name: "藥師佛", en: "Bhaisajyaguru", epithet: "身心排毒", voice: "將積壓於體內的濁氣與怨念盡數排出。清淨身心，回歸純淨，宿疾自當化解。" },
  { part: 2, name: "大天使拉斐爾", en: "Raphael", epithet: "撫平創傷", voice: "將你的痛楚交託於我。過去的傷痕已在癒合，允許自己卸下防備，安心休養。" },
  { part: 2, name: "蓋亞", en: "Gaia", epithet: "踏實落地", voice: "莫讓心神飄盪於虛空。感知你腳下的大地，將宏大的願景，落實在今日的一磚一瓦中。" },

  // Part III — 轉化、釋懷與深層智慧
  { part: 3, name: "濕婆", en: "Shiva", epithet: "斷捨離", voice: "萬物終有盡時。坦然送走已死去的過往，毀滅是為了迎來更璀璨的新生。" },
  { part: 3, name: "歐西里斯", en: "Osiris", epithet: "低谷蓄力", voice: "種子深埋於泥土，並非死去，而是在暗中蓄力。守住這份寂寞，破土之日即將到來。" },
  { part: 3, name: "太上老君", en: "Taishang Laojun", epithet: "順應自然", voice: "大道無形，順其自然。莫以人力強行對抗時勢，順水行舟，自能抵達彼岸。" },
  { part: 3, name: "釋迦牟尼佛", en: "Gautama Buddha", epithet: "放下執念", voice: "你所執著的苦，皆因緊抓不放。鬆開你的雙手，萬物本空，你方能得大自在。" },
  { part: 3, name: "黑帝斯", en: "Hades", epithet: "挖掘潛能", voice: "莫懼怕幽暗之處。你不敢直面的恐懼底下，正埋藏著你未曾動用的無盡寶藏。" },
  { part: 3, name: "奧丁", en: "Odin", epithet: "為成長付代價", voice: "求取真知必歷經淬鍊。耐住磨礪與孤寂，你所付出的代價，終將鑄成無可匹敵的智慧。" },
  { part: 3, name: "托特", en: "Thoth", epithet: "理清秩序", voice: "混亂生恐懼，秩序生力量。提筆將思緒條分縷析，當萬物各歸其位，前路自明。" },
  { part: 3, name: "阿努比斯", en: "Anubis", epithet: "誠實盤點", voice: "將你的心置於天平之上。誠實審視何為重、何為輕，莫再為羽毛般的瑣事虛耗光陰。" },
  { part: 3, name: "洛基", en: "Loki", epithet: "打破常規", voice: "既定之路由凡人所設，你何必盲從？換個荒謬的視角，破局之法往往藏在常理之外。" },
  { part: 3, name: "赫卡忒", en: "Hecate", epithet: "直覺抉擇", voice: "三岔路口前，莫問他人。閉上眼，聽從你靈魂深處的火把，它早已知曉正確的方向。" },
  { part: 3, name: "文殊菩薩", en: "Manjusri", epithet: "斬斷糾結", voice: "思慮過甚即為魔障。執起智慧之劍，斬斷猶豫不決的妄念，清清楚楚走下去。" },

  // Part IV — 機遇、流動與豐盛創造
  { part: 4, name: "吉祥天女", en: "Lakshmi", epithet: "感恩豐盛", voice: "宇宙的豐盛已環繞於你。常懷富足感恩之心，你所期盼的福報與機遇自會如約而至。" },
  { part: 4, name: "稻荷神", en: "Inari", epithet: "踏實耕耘", voice: "春種一粒粟，秋收萬顆子。莫問何時豐收，只管用心照看你當下的田地，果實自結。" },
  { part: 4, name: "荷米斯", en: "Hermes", epithet: "敏捷應變", voice: "風向已轉，速速啟航。保持靈動的身段，隨機應變，莫讓眼前的良機擦肩而過。" },
  { part: 4, name: "媽祖", en: "Mazu", epithet: "穩住陣腳", voice: "任憑海上狂風大作，我必為你掌燈指航。定住你的心舟，風浪終會平息，平安在望。" },
  { part: 4, name: "大天使加百列", en: "Gabriel", epithet: "捕捉信號", voice: "側耳傾聽，啟示已降臨在你身邊。鼓起勇氣傳遞你的聲音，新的篇章正等待你開啟。" },
  { part: 4, name: "維拉科查", en: "Viracocha", epithet: "親手開局", voice: "混沌之中，你即是創世者。莫等他人賜予天地，親手塑出屬於你的日月星辰。" },
  { part: 4, name: "女媧", en: "Nüwa", epithet: "收拾殘局", voice: "天缺一角何足懼？煉五色石以補之。動手收拾眼前的殘局，轉機就在你的雙手之中。" },
  { part: 4, name: "天照大神", en: "Amaterasu", epithet: "走出陰霾", voice: "莫再深藏於洞窟之中。推開石門走出來，用你的光芒，重新照亮屬於你的世間。" },
  { part: 4, name: "普羅米修斯", en: "Prometheus", epithet: "提前佈局", voice: "哪怕無人理解，亦要為眾生引來天火。堅定你的遠見，先行者的孤獨終將化為文明之光。" },
  { part: 4, name: "毗濕奴", en: "Vishnu", epithet: "維持平衡", voice: "世事紛繁，貴在恆常。以寬厚包容之心協調各方，穩住大局，萬物自能長久運轉。" },
  { part: 4, name: "命運三女神", en: "Moirai", epithet: "臣服時機", voice: "命運之線自有其經緯交織。莫急莫躁，凡事皆有其定時，且行且待，靜觀其成。" },
];

function buildPantheonDeck() {
  return PANTHEON_CARDS_RAW.map((card, index) => {
    const part = PANTHEON_PARTS.find((p) => p.id === card.part);
    return {
      id: `pantheon-${index}`,
      part: part.id,
      partZh: part.zh,
      partEn: part.en,
      name: card.name,
      en: card.en,
      epithet: card.epithet,
      voice: card.voice,
    };
  });
}

const PANTHEON_DECK = buildPantheonDeck();
