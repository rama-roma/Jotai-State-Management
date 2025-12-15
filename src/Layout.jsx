import { Button } from 'antd'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='max-w-[1400px] m-auto p-4'>
        <nav className='flex items-center justify-center gap-[20px]'>
            <Link to='/home'>
              <Button type='primary'>Home</Button>
            </Link>
            <Link to='/sync'>
              <Button type='primary'>Sync</Button>
            </Link>
            <Link to='/async'>
              <Button type='primary'>Async</Button>
            </Link>
        </nav>
      </header>
      <main className='max-w-[1400px] m-auto p-4'>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout