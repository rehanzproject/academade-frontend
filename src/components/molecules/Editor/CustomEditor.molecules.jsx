import { 
    BtnBold, 
    BtnItalic, 
    createButton, 
    Editor, 
    EditorProvider, 
    Toolbar
  } from 'react-simple-wysiwyg';
  
  const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
  
  export default function CustomEditor({ value, onChange }) {
    return (
      <EditorProvider>
        <Editor containerProps={{ style: { resize: 'both' ,height : 'auto', width: 'auto'}}} value={value} onChange={onChange}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnAlignCenter />
          </Toolbar>
        </Editor>
      </EditorProvider>
    );
  }