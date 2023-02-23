import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Nav() {
	return (
		<div className='sticky top-0 w-full p-2 md:p-4 bg-gradient-to-r from-gray-700 via-slate-600 to-slate-700 border-b border-red-400/70'>
			<nav className='flex items-center'>
				<Link href='/'>
					<img
						src='/goosenet-01.png'
						alt='goosenet-logo'
						className='h-8 lg:h-10 shrink-0'></img>
				</Link>

				<ul className='flex justify-left items-center text-sm md:text-lg lg:space-x-16 space-x-8 p-4 ml-auto'>
					<li className='hover:text-red-500'>Projects</li>
					<li className='hover:text-red-500'>
						<Link href='/PriceFeed' className='hover:text-red-500'>
							Price Feed
						</Link>
					</li>
					<li className='hover:text-red-500'>
						<Link href='/ArticleList'>Articles</Link>
					</li>
					<SearchBar />
				</ul>
			</nav>
		</div>
	);
}
