import React, { useEffect, useState } from "react";

function isIos() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipod/.test(ua) || (ua.includes("macintosh") && "ontouchend" in document);
}

function isInStandaloneMode() {
  return "standalone" in window.navigator && window.navigator.standalone;
}

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showIosBanner, setShowIosBanner] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    if (isIos() && !isInStandaloneMode()) {
      setShowIosBanner(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <>
      {showInstallButton && (
        <button
          onClick={handleInstallClick}
          className="button button-cyan install-button"
        >
          📲 Install App
        </button>
      )}

      {showIosBanner && (
        <div className="ios-banner">
          <p>
            👉 On iPhone/iPad: tap <strong>Share</strong> then{" "}
            <strong>Add to Home Screen</strong>
          </p>
        </div>
      )}
    </>
  );
}
