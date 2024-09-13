import { useState } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa"

const placeholderEditorText = `Paste the hand history here!`

type Props = {}
export default function Editor({}: Props) {
  const [editorText, setEditorText] = useState<string>("")
  const [convertedText, setConvertedText] = useState<string>("")

  function convertText(inputText: string): string {
    const outputText = inputText
    return outputText
  }

  return (
    <div id="main" className="container row rubik-title">
      <h1>Poker Hand History Converter</h1>
      <div id="editor-container" className="container-class col-12 col-lg-5">
        <h2>Editor</h2>
        <hr />
        <textarea
          id="editor"
          onChange={(e) => setEditorText(e.target.value)}
          value={editorText}
          placeholder={placeholderEditorText}
        ></textarea>
      </div>
      <div className="convert-button-container rubik-header col-12 col-lg-2">
        <button
          className="convert-button rubik-button"
          onClick={() => setConvertedText(convertText(editorText))}
        >
          Convert
          <div>
            <FaArrowAltCircleRight />
          </div>
        </button>
      </div>
      <div
        id="preview-container"
        className="container-class rubik-header col-12 col-lg-5"
      >
        <h2>Previewer</h2>
        <hr />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: convertedText }}
        ></div>
      </div>
    </div>
  )
}
