import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main>
        <Outlet />
      </main>

     
    </div>
  );
};

export default RootLayout;
