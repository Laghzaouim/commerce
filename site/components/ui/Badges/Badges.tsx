import Image from 'next/image'
import * as React from 'react'
import { Logo } from '..'
import s from './Badges.module.css'

export default function Badges() {
  return (
    <>
      <h3 className="text-3xl mb-8">Featured in ...</h3>
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
