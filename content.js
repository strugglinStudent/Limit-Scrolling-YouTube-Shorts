let shortCount = 0;
let lastPath = "";

function isShorts() {
    return location.pathname.startsWith("/shorts/");
}

function hardBlock() {
    document.documentElement.style.overflow = "hidden";

document.body.innerHTML = `
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style="
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: #0f0f0f;
        z-index: 9999999;
     ">

  <rect width="100" height="100" fill="#0f0f0f"></rect>

  <!-- Title -->
  <text x="50" y="40" text-anchor="middle" fill="#ff5555" font-size="7" font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-weight="700" letter-spacing="0.5">
    STOP SCROLLING
  </text>

  <!-- Question intro -->
  <text x="50" y="48" text-anchor="middle" fill="#bbbbbb" font-size="3.2" font-family="Inter, system-ui, sans-serif" font-weight="500">
    Before you close this tab:
  </text>

  <!-- Reflection question -->
  <text x="50" y="54" text-anchor="middle" fill="#ffffff" font-size="3.6" font-family="Inter, system-ui, sans-serif" font-weight="600">
    What were the last 5 reels about?
  </text>

  <!-- Action -->
  <text x="50" y="66" text-anchor="middle" fill="#ff4444" font-size="4" font-family="Inter, system-ui, sans-serif" font-weight="700">
    CLOSE THIS TAB
  </text>

</svg>
`;
}
function track() {
  chrome.storage.local.get(['enabled'], (res) => {
    const enabled = res.enabled !== false; 
    if (!enabled) return;
    if (!isShorts()) return;

    if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        shortCount++;
        console.log(`You have watched ${shortCount} short(s) so far.`);
        if (shortCount >= 5) {
            hardBlock();
        }
    }
});
}

setInterval(track, 1000);
