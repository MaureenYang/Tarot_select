// 塔羅牌牌組資料：78 張牌（22 張大阿爾卡納 + 56 張小阿爾卡納）

const MAJOR_ARCANA = [
  { name: "愚者", en: "The Fool", upright: "冒險、新的開始、天真、自由", reversed: "魯莽、猶豫不決、逃避現實" },
  { name: "魔術師", en: "The Magician", upright: "創造力、行動力、資源整合、意志", reversed: "計謀、能力錯用、猶豫不決" },
  { name: "女祭司", en: "The High Priestess", upright: "直覺、潛意識、神秘、內在智慧", reversed: "壓抑直覺、資訊隱瞞、表裡不一" },
  { name: "皇后", en: "The Empress", upright: "豐盛、母性、創造、滋養", reversed: "過度依賴、停滯、缺乏自我照顧" },
  { name: "皇帝", en: "The Emperor", upright: "權威、秩序、掌控、穩定", reversed: "獨裁、僵化、失去控制" },
  { name: "教皇", en: "The Hierophant", upright: "傳統、信念、指導、體制", reversed: "叛逆、教條束縛、質疑權威" },
  { name: "戀人", en: "The Lovers", upright: "選擇、連結、和諧、價值觀契合", reversed: "失衡、猶豫、關係失調" },
  { name: "戰車", en: "The Chariot", upright: "意志力、勝利、掌控方向、突破", reversed: "失控、方向不明、缺乏自律" },
  { name: "力量", en: "Strength", upright: "勇氣、耐心、內在力量、溫柔堅定", reversed: "自我懷疑、軟弱、失去耐心" },
  { name: "隱者", en: "The Hermit", upright: "內省、獨處、尋求真理、指引", reversed: "孤立、迷失方向、逃避思考" },
  { name: "命運之輪", en: "Wheel of Fortune", upright: "轉機、循環、機運、變化", reversed: "厄運、失控、抗拒改變" },
  { name: "正義", en: "Justice", upright: "公正、因果、平衡、真相", reversed: "不公、偏頗、逃避責任" },
  { name: "吊人", en: "The Hanged Man", upright: "犧牲、換位思考、暫停、覺悟", reversed: "拖延、抗拒、無謂的犧牲" },
  { name: "死神", en: "Death", upright: "結束、蛻變、轉化、放下", reversed: "抗拒改變、停滯不前、恐懼結束" },
  { name: "節制", en: "Temperance", upright: "平衡、調和、耐心、中庸", reversed: "失衡、過度、缺乏耐性" },
  { name: "惡魔", en: "The Devil", upright: "束縛、慾望、物質誘惑、依附", reversed: "掙脫束縛、覺察、重獲自由" },
  { name: "高塔", en: "The Tower", upright: "劇變、崩解、覺醒、意外衝擊", reversed: "逃避崩塌、延遲的災難、內在動盪" },
  { name: "星星", en: "The Star", upright: "希望、療癒、信念、靈感", reversed: "失望、信心不足、迷失方向" },
  { name: "月亮", en: "The Moon", upright: "幻象、恐懼、潛意識、不確定", reversed: "真相浮現、走出迷惘、釋放焦慮" },
  { name: "太陽", en: "The Sun", upright: "喜悅、成功、活力、自信", reversed: "暫時受挫、過度樂觀、活力不足" },
  { name: "審判", en: "Judgement", upright: "覺醒、重生、反省、召喚", reversed: "自我懷疑、逃避覺醒、悔恨" },
  { name: "世界", en: "The World", upright: "圓滿、完成、成就、整合", reversed: "未竟之事、延遲、缺乏收尾" },
];

const SUITS = [
  { key: "wands", name: "權杖", en: "Wands", element: "火", theme: "行動、熱情、事業與創造力" },
  { key: "cups", name: "聖杯", en: "Cups", element: "水", theme: "情感、關係與內心世界" },
  { key: "swords", name: "寶劍", en: "Swords", element: "風", theme: "思想、衝突與決策" },
  { key: "pentacles", name: "錢幣", en: "Pentacles", element: "土", theme: "物質、金錢與現實事務" },
];

const RANKS = [
  { key: 1, name: "王牌", en: "Ace" },
  { key: 2, name: "二", en: "Two" },
  { key: 3, name: "三", en: "Three" },
  { key: 4, name: "四", en: "Four" },
  { key: 5, name: "五", en: "Five" },
  { key: 6, name: "六", en: "Six" },
  { key: 7, name: "七", en: "Seven" },
  { key: 8, name: "八", en: "Eight" },
  { key: 9, name: "九", en: "Nine" },
  { key: 10, name: "十", en: "Ten" },
  { key: "page", name: "侍從", en: "Page" },
  { key: "knight", name: "騎士", en: "Knight" },
  { key: "queen", name: "皇后", en: "Queen" },
  { key: "king", name: "國王", en: "King" },
];

function buildDeck() {
  const deck = [];

  MAJOR_ARCANA.forEach((card, index) => {
    deck.push({
      id: `major-${index}`,
      arcana: "major",
      number: index,
      name: card.name,
      en: card.en,
      suit: null,
      upright: card.upright,
      reversed: card.reversed,
    });
  });

  SUITS.forEach((suit) => {
    RANKS.forEach((rank) => {
      deck.push({
        id: `minor-${suit.key}-${rank.key}`,
        arcana: "minor",
        suit: suit.name,
        suitEn: suit.en,
        element: suit.element,
        name: `${suit.name}${rank.name}`,
        en: `${rank.en} of ${suit.en}`,
        upright: `${suit.theme}方面，正向且順利的能量`,
        reversed: `${suit.theme}方面，受阻、失衡或需要留意的能量`,
      });
    });
  });

  return deck;
}

const FULL_DECK = buildDeck();
