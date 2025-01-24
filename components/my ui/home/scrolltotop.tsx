import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScrollTop && (
        <Button
          className="fixed bottom-8 right-8 bg-slate-200 p-3 hover:bg-slate-400"
          onClick={scrollToTop}
          variant={"secondary"}
          size={"icon"}
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
