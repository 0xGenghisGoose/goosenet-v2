import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// To Do: make sm, md breakpts
// To Do: Type the article response
export default function Article({ article }: any) {
	const router = useRouter();

	return (
		<div className='text-center border border-purple-400 mb-56'>
			{/* Banner Image */}
			<div className='h-2/3'>
				<img
					src={article?.bannerImg}
					alt='banner-img'
					className='object-fit w-full'></img>
			</div>
			<div className='lg:p-7 md:-mt-20 lg:m-4 lg:mt-0 justify-center border border-yellow-400'>
				{/* Title, time to read, timestamp */}
				<div className='lg:pb-4 font-semibold lg:font-extrabold lg:tracking-widest lg:text-3xl text-red-500'>
					{article?.title}
				</div>

				<div className='lg:pb-4 lg:mx-96 border-b border-dotted border-slate-500/60 tracking-wide'>
					{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}
				</div>
				{/* Article copy */}
				<p className='p-4 m-2 mx-4'>{article?.content}</p>

				{/* Back button */}
				<button
					className='flex p-2 items-center justify-center lg:mb-2 px-5 rounded-xl bg-red-500 hover:bg-red-400 shadow-md shadow-red-500/40'
					onClick={() => router.push(`/ArticleList`)}>
					<ArrowLeftIcon className='h-4 lg:mr-2' /> Back to articles
				</button>
			</div>
		</div>
	);
}
