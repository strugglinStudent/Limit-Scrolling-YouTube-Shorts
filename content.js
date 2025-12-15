let shortCount = 0;
let lastPath = "";

function isShorts() {
    return location.pathname.startsWith("/shorts/");
}

function hardBlock() {
    document.documentElement.style.overflow = "hidden";

    document.body.innerHTML = `
        <svg viewBox="0 0 100 100"
             preserveAspectRatio="xMidYMid slice"
             style="
                position: fixed;
                inset: 0;
                width: 100vw;
                height: 100vh;
                background: #0f0f0f;
                z-index: 9999999;
             ">
            <rect width="100" height="100" fill="#0f0f0f"/>
            <text x="50" y="45"
                  text-anchor="middle"
                  fill="#ffffff"
                  font-size="6"
                  font-family="monospace">
                STOP SCROLLING
            </text>
            <text x="50" y="55"
                  text-anchor="middle"
                  fill="#ff4444"
                  font-size="4"
                  font-family="monospace">
                CLOSE THIS TAB
            </text>
            <text x="50" y="45"
                text-anchor="middle"
                fill="#ffffff"
                font-size="4"
                font-family="monospace">
                Before you close this tab: what were the last 5 reels about?
            </text>
        </svg>
    `;
}

function track() {
    if (!isShorts()) return;

    if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        shortCount++;

        if (shortCount >= 5) {
            hardBlock();
        }
    }
}

setInterval(track, 800);
