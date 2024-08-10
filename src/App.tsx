import { IoLogoJavascript } from "react-icons/io";
import { EditorComponent } from "./components/Editor/Editor";
import { Output } from "./components/Output/Output";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { MdCss, MdHtml } from "react-icons/md";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-clip">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={25} maxSize={50} >
          <ResizablePanelGroup direction="vertical">
            <EditorComponent language="html" icon={<MdHtml size={24} color="#e34c26" />} />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent language="css" icon={<MdCss size={24} color="#264de4" />} />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent language="javascript" icon={<IoLogoJavascript size={24} color="#f7df1e" />} />
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Output />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
