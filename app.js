(function () {
  const cardCountInput = document.getElementById("cardCount");
  const decreaseBtn = document.getElementById("decreaseBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const presetButtons = document.querySelectorAll(".preset-btn");
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

  const MAX_CARDS = FULL_DECK.length - 1; // leave room for base card

  function clampCount(value) {
    let n = parseInt(value, 10);
    if (isNaN(n)) n = 1;
    return Math.min(Math.max(n, 1), MAX_CARDS);
  }

  cardCountInput.addEventListener("change", () => {
    cardCountInput.value = clampCount(cardCountInput.value);
  });

  decreaseBtn.addEventListener("click", () => {
    cardCountInput.value = clampCount(Number(cardCountInput.value) - 1);
  });

  increaseBtn.addEventListener("click", () => {
    cardCountInput.value = clampCount(Number(cardCountInput.value) + 1);
  });

  presetButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cardCountInput.value = clampCount(btn.dataset.count);
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

  function drawReading(count, allowReversed, includeBase) {
    const shuffled = shuffleArray(FULL_DECK);
    const spreadCards = shuffled.slice(0, count).map((card) => ({
      card,
      reversed: allowReversed ? Math.random() < 0.5 : false,
    }));

    let baseCard = null;
    if (includeBase) {
      const base = shuffled[count];
      baseCard = {
        card: base,
        reversed: allowReversed ? Math.random() < 0.5 : false,
      };
    }

    return { spreadCards, baseCard };
  }

  function buildCardElement(entry, positionLabel) {
    const wrapper = document.createElement("div");
    wrapper.className = "tarot-card" + (entry.reversed ? " reversed" : "");

    const posEl = document.createElement("div");
    posEl.className = "card-position";
    posEl.textContent = positionLabel;
    wrapper.appendChild(posEl);

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
    wrapper.appendChild(inner);

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

  let currentReading = null;

  function renderReading(readingData) {
    spreadGrid.innerHTML = "";
    baseGrid.innerHTML = "";

    readingData.spreadCards.forEach((entry, i) => {
      spreadGrid.appendChild(buildCardElement(entry, `第 ${i + 1} 張`));
    });

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
    const count = clampCount(cardCountInput.value);
    const allowReversed = allowReversedCheckbox.checked;
    const includeBase = includeBaseCheckbox.checked;

    shuffleBtn.disabled = true;
    reading.hidden = true;
    deckStatus.hidden = false;
    statusText.textContent = "洗牌中…";

    setTimeout(() => {
      statusText.textContent = "正在抽牌…";
      currentReading = drawReading(count, allowReversed, includeBase);

      setTimeout(() => {
        deckStatus.hidden = true;
        shuffleBtn.disabled = false;
        renderReading(currentReading);
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
    currentReading = null;
  });
})();
