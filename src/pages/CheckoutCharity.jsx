import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CreditCard, RefreshCcw, TrendingUp, CalendarCheck, HeartHandshake } from "lucide-react";

{/* Notes:
  Go to index.css to see tailwind aliases.
  Use tailwind aliases to reduce the amount of tailwind classes in this file.
  Optimally, refactor this file to use some standard components for cards, buttons, and links to reduce code duplication.
*/}

const howItWorks = [
    {
        icon: CreditCard,
        color: "#2c5f86",
        title: "Add CRDA as a charity",
        desc: "in your point-of-sale system.",
    },
    {
        icon: RefreshCcw,
        color: "#ed774a",
        title: "Customers round up",
        desc: "purchases to the nearest dollar.",
    },
    {
        icon: TrendingUp,
        color: "#0f7d8c",
        title: "Donations are tracked",
        desc: "automatically, no extra work for you.",
    },
    {
        icon: CalendarCheck,
        color: "#f2960f",
        title: "Once per month",
        desc: "your business sends CRDA the total collected.",
    },
    {
        icon: HeartHandshake,
        color: "#1a3663",
        title: "All donations",
        desc: "are tax-deductible.",
    },
];

export default function CheckoutCharity() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Checkout Charity";
        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero */}
            <section className="py-12 max-w-5xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 min-w-0 text-center md:text-left">
                    <p className="uppercase tracking-wide text-sm font-semibold text-[#ed774a] mb-2">
                        Checkout Charity
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1a3663] mb-4 leading-tight">
                        Turn Spare Change Into{" "}
                        <span className="text-[#ed774a]">Life-Saving Treatments</span>
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
                        Partner with the Children's Rare Disease Alliance through your
                        point-of-sale system, and let your customers round up their
                        purchases to fund treatment development for kids with rare
                        diseases.
                    </p>
                </div>
            </section>

            {/* How Your Business Can Help */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 md:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-2 text-center">
                        How Your Business Can Help
                    </h2>
                    <hr className="w-16 border-t-2 border-[#ed774a] mx-auto mb-10" />

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                        {howItWorks.map(({ icon: Icon, color, title, desc }) => (
                            <div key={title} className="flex flex-col items-center text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                                <p className="text-gray-900 font-bold text-base mb-1">{title}</p>
                                <p className="body-std text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            {/*
            <section className="bg-[#1a3663] py-10">
                <div className="max-w-5xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-white text-base md:text-lg font-medium max-w-xl">
                        Every penny of spare change helps fund treatment development for
                        children with rare diseases.
                    </p>
                    <Link
                        to="/"
                        className="flex-shrink-0 text-sm font-semibold px-6 py-3 rounded-lg !text-[#1a3663] bg-white hover:bg-[#7bb1bf] hover:!text-white transition-colors whitespace-nowrap"
                    >
                        Get Involved →
                    </Link>
                </div>
            </section>
            */}
        </div >
    );
}