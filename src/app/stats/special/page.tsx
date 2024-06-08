'use client'
import SpecialStatsComponent from '@/app/char/create/stats/StatsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SpecialStatsComponent char={char} setChar={setChar} />
}

export default SpecialPage
