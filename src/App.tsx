import { useState } from "react"
import "./App.css"
import ConvertedHistory from "./components/ConvertedHistory"
import RawHandHistory from "./components/RawHandHistory"

function App() {
  const [rawHistory, setRawHistory] = useState<string>("")

  function onRawHistoryChange(e: any) {
    setRawHistory(e.target.value)
  }

  return (
    <div id="main" className="container row rubik-title">
      <h1>Poker Hand History Converter</h1>
      <RawHandHistory rawHistory={rawHistory} onChange={onRawHistoryChange} />
      <ConvertedHistory rawHistory={rawHistory} />
    </div>
  )
}

export default App
