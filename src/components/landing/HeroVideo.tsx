export function HeroVideo() {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/aegis-hero-b3-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-aegis-void/40" />
    </div>
  );
}
