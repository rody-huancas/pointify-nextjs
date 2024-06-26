import Cart from "@/components/cart";
import Header from "@/components/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[100dvh]">
      <section className="h-[10dvh] py-4 px-5">
        <Header />
      </section>
      <section className="h-[88dvh] lg:flex lg:gap-4 mt-[2dvh]">
        <main className="basis-4/4 xl:basis-3/4 p-5 lg:pr-2 overflow-y-auto">
          <div>{children}</div>
        </main>
        <div className="xl:basis-1/4 p-5 lg:pl-2">
          <Cart />
        </div>
      </section>
    </div>
  );
};

export default Layout;
