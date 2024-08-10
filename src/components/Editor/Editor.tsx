import { Editor } from "@monaco-editor/react";
import { ResizablePanel } from "../ui/resizable";

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

  const customTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '7CFC00' }, // Green comments
      { token: 'keyword', foreground: '#7c3aed' }, // Tomato keywords
      { token: 'variable', foreground: '00BFFF' }, // Deep Sky Blue variables
      { token: 'string', foreground: '00BFFF' }, // Deep Sky Blue strings
    ],
    colors: {
      'editor.background': '#18181b', // Background color
      'editor.foreground': '#D4D4D4'  // Text color
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Register custom theme
    monaco.editor.defineTheme('myCustomTheme', customTheme);
    // Set the theme to the editor instance
    editor.updateOptions({ theme: 'myCustomTheme' });
  };

  return (
    <ResizablePanel>
      <div className="flex flex-col h-full">
        <div className="bg-zinc-900 text-white p-2 flex items-center">
          {icon}
        </div>
        <Editor
          value={value}
          onChange={(e) => setValue(e || "")}
          language={language}
          theme="myCustomTheme"
          height={"100%"}
          onMount={handleEditorDidMount}
        />
      </div>
    </ResizablePanel>
  );
};
