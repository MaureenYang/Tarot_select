(function () {
  const drawButtons = document.querySelectorAll(".draw-btn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const revealAllBtn = document.getElementById("revealAllBtn");
  const resetBtn = document.getElementById("resetBtn");

  const deckStatus = document.getElementById("deckStatus");
  const statusText = document.getElementById("statusText");

  const reading = document.getElementById("reading");
  const spreadGrid = document.getElementById("spreadGrid");

  const detailOverlay = document.getElementById("detailOverlay");
  const cardDetail = document.getElementById("cardDetail");

  let selectedCount = 1;

  drawButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCount = Number(btn.dataset.count);
      drawButtons.forEach((b) => b.classList.toggle("active", b === btn));
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

  function drawReading(count) {
    return shuffleArray(STUDIO_DECK).slice(0, count);
  }

  function buildCardElement(card, positionLabel) {
    const wrapper = document.createElement("div");
    wrapper.className = "studio-card";

    const posEl = document.createElement("div");
    posEl.className = "card-position";
    posEl.textContent = positionLabel;
    wrapper.appendChild(posEl);

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const back = document.createElement("div");
    back.className = "card-face card-back";
    back.innerHTML = `<span class="clapper-icon">🎬</span>`;

    const front = document.createElement("div");
    front.className = "card-face card-front";
    front.innerHTML = `
      <div class="card-part">${card.partZh}<br />${card.partZhSub}</div>
      <div class="card-name">${card.name}</div>
      <div class="card-en">${card.en}</div>
    `;

    inner.appendChild(back);
    inner.appendChild(front);
    wrapper.appendChild(inner);

    wrapper.addEventListener("click", () => {
      if (!wrapper.classList.contains("revealed")) {
        wrapper.classList.add("revealed");
      } else {
        showDetail(card);
      }
    });

    return wrapper;
  }

  function showDetail(card) {
    cardDetail.innerHTML = `
      <button class="detail-close" id="closeDetailBtn" aria-label="關閉">×</button>
      <div class="detail-part">${card.partZh} · ${card.partZhSub}<br />${card.partEn}</div>
      <h3>${card.name}</h3>
      <div class="en-name">${card.en}</div>
      <div class="detail-block cause">
        <div class="detail-label cause">根本原因</div>
        <p>${card.cause}</p>
      </div>
      <div class="detail-block line">
        <div class="detail-label line">破局台詞</div>
        <p>「${card.line}」</p>
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

  function renderReading(cards) {
    spreadGrid.innerHTML = "";
    cards.forEach((card, i) => {
      const label = cards.length === 1 ? "定格" : `第 ${i + 1} 幕`;
      spreadGrid.appendChild(buildCardElement(card, label));
    });

    reading.hidden = false;
    revealAllBtn.disabled = false;
    resetBtn.disabled = false;
  }

  shuffleBtn.addEventListener("click", () => {
    shuffleBtn.disabled = true;
    reading.hidden = true;
    deckStatus.hidden = false;
    statusText.textContent = "洗牌中…";

    setTimeout(() => {
      statusText.textContent = "正在抽牌…";
      const cards = drawReading(selectedCount);

      setTimeout(() => {
        deckStatus.hidden = true;
        shuffleBtn.disabled = false;
        renderReading(cards);
      }, 500);
    }, 900);
  });

  revealAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".studio-card").forEach((el) => el.classList.add("revealed"));
  });

  resetBtn.addEventListener("click", () => {
    reading.hidden = true;
    spreadGrid.innerHTML = "";
    revealAllBtn.disabled = true;
    resetBtn.disabled = true;
  });
})();

(function () {
  const el = document.getElementById("visitCounter");
  const countEl = document.getElementById("visitCount");
  if (!el || !countEl) return;

  fetch("https://api.countapi.xyz/hit/maureenyang-tarot-select/innerstudio")
    .then((res) => res.json())
    .then((data) => {
      countEl.textContent = data.value.toLocaleString("zh-Hant");
      el.hidden = false;
    })
    .catch(() => {});
})();
