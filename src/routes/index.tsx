import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Newspaper, ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { publicMedia } from "../lib/public-media";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { galleryData } from "../lib/galleryData";
import { newsData } from "../lib/newsData";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        name: "description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { property: "og:title", content: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        property: "og:description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.sulakshya.org" },
      { property: "og:image", content: "https://www.sulakshya.org/logo.png" },
      { property: "og:image:secure_url", content: "https://www.sulakshya.org/logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "342" },
      { property: "og:image:height", content: "307" },
      { property: "og:image:alt", content: "Sulakshya Seva Samithi Logo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        name: "twitter:description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { name: "twitter:image", content: "https://www.sulakshya.org/logo.png" },
      { name: "twitter:image:alt", content: "Sulakshya Seva Samithi Logo" },
    ],
  }),
});



const IMG = (id: string) => `https://images.prismic.io/sulakshya-seva-samiti/${id}?auto=compress,format&w=1200`;

const HERO_IMAGES = [publicMedia.hero1, publicMedia.hero2, publicMedia.hero3];

const GALLERY = [
  IMG("484df641-097c-4080-b1fb-38d477827b47__D8A6590.JPG"),
  IMG("a86de2ed-e638-49e5-8cc3-49c8849788c4_5D8A7404.JPG"),
  IMG("d432c4ac-d116-41b0-9c34-c38d0929f65b_106.JPG"),
  IMG("1893ab96-3df3-41c4-8fdc-7add0e4fca73_5D8A6562.JPG"),
  IMG("b954dffe-0b4a-4e9e-82e9-9d5f4a353060_5D8A6568.JPG"),
  IMG("c12fb013-a067-4480-b4b2-3c16a8d66636_5D8A0258.JPG"),
  IMG("30997051-08f0-4bab-8369-9d2b469e98b5_5D8A5651.JPG"),
  IMG("8186d40e-9bf6-4225-9981-7b9e9bb22e60_VIN_2716.JPG"),
];

const FOUNDER_IMG = publicMedia.founder;

const STATS = [
  { big: "10000+", text: "children supported through events, education and care drives." },
  { big: "13+", text: "years of consistent grassroots service across communities." },
  { big: "50+", text: "active volunteers powering every smile, every visit." },
  { big: "20+", text: "partner orphanages, schools and care homes we serve." },
];

const STEPS = [
  { n: "01", title: "Volunteer your time", desc: "Join a visit, mentor a child, or help organise a community event." },
  { n: "02", title: "Spread the word", desc: "Share our stories, goals and impact with your friends, family and community." },
  { n: "03", title: "Partner with us", desc: "Bring your school, company or community into the movement." },
];

const INITIATIVES = [
  { title: "Education Drives", desc: "School supplies, tuition support and learning programs." },
  { title: "Joy Visits", desc: "Outings to amusement parks, heritage sites, restaurants, movies and so on — fulfilling their dreams." },
  { title: "Motivational Talks", desc: "Inspiring sessions on career guidance, stress management and character building." },
  { title: "Festive Celebrations", desc: "Festivals, birthdays and special days celebrated together." },
  { title: "Essential Care", desc: "Food, clothing, hygiene and medical drives year-round." },
];

