import { useContext } from "react"
import { ThemeContext } from "../context"

export type Info = {
  id: string;
  price: string;
  side: "LONG" | "SHORT" 
}

type Props = {
  event: Info[]
} 

export function Table (props: Props) {
  const theme = useContext(ThemeContext)
  const { event } = props
  return (
    <>
      <h2>Data Table</h2>
      <div style={{ backgroundColor: theme.background, color: theme.color }}>
        {event.map(item => 
          <p key={item.id}>{`${item.price} | ${item.side}`}</p>
        )}
      </div>
    </>
  )
}