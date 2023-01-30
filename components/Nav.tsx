export default function Nav() {
	return (
		<div className='border-2 border-blue-500 w-full h-1/3'>
			<nav className='flex border-2 border-purple-400'>
				goosenet logo
				<ul className='flex justify-left border-2 border-green-400 space-x-20 w-1/3 p-4 ml-auto'>
					<li className=''>Projects</li>
					<li>Price Feed</li>
					<li>Articles</li>
				</ul>
			</nav>
		</div>
	);
}
