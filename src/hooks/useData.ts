import { useCallback } from "react"
import { Info } from "../components/table"

export function useData () {
  const cb = useCallback(function () {
    const data: Info[] = [
      {id: '1', price: "001123.50", side: "LONG"},
      {id: '2', price: "001124.50", side: "SHORT"},
      {id: '3', price: "001121.00", side: "LONG"},
      {id: '4', price: "001113.50", side: "LONG"},
      {id: '5', price: "001129.50", side: "SHORT"},
      {id: '6', price: "001131.00", side: "SHORT"}
    ]
    return data;
  }, [])
  return cb()
}