import style from "../styles/Home.module.css"
import Box from "@/components/Box/box"

export default function Home() {
  return (
    <div>
      <h1>welcome</h1>
      <div className={style.main}>
        <Box color={"blue"} num={1} />
        <Box color={"green"} num={2} />
        <Box color={"red"} num={3} />

      </div>
    </div >
  )
}
