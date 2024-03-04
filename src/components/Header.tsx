import React, { useEffect } from 'react'

const Header = () => {
  const classNameContainer = 'container py-8 mb-[80px] header'

  return (
    <header className='py-8 mb-[80px] shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] ' id="headerInques">
        <div className='container flex justify-between items-center w-full mx-auto'>
            <img src="https://home.humanisgroup.co.id/InQues/images/Logo-small.png"  />
            <p>Login</p>
        </div>

    </header>
  )
}

export default Header