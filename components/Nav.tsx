import Link from 'next/link';
import SearchBar from './SearchBar';

// To Do:
// Sticky?
// Why arent hover working?
// Add a little padding under logo to make it line up correctly?

export default function Nav() {
	return (
		<div className='border-2 border-blue-500 w-full h-2/3 p-4 bg-gradient-to-r from-gray-700 via-slate-600 to-slate-700'>
			<nav className='flex items-center border-2 border-purple-400'>
				<img src='/goosenet-01.png' className='h-10'></img>
				<ul className='flex justify-left items-center border-2 border-green-400 space-x-16 min-w-1/3 p-4 ml-auto'>
					<li className='hover:outline-red-500'>Projects</li>
					<li className='hover:outline-red-500'>
						<Link href='/PriceFeeds'>Price Feeds</Link>
					</li>
					<li className='hover:outline-red-500'>Articles</li>
					<SearchBar />
				</ul>
			</nav>
		</div>
	);
}
