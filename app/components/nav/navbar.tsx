import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constant/constant'
import Button from '../button/button'

const Navigation = () => {
  return (
    <nav className='border-b-2 border-slate-700 flex justify-between max-container padding-container relative z-30 py-5'>
      <Link href='/' className=''>
        <Image src='/hilink-logo.svg' alt='...' width={74} height={29} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map(({ href, key, label }) => {
          return (
            <Link
              href={href}
              key={key}
              className='regular-16 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold duration-100'
            >
              {label}
            </Link>
          )
        })}
      </ul>
      <div className='lg:flex lg:justify-center hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>
      <Image
        src='menu.svg'
        width={32}
        height={32}
        alt='menu'
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default Navigation
