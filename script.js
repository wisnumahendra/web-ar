window.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("#marker");
  const model = document.querySelector("#cokelat-model");
  const uiOverlay = document.getElementById("ui-overlay");

  const btnInfo = document.getElementById("btn-info");
  const btnKandungan = document.getElementById("btn-kandungan");
  const btnProses = document.getElementById("btn-proses");

  const boxInfo = document.getElementById("info-box");
  const boxKandungan = document.getElementById("box-kandungan");
  const boxProses = document.getElementById("box-proses");

  const kembaliBtns = document.querySelectorAll(".btn-kembali");

  function hideAllInfoBoxes() {
    [boxInfo, boxKandungan, boxProses].forEach(box => box?.classList.remove("show"));
  }

  function showInfoBox(box) {
    hideAllInfoBoxes();
    box?.classList.add("show");
  }

  if (marker) {
    marker.addEventListener("markerFound", () => {
      uiOverlay.style.display = "flex";
      model.setAttribute("visible", true);
      model.emit("show-model");
    });

    marker.addEventListener("markerLost", () => {
      uiOverlay.style.display = "none";
      hideAllInfoBoxes();
      model.emit("hide-model");
    });
  }

  btnInfo?.addEventListener("click", () => showInfoBox(boxInfo));
  btnKandungan?.addEventListener("click", () => showInfoBox(boxKandungan));
  btnProses?.addEventListener("click", () => showInfoBox(boxProses));

  kembaliBtns.forEach(btn => {
    btn.addEventListener("click", () => hideAllInfoBoxes());
  });

    // Add hover effects and click animations
    document.querySelectorAll('.ar-btn').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
      });
      
      button.addEventListener('click', () => {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
});