function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < Math.min(newsData.length, 3) - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : Math.min(newsData.length, 3) - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* HERO — full bleed triptych */}
      <section className="relative min-h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen min-h-[600px]">
          {HERO_IMAGES.map((src, i) => (
            <div key={i} className={`relative overflow-hidden group ${i !== 1 ? "hidden md:block" : ""}`}>
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 mt-20">
          <h1 className="font-display text-center text-cream drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <span className="block text-[12vw] sm:text-[10vw] leading-[0.9] tracking-tight">EMPOWERING</span>
            <span className="block text-[12vw] sm:text-[10vw] leading-[0.9] tracking-tight text-brand">FUTURES</span>
          </h1>
        </div>

        <div className="absolute top-28 left-1/2 -translate-x-1/2 text-cream text-center px-4">
          <p className="font-display uppercase tracking-[0.4em] text-xs sm:text-sm opacity-90">
            Sulakshya Seva Samithi
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4">
          <a
            href="#volunteer"
            className="inline-flex items-center gap-3 rounded-full bg-brand text-ink px-8 py-4 font-display uppercase text-sm sm:text-base hover:bg-ink hover:text-cream transition shadow-2xl"
          >
            Join the movement <ArrowUpRight className="w-4 h-4" />
          </a>
          <ChevronDown className="w-7 h-7 text-cream animate-bounce" />
        </div>
      </section>



      {/* STATS */}
      <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Our impact</p>
        <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-4xl mb-8 md:mb-16">
          Every smile is a milestone.
          <span className="text-ink/40"> Every gesture, however small, becomes a story worth telling.</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.big} className="bg-ink text-cream rounded-2xl p-4 sm:p-6 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand break-words">{s.big}</div>
              <p className="text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="py-12 md:py-24 px-6 bg-ink text-cream">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/60 font-display mb-4">What we do</p>
          <h2 className="font-display text-4xl sm:text-6xl mb-8 md:mb-12">Our initiatives</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {INITIATIVES.map((s) => (
              <a
                key={s.title}
                href="#"
                className="group rounded-2xl border border-cream/15 p-4 sm:p-6 hover:bg-brand hover:text-ink transition-colors flex flex-col justify-between min-h-[160px] sm:min-h-[200px]"
              >
                <h3 className="font-display text-base sm:text-xl lg:text-2xl break-words leading-tight">{s.title}</h3>
                <div className="mt-4 sm:mt-6">
                  <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-display uppercase">
                    Learn more <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Moments</p>
            <h2 className="font-display text-4xl sm:text-6xl">From the field</h2>
          </div>
          <Link to="/gallery" className="text-sm font-display uppercase inline-flex items-center gap-1 hover:text-brand">
            View full gallery <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {galleryData.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryData.slice(0, 6).map((item, idx) => (
              <Link
                key={idx}
                to="/gallery"
                className="relative aspect-[4/3] group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-cream">
                  <span className="text-[10px] uppercase tracking-widest text-brand font-semibold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display text-base font-bold leading-snug line-clamp-2">
                    {item.caption}
                  </h4>
                  <p className="text-[10px] opacity-75 mt-1 font-light">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl">
            {/* Row 1: wide + square + square */}
            <div className="col-span-2 md:col-span-2 aspect-[2/1] relative overflow-hidden group">
              <img src={GALLERY[0]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-1 aspect-square relative overflow-hidden group">
              <img src={GALLERY[1]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-1 aspect-square relative overflow-hidden group">
              <img src={GALLERY[2]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Row 2: square + wide + square */}
            <div className="col-span-1 md:col-span-1 aspect-square relative overflow-hidden group">
              <img src={GALLERY[3]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 md:col-span-2 aspect-[2/1] relative overflow-hidden group">
              <img src={GALLERY[4]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-1 aspect-square relative overflow-hidden group">
              <img src={GALLERY[5]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Row 3: wide + wide */}
            <div className="col-span-2 md:col-span-2 aspect-[2/1] relative overflow-hidden group">
              <img src={GALLERY[6]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 md:col-span-2 aspect-[2/1] relative overflow-hidden group">
              <img src={GALLERY[7]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        )}
      </section>

      {/* NEWS & ARTICLES PREVIEW */}
      <section id="news" className="py-12 md:py-24 px-6 max-w-7xl mx-auto border-t border-ink/10">
        <div className="flex items-end justify-between mb-8 md:mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Journal</p>
            <h2 className="font-display text-4xl sm:text-6xl">Latest updates</h2>
          </div>
          <Link to="/news" className="text-sm font-display uppercase inline-flex items-center gap-1 hover:text-brand font-semibold">
            Read all news <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {newsData.length > 0 ? (
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {newsData.slice(0, 3).map((item, idx) => {
              const isPress = item.category === "Press";
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-6 bg-white border border-ink/10 rounded-2xl overflow-hidden p-4 card-lift shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden rounded-xl bg-ink/5 shrink-0 relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-display font-semibold tracking-wider ${
                          item.category === "Joy Visit" ? "bg-blue-50 text-blue-600 border border-blue-100" :
                          item.category === "Education" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                          item.category === "Press" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                          "bg-pink-50 text-pink-600 border border-pink-100"
                        }`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-ink/40 font-medium">
                          {item.date}
                        </span>
                        {isPress && item.publication && (
                          <span className="text-xs text-brand font-semibold italic">
                            via {item.publication}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug text-ink group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-ink/70 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(idx);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand hover:underline cursor-pointer bg-transparent border-none p-0"
                      >
                        View Article
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center py-16 px-6 bg-white border border-ink/10 rounded-[2.5rem] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">News & Updates</h3>
            <p className="text-ink/60 text-sm max-w-md mx-auto mb-6">
              We will soon be sharing newspaper clippings, press coverages, and detailed logs of our field visits here.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand hover:underline"
            >
              Explore Journal <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      {/* Lightbox Component */}
      {lightboxIndex !== null && newsData[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between select-none animate-in fade-in duration-300">
          {/* Header Bar */}
          <div className="w-full flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-sm z-[110]">
            <div className="text-cream">
              <h4 className="font-display text-lg sm:text-xl font-bold leading-snug line-clamp-1">
                {newsData[lightboxIndex].title}
              </h4>
              <div className="flex items-center gap-3 mt-1 text-xs opacity-75">
                <span className="uppercase tracking-widest font-semibold text-brand">
                  {newsData[lightboxIndex].category}
                </span>
                {newsData[lightboxIndex].publication && (
                  <>
                    <span>•</span>
                    <span className="italic">via {newsData[lightboxIndex].publication}</span>
                  </>
                )}
                <span>•</span>
                <span>{newsData[lightboxIndex].date}</span>
              </div>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : Math.min(newsData.length, 3) - 1))
            }
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Previous clipping"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center p-4 max-w-[90vw] max-h-[75vh]">
            <img
              src={newsData[lightboxIndex].thumbnail}
              alt={newsData[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev < Math.min(newsData.length, 3) - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Next clipping"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom description / caption */}
          <div className="w-full text-center text-cream bg-black/40 backdrop-blur-sm py-4 px-6 z-[110]">
            <p className="text-xs sm:text-sm font-light opacity-80 max-w-2xl mx-auto">
              {newsData[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
      </section>

      {/* GET STARTED STEPS */}
      <section id="volunteer" className="py-12 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl mb-8 md:mb-16">How you can help</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`flex gap-6 py-8 border-t border-ink/15 ${i === STEPS.length - 1 ? "border-b" : ""} ${
                i === STEPS.length - 2 ? "md:border-b" : ""
              }`}
            >
              <span className="font-display text-brand text-2xl">{s.n}</span>
              <div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-ink/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://docs.google.com/forms/d/1FzEgjcwpuzY4pXLKU1CwGrvqzGbVhoy5yLifg_YbC28/viewform"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-brand text-ink px-7 py-4 font-display uppercase hover:bg-ink hover:text-cream transition"
        >
          Sign up to volunteer <ArrowUpRight className="w-4 h-4" />
        </a>
      </section>

      {/* FOUNDER / TEAM */}
      <section className="py-12 md:py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-ink">
              <img src={FOUNDER_IMG} alt="From a Sulakshya outreach" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-4 -right-4 bg-brand rounded-full px-5 py-2 font-display uppercase text-xs rotate-6">
              Our People
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Built by volunteers</p>
            <h2 className="font-display text-5xl sm:text-7xl mb-8">For the children, by the community.</h2>
            <p className="text-lg leading-relaxed mb-4 text-ink/80">
              Sulakshya is powered entirely by everyday people — students, professionals,
              homemakers, retirees — who give a few hours a month so a child somewhere can have a better day.
            </p>
            <p className="text-lg leading-relaxed text-ink/80 mb-8">
              Every visit, every kit, every celebration is planned and run by volunteers. There are no
              middlemen, no big offices — just people, showing up, again and again.
            </p>
            <ul className="space-y-2 text-sm text-ink/70 border-l-4 border-brand pl-4">
              <li>100% volunteer-led grassroots organisation</li>
              <li>Active across multiple cities and care homes</li>
              <li>Transparent donations — every contribution is tracked</li>
              <li>Open to anyone with time, talent, or a willing heart</li>
            </ul>
          </div>
        </div>
      </section>



      {/* VOLUNTEER CTA */}
      <section className="py-16 md:py-32 px-6 text-center bg-brand">
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl max-w-5xl mx-auto leading-none">
          Be the change.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-ink/80 text-lg sm:text-xl">
          Join our active group of volunteers and bring joy to underprivileged children.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="https://docs.google.com/forms/d/1FzEgjcwpuzY4pXLKU1CwGrvqzGbVhoy5yLifg_YbC28/viewform"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-8 py-5 font-display uppercase hover:bg-cream hover:text-ink transition"
          >
            Volunteer now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
