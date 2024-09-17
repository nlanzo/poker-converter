import { convertHistory } from "../utils/convertHistory"

export default function ConvertedHistory({
  rawHistory,
}: {
  rawHistory: string
}) {
  return (
    <div
      id="preview-container"
      className="container-class rubik-header col-12 col-lg-6"
    >
      <h2>Converted Hand History</h2>
      <hr />
      <p>{convertHistory(rawHistory)}</p>
      {/* {historyArrayWithStreets.map((line, index) => (
          <p key={index}>{convertLine(line)}</p>
        ))} */}
    </div>
  )
}
