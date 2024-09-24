import Link from 'next/link'
import React from 'react'

const Sidebar = ({className}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Link href="/">Side bar</Link>
    </div>
  )
}

export default Sidebar