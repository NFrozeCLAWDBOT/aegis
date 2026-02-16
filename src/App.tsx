import { Outlet } from "react-router-dom";
import { BackgroundOrbs } from "@/components/layout/BackgroundOrbs";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-aegis-void text-aegis-text">
      <BackgroundOrbs />
      <Outlet />
      <Footer />
    </div>
  );
}
