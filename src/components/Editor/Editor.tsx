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
          theme="vs-dark"
          height={"100%"}
        />
      </div>
    </ResizablePanel>
  );
};
