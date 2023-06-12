import * as React from 'react'

function mapValues(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

const getByteLength = (string) => {
  return new TextEncoder().encode(string[0])[0]
}

const minCharByteValue = getByteLength('a')
const maxCharByteValue = getByteLength('z')

const minRange = minCharByteValue / maxCharByteValue
const maxRange = 1

const colorByUser = ({ firstLetter = 'd', lastLetter = 'd' }) => {
  const userValue =
    getByteLength(firstLetter?.toLowerCase()) /
    getByteLength(lastLetter?.toLowerCase())

  return `hsl(${mapValues(userValue, minRange, maxRange, 0, 360)},50%,50%)`
}

export const Avatar = ({ initials }) => {
  const [firstLetter, lastLetter] = initials
  return (
    <div
      className="flex items-center justify-center w-10 h-10 text-base font-bold rounded-full "
      style={{
        backgroundColor: colorByUser({
          firstLetter,
          lastLetter,
        }),
      }}
    >
      <div className="text-white drop-shadow-lg">
        {firstLetter}
        {lastLetter}
      </div>
    </div>
  )
}
