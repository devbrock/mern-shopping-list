import React from 'react';

export default function Navbar() {
	return (
		<div className="bg-gray-800 p-4 flex">
			<ul className="container mx-auto">
				<li className="mr-6">
					<a
						className="text-white hover:text-gray-400 font-bold text-2xl"
						href="/"
					>
						Shopping List
					</a>
				</li>
			</ul>
		</div>
	);
}
