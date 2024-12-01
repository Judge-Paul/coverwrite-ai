import React, { lazy, Suspense } from "react";
import Icon from "../assets/icon.webp";

function Spinner() {
	return (
		<div className="bg-[#c5ddfa] min-h-screen flex justify-center items-center">
			<div className="text-center">
				<div className="animate-spin">
					<img src={Icon} alt="Spinner" className="w-16 h-16 mx-auto" />
				</div>
				<p className="mt-2 text-2xl text-[#004fb6] font-semibold">Loading...</p>
			</div>
		</div>
	);
}

export default function lazyLoading(lazyImport) {
	const LazyComponent = lazy(lazyImport);

	return (props) => (
		<Suspense fallback={<Spinner />}>
			<LazyComponent {...props} />
		</Suspense>
	);
}
