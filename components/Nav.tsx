import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';

export default function Nav() {
	return (
		<div className='border-2 border-blue-500 w-full h-1/3'>
			<nav className='flex border-2 border-purple-400'>
				goosenet logo
				<ul className='flex justify-left items-center border-2 border-green-400 space-x-16 min-w-1/3 p-4 ml-auto'>
					<li className=''>Projects</li>
					<li>Price Feed</li>
					<li>Articles</li>
					<SearchBar />
					{/* <div className='flex items-center border-2 rounded-lg border-gray-400'>
						<input placeholder='Search' type='search' className=''></input>
						<button type='submit'>
							<MagnifyingGlassIcon className='h-4' />
						</button>
					</div> */}
				</ul>
			</nav>
		</div>
	);
}
