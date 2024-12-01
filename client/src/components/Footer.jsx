import React from "react";
import { FaGithub, FaTwitter, FaYoutube, FaHashnode } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#c5ddfa] font-workSans backdrop-blur-md pt-12 pb-6">
			<div className="mx-auto px-4 overflow-hidden sm:px-6 lg:px-8 pt-8 border-t-2 border-white">
				<nav
					className="-mx-5 -my-2 flex flex-wrap justify-center"
					aria-label="Footer"
				>
					<Link
						to="#"
						className="px-5 py-2 text-base font-semibold text-blue-700 hover:text-blue-500"
					>
						About
					</Link>
					<Link
						to="#"
						className="px-5 py-2 text-base font-semibold text-blue-700 hover:text-blue-500"
					>
						Pricing
					</Link>
					<Link
						to="https://github.com/Judge-Paul/coverwrite-ai"
						className="px-5 py-2 text-base font-semibold text-blue-700 hover:text-blue-500"
					>
						Contributing
					</Link>
				</nav>
				<div className="mt-8 flex justify-center space-x-4">
					<Link
						to="https://x.com/jadge_dev"
						className="text-blue-700 hover:text-blue-500 px-1.5 py-1 rounded-md"
					>
						<span className="sr-only">Twitter</span>
						<FaTwitter className="h-6 w-6" />
					</Link>
					<Link
						to="https://github.com/Judge-Paul"
						className="text-blue-700 hover:text-blue-500 px-1.5 py-1 rounded-md"
					>
						<span className="sr-only">GitHub</span>
						<FaGithub className="h-6 w-6" />
					</Link>
					<Link
						to="https://hashnode.com/@jadge"
						className="text-blue-700 hover:text-blue-500 px-1.5 py-1 rounded-md"
					>
						<span className="sr-only">Hashnode</span>
						<FaHashnode className="h-6 w-6" />
					</Link>
					<Link
						to="https://youtube.com/@jadge_dev23"
						className="text-blue-700 hover:text-blue-500 px-1.5 py-1 rounded-md"
					>
						<span className="sr-only">Youtube</span>
						<FaYoutube className="h-6 w-6" />
					</Link>
				</div>
				<div className="text-center mt-10">
					<Link
						to="https://github.com/Judge-Paul/coverwrite-ai/issues"
						className="mt-5 text-base text-blue-700"
					>
						Have a feature you want to add or noticed a bug?{" "}
						<span className="hover:text-blue-500">Create an Issue</span>
					</Link>
				</div>
				<p className="mt-5 text-center text-base text-blue-700">
					&copy; {year} CoverWriteAI. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
