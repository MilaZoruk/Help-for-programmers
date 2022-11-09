import React from 'react'
import Iframe from 'react-iframe'

export default function RussianGalery() {
  return (
    <Iframe
        url="https://rusmuseumvrm.ru/data/vtours/ekaterina_velikaya/index.html?lp=1&lang=ru"
        width="100%"
        height="100%"
        id=""
        className="rusMuz"
        display="block"
        position="relative"
        allow="fullscreen"/>
  )
}
