"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ListIcon, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <Link href="/auth/register">Get Started</Link>
        </Button>
      </nav>
      <div className="ml-auto px-5 sm:block md:hidden lg:hidden xl:hidden">
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <ListIcon />
          </Button>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-lg text-slate-900 dark:text-white">
                Navigation Menu
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col space-y-4 pt-4">
              <Button
                size="default"
                variant="default"
                className="w-full py-5"
                asChild
              >
                <Link href="/download">Download</Link>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="w-full py-5 text-slate-800 dark:text-slate-200"
                asChild
              >
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default NavBar;
