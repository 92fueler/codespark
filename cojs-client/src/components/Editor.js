import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
import { Button } from 'react-bootstrap'

function onChange(newValue) {
  console.log('change', newValue)
}

const Editor = (props) => {
  const { id } = props.problem
  return (
    <div>
      <select className="my-4">
        <option>JavaScript</option>
        <option>Python</option>
        <option>Java</option>
      </select>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        name={id}
        editorProps={{ $blockScrolling: true }}
      />
      <Button class="mr-5">Run Code</Button>
      <Button>Submit</Button>
    </div>
  )
}

export default Editor
