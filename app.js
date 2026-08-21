(function () {
  const SPREADS = {
    single: {
      label: "單張指引",
      count: 1,
      layout: "row",
      positions: ["指引"],
    },
    three: {
      label: "過去現在未來",
      count: 3,
      layout: "row",
      positions: ["過去", "現在", "未來"],
    },
    choice: {
      label: "二擇一",
      count: 2,
      layout: "row",
      positions: ["選項 A", "選項 B"],
    },
    celtic: {
      label: "凱爾特十字",
      count: 10,
      layout: "celtic",
      positions: [
        "1 · 現況",
        "2 · 阻礙／助力",
        "3 · 深層基礎",
        "4 · 近期過去",
        "5 · 可能結果",
        "6 · 近期未來",
        "7 · 自我態度",
        "8 · 外在影響",
        "9 · 希望與恐懼",
        "10 · 最終結果",
      ],
    },
  };

  const spreadButtons = document.querySelectorAll(".spread-btn");
  const allowReversedCheckbox = document.getElementById("allowReversed");
  const includeBaseCheckbox = document.getElementById("includeBase");

  const shuffleBtn = document.getElementById("shuffleBtn");
  const revealAllBtn = document.getElementById("revealAllBtn");
  const resetBtn = document.getElementById("resetBtn");

  const deckStatus = document.getElementById("deckStatus");
  const statusText = document.getElementById("statusText");

  const reading = document.getElementById("reading");
  const spreadGrid = document.getElementById("spreadGrid");
  const baseBlock = document.getElementById("baseBlock");
  const baseGrid = document.getElementById("baseGrid");

  const detailOverlay = document.getElementById("detailOverlay");
  const cardDetail = document.getElementById("cardDetail");

  let selectedSpreadKey = "three";

  spreadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedSpreadKey = btn.dataset.key;
      spreadButtons.forEach((b) => b.classList.toggle("active", b === btn));
    });
  });

  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function drawReading(spread, allowReversed, includeBase) {
    const shuffled = shuffleArray(FULL_DECK);
    const spreadCards = shuffled.slice(0, spread.count).map((card) => ({
      card,
      reversed: allowReversed ? Math.random() < 0.5 : false,
    }));

    let baseCard = null;
    if (includeBase) {
      const base = shuffled[spread.count];
      baseCard = {
        card: base,
        reversed: allowReversed ? Math.random() < 0.5 : false,
      };
    }

    return { spreadCards, baseCard };
  }

  function buildCardElement(entry, positionLabel, extraClass) {
    const wrapper = document.createElement("div");
    wrapper.className = "tarot-card" + (entry.reversed ? " reversed" : "") + (extraClass ? " " + extraClass : "");

    const posEl = document.createElement("div");
    posEl.className = "card-position";
    posEl.textContent = positionLabel;
    wrapper.appendChild(posEl);

    const scene = document.createElement("div");
    scene.className = "card-scene";

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const back = document.createElement("div");
    back.className = "card-face card-back";

    const front = document.createElement("div");
    front.className = "card-face card-front";
    front.innerHTML = `
      <div class="card-name">${entry.card.name}</div>
      <div class="card-en">${entry.card.en}</div>
      <div class="orientation-badge ${entry.reversed ? "reversed" : "upright"}">
        ${entry.reversed ? "逆位" : "正位"}
      </div>
    `;

    inner.appendChild(back);
    inner.appendChild(front);
    scene.appendChild(inner);
    wrapper.appendChild(scene);

    wrapper.addEventListener("click", () => {
      if (!wrapper.classList.contains("revealed")) {
        wrapper.classList.add("revealed");
      } else {
        showDetail(entry);
      }
    });

    return wrapper;
  }

  function showDetail(entry) {
    const meaning = entry.reversed ? entry.card.reversed : entry.card.upright;
    cardDetail.innerHTML = `
      <button class="close-btn" id="closeDetailBtn" aria-label="關閉">×</button>
      <h3>${entry.card.name} ${entry.reversed ? "（逆位）" : "（正位）"}</h3>
      <div class="en-name">${entry.card.en}</div>
      <div class="meaning-block">
        <div class="meaning-label ${entry.reversed ? "reversed" : "upright"}">
          ${entry.reversed ? "逆位牌義" : "正位牌義"}
        </div>
        <p>${meaning}</p>
      </div>
    `;
    detailOverlay.hidden = false;
    document.getElementById("closeDetailBtn").addEventListener("click", () => {
      detailOverlay.hidden = true;
    });
  }

  detailOverlay.addEventListener("click", (e) => {
    if (e.target === detailOverlay) detailOverlay.hidden = true;
  });

  function renderRowLayout(spreadCards, positions) {
    spreadGrid.className = "card-grid";
    spreadCards.forEach((entry, i) => {
      spreadGrid.appendChild(buildCardElement(entry, positions[i]));
    });
  }

  function renderCelticLayout(spreadCards, positions) {
    spreadGrid.className = "celtic-layout";

    const cross = document.createElement("div");
    cross.className = "celtic-cross";

    const crossCenter = document.createElement("div");
    crossCenter.className = "cross-center";
    crossCenter.appendChild(buildCardElement(spreadCards[0], positions[0], "pos-present"));
    crossCenter.appendChild(buildCardElement(spreadCards[1], positions[1], "pos-challenge"));

    cross.appendChild(buildCardElement(spreadCards[2], positions[2], "pos-found"));
    cross.appendChild(buildCardElement(spreadCards[3], positions[3], "pos-past"));
    cross.appendChild(buildCardElement(spreadCards[4], positions[4], "pos-crown"));
    cross.appendChild(buildCardElement(spreadCards[5], positions[5], "pos-future"));
    cross.appendChild(crossCenter);

    const staff = document.createElement("div");
    staff.className = "celtic-staff";
    [9, 8, 7, 6].forEach((idx) => {
      staff.appendChild(buildCardElement(spreadCards[idx], positions[idx]));
    });

    spreadGrid.appendChild(cross);
    spreadGrid.appendChild(staff);
  }

  function renderReading(spread, readingData) {
    spreadGrid.innerHTML = "";
    baseGrid.innerHTML = "";

    if (spread.layout === "celtic") {
      renderCelticLayout(readingData.spreadCards, spread.positions);
    } else {
      renderRowLayout(readingData.spreadCards, spread.positions);
    }

    if (readingData.baseCard) {
      baseBlock.hidden = false;
      baseGrid.appendChild(buildCardElement(readingData.baseCard, "底牌"));
    } else {
      baseBlock.hidden = true;
    }

    reading.hidden = false;
    revealAllBtn.disabled = false;
    resetBtn.disabled = false;
  }

  shuffleBtn.addEventListener("click", () => {
    const spread = SPREADS[selectedSpreadKey];
    const allowReversed = allowReversedCheckbox.checked;
    const includeBase = includeBaseCheckbox.checked;

    shuffleBtn.disabled = true;
    reading.hidden = true;
    deckStatus.hidden = false;
    statusText.textContent = "洗牌中…";

    setTimeout(() => {
      statusText.textContent = "正在抽牌…";
      const readingData = drawReading(spread, allowReversed, includeBase);

      setTimeout(() => {
        deckStatus.hidden = true;
        shuffleBtn.disabled = false;
        renderReading(spread, readingData);
      }, 500);
    }, 900);
  });

  revealAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".tarot-card").forEach((el) => {
      el.classList.add("revealed");
    });
  });

  resetBtn.addEventListener("click", () => {
    reading.hidden = true;
    spreadGrid.innerHTML = "";
    baseGrid.innerHTML = "";
    revealAllBtn.disabled = true;
    resetBtn.disabled = true;
  });
})();
