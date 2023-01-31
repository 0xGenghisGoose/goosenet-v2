import SearchBar from './SearchBar';

// To Do:
// Add logo
// Add color
// Sticky?

export default function Nav() {
	return (
		<div className='border-2 border-blue-500 w-full h-2/3 p-4'>
			<nav className='flex border-2 border-purple-400'>
				goosenet logo
				<ul className='flex justify-left items-center border-2 border-green-400 space-x-16 min-w-1/3 p-4 ml-auto'>
					<li className=''>Projects</li>
					<li>Price Feed</li>
					<li>Articles</li>
					<SearchBar />
				</ul>
			</nav>
		</div>
	);
}
