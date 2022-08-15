import React from 'react'

const links = [
  {
    name: 'Projects',
    link: '',
  },
  {
    name: 'About Me',
    link: ''
  },
  {
    name: 'Contact',
    link: ''
  }
]

export default function Header() {
  return (
    <div className='flex justify-evenly py-5'>
      {links.map((item, index) => {
        // return <span className='border border-slate-300 hover:border-slate-500 bg-slate-200 hover:bg-slate-400 rounded-md py-3 px-6'>
        //   {item.name}
        // </span>
        return (<a to={item.link} className='flex justify-center w-1/3 hover:opacity-50'>
          <span className=' border-b border-slate-700 text-3xl'>{item.name}</span>
        </a>)
      })}
    </div>
  )
}
