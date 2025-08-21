import React from "react";

function SocialIcon({ children }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 hover:text-white">
      {children}
    </span>
  );
}

function ClockRow({ day, hours }) {
  return (
    <div className="flex justify-between text-[14px] leading-7 text-zinc-300">
      <span className="text-zinc-400">{day}</span>
      <span>{hours}</span>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      {/* Main columns */}
      <div className="mx-auto max-w-[1100px] px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Col 1: Brand + text + socials */}
          <div>
            <h3 className="text-[18px] font-semibold">Feliciano</h3>
            <p className="mt-4 max-w-[280px] text-[14px] leading-7 text-zinc-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon>
                {/* Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.47 8.47 0 0 1-2.69 1.03 4.23 4.23 0 0 0-7.25 3.86A12 12 0 0 1 3.16 4.9a4.23 4.23 0 0 0 1.31 5.64 4.18 4.18 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.15 4.27 4.27 0 0 1-1.91.07 4.24 4.24 0 0 0 3.95 2.94A8.49 8.49 0 0 1 2 19.54 12 12 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                {/* Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98h-2.6V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.79-1.68 1.6V12h2.85l-.46 2.89h-2.39v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                {/* Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18.25 6.5a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2: Open hours */}
          <div>
            <h3 className="text-[18px] font-semibold">Open Hours</h3>
            <div className="mt-4 space-y-1">
              <ClockRow day="Monday" hours="9:00 - 24:00" />
              <ClockRow day="Tuesday" hours="9:00 - 24:00" />
              <ClockRow day="Wednesday" hours="9:00 - 24:00" />
              <ClockRow day="Thursday" hours="9:00 - 24:00" />
              <ClockRow day="Friday" hours="9:00 - 02:00" />
              <ClockRow day="Saturday" hours="9:00 - 02:00" />
              <ClockRow day="Sunday" hours="9:00 - 02:00" />
            </div>
          </div>

          {/* Col 3: Instagram grid */}
          <div>
            <h3 className="text-[18px] font-semibold">Instagram</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {/* Replace src with your thumbnails */}
              {[
                "/images/ig-1.jpg",
                "/images/ig-2.jpg",
                "/images/ig-3.jpg",
                "/images/ig-4.jpg",
                "/images/ig-5.jpg",
                "/images/ig-6.jpg",
              ].map((src, i) => (
                <div key={i} className="h-[70px] w-[70px] overflow-hidden">
                  <img
                    src={src}
                    alt={`instagram-${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h3 className="text-[18px] font-semibold">Newsletter</h3>
            <p className="mt-4 max-w-[320px] text-[14px] leading-7 text-zinc-400">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="h-10 w-full max-w-[260px] rounded-l bg-zinc-900 px-3 text-[14px] text-zinc-200 placeholder:text-zinc-500 outline-none"
                />
                <button className="h-10 rounded-r bg-[#C8A45D] px-4 text-[14px] font-semibold text-white hover:bg-[#b28d4f]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider/text bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1100px] px-6 py-5">
          <p className="text-center text-[13px] text-zinc-400">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span className="text-rose-400">♥</span> by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
}
