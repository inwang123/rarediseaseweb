import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Gift,
  Droplet,
  Scissors,
  ShieldCheck,
  Smile,
  Clock,
  MapPin,
  Heart,
} from "lucide-react";

const quickLinks = [
  {
    icon: Gift,
    color: "#f2960f",
    eyebrow: "Donate Items",
    title: "Festival of Trees",
    href: "#opportunities",
  },
  {
    icon: Droplet,
    color: "#2c5f86",
    eyebrow: "Serve Families",
    title: "Hospital Lunch",
    href: "#dates",
  },
  {
    icon: Scissors,
    color: "#e25275",
    eyebrow: "Create Together",
    title: "Quilt-Tying Night",
    href: "#dates",
  },
  {
    icon: ShieldCheck,
    color: "#ed774a",
    eyebrow: "Serve Families",
    title: "Hospital Dinner",
    href: "#dates",
  },
];

const opportunities = [
  {
    tag: "Festival of Trees",
    status: "Dates & shifts coming soon",
    title: "Bright and Sunshiny Days",
    desc: "CRDA is creating a joyful, elegant tree inspired by the small moments of comfort and hope that carry families through their darkest days. The blankets beneath it will share that same warmth and care.",
    chips: [
      "Purchase a wish-list item",
      "Prepare decorations",
      "Decorate or help with takedown",
    ],
  },
];

const upcomingDates = [
  {
    month: "OCT",
    day: "07",
    category: "Lunch",
    color: "#2c5f86",
    title: "Together at the Table",
    time: "1:00 PM MDT",
    location: "Primary Children's Hospital • Salt Lake City",
    desc: "Help CRDA serve lunch and create a welcoming moment for families spending long days at the hospital.",
    chips: ["Meal setup", "Serve families", "Light cleanup"],
  },
  {
    month: "OCT",
    day: "10",
    category: "Family Activity",
    color: "#e25275",
    title: "World Mental Health Day Quilt-Tying Night",
    time: "6:30–8:30 PM MDT",
    location: "Ronald McDonald House • Downtown Salt Lake City",
    desc: "Tie quilts alongside families staying at the House and help make the evening creative, relaxed and fun.",
    chips: ["Set up stations", "Help families tie quilts", "Activity support"],
  },
  {
    month: "DEC",
    day: "21",
    category: "Dinner",
    color: "#ed774a",
    title: "Together at the Table",
    time: "6:00 PM MDT",
    location: "Primary Children's Hospital • Salt Lake City",
    desc: "Help CRDA provide a warm holiday-season dinner and one less thing for hospital families to worry about.",
    chips: ["Meal setup", "Serve families", "Light cleanup"],
  },
];

const steps = [
  {
    num: 1,
    title: "Choose an event",
    desc: "Pick the opportunity that works for you.",
  },
  {
    num: 2,
    title: "Complete the form",
    desc: "Tell us who is coming and how you can help.",
  },
  {
    num: 3,
    title: "Check your email",
    desc: "We'll send final arrival details and requirements.",
  },
];

export default function Volunteer() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Volunteer";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section
        className="py-10 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #d0fcff 0%, #e4c3ecdc 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-500 mb-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[#2c5f86] font-medium">Volunteer</span>
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
                Make a Difference with Us
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2c5f86]">
                Volunteer with CRDA
              </h1>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Join an upcoming service project and help children with rare
              diseases and their families feel seen, supported, and
              surrounded by hope.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {quickLinks.map(({ icon: Icon, color, eyebrow, title, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-center gap-3 bg-white rounded-xl shadow-sm p-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}1a` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} strokeWidth={2} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {eyebrow}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {title}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section id="opportunities" className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow">Current Opportunities</p>
            <h2 className="h2-std mb-0">Choose how you'd like to help.</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm">
            Each opportunity has its own sign-up form. Final instructions
            will be emailed to confirmed volunteers.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {opportunities.map((op) => (
            <div
              key={op.title}
              className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row"
            >
              <div
                className="w-full md:w-56 flex-shrink-0 flex items-center justify-center py-10"
                style={{
                  background: "linear-gradient(135deg, #f2960f 0%, #ed774a 100%)",
                }}
              >
                <span className="w-20 h-20 rounded-full bg-white/25 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <Smile className="w-8 h-8 text-[#f2960f]" strokeWidth={2} />
                  </span>
                </span>
              </div>

              <div className="p-6 flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-500">
                    {op.tag}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                    {op.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {op.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {op.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {op.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <span
                    className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white cursor-default select-none"
                    style={{ backgroundColor: "#1a3663" }}
                    title="Coming soon"
                  >
                    Shop the Amazon Wish List →
                  </span>
                  <span
                    className="text-sm font-semibold px-5 py-2.5 rounded-lg border-2 border-[#1a3663] text-[#1a3663] cursor-default select-none"
                    title="Sign-up form coming soon"
                  >
                    Volunteer for the Tree
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Volunteer Dates */}
      <section id="dates" className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow">In-Person Service</p>
              <h2 className="h2-std mb-0">Upcoming volunteer dates</h2>
            </div>
            <span className="text-3xl font-bold text-gray-300">2026</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {upcomingDates.map((event) => (
              <div
                key={event.title + event.day}
                className="flex flex-col sm:flex-row gap-5 p-6 border-l-4"
                style={{ borderLeftColor: event.color }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center"
                  style={{ backgroundColor: `${event.color}1a` }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: event.color }}
                  >
                    {event.month}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {event.day}
                  </span>
                </div>

                <div className="flex-1">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: event.color }}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {event.location}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {event.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-xs px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 text-right">
                  <span
                    className="text-sm font-semibold cursor-default select-none"
                    style={{ color: event.color }}
                    title="Sign-up form coming soon"
                  >
                    Sign Up for {event.category} →
                  </span>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Fillable PDF sign up
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-12" style={{ backgroundColor: "#eef5f8" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow">What Happens Next?</p>
          <h2 className="h2-std">Signing up is simple.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-2"
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#2c5f86" }}
                >
                  {step.num}
                </span>
                <h3 className="font-bold text-gray-900 text-base">
                  {step.title}
                </h3>
                <p className="body-std">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8" style={{ backgroundColor: "#1a3663" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#e25275" }}
            >
              <Heart className="w-5 h-5 text-white" fill="white" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">
                Can't Make These Dates?
              </p>
              <p className="text-white font-semibold text-base sm:text-lg">
                Stay connected for future opportunities.
              </p>
            </div>
          </div>
          <span
            className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm bg-white text-[#1a3663] cursor-default select-none"
            title="Coming soon"
          >
            Join the Volunteer List →
          </span>
        </div>
      </section>
    </div>
  );
}
