'use client'
import React, { FC, useState } from 'react'
import { Stat } from '@customTypes/stat'
import { MAX_STAT, MIN_STAT, STARTING_STAT_POINTS } from '@app/constants'
import { Char } from '../../../types/char'
import { CharProps } from '@/app/common/props'

const StatsComponent: FC<CharProps> = ({ char, setChar }) => {
	const { availableStatPoints } = char

	const stats: Stat[] = Object.keys(char.stats) as Stat[]
	const statList = stats.map((stat: Stat) => {
		const incrementStat = (increment: -1 | 1) => {
			// No points available
			const inssuficientPoints = increment === 1 && availableStatPoints === 0
			// Can't reduce stat below 1
			const statUnderflow = increment === -1 && char.stats[stat] === MIN_STAT
			// Can't increase stat above 10
			const statOverflow = increment === 1 && char.stats[stat] === MAX_STAT
			if (inssuficientPoints || statUnderflow || statOverflow) {
				return
			}

			const newAvailableStatPoints = char.availableStatPoints - increment
			console.log(increment)
			console.log(newAvailableStatPoints)
			// Update points

			// Update char
			let newStats = { ...char.stats }
			newStats[stat] = newStats[stat] + increment
			setChar({ ...char, availableStatPoints: newAvailableStatPoints, stats: newStats })

			// Mod skills
		}

		return (
			<li key={`stat-${stat}`} className='flex flex-row'>
				<div className='w-1/2 uppercase'>{stat}</div>
				<button className='w-1/6' onClick={(e) => incrementStat(-1)}>
					-
				</button>
				<div className='w-1/6 text-center'>{char.stats[stat]} </div>
				<button className='w-1/6' onClick={(e) => incrementStat(1)}>
					+
				</button>
			</li>
		)
	})

	return (
		<>
			<div className='w-full items-center flex flex-col justify-center justify-between text-2xl columns-1'>
				<div className='w-full p-10'>
					<div className='w-1/2'>
						<label className='mr-5'>Available Points</label>
						{availableStatPoints}
					</div>
					{/* <button onClick={reset} id='reset-button'>
						Reset
					</button> */}
				</div>

				<div className='w-full p-10'>
					<ul className='max-w-sm'>{statList}</ul>
				</div>
			</div>
		</>
	)
}

export default StatsComponent
