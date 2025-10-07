"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NexLinkApp() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => setOpen(false);

  return (
    <div className="min-h-dvh bg-[#0b0f14] text-white selection:bg-yellow-300/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0e141b]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <button
            aria-label="Open Menu"
            className="rounded-xl bg-white/5 px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-yellow-400 grid place-items-center font-semibold">
              CN
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-widest text-white/60">
                COSMIC GOLD
              </span>
              <span className="text-base font-semibold">Nex Link</span>
            </div>
          </div>

          <div className="hidden gap-2 md:flex">
            <button className="rounded-xl bg-white/5 px-3 py-2 text-sm">🔔</button>
            <button className="rounded-xl bg-white/5 px-3 py-2 text-sm">🛡️</button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-400/70 via-yellow-300/60 to-indigo-400/70 px-3 py-2 text-sm font-semibold text-black">
              Global Chat
            </button>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="mx-auto grid h-[calc(100dvh-64px)] max-w-7xl grid-cols-1 overflow-hidden md:grid-cols-12">
        {/* Sidebar (desktop) */}
        <aside className="hidden flex-col overflow-hidden border-r border-white/10 md:col-span-4 md:flex">
          <div className="flex items-center gap-2 px-4 py-3">
            <input
              placeholder="Search"
              className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ChatItem title="CARDIC NEXUS ∞" subtitle="You: All official Cardic N..." />
            <ChatItem title="CARDIC NEWS UP..." subtitle="Photo" />
            <ChatItem title="CN PREMIUM SIG..." subtitle="All official Cardic N..." unread={2} />
            <ChatItem title="CN SIGNALS AND..." subtitle="All official Cardic N..." unread={1} />
          </div>
          <footer className="hidden border-t border-white/10 px-4 py-3 text-xs text-white/50 md:block">
            © 2025 Cardic Nexus • Nex Link — Cosmic Gold
          </footer>
        </aside>

        {/* Content */}
        <section className="relative flex flex-col overflow-hidden md:col-span-8">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-yellow-400 text-black font-bold">
                si
              </div>
              <div>
                <div className="text-sm font-semibold">CN SIGNALS AND...</div>
                <div className="text-xs text-white/60">online</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-xl bg-white/5 px-3 py-2 text-sm">📞</button>
              <button className="rounded-xl bg-white/5 px-3 py-2 text-sm">📎</button>
              <button className="rounded-xl bg-white/5 px-3 py-2 text-sm">⋮</button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            <Bubble>You build from vision to result. 🛠️</Bubble>
            <Bubble>Drop your XAUUSD/BTC ideas here.</Bubble>
            <Bubble me>Ok</Bubble>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0f14] to-transparent h-20" />
        </section>
      </main>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay - plain div (no framer props) to avoid TS onClick error */}
            <div onClick={onClose} className="fixed inset-0 z-40 bg-black/50 md:hidden" />
            {/* Drawer */}
            <motion.aside
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed left-0 top-0 z-50 h-dvh w-[300px] overflow-y-auto border-r border-white/10 bg-[#0e141b] px-4 py-4 md:hidden"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-yellow-400 text-black font-semibold">
                    CN
                  </div>
                  <div className="text-sm font-semibold">Cardic</div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-xl bg-white/5 px-2 py-1 text-sm"
                >
                  ✕
                </button>
              </div>
              <nav className="space-y-1">
                <NavItem label="My Profile" />
                <NavItem label="Wallet" />
                <NavItem label="New Group" />
                <NavItem label="Contacts" />
                <NavItem label="Calls" />
                <NavItem label="Saved Messages" />
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Small presentational bits ---------- */

function ChatItem({
  title,
  subtitle,
  unread = 0,
}: {
  title: string;
  subtitle: string;
  unread?: number;
}) {
  return (
    <button className="group flex w-full items-center gap-3 px-3 py-3 text-left hover:bg-white/5">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-yellow-400 text-black font-bold">
        {title.slice(0, 2).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-semibold">{title}</div>
        <div className="truncate text-xs text-white/60">{subtitle}</div>
      </div>
      {unread > 0 && (
        <div className="grid h-6 min-w-6 place-items-center rounded-full bg-yellow-400/90 px-2 text-xs font-bold text-black">
          {unread}
        </div>
      )}
    </button>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/5"
    >
      {label}
    </Link>
  );
}

function Bubble({
  children,
  me = false,
}: {
  children: React.ReactNode;
  me?: boolean;
}) {
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-[15px] shadow-xl ${
          me
            ? "bg-gradient-to-br from-indigo-500/70 to-yellow-400/70 text-black"
            : "bg-white/5 text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
