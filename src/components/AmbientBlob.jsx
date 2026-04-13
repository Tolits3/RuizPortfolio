export default function AmbientBlob() {
  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1);   border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; }
          33%      { transform: translate(40px,-60px) scale(1.08); border-radius: 40% 60% 45% 55% / 60% 40% 60% 40%; }
          66%      { transform: translate(-30px,40px) scale(0.95); border-radius: 55% 45% 60% 40% / 45% 55% 45% 55%; }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1);    border-radius: 45% 55% 40% 60% / 60% 40% 55% 45%; }
          33%      { transform: translate(-50px,30px) scale(1.05);  border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
          66%      { transform: translate(35px,-50px) scale(0.92);  border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1);   border-radius: 55% 45% 50% 50% / 45% 55% 50% 50%; }
          50%      { transform: translate(25px,35px) scale(1.1);  border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%; }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0,0) scale(1);   border-radius: 50% 50% 45% 55% / 55% 45% 60% 40%; }
          40%      { transform: translate(-20px,-40px) scale(1.06); border-radius: 60% 40% 55% 45% / 40% 60% 45% 55%; }
          80%      { transform: translate(30px,20px) scale(0.94);  border-radius: 45% 55% 40% 60% / 50% 50% 55% 45%; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position:      "fixed",
          inset:         0,
          zIndex:        1,
          pointerEvents: "none",
          overflow:      "hidden",
        }}
      >
        {/* Blob 1 — large gold, top-right */}
        <div style={{
          position:     "absolute",
          top:          "-8%",
          right:        "-4%",
          width:        520,
          height:       520,
          background:   "radial-gradient(ellipse, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0.04) 55%, transparent 75%)",
          filter:       "blur(60px)",
          animation:    "blob1 28s ease-in-out infinite",
          willChange:   "transform",
        }} />

        {/* Blob 2 — medium gold, bottom-left */}
        <div style={{
          position:     "absolute",
          bottom:       "10%",
          left:         "-6%",
          width:        440,
          height:       440,
          background:   "radial-gradient(ellipse, rgba(212,175,55,0.10) 0%, rgba(180,140,30,0.04) 55%, transparent 75%)",
          filter:       "blur(70px)",
          animation:    "blob2 34s ease-in-out infinite",
          willChange:   "transform",
        }} />

        {/* Blob 3 — small accent, mid-right */}
        <div style={{
          position:     "absolute",
          top:          "38%",
          right:        "18%",
          width:        280,
          height:       280,
          background:   "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
          filter:       "blur(50px)",
          animation:    "blob3 22s ease-in-out infinite",
          willChange:   "transform",
        }} />

        {/* Blob 4 — subtle green tint, bottom-right */}
        <div style={{
          position:     "absolute",
          bottom:       "-5%",
          right:        "8%",
          width:        380,
          height:       380,
          background:   "radial-gradient(ellipse, rgba(20,80,20,0.18) 0%, rgba(10,40,10,0.06) 55%, transparent 75%)",
          filter:       "blur(80px)",
          animation:    "blob4 38s ease-in-out infinite",
          willChange:   "transform",
        }} />
      </div>
    </>
  );
}