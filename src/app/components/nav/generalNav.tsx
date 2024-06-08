import Nav from '@/app/components/common/Nav'
import { NAV_HEIGHT } from '@/app/constants'
import React from 'react'

const GeneralNav: React.FC = () => {
	const routes = [
		{ path: '/general/background', label: 'Background' },
		{ path: '/general/frame', label: 'Frame' },
		{ path: '/general/traits', label: 'Traits' },
	]
	return <Nav routes={routes} offset={NAV_HEIGHT} />
}

export default GeneralNav