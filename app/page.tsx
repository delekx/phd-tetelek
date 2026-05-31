"use client";

import { useEffect, useRef, useState } from "react";
import { topics } from "@/data/topics";
import type { TopicGroupName } from "@/lib/types";
import { TopicGroup } from "@/components/TopicGroup";
import { ThemeToggle } from "@/components/ThemeToggle";

const GROUPS: TopicGroupName[] = [
  "I. Epidemiológia és Kutatásmódszertan",
  "VII. Sport- és Egészségtudomány",
];

const MOBILE_HEADER_HEIGHT = 55;

export default function Home() {
  const [activeTopicId, setActiveTopicId] = useState<string | undefined>();
  const [openTopicIds, setOpenTopicIds] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const suppressScrollSpyUntilRef = useRef(0);

  const activeTopic = topics.find((topic) => topic.id === activeTopicId);

  useEffect(() => {
    let ticking = false;

    function updateActiveTopicFromScroll() {
      if (Date.now() < suppressScrollSpyUntilRef.current) return;

      const readingLine = 320;

      let containingId: string | undefined;
      let closestId: string | undefined;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const topic of topics) {
        const element = document.getElementById(topic.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= readingLine && rect.bottom >= readingLine) {
          containingId = topic.id;
          break;
        }

        const distance = Math.abs(rect.top - readingLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = topic.id;
        }
      }

      const nextActiveId = containingId ?? closestId;

      if (nextActiveId) {
        setActiveTopicId(nextActiveId);
      }
    }

    function handleScroll() {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveTopicFromScroll();
        ticking = false;
      });
    }

    updateActiveTopicFromScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  function scrollToTopic(id: string) {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = window.innerWidth < 768 ? 90 : 120;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "auto",
    });
  }

  function handleNavClick(id: string) {
    suppressScrollSpyUntilRef.current = Date.now() + 800;

    setActiveTopicId(id);

    setOpenTopicIds((current) =>
      current.includes(id) ? current : [...current, id]
    );

    setMobileMenuOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTopic(id);
      });
    });
  }

  function handleOpenTopicIdsChange(nextOpenIds: string[]) {
    const newlyOpenedId = nextOpenIds.find((id) => !openTopicIds.includes(id));

    setOpenTopicIds(nextOpenIds);

    if (newlyOpenedId) {
      setActiveTopicId(newlyOpenedId);
    }
  }

  function TopicNavList() {
    return (
      <nav className="space-y-5 text-sm">
        {GROUPS.map((group) => {
          const groupTopics = topics.filter((topic) => topic.group === group);

          return (
            <div key={group}>
              <h2 className="sticky top-0 z-10 -mx-4 border-b border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                {group}
              </h2>

              <div className="space-y-1 pt-2">
                {groupTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleNavClick(topic.id)}
                    className={`block w-full rounded-md px-2 py-1.5 text-left leading-snug transition ${
                      activeTopicId === topic.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {topic.number}. {topic.title}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 h-14 bg-background/95 backdrop-blur md:hidden">
        <div className="grid h-full grid-cols-[44px_1fr_72px] items-center gap-2 px-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Tétellista megnyitása"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-muted"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200 ${
                mobileMenuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200 ${
                mobileMenuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>

          <div className="min-w-0 text-center">
            <p className="truncate text-xs font-medium text-muted-foreground">
              Aktuális tétel
            </p>

            <p className="truncate text-sm font-semibold leading-tight text-foreground">
              {activeTopic
                ? `${activeTopic.number}. ${activeTopic.title}`
                : "Tételek"}
            </p>
          </div>

          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {!mobileMenuOpen ? (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        ) : null}
      </header>

      {mobileMenuOpen ? (
        <>
          <div
            className="fixed inset-x-0 bottom-0 z-30 bg-background/45 backdrop-blur-[2px] md:hidden"
            style={{ top: MOBILE_HEADER_HEIGHT }}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed inset-x-0 z-40 max-h-[72vh] overflow-auto rounded-b-2xl border-b border-border bg-background px-4 pb-8 pt-0 shadow-xl md:hidden"
            style={{ top: MOBILE_HEADER_HEIGHT }}
          >
            <TopicNavList />
          </div>
        </>
      ) : null}

      <div className="grid min-h-screen grid-cols-1 gap-6 px-4 py-4 md:grid-cols-[340px_1fr] md:px-6 md:py-6">
        {/* Desktop sidebar */}
        <aside className="hidden md:sticky md:top-6 md:block md:h-[calc(100vh-3rem)]">
          <div className="sidebar-scroll h-full overflow-y-auto overflow-x-hidden pr-3">
            <div className="sticky top-0 z-20 mb-4 flex items-center justify-between border-b border-border bg-background pb-4">
              <h1 className="text-xl font-bold">Tételek</h1>
              <ThemeToggle />
            </div>

            <TopicNavList />
          </div>
        </aside>

        {/* Main content */}
        <section className="mx-auto w-full max-w-4xl space-y-8">
          {GROUPS.map((group) => (
            <TopicGroup
              key={group}
              title={group}
              topics={topics.filter((topic) => topic.group === group)}
              openTopicIds={openTopicIds}
              onOpenTopicIds={handleOpenTopicIdsChange}
              activeTopicId={activeTopicId}
            />
          ))}
        </section>
      </div>
    </main>
  );
}