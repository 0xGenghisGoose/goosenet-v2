export default function Footer() {
	return (
		<>
			<footer className='border-t-4 border-slate-500 border-double py-3 bottom-0 w-[100%] absolute text-center tracking-wide font-semibold text-md'>
				Made By{' '}
				<span className='text-red-500'>
					<a
						href='https://github.com/0xGenghisGoose'
						target='_blank'
						rel='noreferrer'>
						0xGenghisGoose
					</a>
				</span>
			</footer>
		</>
	);
}
