import React from 'react'
import Iframe from 'react-iframe'
import style from '../Psychotest/PsychoTest.module.css'

export default function PsychoTest() {
  return (
    <>
    {/* <div className={style.title}>ПРИВЕТ</div> */}
    <Iframe className="psych"
      url="https://bigfive.top/"
      width="100%"
      height="100%"
      id=""
      className=""
      display="block"
      position="relative"
      allow="fullscreen" /></>
  )
}
