'use client'
import FramePicker from '@/app/char/create/frames/FramePicker'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <FramePicker char={char} setChar={setChar} />
}

export default Page
