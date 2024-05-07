import React, { FC } from 'react'

const ContentLayout : FC<{children : React.ReactNode}> = ({children}) => {
  return (
      <main className='flex p-4 justify-center'>
        {children}
    </main>
  )
}

export default ContentLayout