"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ListIcon, X } from "lucide-react";

interface NavBarProps {
  isFixed: boolean;
}

const NavBar = ({ isFixed }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`${
        isFixed
          ? "fixed top-0 z-30 flex h-20 w-full items-center justify-between bg-transparent backdrop-blur-lg dark:bg-slate-900/[0.8]"
          : "relative top-0 flex items-center justify-between p-4 sm:px-6"
      }`}
    >
      <div className="flex flex-row items-center justify-start">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Messenger Craft Logo"
            width={48}
            height={48}
            className="mx-5"
            loading="lazy"
          />
        </Link>
        <h1 className="font-Poppins text-xl font-semibold text-slate-900 dark:text-white">
          <Link href="/">
            <span className="text-p1">Messenger</span> Craft
          </Link>
        </h1>
      </div>
      <nav className="ml-auto hidden space-x-5 px-5 md:block lg:block xl:block">
        <Button size="default" variant="default" className="py-5" asChild>
          <Link href="/download">Download</Link>
        </Button>
        <Button
          size="default"
          variant="link"
          className="text-slate-800 decoration-p1 dark:text-slate-200"
          asChild
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </nav>
      <div className="ml-auto px-5 sm:block md:hidden lg:hidden xl:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <ListIcon />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-white p-4 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col space-y-2">
            <Button
              size="default"
              variant="default"
              className="w-full justify-start py-5"
              asChild
            >
              <Link href="/download">Download</Link>
            </Button>
            <Button
              size="default"
              variant="link"
              className="w-full justify-start text-slate-800 dark:text-slate-200"
              asChild
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
