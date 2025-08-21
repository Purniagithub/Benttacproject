import React from "react";

// Replace with your actual images (public/...)
const POSTS = [
  {
    id: 1,
    img: "/images/post-1.jpg",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Taste the delicious foods in Asia",
    href: "#",
    comments: 3,
  },
  {
    id: 2,
    img: "/images/post-2.jpg",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Taste the delicious foods in Asia",
    href: "#",
    comments: 3,
  },
  {
    id: 3,
    img: "/images/post-3.jpg",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Taste the delicious foods in Asia",
    href: "#",
    comments: 3,
  },
];

function Accent({ text }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-8 text-center">
      <span className="select-none font-serif italic text-amber-700/60 leading-none tracking-wide text-[54px] sm:text-[64px]">
        {text}
      </span>
    </div>
  );
}

function Meta({ date, author }) {
  return (
    <div className="text-[13px] text-zinc-500">
      <span>{date}</span>
      <span className="mx-2">•</span>
      <span>{author}</span>
    </div>
  );
}

function PostCard({ img, date, author, title, href, comments }) {
  return (
    <article className="rounded-md bg-white shadow-sm ring-1 ring-zinc-100 overflow-hidden">
      <div className="h-[260px] w-full overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <Meta date={date} author={author} />

        <a href={href} className="mt-2 block">
          <h3 className="text-[18px] font-semibold leading-7 text-zinc-900 hover:text-amber-600">
            {title}
          </h3>
        </a>

        <div className="mt-6 flex items-center justify-between text-[13px]">
          <a
            href={href}
            className="inline-flex items-center gap-1 text-zinc-600 hover:text-amber-600"
          >
            Read more
          </a>
          <div className="inline-flex items-center gap-1 text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[14px] w-[14px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RecentPosts() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="relative mx-auto max-w-[1000px] px-4">
        {/* Heading with accent */}
        <div className="relative mb-10 text-center">
          <Accent text="Blog" />
          <h2 className="relative text-[32px] sm:text-[36px] font-extrabold text-zinc-900">
            Recent Posts
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {POSTS.map((p) => (
            <PostCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
