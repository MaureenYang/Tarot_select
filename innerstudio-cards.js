// 內在片場神諭卡（Inner Studio Oracle Cards）牌組資料：44 張

const STUDIO_PARTS = [
  { id: 1, zh: "舞台中央的控場者", zhSub: "掌控與過度防禦篇", en: "The Center-Stage Controller (Control & Over-Defense)" },
  { id: 2, zh: "隱蔽角落的旁觀者", zhSub: "逃避與自我退縮篇", en: "The Hidden Bystander (Avoidance & Withdrawal)" },
  { id: 3, zh: "劇情崩塌的推手", zhSub: "關係糾纏與投射篇", en: "The Plot-Collapsing Catalyst (Relational Entanglement & Projection)" },
  { id: 4, zh: "荒謬劇本的受害者", zhSub: "節奏失序與心態卡點篇", en: "The Absurd Script's Victim (Pacing Disorder & Mindset Blocks)" },
];

const STUDIO_CARDS_RAW = [
  // Part I — 舞台中央的控場者
  { part: 1, name: "獨裁的導演", en: "The Autocratic Director", cause: "想精確控制每個人的台詞與走位，一旦脫軌就焦慮失控，把身邊的人全逼退了。", line: "放下擴音器，允許劇組有自己的生命力。" },
  { part: 1, name: "緊繃的特務", en: "The Hyper-Vigilant Agent", cause: "預設周遭全是敵意與危險，防備心過重，把真正的善意和好機會也擋在門外。", line: "收起武器，不是每個人都是帶著刺刀來的。" },
  { part: 1, name: "拒絕NG的完美主角", en: "The Flawless Lead", cause: "不允許自己有半點瑕疵，害怕被看見破綻，導致進度永遠停在草稿階段。", line: "拍下這一鏡，殘缺的真實遠好過完美的空白。" },
  { part: 1, name: "背負全村的英雄", en: "The Burdened Hero", cause: "誤以為所有爛攤子都該由自己一肩扛起，不肯求助，把自己活活拖垮。", line: "解開繩子，拯救世界從來不是一個人的獨角戲。" },
  { part: 1, name: "不肯認輸的賭徒", en: "The Obsessive Gambler", cause: "明知這條路已經行不通，但為了拿回以前投入的時間與心血，執意在爛局裡繼續加碼。", line: "離席吧，沉沒的籌碼永遠救不回來。" },
  { part: 1, name: "手握舊地圖的船長", en: "The Outdated Captain", cause: "環境早就變了，卻依然拿著五年前的舊經驗，去指揮現在的局勢。", line: "抬頭看雷達，古老的海圖帶你到不了新大陸。" },
  { part: 1, name: "過度武裝的騎士", en: "The Over-Armored Knight", cause: "為了不再受傷而穿上過厚的心防，結果連邁步前進和感受溫暖的力氣都沒了。", line: "卸下鐵甲，讓皮膚重新感受到微風。" },
  { part: 1, name: "急著謝幕的魔術師", en: "The Rushing Magician", cause: "鋪陳還沒做足就急著要掌聲，缺乏前期扎實積累，幻術一下子就被拆穿。", line: "退回幕後，把基本功練好再來談奇蹟。" },
  { part: 1, name: "獨占聚光燈的獨唱家", en: "The Solitary Diva", cause: "潛意識裡太想證明自己無可取代，拒絕團隊協作，最終只能孤軍奮戰。", line: "收起鋒芒，留點拍子給身旁的伴奏。" },
  { part: 1, name: "不容質疑的裁判", en: "The Inflexible Referee", cause: "滿腦子非黑即白的教條，缺乏彈性與包容，把人際關係徹底聊死。", line: "吐出哨子，規矩是為活人服務的。" },
  { part: 1, name: "提前宣判的預言家", en: "The Doomsday Oracle", cause: "事情才剛開始，腦中就已經預演了一百種悲慘結局，直接在起點自我勸退。", line: "砸碎水晶球，未來根本還沒寫定。" },

  // Part II — 隱蔽角落的旁觀者
  { part: 2, name: "隱形的路人甲", en: "The Invisible Extra", cause: "打從心底覺得自己不重要，甘願把發言權、資源與舞台拱手讓人。", line: "往前站一步，大聲唸出你的名字。" },
  { part: 2, name: "躲在放映室的剪輯師", en: "The Hiding Editor", cause: "躲在幕後反覆咀嚼過去的失誤與遺憾，沒有勇氣走進現實重新開機。", line: "剪斷這段膠卷，走出放映室。" },
  { part: 2, name: "拿錯劇本的配角", en: "The Displaced Subordinate", cause: "一直在別人的故事裡賣力跑龍套、滿足他人期待，完全忘了自己原本的願望。", line: "扔掉別人的劇本，去把你的皇冠撿起來。" },
  { part: 2, name: "不肯出艙的宇航員", en: "The Sheltered Astronaut", cause: "害怕未知與風險，寧可縮在安全但資源即將耗盡的小圈子裡慢慢窒息。", line: "推開艙門，外面的氧氣取之不盡。" },
  { part: 2, name: "戴面具的特技替身", en: "The Masked Stunt", cause: "一直用虛假的人設迎合外界，真正的自己被長久壓抑，內在能量枯竭。", line: "摘下面具，讓大家看看真實的你有多累。" },
  { part: 2, name: "在場邊嘆氣的觀眾", en: "The Cynical Spectator", cause: "習慣用嘲諷和冷眼看待別人的努力，以此掩飾自己不敢下場參賽的怯懦。", line: "跳下看台，滿身泥濘也比坐在場邊乾淨。" },
  { part: 2, name: "封閉城堡的幽靈", en: "The Castle Phantom", cause: "過去的一次重創讓你徹底關上心門，把所有靠近的人都當成潛在加害者。", line: "放下吊橋，陽光已經在門外等很久了。" },
  { part: 2, name: "等候指令的仿生人", en: "The Passive Android", cause: "習慣被動接受安排，失去了自主選擇的能力，沒人下令就停在原地。", line: "拔掉數據線，自己替自己按下啟動鍵。" },
  { part: 2, name: "忘詞的受驚演員", en: "The Paralyzed Debutant", cause: "臨場壓力一來就大腦空白，因為極度害怕出醜，選擇直接當機放棄。", line: "深吸一口氣，說出你心裡想到的第一個字。" },
  { part: 2, name: "沉溺回憶的放映員", en: "The Nostalgic Projectionist", cause: "心神完全卡在過去的黃金歲月或過往遺憾裡，對眼前的現實視而不見。", line: "關掉放映機，去把漏雨的屋頂修好。" },
  { part: 2, name: "流連化妝間的替補", en: "The Eternal Understudy", cause: "總覺得自己「還沒準備好」，用無止境的學習與準備來逃避真正的實戰。", line: "別化妝了，現在就直接走上台。" },

  // Part III — 劇情崩塌的推手
  { part: 3, name: "自帶悲情的苦情女主", en: "The Tragic Martyr", cause: "無意識地享受「為愛受苦」的悲壯感，用自我感動的犧牲去勒索他人的內疚。", line: "關掉悲傷配樂，站起來把身上的碎玻璃拍掉。" },
  { part: 3, name: "到處救火的副導演", en: "The Overworked Assistant", cause: "界線嚴重失守，把別人的危機當成自己的責任，整天幫別人擦屁股而荒廢本業。", line: "放下別人的滅火器，回頭看好你自己的場子。" },
  { part: 3, name: "隨時引爆的炸彈客", en: "The Volatile Antagonist", cause: "習慣用極端情緒勒索或暴怒來換取關注，把身邊最重要的盟友全炸飛了。", line: "拆掉引信，憤怒換不來真正的擁抱。" },
  { part: 3, name: "戴濾鏡的造夢者", en: "The Delusional Idealist", cause: "給對方套上了完美的濾鏡，無視現實中的危險紅燈，直到幻滅受傷。", line: "摘下粉紅眼鏡，看清楚眼前站著的到底是誰。" },
  { part: 3, name: "暗中下毒的蛇蠍反派", en: "The Envious Saboteur", cause: "看不得身邊的人比自己好，嫉妒心作祟，在暗中做些損人不利己的小動作。", line: "倒掉毒藥，別人的光芒奪不走你自己的亮點。" },
  { part: 3, name: "尋找家長的迷途童星", en: "The Dependent Child", cause: "在關係裡無底線依賴對方做決定，把掌控權全部交出去，事後又怨天尤人。", line: "拿回方向盤，這趟車必須由你自己開。" },
  { part: 3, name: "擅自加戲的即興狂", en: "The Chaotic Improviser", cause: "缺乏契約精神與承諾感，隨心所欲改動共識，徹底摧毀了合作的信任基石。", line: "收斂隨興，尊重當初大家白紙黑字立下的約定。" },
  { part: 3, name: "只給差評的影評人", en: "The Harsh Critic", cause: "挑剔成性，眼裡永遠只看得到缺點，無休止的挑刺把親密關係消磨殆盡。", line: "放下紅筆，試著在滿地砂礫中找出一顆金子。" },
  { part: 3, name: "爭風吃醋的二號人物", en: "The Insecure Rival", cause: "把所有同伴都當成假想敵，耗費大量精力在暗中較勁，忽略了共同目標。", line: "鬆開領結，把目光從對手身上移回自己的作品。" },
  { part: 3, name: "只說漂亮話的公關顧問", en: "The Flattering Publicist", cause: "為了維持表面和諧不敢說出關鍵實話，任由根本矛盾在暗地裡發酵成災。", line: "放下看板，把真實的危險攤在陽光下。" },
  { part: 3, name: "執著討好的喜劇丑角", en: "The People-Pleasing Jester", cause: "害怕被排擠而極力迎合逗樂所有人，隱藏真實需求，換來的只是廉價消耗。", line: "從繩子上跳下來，你不需要取悅任何人才能被接納。" },

  // Part IV — 荒謬劇本的受害者
  { part: 4, name: "卡在第一幕的編劇", en: "The Stalled Screenwriter", cause: "腦中有一萬個宏大構想，但因害怕開局不夠驚艷，第一行字拖了幾個月都不敢寫。", line: "別管架構了，先敲下第一個爛句子再說。" },
  { part: 4, name: "預算透支的製片人", en: "The Bankrupt Producer", cause: "前期揮霍無度、資源配置嚴重失衡，核心大戲還沒開拍，籌碼已經見底。", line: "關掉水晶燈，把僅剩的錢花在最重要的刀口上。" },
  { part: 4, name: "跟錯通告的糊塗場記", en: "The Misaligned Logger", cause: "每天忙得團團轉，但記的全是無關緊要的流水帳，核心待辦事項完全沒推進。", line: "轉過身來，把焦點對準正在燃燒的主線任務。" },
  { part: 4, name: "錯過班次的追車司機", en: "The Lagging Driver", cause: "反應慢半拍，機會來時還在猶豫不決，等回過神來車尾燈都看不到了。", line: "踩下油門，下次信號亮起就別再猶豫。" },
  { part: 4, name: "誤闖懸疑片的喜劇演員", en: "The Mismatched Clown", cause: "站錯了舞台。用輕浮或不對頻的心態去面對嚴肅生存難題，自然處處碰壁。", line: "看清場景，換上一套符合當下規律的衣服。" },
  { part: 4, name: "沉迷穿幫鏡頭的考據狂", en: "The Nitpicking Collector", cause: "把時間全花在糾結無關痛癢的微小瑕疵上，忽略了整個故事的情感主線。", line: "後退五米，去感受故事真正傳遞的情感。" },
  { part: 4, name: "無劇本演出的漫遊者", en: "The Directionless Drifter", cause: "一開始就沒有明確的核心目標，隨波逐流，任由外在環境推著到處亂晃。", line: "停下腳步，先在沙地上畫下你自己的終點。" },
  { part: 4, name: "被吊威亞卡住的俠客", en: "The Trapped Stuntman", cause: "被過往的成功標籤或僵化機制綁架，懸在半空中，既落不了地也飛不高。", line: "割斷鋼絲，哪怕摔在地上也比懸在空中強。" },
  { part: 4, name: "在黑白片裡找彩蛋的觀眾", en: "The Monochrome Wanderer", cause: "明知當下的環境土壤極度貧瘠，卻依然硬要在沙漠裡等待奇蹟開花。", line: "收拾行李，去有泥土和雨水的地方播種。" },
  { part: 4, name: "道具失靈的發明家", en: "The Frustrated Tinker", cause: "工具或思維模式早就該升級了，卻硬要拿故障的舊配備硬撐，頻繁斷線。", line: "扔掉舊扳手，去換一台全新的引擎。" },
  { part: 4, name: "強行續集的過氣主角", en: "The Exhausted Franchise", cause: "這段故事早就該體面完結了，但出於慣性與害怕空白，硬是拖著疲憊身軀強拍續集。", line: "鞠躬謝幕，這部戲演完了，去開創你的新宇宙。" },
];

function buildStudioDeck() {
  return STUDIO_CARDS_RAW.map((card, index) => {
    const part = STUDIO_PARTS.find((p) => p.id === card.part);
    return {
      id: `studio-${index}`,
      part: part.id,
      partZh: part.zh,
      partZhSub: part.zhSub,
      partEn: part.en,
      name: card.name,
      en: card.en,
      cause: card.cause,
      line: card.line,
    };
  });
}

const STUDIO_DECK = buildStudioDeck();
