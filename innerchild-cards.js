// 未完的童年碎片（Fragments of an Unfinished Childhood）牌組資料：44 張

const CHILD_PARTS = [
  { id: 1, zh: "遺棄與分離創傷", zhSub: "安全感與依附篇", en: "Abandonment & Separation Wounds (Safety & Attachment)" },
  { id: 2, zh: "價值與羞恥創傷", zhSub: "自我認同與配得感篇", en: "Worth & Shame Wounds (Self-Identity & Deservingness)" },
  { id: 3, zh: "信任與背叛創傷", zhSub: "人際互動與防禦機制篇", en: "Trust & Betrayal Wounds (Interpersonal Dynamics & Defense Mechanisms)" },
  { id: 4, zh: "自主與生命力閹割", zhSub: "意志、憤怒與創造力篇", en: "Autonomy & Vitality Wounds (Will, Anger & Creativity)" },
];

const CHILD_CARDS_RAW = [
  // Part I — 遺棄與分離創傷
  { part: 1, name: "害怕被丟下的孤兒", en: "The Abandoned Child", heal: "別怕，現在的你已經長大，我永遠不會丟下你一個人轉身離開。", essence: "害怕被丟下的恐懼，讓你只要看見別人轉身，就以為全世界都在離你而去。" },
  { part: 1, name: "隨時準備撤離的候鳥", en: "The Detached Wanderer", heal: "把行李箱放下吧，這裡很安全，你值得擁有一處能安心扎根的港灣。", essence: "預設所有溫暖終將消散，在別人離開之前，你早已在心裡提前撤離。" },
  { part: 1, name: "過度懂事的早熟小大人", en: "The Parentified Child", heal: "你不用再替所有人撐傘了，現在換我來好好照顧你、心疼你。", essence: "被迫過早懂事，讓你習慣了當別人的避風港，卻無處安放自己的脆弱。" },
  { part: 1, name: "被關在門外的流浪兒", en: "The Locked-Out Child", heal: "犯錯並不代表你不值得被愛，這扇回家的門永遠為你敞開。", essence: "犯錯就會被放逐的恐懼，使你成年後一遇到衝突就立刻低頭道歉以求自保。" },
  { part: 1, name: "緊抓浮木的溺水者", en: "The Clinging Infant", heal: "你內在的力量足夠托起自己，放鬆雙手，你不會沉下去的。", essence: "早期情感餵養的極度匱乏，化為親密關係中令人窒息的過度依附。" },
  { part: 1, name: "被忽視的隱形人", en: "The Unseen Shadow", heal: "我一直都看得見你，你的感受很重要，你的存在本身就閃閃發光。", essence: "為了不招惹麻煩而隱形，長大後習慣壓抑自身需求，不敢爭取任何光芒。" },
  { part: 1, name: "條件式被愛的模範生", en: "The Conditionally Loved", heal: "哪怕你今天什麼事都沒做好，你依然是一個無比珍貴、值得被愛的人。", essence: "誤以為只有優秀才配得到愛，陷入停不下來的成就焦慮與自我奴役。" },
  { part: 1, name: "替代性代罪羔羊", en: "The Scapegoat Strawman", heal: "那些大人的混亂與不幸從來都不是你的錯，把它們全部還給過去吧。", essence: "承接了整個家庭的不幸，內化了「一切糟糕都是我的錯」的毒性羞恥。" },
  { part: 1, name: "被過度侵入的洋娃娃", en: "The Enmeshed Puppet", heal: "你有權利擁有屬於自己的界線，保護好自己，並不會傷害到任何人。", essence: "個人界線被完全吞噬，以至於長大後對真正的親近產生本能的恐慌與窒息感。" },
  { part: 1, name: "無法哀悼的失落者", en: "The Unmourned Griever", heal: "想哭就放聲哭出來吧，這份遲到許久的悲傷，我陪你一起慢慢走過。", essence: "未被允許哀悼的重大失落，將真實情感徹底凍結，化為長期的內在空洞。" },
  { part: 1, name: "隨時待命的排雷兵", en: "The Walking-on-Eggshells Child", heal: "警報已經解除了，深呼吸，你現在再也不需要看任何人的臉色過日子。", essence: "為了應對喜怒無常的照顧者，訓練出病態的察言觀色與神經高度緊繃。" },

  // Part II — 價值與羞恥創傷
  { part: 2, name: "毒性羞恥的烙印", en: "The Shamed Soul", heal: "你身上沒有任何洗不掉的污點，你原本的樣子就乾淨且完整。", essence: "深入骨髓的羞恥感，讓你深信自己本質是有缺陷的，無意識地推開所有好運。" },
  { part: 2, name: "被拿來比較的次品", en: "The Defective Second", heal: "你不需要成為別人的複製品，這世上只有一個你，這就是你最大的底氣。", essence: "長期被拿來比較的陰影，讓你成年後始終活在對同儕的嫉妒與自卑夾縫中。" },
  { part: 2, name: "被嘲弄的夢想家", en: "The Mocked Dreamer", heal: "大膽去渴望你真心想要的事物吧，你的夢想比世俗的嘲弄珍貴千百倍。", essence: "熱忱曾被無情嘲弄，為了防止再次受傷，在付諸行動前先狠狠嘲笑自己的夢想。" },
  { part: 2, name: "不被允許長大的彼得潘", en: "The Infantile Captive", heal: "相信你自己的雙手，你已經長出了足夠的羽翼去應對外面的世界。", essence: "過度保護剝奪了獨立的能力，面對成年世界的重大抉擇時陷入癱瘓與退縮。" },
  { part: 2, name: "身體羞恥的禁錮", en: "The Body-Shamed Child", heal: "謝謝這具身體一路替你擋下風雨，它是靈魂最溫暖的家，請溫柔待它。", essence: "肉體與外貌遭受過嚴厲羞辱，長大後無法接納自己的身體，抗拒真實的親密。" },
  { part: 2, name: "不可信任的直覺", en: "The Gaslighted Child", heal: "你的感覺完全是正確的，相信你心底的第一反應，沒有人能再扭曲你的真實。", essence: "感受與記憶被長年否認（煤氣燈效應），讓你徹底喪失對自身直覺與判斷的信任。" },
  { part: 2, name: "被剝奪發言權的啞巴", en: "The Silenced Voice", heal: "把你想說的話大膽講出來，這一次，全世界都會耐心地聽你說完。", essence: "發聲曾遭嚴厲打壓，面對權威與衝突時喉嚨本能收緊、大腦一片空白。" },
  { part: 2, name: "必須完美的表演者", en: "The Staged Prodigy", heal: "把沉重的面具摘下來歇歇吧，即使展露狼狽，你依然被深深愛著。", essence: "扮演完美的工具人，深怕露出一絲脆弱與失誤就會失去被接納的資格。" },
  { part: 2, name: "貧窮與匱乏的烙印", en: "The Scarcity Wound", heal: "你配得上世間一切美好的事物，把溫暖與豐盛毫無愧疚地留給自己。", essence: "匱乏環境留下的貧窮創傷，即便物質充裕，花錢在自己身上依然充滿罪惡感。" },
  { part: 2, name: "被否定的情緒瘋子", en: "The “Crazy” Feeler", heal: "有情緒是再正常不過的事，每一種起伏都在證明你是一個鮮活的人。", essence: "正常的情感流露被污名化為瘋癲與失控，導致長大後極度厭惡自己的情緒波動。" },
  { part: 2, name: "不被認可的局外人", en: "The Alienated Outcast", heal: "你的獨特不是錯誤，世界很大，終會有一個真正懂得並擁抱你的角落。", essence: "在原生家庭中被視為異類，深植「世上沒有任何地方真正屬於我」的漂泊感。" },

  // Part III — 信任與背叛創傷
  { part: 3, name: "被打破的承諾碎片", en: "The Broken Promise", heal: "別人沒能兌現的承諾，這一次，由你自己溫定地給予自己。", essence: "承諾被反覆踐踏的記憶，使你對所有善意與約定抱持本能的冷眼與懷疑。" },
  { part: 3, name: "秘密的沉重守護者", en: "The Secret Keeper", heal: "那些沉重發霉的往事不用再一個人守著了，攤開在陽光下，它就傷不到你。", essence: "被迫背負家庭陰暗秘密的重壓，使你用厚重的神祕感將自己與世界完全隔絕。" },
  { part: 3, name: "被出賣的真心", en: "The Betrayed Confidant", heal: "給出真心不是你的愚蠢，這份純粹的善良，永遠是你身上最耀眼的光。", essence: "真心曾被當成武器反噬，從此對親密關係築起不可跨越的高牆，絕不示弱。" },
  { part: 3, name: "暴力的恐懼殘影", en: "The Cowering Witness", heal: "風暴早就已經過去了，張開眼睛看看身邊，你現在待在最安全的房間裡。", essence: "目睹暴力留下的驚駭殘影，對任何大聲說話、摔東西或緊繃氣氛產生生理性應激。" },
  { part: 3, name: "被剝奪的受害者主權", en: "The Denied Victim", heal: "遭受傷害不是你的錯，你的憤怒無比正當，你有權利保護自己的尊嚴。", essence: "受害後反被歸咎責任，養成遭遇不公時第一反應先檢討自己、壓抑怒火的慣性。" },
  { part: 3, name: "情感敲詐的俘虜", en: "The Blackmailed Hostage", heal: "你不欠任何人的人生，收下善意吧，純粹的愛從來不會附帶償還的帳單。", essence: "長期遭受情感敲詐，對他人的幫助與禮物極度恐慌，深怕背上還不清的債務。" },
  { part: 3, name: "被迫選邊站的裁判", en: "The Divided Loyalty", heal: "你只是個孩子，不需要去調解大人的戰爭，放下天平，只做你自己。", essence: "被迫在父母陣營中選邊站的拉扯，長大後成了害怕衝突、耗盡心力的和事佬。" },
  { part: 3, name: "被物化與交易的工具", en: "The Traded Commodity", heal: "你不是任何人的籌碼或裝飾品，你的靈魂本身就是無價的珍寶。", essence: "自身價值只在於能為家庭換取好處，導致難以建立純粹、非功利的情感連結。" },
  { part: 3, name: "雙重標準下的受困者", en: "The Double-Bind Prisoner", heal: "別再為滿足荒謬的標準而糾結，只要跟著自己的心走，你就不會選錯。", essence: "「做也挨罵、不做也挨罵」的矛盾教養，化為行動前嚴重的決策癱瘓與猶豫。" },
  { part: 3, name: "染上污泥的白紗裙", en: "The Soiled Tulle", heal: "那些外在的侵犯從未弄髒你靈魂的純淨，你始終美麗如初。", essence: "早期界線被粗暴侵犯的性或身體創傷，在親密關係中分裂為麻木或極端抗拒。" },
  { part: 3, name: "未被保護的弱者", en: "The Unprotected Child", heal: "現在換我來當你的盾牌，把滿身的尖刺收起來吧，你不需要隨時作戰。", essence: "遭遇霸凌時背後空無一人的絕望，迫使你長出過度防衛的尖刺與攻擊性外殼。" },

  // Part IV — 自主與生命力閹割
  { part: 4, name: "被折斷翅膀的鳥", en: "The Clipped Wings", heal: "翅膀上的傷口已經癒合，天空那麼遼闊，放膽去飛向你渴望的高度吧。", essence: "獨立意志曾遭嚴厲打壓，習慣維持低空飛行，面對機遇反而感到恐慌。" },
  { part: 4, name: "封死閥門的高壓鍋", en: "The Welded Boiler", heal: "允許那股怒氣說話，保護自己的邊界需要這份熱量，你不必永遠溫順。", essence: "正當憤怒被徹底閹割，轉化為對內的自我攻擊、慢性拖延與自體免疫內耗。" },
  { part: 4, name: "停擺在發條裡的木馬", en: "The Frozen Carousel", heal: "去玩耍、去大笑、去浪費時光吧，快樂本身就是活著最重要的意義。", essence: "玩耍與快樂被視為罪惡，成年後一停下來放鬆就產生深重的罪惡感與不安。" },
  { part: 4, name: "依序上緊發條的偶人", en: "The Clockwork Minion", heal: "停下跟隨別人的腳步，轉個彎，去走一條完全屬於你自己的小徑。", essence: "唯有順從才能換取生存，徹底喪失了拒絕他人的能力，習慣性委曲求全。" },
  { part: 4, name: "未曾剪斷的金色臍帶", en: "The Unsevered Cord", heal: "親手剪斷那根依賴的繩索吧，走出去，去過屬於你自己的獨立人生。", essence: "父母在精神層面拒絕放手，導致在人生重大決策上始終無法真正自主斷奶。" },
  { part: 4, name: "扣上鐵罩的油燈", en: "The Smothered Flame", heal: "把你的奇思妙想全部釋放出來，你的靈感與才華，正等著照亮這片天地。", essence: "獨創性與靈氣曾被斥為無用，讓你嚴守平庸常軌，對跳出框架的想法本能壓制。" },
  { part: 4, name: "刻著誡條的懺悔室", en: "The Endless Confession", heal: "內在法官的審判在此刻撤銷，走出告解室，你本就無罪一身輕。", essence: "嚴苛道德環境的規訓，在心中養出了一位殘酷的法官，日夜不停地自我審查。" },
  { part: 4, name: "藏在背後的金獎牌", en: "The Hidden Trophy", heal: "大方地為自己的優秀喝采吧，你的光芒值得被全世界看見與讚美。", essence: "展現好勝心曾遭道德打壓，在關鍵競爭中習慣性退讓，事後陷入委屈與內耗。" },
  { part: 4, name: "承載他人姓名的墓碑", en: "The Borrowed Epitaph", heal: "把長輩未完成的遺憾放下吧，你只需要為你自己的人生劇本負起責任。", essence: "背負著父母未竟的人生遺憾而活，功成名就卻依然感到靈魂深處的空洞與迷失。" },
  { part: 4, name: "裝進玻璃瓶的閃電", en: "The Bottled Lightning", heal: "釋放你體內充沛的熱情吧，這份蓬勃的生命力，是宇宙送給你的大禮。", essence: "充沛的生命熱情曾被視為調皮添亂，長大後習慣用冷漠與自律來壓制活力。" },
  { part: 4, name: "畫滿笑臉的送葬人", en: "The Laughing Mourner", heal: "在愛你的人面前不用再硬撐著搞笑了，收起笑臉，讓我好好抱抱那個難過的你。", essence: "沉重家庭氣氛逼出的假面，習慣用搞笑來化解一切沉重，無法在任何人面前展露崩潰。" },
];

function buildChildDeck() {
  return CHILD_CARDS_RAW.map((card, index) => {
    const part = CHILD_PARTS.find((p) => p.id === card.part);
    return {
      id: `child-${index}`,
      part: part.id,
      partZh: part.zh,
      partZhSub: part.zhSub,
      partEn: part.en,
      name: card.name,
      en: card.en,
      heal: card.heal,
      essence: card.essence,
    };
  });
}

const CHILD_DECK = buildChildDeck();
