import { ReactNode } from "react"


const Column = ({ children, rows } : { children:ReactNode, rows:number }) => {
  const height = `${rows * 25}vh`; 
  return (
    <div className="column" style={{ height }}>{children}</div>
  )
}

export default Column;
