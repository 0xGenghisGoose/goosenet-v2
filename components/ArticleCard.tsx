export default function ArticleCard({ articles }: any) {
	return (
		<>
			<div className='p-8 m-4 border-2 border-purple-500'>
				<h1 className='text-xl p-1'>{articles.data().title}</h1>
				<h2 className='p-1'>{articles.data().author}</h2>
				<p className='truncate pt-2'>{articles.data().content}</p>
			</div>
		</>
	);
}
