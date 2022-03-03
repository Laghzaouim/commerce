import Image from 'next/image'
import * as React from 'react'
import { Logo } from '..'
import s from './Badges.module.css'

export default function Badges() {
  return (
    <>
      <div className="lg:max-w-3xl lg:mx-auto">
        <Image
          src="/badges_mobile.png"
          layout="responsive"
          width={1097}
          height={242}
          alt="Featured in"
        />
      </div>
    </>
  )
}
