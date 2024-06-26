import Nav from '@/components/Nav'

const RootNav = () => {
	const routes = [
		{ path: '/general', label: 'GENERAL' },
		{ path: '/stats', label: 'STATS' },
		{ path: '/items', label: 'ITEMS' },
		{ path: '/data', label: 'DATA' },
	]
	return <Nav routes={routes} />
}

export default RootNav
