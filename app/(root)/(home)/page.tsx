"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  CircleAlertIcon,
  DoorOpenIcon,
  Download,
  Gamepad2,
  LucideLock,
  PhoneCall,
  Users,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/my ui/home/Nav";
import Footer from "@/components/my ui/home/Footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTop from "@/components/my ui/home/scrolltotop";

const Home = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const endToEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNavFixed(false);
        } else {
          setIsNavFixed(true);
        }
      },
      { threshold: 0.01 },
    );

    if (endToEndRef.current) {
      observer.observe(endToEndRef.current);
    }

    return () => {
      if (endToEndRef!.current) {
        observer.unobserve(endToEndRef!.current);
      }
    };
  }, []);

  return (
    <>
      <NavBar isFixed={isNavFixed} />
      <div className="relative flex size-full max-w-7xl flex-col space-y-14 bg-p2 px-6 py-12 backdrop:blur-lg lg:space-y-32 lg:px-24 xl:items-center xl:px-36">
        <div
          ref={endToEndRef}
          className="mb-5 mt-10 flex flex-col items-center justify-center"
        >
          <h1 className="mx-auto flex text-balance text-center font-Ubuntu text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 sm:text-balance md:text-5xl lg:mt-5">
            <span className="xl:inline">
              All In One
              <span className="text-p1/85"> Open Source</span> Messenger App.
            </span>
          </h1>
          <p className="mx-auto mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:text-balance sm:text-lg lg:mt-5">
            You Have All You&apos;r Favorite Feature&apos;s You Ever Need In One
            App.{" "}
            <span className="underline decoration-p1 underline-offset-4">
              You End-To-End Encryption
            </span>
            {""} All Privacy Settings You Ever Need In Your Life.
          </p>
          <div className="mx-auto mt-6 flex w-full flex-col justify-center gap-y-5 md:flex-row md:gap-x-5">
            <Button
              size={"lg"}
              variant={"default"}
              className="select-none rounded-full p-7 text-lg"
              asChild
            >
              <Link href={"/download"}>
                <Download /> Download
              </Link>
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="select-none rounded-full bg-p1/85 p-7 text-lg hover:bg-p1 hover:text-slate-900"
              asChild
            >
              <Link href={"/dashboard"}>
                <DoorOpenIcon /> Open In Your Browser
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 py-10">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-p1">
            {" "}
            <LucideLock className="mx-4 size-9" /> End-To-End Encryption
          </h1>
          <p className="mx-auto mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:text-balance sm:text-lg lg:mt-5">
            With end-to-end encryption,{" "}
            <span className="underline decoration-p1 underline-offset-4">
              your personal messages and calls are secured.
            </span>{" "}
            Only you and the person you&apos;re talking to can read or listen to
            them, and nobody in between, not even MessengerCraft can&apos;t view
            it. But if you&apos;r message get reported it will be seen by safety
            team.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 md:items-end">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-p1">
            {" "}
            <UsersRoundIcon className="mx-4 size-9" /> Groups And Channels
          </h1>
          <p className="mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:mx-auto sm:text-balance sm:text-lg md:mx-0 md:w-[770px] md:text-end lg:mt-5">
            With groups and channels, you have more fun than ever. With Groups
            you can chat, call, etc with you&apos;r friends, family members etc.
            And with Channels you can make it public or private invite
            people&apos;s you know or let others discover you&apos;r channel
            <span className="underline decoration-p1 underline-offset-4">
              {" "}
              without letting them see you&apos;r private details.
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 md:items-start">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-destructive/85">
            {" "}
            <CircleAlertIcon className="mr-2 size-9" /> Moderation And Safety
          </h1>
          <p className="mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:mx-auto sm:text-balance sm:text-lg md:mx-0 md:w-[770px] md:text-start lg:mt-5">
            To maintain good ecosystem oru automated system may check you&apos;r
            message, photo, video etc.
            <span className="underline decoration-destructive/85 underline-offset-4">
              {""} If we found any illegal activities then we will report it to
              proper authority&apos;s
            </span>
            {""} and ban you&apos;r account and will need proper proof for an
            appeal
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 py-14 pb-5">
          <p className="font-Ubuntu text-base font-bold uppercase text-p3/85">
            get satisfy continuously
          </p>
          <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            Connect effortlessly. Converse seamlessly. Your world of
            conversations, unified.
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xl text-slate-500 dark:text-slate-300 sm:mt-4">
            Chat, call, video call, group and channel calls, events with family
            or friends in one place
          </p>
        </div>
        <div className="mb-5 mt-4 grid h-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex h-full flex-col items-center p-6 text-center shadow-md">
            <CardHeader className="items-center">
              <Users className="mb-4 size-12 text-p1" />
              <CardTitle className="text-xl font-semibold">
                Groups and Channels
              </CardTitle>
              <CardDescription>
                Connect with multiple people at once. Create groups for friends
                and family or channels for broader communities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col items-center p-6 text-center shadow-md">
            <CardHeader className="items-center">
              <PhoneCall className="mb-4 size-12 text-p1" />
              <CardTitle className="text-xl font-semibold">
                Calls and Video Calls
              </CardTitle>
              <CardDescription>
                Stay in touch with crystal-clear audio and video calls. Connect
                face-to-face no matter the distance.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex h-full flex-col items-center p-6 text-center shadow-md">
            <CardHeader className="items-center">
              <Gamepad2 className="mb-4 size-12 text-p1" />
              <CardTitle className="text-xl font-semibold">
                Games and Fun
              </CardTitle>
              <CardDescription>
                Enjoy interactive games with friends right in your chats. Add a
                playful touch to your conversations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <p className="font-Ubuntu text-base font-bold uppercase text-p3/85">
            FAQ
          </p>
          <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            Frequently asked questions
          </h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-y-5 pb-5 pt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is it&apos;s end-to-end encryption of open source trustable?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The encryption part is done by an external package that is
                closed source with there permissions i can use it for the
                encryption process but the encryption process is repeated many
                time&apos;s.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is it safe? other&apos;s can commit any thing they want.
              </AccordionTrigger>
              <AccordionContent>
                Yes. It is safe the code they commit go through many review by
                many trusted people&apos;s and me. Then only it get added and
                app get updated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is it an best alternative for messenger giants?
              </AccordionTrigger>
              <AccordionContent>
                Maybe. They have massive team in their back but our app have
                small team for now and some open source community members to
                help us improve from github but we can&apos;t say for sure that
                open source community help they will if they like our app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can you help us / report issue / solve issues?
              </AccordionTrigger>
              <AccordionContent>
                You can commit and help us / report issue / solve issues from
                our github repository. Which is this -{" "}
                <Link
                  className="text-cyan-500 hover:underline"
                  href={"https://github.com/unknowncoder-gamer/MessengerCraft"}
                >
                  Repository
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is it free?</AccordionTrigger>
              <AccordionContent>
                Yes. It is free to use but we still have some plans for some
                feature but maximum feature you ever need is free.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mx-auto w-full max-w-6xl rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 shadow-lg dark:from-slate-800 dark:via-slate-800 dark:to-slate-700">
          <div className="relative px-4 py-8 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pt-12">
            <div className="xs:block xs:absolute xs:right-10 hidden md:top-1/2 md:-translate-y-1/2">
              <Link href={"/auth/register"}>Get started</Link>
            </div>
            <p className="text-sm font-semibold uppercase text-p1 dark:text-p1 lg:text-base">
              READY?
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:pr-32 lg:text-3xl">
              Get started in a minutes from you&apos;r browser.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-500 dark:text-slate-300 lg:text-lg">
              Dive right in, no credit card required. Plans are for supporting
              us for little benefits
            </p>
            <div className="xs:hidden mt-4 flex w-full items-end sm:items-center">
              <Button size={"lg"} className="bg-slate-700 hover:bg-slate-900">
                <Link href={"/auth/register"}>Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
