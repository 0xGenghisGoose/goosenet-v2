import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
	return (
		<>
			<div className='flex relative items-center rounded-md border border-gray-400'>
				<MagnifyingGlassIcon className='h-4 absolute pl-1' />
				<input
					className='border border-pink-900 min-w-[75%] pl-6'
					type='text'></input>
			</div>
		</>
	);
}
