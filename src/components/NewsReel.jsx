import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewsReel() {
	const [items, setItems] = useState([]);
	const [playingId, setPlayingId] = useState(null);

	useEffect(() => {
		// Swap this for a fetch() to your CMS/API if you move off static JSON
		import("../data/news.json").then((mod) => {
			const sorted = [...mod.default].sort(
				(a, b) => new Date(b.date) - new Date(a.date)
			);
			setItems(sorted.slice(0, 6)); // most recent N
		});
	}, []);

	if (!items.length) return null;

	return (
		<section className="relative overflow-hidden bg-white py-16 px-6 md:px-16">
			<div className="max-w-5xl mx-auto">
				{/* ── Header, mirrors Mission section ── */}
				<div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left mb-10 gap-4">
					<div className="flex flex-col gap-2">
						<p
							className="text-xs font-bold uppercase tracking-widest"
							style={{ color: "#2c5f86" }}
						>
							Latest News
						</p>
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
							What's happening at CRDA
						</h2>
					</div>

					{/* <Link
						to="/news"
						className="inline-block px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md self-center md:self-auto"
						style={{
							backgroundColor: "#2c5f86",
							color: "white",
						}}
					>
						All News →
					</Link> */}
				</div>

				{/* ── Scrollable reel ── */}
				<div
					className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth"
					style={{ scrollbarWidth: "thin" }}
				>
					{items.map((item) => {
						const isPlaying = playingId === item.id;
						const CardWrapper = item.youtubeId ? "div" : Link;
						const wrapperProps = item.youtubeId
							? {}
							: { to: item.url };

						return (
							<CardWrapper
								key={item.id}
								{...wrapperProps}
								className="group relative flex-shrink-0 w-72 snap-start rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1"
								style={{
									boxShadow: "0 8px 32px rgba(44,95,134,0.12)",
								}}
							>
								{item.youtubeId ? (
									<div className="w-full aspect-video bg-black">
										{isPlaying ? (
											<iframe
												className="w-full h-full"
												src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
												title={item.title}
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										) : (
											<button
												type="button"
												onClick={() => setPlayingId(item.id)}
												className="relative w-full h-full block"
												aria-label={`Play video: ${item.title}`}
											>
												<img
													src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
													alt=""
													loading="lazy"
													className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
												/>
												<span className="absolute inset-0 flex items-center justify-center">
													<span
														className="flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-200 group-hover:scale-110"
														style={{
															backgroundColor: "rgba(44,95,134,0.85)",
														}}
													>
														<svg
															viewBox="0 0 24 24"
															fill="white"
															className="w-5 h-5 ml-0.5"
														>
															<path d="M8 5v14l11-7z" />
														</svg>
													</span>
												</span>
											</button>
										)}
									</div>
								) : (
									item.image && (
										<div className="w-full h-40 overflow-hidden">
											<img
												src={item.image}
												alt=""
												loading="lazy"
												className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
											/>
										</div>
									)
								)}

								<div className="flex flex-col gap-2 p-5">
									<span
										className="text-xs font-bold uppercase tracking-widest"
										style={{ color: "#7bb1bf" }}
									>
										{formatDate(item.date)}
									</span>
									<h3 className="text-base font-bold text-gray-900 leading-snug">
										{item.title}
									</h3>
									<p className="text-sm leading-relaxed text-gray-500 line-clamp-3">
										{item.summary}
									</p>
								</div>
							</CardWrapper>
						);
					})}
				</div>
			</div>
		</section>
	);
}

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}
