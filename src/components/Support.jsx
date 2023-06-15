import { useState, useEffect } from "react";

const pageTitle = document.title

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    count && (document.title = `${pageTitle} - ${count}`)
  })

  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {/* IF ELSE WAY */}
      {/* {(() => {
        if (count === 0) {
          return "Click to Support"
        } else {
          return `Supported ${count} times`
        }
      })()} */}

      {/* TURNERY OPERATOR WAY */}
      {
        count === 0 ? "Click to Support" : `Supported ${count} times`
      }
    </button>
  )
}