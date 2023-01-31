import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
	return (
		<>
			<div className='flex relative items-center rounded-md border border-gray-400 font-medium'>
				<MagnifyingGlassIcon className='h-4 absolute pl-1 text-black' />
				<input
					className='border border-pink-900 min-w-[75%] pl-6 text-md'
					type='text'
					placeholder='Search'></input>
			</div>
		</>
	);
}
