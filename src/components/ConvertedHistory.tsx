import { useEffect, useState } from "react"
import { convertHistory } from "../utils/convertHistory"
import { FaCopy } from "react-icons/fa"
import CopyToClipboard from "react-copy-to-clipboard"

export default function ConvertedHistory({
  rawHistory,
}: {
  rawHistory: string
}) {
  const [convertedHistory, setConvertedHistory] = useState<string>("")
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000) // Reset after 1.5 seconds
  }
  useEffect(() => {
    setConvertedHistory(convertHistory(rawHistory))
  }, [rawHistory])
  return (
    <div
      id="preview-container"
      className="container-class rubik-header col-12 col-lg-6"
    >
      <h2>Converted Hand History</h2>
      <CopyToClipboard text={convertedHistory} onCopy={handleCopy}>
        <button>
          {isCopied ? "Copied!" : "Copy to Clipboard"}
          <FaCopy />
        </button>
      </CopyToClipboard>
      <hr />
      <p>{convertedHistory}</p>
      {/* {historyArrayWithStreets.map((line, index) => (
          <p key={index}>{convertLine(line)}</p>
        ))} */}
    </div>
  )
}
