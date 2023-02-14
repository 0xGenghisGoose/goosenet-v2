import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// To Do: type article response & get rid of any
// Add banner image

export default function ArticleCard({ articles }: any) {
	const router = useRouter();

	return (
		<>
			<div className='p-8 m-4 flex flex-col items-center hover:scale-110 border-b border-dotted border-slate-500/80'>
				<h1 className='text-xl font-medium text-red-500 p-1'>
					{articles.data().title}
				</h1>
				<h2 className='p-2'>
					{dayjs.unix(articles.data().timestamp).format('MMMM D, 2023')}
				</h2>
				<p className='truncate pt-2 w-[80%]'>{articles.data().content}</p>
				<button
					className='flex text-center items-center p-2 px-5 mt-5 rounded-xl bg-red-500 hover:bg-red-400 shadow-md shadow-red-500/40'
					onClick={() => router.push(`/articles/${articles.id}`)}>
					Read <ArrowRightIcon className='h-4 ml-2' />
				</button>
			</div>
		</>
	);
}
