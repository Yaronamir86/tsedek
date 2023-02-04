import React, { useState, useEffect } from "react";

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s linear",
        transitionDelay: isVisible ? "0.5s" : "0s",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;


