import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
