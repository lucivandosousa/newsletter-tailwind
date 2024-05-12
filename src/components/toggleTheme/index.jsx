import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import React, { useEffect } from 'react'

function toggle() {
  document.documentElement.classList.toggle('dark')
}

const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function ToggleTheme() {

  useEffect(() => {
    systemPreference && document.documentElement.classList.add('dark')
  })

  return (
    <div className='hidden sm:block'>
      <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer'onClick={toggle}/>
      <SunIcon className='h-8 text-gray-100 hidden dark:block cursor-pointer'onClick={toggle}/>
    </div>
  )
}
