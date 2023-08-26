'use client'
import { Metadata, NextApiRequest } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { push } = useRouter()

  useEffect(() => {
    push('/login')
  })

  return (
    <>
    </>
  )
}