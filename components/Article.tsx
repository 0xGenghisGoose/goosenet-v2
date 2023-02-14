import dayjs from 'dayjs';

// To Do: Figure out how to scale banner img down OR put in bg

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
				{/* Title, time to read, timestamp */}
				<div className='pb-4 font-extrabold tracking-widest text-3xl text-red-500'>
					{article?.title}
				</div>

				<div className='pb-4 mx-96 border-b border-dotted border-slate-500/60 tracking-wide'>
					{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}
				</div>
				{/* Article copy */}
				<p className='p-4 pb-8 m-4'>{article?.content}</p>
			</div>
		</div>
	);
}
