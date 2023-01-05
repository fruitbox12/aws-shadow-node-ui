import React, { FC } from 'react'
import { NextPage } from 'next'

const BezierCurveEditor: FC<NextPage> = () => {
  return (
    <div id="pen-name" data-name="bezier-curve-editor">
      <div className="col">
        <div className="container">
          <svg id="editor" xmlns="http://www.w3.org/2000/svg">
            <div id="path">
              <span className="tag">&lt;path </span>
              <span className="attr">d</span>
              <span>=</span>
              <span className="string">"</span>
              <span id="path-d">&lt;path d&gt;</span>
              <span className="string">" </span>
              <span className="tag">/&gt;</span>
            </div>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default BezierCurveEditor
