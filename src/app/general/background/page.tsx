'use client'
import BackgroundPicker from '@/app/char/create/bacground/BackgroundPicker'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <BackgroundPicker char={char} setChar={setChar} />
}

export default Page