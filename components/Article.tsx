import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// To Do: Figure out how to scale banner img down OR put in bg

export default function Article({ article }: any) {
	const router = useRouter();

	return (
		<div className='text-center'>
			{/* Banner Image */}
			<div className='h-2/3'>
				<img
					src={article?.bannerImg}
					alt='banner-img'
					className='object-fit h-full w-full'></img>
			</div>
			<div className='p-10 m-4 justify-center'>
				{/* Title, time to read, timestamp */}
				<div className='pb-4 font-extrabold tracking-widest text-3xl text-red-500'>
					{article?.title}
				</div>

				<div className='pb-4 mx-96 border-b border-dotted border-slate-500/60 tracking-wide'>
					{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}
				</div>
				{/* Article copy */}
				<p className='p-4 m-4'>{article?.content}</p>

				{/* Back button */}
				<button
					className='flex p-2 items-center justify-center mb-2 px-5 rounded-xl bg-red-500 hover:bg-red-400 shadow-md shadow-red-500/40'
					onClick={() => router.push(`/ArticleList`)}>
					<ArrowLeftIcon className='h-4 mr-2' /> Back to articles
				</button>
			</div>
		</div>
	);
}
