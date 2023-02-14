import dayjs from 'dayjs';

export default function Article({ article }: any) {
	return (
		<div className='border-2 border-pink-400 text-center'>
			{/* Banner Image */}
			<div className='h-2/3'>
				<img
					src={article?.bannerImg}
					alt='banner-img'
					className='object-fit h-full w-full'></img>
			</div>
			<div className='p-10 m-4'>
				{/* Title, time to read, author, timestamp, etc */}
				<div className='pb-4 font-bold tracking-wider text-3xl'>
					{article?.title}
				</div>
				<div className='pb-2 text-red-500'>{article?.author}</div>
				<div className='pb-8'>
					{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}
				</div>
				{/* Article copy */}
				<p className='p-2 pb-8 m-4'>{article?.content}</p>
			</div>
		</div>
	);
}
