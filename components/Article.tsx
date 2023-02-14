import dayjs from 'dayjs';

export default function Article({ article }: any) {
	return (
		<div className='border-2 border-pink-400 text-center'>
			{/* Banner Image */}
			<div className='border-2 border-yellow-300'>
				<img
					src={article?.bannerImg}
					alt='banner-img'
					className=''
					height='20vh'></img>
			</div>
			<div className='p-12'>
				{/* Title, time to read, author, timestamp, etc */}
				<div className='pb-4'>{article?.title}</div>
				<div className='pb-2 text-red-500'>{article?.author}</div>
				<div className='pb-8'>
					{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}
				</div>
				{/* Article copy */}
				<p className='p-2 m-4'>{article?.content}</p>
			</div>
		</div>
	);
}
