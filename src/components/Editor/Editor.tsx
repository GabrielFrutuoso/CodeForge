import { Editor } from "@monaco-editor/react";
import { ResizablePanel } from "../ui/resizable";
import { customTheme } from "./theme";
import { LuCopy } from "react-icons/lu";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorDidMount = (editor: { updateOptions: (arg0: { theme: string; }) => void; }, monaco: any) => {
    // Register custom theme
    monaco.editor.defineTheme("myCustomTheme", customTheme);
    // Set the theme to the editor instance
    editor.updateOptions({ theme: "myCustomTheme" });
  };

  const editorOptions = {
    minimap: {
      enabled: false,
    },
    scrollBeyondLastLine: true,
    wordWrap: "on",
  };

  const copyValue = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <ResizablePanel className="min-h-8 flex flex-col">
      <div className=" justify-between h-full">
        <div
          title={language}
          className="bg-zinc-900 text-white p-2 flex items-center justify-between"
        >
          {icon}
          <button title="copiar" className="text-zinc-400 hover:text-zinc-300">
            <LuCopy size={16} onClick={copyValue} />
          </button>
        </div>

        <Editor
          value={value}
          onChange={(e) => setValue(e || "")}
          language={language}
          theme="myCustomTheme"
          height={"100%"}
          onMount={handleEditorDidMount}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options={editorOptions as any}
        />
      </div>
    </ResizablePanel>
  );
};
