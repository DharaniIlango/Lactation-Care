// ==========================================
// 1. DEV TOOLS & RIGHT-CLICK PROTECTION
// ==========================================

// Check the URL for the '?showDev=true' parameter
const urlParams = new URLSearchParams(window.location.search);
const isDevMode = urlParams.get("showDev") === "true";

// Only apply the restrictions if Dev Mode is NOT active
if (!isDevMode) {
  // Disables context menu (right-click)
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Disables F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
  document.onkeydown = (e) => {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey &&
        e.shiftKey &&
        (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
      (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) // Ctrl+U / Ctrl+S
    ) {
      e.preventDefault();
      return false;
    }
  };

  console.log("SYS_STATUS: Security protocols active. Dev tools locked.");
} else {
  console.log("SYS_STATUS: Dev mode unlocked. Welcome back.");
}
