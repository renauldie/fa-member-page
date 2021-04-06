import React from 'react';
import propTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/images/logo-2.svg';

function Header({ onLight, location }) {
	const linkColor = onLight ? 'text-gray-900' : 'text-white';

	const linkCTA =
		location.pathname.indexOf('/login') > -1
			? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
			: `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

	const textCTA =
		location.pathname.indexOf('/login') > -1 ? 'Register' : 'Join Us';

	return (
		<header className={['flex justify-between items-center']}>
			<div style={{ height: 54, zIndex: 50 }}>
				<Logo className={onLight ? 'on-light' : 'on-dark'}></Logo>
			</div>
			<ul className='flex'>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-300 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-300 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							Regulation
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-300 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							About Team
						</a>
					</Link>
				</li>
				{/* <li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={linkCTA}
						className='bg-blue-800 hover:bg-blue-600 transition-all duration-200 text-white hover:text-gray-900 text-lg px-6 py-3 font-medium ml-6'>
						{textCTA}
					</a>
				</li> */}
			</ul>
		</header>
	);
}

Header.propTypes = {
	onLight: propTypes.bool,
};

export default withRouter(Header);
