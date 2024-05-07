import React, { FC, ReactNode } from 'react'

interface IMainContent {
    children : React.ReactNode
}
const  MainContent : FC<IMainContent> = ({children}) => {
  return (
    <section className="grid col-span-4 bg-slate-100">{children}</section>
  )
}

export default MainContent