import dayjs from 'dayjs';

export default function Article({ article }: any) {
	return (
		<div>
			{/* Banner Image */}
			<div>{article?.title}</div>
			{/* Title, time to read, author, timestamp, etc */}
			<div>{article?.author}</div>
			<div>{dayjs.unix(article?.timestamp).format('MMMM D, 2023')}</div>
			{/* Article copy */}
			<p>{article?.content}</p>
		</div>
	);
}
