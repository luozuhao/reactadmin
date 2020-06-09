import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
class TextEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
        console.log('EditorState.createEmpty()',EditorState.createEmpty());
    }
    onEditorStateChange = (editorState) => {
        console.log('editorState',editorState);
        this.setState({
            editorState,
        });
    };
    getDetail =()=>{
        return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    }
    render() {
        const { editorState } = this.state;
        return (
            <div className='editor'>
                <div>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorStyle={{border: '1px solid #ccc',minHeight:200,paddingLeft:10}}
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    {/*<textarea*/}
                        {/*disabled*/}
                        {/*value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}*/}
                    {/*/>*/}
                </div>
            </div>
        );
    }
}

export default TextEditor;
