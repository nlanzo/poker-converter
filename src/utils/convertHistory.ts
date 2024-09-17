export default function convertLine(
  initialLine: string | undefined
): string | undefined {
  let convertedLine = initialLine
  // Implement conversion logic here
  const gameNameRegex = /Limit Super RazzDeucey/
  const unknownCardInHandRegex =
    /\[(?:X\s){2}([2-9,T,J,Q,K,A][c,d,h,s])\s[2-9,T,J,Q,K,A][c,d,h,s]\s[2-9,T,J,Q,K,A][c,d,h,s]\]/
  convertedLine = convertedLine?.replace(
    gameNameRegex,
    "Limit Seven Card Stud Hi-Lo"
  )
  convertedLine = convertedLine?.replace(unknownCardInHandRegex, "[X X $1]")

  return convertedLine
}

export function insertStreets(initialLines: string[]): (string | undefined)[] {
  let streets: string[] = [
    "*** 3RD STREET ***",
    "*** 4TH STREET ***",
    "*** 5TH STREET ***",
    "*** 6TH STREET ***",
    "*** 7TH STREET ***",
  ]

  let newLines: (string | undefined)[] = []

  initialLines.forEach((line, index, lines) => {
    if (index === 0) {
      newLines.push(line)
    } else if (line.includes("Dealt") && !lines[index - 1].includes("Dealt")) {
      newLines.push(streets.shift())
      newLines.push(line)
    } else {
      newLines.push(line)
    }
    console.log(streets)
  })

  return newLines
}

export function convertHistory(rawHistory: string): string {
  let historyArray = rawHistory.split("\n")
  let historyArrayWithStreets = insertStreets(historyArray)
  let convertedHistory = historyArrayWithStreets
    .map((line) => convertLine(line))
    .join("\n")
  return convertedHistory
}
