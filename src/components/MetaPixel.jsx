import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MetaPixel = () => {
  const location = useLocation();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!window.fbq) {
      // Inject the Meta Pixel script
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      // Delay init slightly to ensure fbq is loaded
      setTimeout(() => {
        if (!hasInitialized.current) {
          window.fbq("init", "23870800839271731");
          window.fbq("track", "PageView");
          hasInitialized.current = true;
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if(window.fbq && hasInitialized.current)
        window.fbq("track", "PageView");
  }, [location.pathname]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=23870800839271731&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
};

export default MetaPixel;