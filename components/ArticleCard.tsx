// To Do: type article response & get rid of any
// Add styling to card - hover effects, etc

export default function ArticleCard({ articles }: any) {
	return (
		<>
			<div className='p-8 m-4 hover:bg-slate-700 border-b border-dotted'>
				<h1 className='text-xl text-red-500 p-1'>{articles.data().title}</h1>
				<h2 className='p-1'>{articles.data().author}</h2>
				<p className='truncate pt-2'>{articles.data().content}</p>
				<button className='p-2 px-5 mt-5 rounded-xl bg-red-500 hover:bg-red-400 shadow-md shadow-red-500/40'>
					Read
				</button>
			</div>
		</>
	);
}
