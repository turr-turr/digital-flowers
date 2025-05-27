function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const loginButton = document.querySelector("button");
  const emojiLoader = document.getElementById("emoji-loader");
  const emojiSpans = emojiLoader.querySelectorAll("span");
  const sound = document.getElementById("ohyeah-sound");

  if (user === "Hrithika" && pass === "shonubabu") {
    // Change button text
    loginButton.textContent = "Je Baat!";

    // Show emoji animation
    emojiLoader.classList.remove("hidden");
    setTimeout(() => emojiSpans[0].classList.remove("hidden"), 400);
    setTimeout(() => emojiSpans[1].classList.remove("hidden"), 800);
    setTimeout(() => emojiSpans[2].classList.remove("hidden"), 1200);

    // Play sound
    sound.play();

    // After emojis, show video screen with fade
    setTimeout(() => {
      document.getElementById("login-screen").style.display = "none";
      const animScreen = document.getElementById("animation-screen");
      animScreen.classList.remove("hidden");

  // Play background music
  const bgMusic = document.getElementById("bg-music");
  bgMusic.play();

      // Trigger fade-out of black overlay
      const overlay = document.querySelector(".video-overlay");
      setTimeout(() => {
        overlay.style.opacity = "0";
      }, 100); // slight delay before transition begins

      // Optional: remove overlay after transition (cleanup)
      setTimeout(() => {
        overlay.remove();
      }, 4100); // match 4s fade duration + 100ms
    }, 3600); // wait 1.8s after last emoji
  } else {
    document.getElementById("poop-sound").play();
    Swal.fire({
      icon: 'error',
      title: 'Incorrect hai Dumbo! Try Again💖',
      confirmButtonColor: '#ff69b4'
    });
  }
}
const canvas = document.getElementById("firefly-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const fireflies = [];

function createFirefly(x, y) {
  fireflies.push({
  x,
  y,
  r: 0,
  maxR: 3 + Math.random() * 2,  // smaller firefly glow
  alpha: 1
});
}

function drawFireflies() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireflies.forEach((f, i) => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    const hue = 40 + Math.random() * 20; // 40–60 range (yellow to orange)
    ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${f.alpha * 0.6})`;
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 3;
    ctx.fill();
    f.r += 0.5;
    f.alpha -= 0.01;

    if (f.alpha <= 0) fireflies.splice(i, 1);
  });
  requestAnimationFrame(drawFireflies);
}

drawFireflies();

document.addEventListener("click", (e) => {
  createFirefly(e.clientX, e.clientY);
});

document.addEventListener("touchstart", (e) => {
  for (let touch of e.touches) {
    createFirefly(touch.clientX, touch.clientY);
  }
});
