export default function Article({ article }: any) {
	return (
		<div>
			{/* Banner Image */}
			<div>{article?.title}</div>
			{/* Title, time to read, author, timestamp, etc */}
			<div>Title stuff here</div>
			{/* Article copy */}
			<p>Article copy here</p>
		</div>
	);
}
