import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const Editor = (props) => {
  const { id } = props.problem;
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name={id}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;
