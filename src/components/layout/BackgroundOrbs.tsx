export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #7B2FBE 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #E040FB 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #7B2FBE 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
