"use client"

import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { menu } from "@/assets/data";
import { MenuMobile } from "./menu-mobile";
import { useState } from "react";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)

  return (
    <>
      <header className="flex items-center justify-between">
        <section>
          <Logo />
        </section>
      
        <section className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-x-1 p-1 rounded-full bg-background-foreground">
              {menu.map((menu) => (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className={cn(
                      "flex items-center gap-2 text-sm py-3 px-6 transition-colors rounded-full duration-300 ease-in",
                      menu.href === "/menu"
                        ? "bg-primary font-medium"
                        : "hover:bg-background/70"
                    )}
                  >
                    <i className={menu.icon}></i>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      
        <section>
          <ul className="flex items-center gap-x-3 bg-background-foreground p-3 rounded-full">
            <li className="flex items-center gap-x-2">
              <Image
                src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?t=st=1715916298~exp=1715919898~hmac=63695eb5b0bdf422e68a95cd353f43f44dd92983e39147522b3adbcc1bf7c4a7&w=826"
                alt="image"
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h5 className="font-medium">Rody</h5>
            </li>
            <li>
              <button type="button" className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fi fi-rr-settings"></i>
              </button>
            </li>
            <li className="lg:hidden">
              <button type="button" onClick={() => setShowMenuMobile(true)} className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fi fi-rr-bars-staggered"></i>
              </button>
            </li>
          </ul>
        </section>
      </header>

      <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile} />
    </>
  );
};

export default Header;
