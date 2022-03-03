import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Button from '../Button'
import Amazon from '@components/icons/Amazon'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  const handleClick = () => {
    window.open('https://www.amazon.com')
  }

  return (
    <div className="bg-accent-9 border-b border-t border-accent-2 h-96 lg:h-screen bg-cover bg-center flex-grow">
      <Container className="h-full">
        <div className={s.root}>
          <div>
            <h2 className={s.title}>{headline}</h2>
            <p className={s.description}>{description}</p>
          </div>
          <div className={s.button}>
            <Link href="/">
              <Button
                className="flex items-center mt-8"
                aria-label="Shop Now"
                type="button"
                href="/"
                onClick={handleClick}
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
