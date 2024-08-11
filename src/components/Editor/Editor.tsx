import { Editor } from "@monaco-editor/react";
import { ResizablePanel } from "../ui/resizable";
import { customTheme } from "./theme";

interface EditorProps {
  language: string;
  icon: JSX.Element;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: any;
}

export const EditorComponent = ({
  language,
  icon,
  value,
  setValue,
}: EditorProps) => {

  const handleEditorDidMount = (editor, monaco) => {
    // Register custom theme
    monaco.editor.defineTheme('myCustomTheme', customTheme);
    // Set the theme to the editor instance
    editor.updateOptions({ theme: 'myCustomTheme' });
  };

  const editorOptions = {
    minimap: {
      enabled: false,
    },
    scrollBeyondLastLine: true,
  };

  return (
    <ResizablePanel className="min-h-8">
      <div className="flex flex-col h-full">
        <div title={language} className="bg-zinc-900 text-white p-2 flex items-center">
          {icon}
        </div>
        <Editor
          value={value}
          onChange={(e) => setValue(e || "")}
          language={language}
          theme="myCustomTheme"
          height={"100%"}
          onMount={handleEditorDidMount}
          options={editorOptions}
        />
      </div>
    </ResizablePanel>
  );
};
