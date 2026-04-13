"use client";

export const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="subtle-grid absolute inset-0 opacity-50" />
      <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.14),_transparent_62%)] blur-3xl" />
      <div className="absolute right-[-10rem] top-[6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(148,163,184,0.14),_transparent_60%)] blur-3xl" />
      <div className="absolute bottom-[-12rem] left-1/2 h-[28rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.1),_transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
    </div>
  );
};
