const placeholderEditorText = `Paste the hand history here!`

export default function RawHandHistory({
  rawHistory,
  onChange,
}: {
  rawHistory: string
  onChange: Function
}) {
  return (
    <div id="editor-container" className="container-class col-12 col-lg-6">
      <h2>Raw Hand History</h2>
      <hr />
      <textarea
        id="editor"
        onChange={(e) => onChange(e)}
        value={rawHistory}
        placeholder={placeholderEditorText}
        spellCheck="false"
      ></textarea>
    </div>
  )
}
