import { ReactNode } from "react"


const Column = ({ children } : { children:ReactNode }) => {
  return (
    <div className='column'>{children}</div>
  )
}

export default Column