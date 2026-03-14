import React, { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 340;
const CARD_GAP = 24;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;

function Review() {
  const reviews = [
    { id: 1, name: "Amit & Priya", text: "We found each other through this platform. The experience was smooth and trustworthy. Highly recommended!", location: "Pune", photo: "https://imgs.search.brave.com/di2zHu3-cSS5Osm8MJjs1GFebJvVKnGlJ4MKfkeQ5Tg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/bmRpYW4tY291cGxl/LWNlbGVicmF0aW5n/LXByb3Bvc2UtZGF5/LWJ5LWJlaW5nLXJv/bWFudGljLXdpdGgt/ZWFjaC1vdGhlcl8y/My0yMTUxMTEwOTI0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA" },
    { id: 2, name: "Rahul & Sneha", text: "Very easy to use and genuine profiles. We are thankful for this wonderful service.", location: "Mumbai", photo: "https://imgs.search.brave.com/nnv-Rql470TpnWx_jtBysZtS_NYSSW8jplIBbGUnyAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzgv/ODA4Lzk0NS9zbWFs/bC9haS1nZW5lcmF0/ZWQtaGFwcHktYmVh/dXRpZnVsLWFuZC1p/bmRpYW4tY291cGxl/LXNtaWxpbmctbG9v/a2luZy1hdC1jYW1l/cmEtd2hpbGUtc3Rh/bmRpbmctYWdhaW5z/dC1ibHVycmVkLWlu/ZGlhbi1mcmVlLXBo/b3RvLmpwZWc" },
    { id: 3, name: "Kunal & Riya", text: "A modern and simple matrimony website. Helped us find our perfect match.", location: "Nagpur", photo: "https://imgs.search.brave.com/4NJhAnGx4aarhbPTCjq76S9xwnnkaJ6XFOCo7ce4i7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUzLzk2Ni9zbWFs/bC9pbmRpYW4tY291/cGxlLWluLXRyYWRp/dGlvbmFsLWV0aG5p/Yy1jbG90aGVzLXRh/bGtpbmctZHVyaW5n/LWEtZmVzdGl2YWwt/b3Zlci1ib2tlaC1m/ZXN0aXZlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
    { id: 4, name: "Rohan & Meera", text: "The profiles were genuine and the process was very smooth. We got married last year!", location: "Delhi", photo: "https://imgs.search.brave.com/4NJhAnGx4aarhbPTCjq76S9xwnnkaJ6XFOCo7ce4i7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUzLzk2Ni9zbWFs/bC9pbmRpYW4tY291/cGxlLWluLXRyYWRp/dGlvbmFsLWV0aG5p/Yy1jbG90aGVzLXRh/bGtpbmctZHVyaW5n/LWEtZmVzdGl2YWwt/b3Zlci1ib2tlaC1m/ZXN0aXZlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
    { id: 5, name: "Arjun & Divya", text: "Best matrimony platform we came across. Simple, trustworthy, and effective.", location: "Hyderabad", photo: "https://imgs.search.brave.com/4NJhAnGx4aarhbPTCjq76S9xwnnkaJ6XFOCo7ce4i7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUzLzk2Ni9zbWFs/bC9pbmRpYW4tY291/cGxlLWluLXRyYWRp/dGlvbmFsLWV0aG5p/Yy1jbG90aGVzLXRh/bGtpbmctZHVyaW5n/LWEtZmVzdGl2YWwt/b3Zlci1ib2tlaC1m/ZXN0aXZlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
    { id: 6, name: "Siddharth & Kajal", text: "Found the love of my life here. The team was very supportive throughout.", location: "Jaipur", photo: "https://imgs.search.brave.com/4NJhAnGx4aarhbPTCjq76S9xwnnkaJ6XFOCo7ce4i7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUzLzk2Ni9zbWFs/bC9pbmRpYW4tY291/cGxlLWluLXRyYWRp/dGlvbmFsLWV0aG5p/Yy1jbG90aGVzLXRh/bGtpbmctZHVyaW5n/LWEtZmVzdGl2YWwt/b3Zlci1ib2tlaC1m/ZXN0aXZlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
    { id: 7, name: "Nikhil & Pooja", text: "We were skeptical at first but this platform exceeded all expectations. Highly recommend!", location: "Bangalore", photo: "https://imgs.search.brave.com/4NJhAnGx4aarhbPTCjq76S9xwnnkaJ6XFOCo7ce4i7M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NzUzLzk2Ni9zbWFs/bC9pbmRpYW4tY291/cGxlLWluLXRyYWRp/dGlvbmFsLWV0aG5p/Yy1jbG90aGVzLXRh/bGtpbmctZHVyaW5n/LWEtZmVzdGl2YWwt/b3Zlci1ib2tlaC1m/ZXN0aXZlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, reviews.length]);

  const translateX = `calc(50% - ${activeIndex * CARD_TOTAL + CARD_WIDTH / 2}px)`;

  return (
    <section className="bg-[#f5f0eb] py-24 border-t border-amber-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Real Stories</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Success Stories</h2>
          <p className="text-gray-500 mt-4 text-base">Real couples who found their life partners with us.</p>
        </div>

        <div className="overflow-hidden py-10">
          <div
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(${translateX})`,
              transition: "transform 0.8s cubic-bezier(0.34,1.2,0.64,1)",
              willChange: "transform",
            }}
          >
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isAdjacent = Math.abs(index - activeIndex) === 1;

              return (
                <div
                  key={review.id}
                  onMouseEnter={() => { setActiveIndex(index); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                  style={{
                    minWidth: `${CARD_WIDTH}px`,
                    width: `${CARD_WIDTH}px`,
                    transform: isActive
                      ? "scale(1.1) translateY(-18px)"
                      : isAdjacent
                      ? "scale(1.02) translateY(-4px)"
                      : "scale(0.92) translateY(0px)",
                    opacity: isActive ? 1 : isAdjacent ? 0.72 : 0.45,
                    transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease, box-shadow 0.4s ease",
                    boxShadow: isActive
                      ? "0 28px 52px rgba(0,0,0,0.15)"
                      : isAdjacent
                      ? "0 8px 24px rgba(0,0,0,0.07)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "100%", height: "192px", overflow: "hidden" }}>
                    <img src={review.photo} alt={review.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>

                  <div style={{ padding: "32px" }}>
                    <p style={{ color: "#fcd34d", fontSize: "36px", fontFamily: "serif", lineHeight: 1, marginBottom: "12px" }}>"</p>
                    <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>{review.text}</p>

                    <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "2px solid #fde68a", flexShrink: 0 }}>
                        <img src={review.photo} alt={review.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div>
                        <p style={{ fontWeight: 600, color: "#1f2937", fontSize: "14px", fontFamily: "serif" }}>{review.name}</p>
                        <p style={{ fontSize: "12px", color: "#9ca3af" }}>{review.location}</p>
                      </div>
                      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "9999px", padding: "2px 8px" }}>
                        <span style={{ color: "#f59e0b", fontSize: "11px" }}>✓</span>
                        <span style={{ color: "#b45309", fontSize: "10px", fontWeight: 500 }}>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                height: "8px",
                width: i === activeIndex ? "20px" : "8px",
                borderRadius: "9999px",
                backgroundColor: i === activeIndex ? "#d97706" : "#fcd34d",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Review;