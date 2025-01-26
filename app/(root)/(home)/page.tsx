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
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 bg-p2 px-4 py-12 sm:px-6 md:space-y-12 lg:space-y-16 xl:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div
            ref={endToEndRef}
            className="mb-10 mt-16 flex w-full flex-col items-center justify-center"
          >
            <h1 className="mx-auto flex max-w-4xl text-balance text-center font-Ubuntu text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl md:text-6xl lg:mt-5">
              <span className="xl:inline">
                All In One
                <span className="text-p1/85"> Open Source</span> Messenger App.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-center font-Ubuntu text-lg text-slate-500 dark:text-slate-400 sm:text-xl lg:mt-8">
              You Have All You&apos;r Favorite Feature&apos;s You Ever Need In
              One App.{" "}
              <span className="underline decoration-p1 underline-offset-4">
                You End-To-End Encryption
              </span>
              {""} All Privacy Settings You Ever Need In Your Life.
            </p>
            <div className="mx-auto mt-10 flex w-full max-w-md flex-col justify-center gap-y-5 md:flex-row md:gap-x-5">
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
          <div className="flex w-full flex-col items-center justify-center gap-y-20 px-4 py-20 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl">
              <h1 className="mb-6 flex items-center justify-center text-balance text-center font-Ubuntu text-3xl text-p1 sm:text-4xl lg:text-5xl">
                <LucideLock className="mr-3 size-8 sm:mr-4 sm:size-10" />{" "}
                End-To-End Encryption
              </h1>
              <p className="text-balance text-center font-Ubuntu text-lg text-slate-500 dark:text-slate-400 sm:text-xl">
                With end-to-end encryption,{" "}
                <span className="underline decoration-p1 underline-offset-4">
                  your personal messages and calls are secured.
                </span>{" "}
                Only you and the person you&apos;re talking to can read or
                listen to them, and nobody in between, not even MessengerCraft
                can view it. But if your message gets reported, it will be seen
                by the safety team.
              </p>
            </div>

            <div className="w-full max-w-4xl md:flex md:items-center md:justify-end">
              <div className="md:w-5/6 lg:w-3/4">
                <h1 className="mb-6 flex items-center justify-center text-balance text-center font-Ubuntu text-3xl text-p1 sm:text-4xl md:justify-end md:text-right lg:text-5xl">
                  <UsersRoundIcon className="mr-3 size-8 sm:mr-4 sm:size-10" />{" "}
                  Groups And Channels
                </h1>
                <p className="text-balance text-center font-Ubuntu text-lg text-slate-500 dark:text-slate-400 sm:text-xl md:text-right">
                  With groups and channels, you have more fun than ever. With
                  Groups you can chat, call, etc. with your friends, family
                  members etc. And with Channels you can make it public or
                  private, invite people you know or let others discover your
                  channel
                  <span className="underline decoration-p1 underline-offset-4">
                    {" "}
                    without letting them see your private details.
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="w-full max-w-4xl md:flex md:items-center">
              <div className="md:w-5/6 lg:w-3/4">
                <h1 className="mb-6 flex items-center justify-center text-balance text-center font-Ubuntu text-3xl text-destructive/85 sm:text-4xl md:justify-start md:text-left lg:text-5xl">
                  <CircleAlertIcon className="mr-3 size-8 sm:mr-4 sm:size-10" />{" "}
                  Moderation And Safety
                </h1>
                <p className="text-balance text-center font-Ubuntu text-lg text-slate-500 dark:text-slate-400 sm:text-xl md:text-left">
                  To maintain a good ecosystem, our automated system may check
                  your messages, photos, videos etc.
                  <span className="underline decoration-destructive/85 underline-offset-4">
                    {" "}
                    If we find any illegal activities, we will report them to
                    the proper authorities
                  </span>{" "}
                  and ban your account. You will need proper proof for an
                  appeal.
                </p>
              </div>
            </div>

            <div className="w-full max-w-4xl text-center">
              <p className="mb-4 font-Ubuntu text-lg font-bold uppercase text-p3/85">
                get satisfied continuously
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl lg:text-6xl">
                Connect effortlessly. Converse seamlessly. Your world of
                conversations, unified.
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-slate-500 dark:text-slate-300 sm:text-2xl">
                Chat, call, video call, group and channel calls, events with
                family or friends in one place
              </p>
            </div>
          </div>
          <div className="mb-20 mt-10 grid w-full gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            <Card className="flex h-full flex-col items-center p-6 text-center shadow-md">
              <CardHeader className="items-center">
                <Users className="mb-4 size-12 text-p1" />
                <CardTitle className="text-xl font-semibold">
                  Groups and Channels
                </CardTitle>
                <CardDescription>
                  Connect with multiple people at once. Create groups for
                  friends and family or channels for broader communities.
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
                  Stay in touch with crystal-clear audio and video calls.
                  Connect face-to-face no matter the distance.
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
                  Enjoy interactive games with friends right in your chats. Add
                  a playful touch to your conversations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mx-auto mb-20 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 font-Ubuntu text-lg font-bold uppercase text-p3/85">
                FAQ
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
                Frequently asked questions
              </h1>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="overflow-hidden rounded-lg border"
              >
                <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  Is its end-to-end encryption of open source trustable?
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  Yes. The encryption part is done by an external package that
                  is closed source. With their permission, I can use it for the
                  encryption process, but the encryption process is repeated
                  many times.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="overflow-hidden rounded-lg border"
              >
                <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  Is it safe? Others can commit anything they want.
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  Yes. It is safe. The code they commit goes through many
                  reviews by trusted people and me. Only then it gets added and
                  the app gets updated.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="overflow-hidden rounded-lg border"
              >
                <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  Is it the best alternative for messenger giants?
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  Maybe. They have a massive team backing them, but our app has
                  a small team for now and some open source community members to
                  help us improve from GitHub. We can&apos;t say for sure that
                  the open source community will help, but they will if they
                  like our app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="overflow-hidden rounded-lg border"
              >
                <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  How can you help us / report issues / solve issues?
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  You can commit and help us / report issues / solve issues from
                  our GitHub repository. Which is this -{" "}
                  <Link
                    className="text-cyan-500 hover:underline"
                    href={
                      "https://github.com/lordgamingyt/MessengerCraft/issues"
                    }
                  >
                    Repository
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="overflow-hidden rounded-lg border"
              >
                <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  Is it free?
                </AccordionTrigger>
                <AccordionContent className="bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  Yes. It is free to use, but we still have some plans for some
                  features. However, the maximum features you ever need are
                  free.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mx-auto w-full max-w-6xl rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 px-6 py-12 shadow-lg dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 sm:px-8 sm:py-16 lg:px-12">
            <div className="relative">
              <div className="hidden md:absolute md:right-0 md:top-1/2 md:block md:-translate-y-1/2">
                <Button size="lg" asChild>
                  <Link href="/auth/register">Get started</Link>
                </Button>
              </div>
              <p className="mb-4 text-lg font-semibold uppercase text-p1 dark:text-p1">
                READY?
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:max-w-[60%] md:text-4xl lg:text-5xl">
                Get started in minutes from your browser.
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-300 md:max-w-[60%]">
                Dive right in, no credit card required. Plans are for supporting
                us for little benefits.
              </p>
              <div className="mt-8 md:hidden">
                <Button size="lg" className="w-full" asChild>
                  <Link href={"/auth/register"}>Get started</Link>
                </Button>
              </div>
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
