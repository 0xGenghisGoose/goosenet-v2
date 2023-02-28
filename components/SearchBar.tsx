import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');
	const router = useRouter();

	const handleChange = (e: any) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		router.push(`/articles/${searchInput}`);
	}

	return (
		<>
			<div className='flex relative items-center rounded-lg font-medium'>
				<MagnifyingGlassIcon className='h-2 md:h-4 absolute pl-1 text-black' />
				<input
					className='max-w-[75%] md:min-w-[85%] pr-0 pl-6 text-sm md:text-md text-black focus:outline-red-500'
					type='text'
					placeholder='Search'
					onChange={handleChange}
					value={searchInput}></input>
			</div>
		</>
	);
}
