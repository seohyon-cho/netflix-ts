const Header = () => {
	return (
		<header className='w-[100%]'>
			<div className='w-[100%] flex justify-between items-center space-x-2 p-5'>
				<h1>Netflix</h1>

				<ul className='flex gap-[32px]'>
					<li className='headerLink'>menu</li>
					<li className='headerLink'>menu</li>
					<li className='headerLink'>menu</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
