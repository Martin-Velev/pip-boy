import { NAV_HEIGHT } from '@/app/constants'
import Link from 'next/link'
import { FC } from 'react'

type Route = {
	path: string
	label: string
}

type NavProps = {
	routes: Route[]
	offset?: number
	h?: number
}

const BASE_OFFSET = 10

const Nav: FC<NavProps> = ({ routes, h = NAV_HEIGHT, offset = 0 }) => {
	const navClass = `bottom-${BASE_OFFSET + offset} absolute w-full h-${h}`
	return (
		// TODO: class fucks up until you add it manually. WTF?
		<nav className={navClass + 'bottom-20'}>
			<ul className='flex flex-row w-full justify-center'>
				{routes.map((route) => (
					<li key={route.path} className='flex flex-row mx-12'>
						<Link href={route.path}> {route.label} </Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
