import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase';

// Might need to make state from db shareable across whole app
export default function SearchBar() {
	const [searchInput, setSearchInput] = useState('');
	const [enterSearch, setEnterSearch] = useState('');
	const [articles, setArticles] = useState<DocumentData[]>([]);
	const router = useRouter();

	const handleChange = (e: any) => {
		e.preventDefault();
	};

	const handleKeyDown = (e: any) => {
		e.preventDefault();
		if (e.key === 'Enter') {
			setSearchInput(e.target.value);
			try {
				router.push(`/articles/${searchInput}`);
			} catch (err) {
				console.error(err);
			}
		}
	};

	const compare = () => {};

	return (
		<>
			<div className='flex relative items-center rounded-lg font-medium'>
				<MagnifyingGlassIcon className='h-2 md:h-4 absolute pl-1 text-black' />
				<input
					className='max-w-[75%] md:min-w-[85%] pr-0 pl-6 text-sm md:text-md text-black focus:outline-red-500'
					type='text'
					placeholder='Search'
					value={searchInput}
					onChange={handleChange}
					onKeyDown={handleKeyDown}></input>
			</div>
		</>
	);
}
