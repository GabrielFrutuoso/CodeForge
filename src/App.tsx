import { SiCurseforge } from "react-icons/si";
import { EditorComponent } from "./components/Editor/Editor";
import { Output } from "./components/Output/Output";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { useState } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className="flex h-screen w-screen overflow-clip">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={25} maxSize={80} defaultSize={35}>
          <ResizablePanelGroup direction="vertical">
            <header
              title="CodeForge"
              className="flex items-center justify-center gap-1 bg-zinc-900 py-1 cursor-default"
            >
              <SiCurseforge size={24} color="white" />
              <h1 className="text-xl font-bold text-neutral-300">CodeForge</h1>
            </header>
            <EditorComponent
              value={html}
              setValue={setHtml}
              language="html"
              icon={<FaHtml5 size={24} color="#e34c26" />}
            />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent
              value={css}
              setValue={setCss}
              language="css"
              icon={<FaCss3Alt size={24} color="#264de4" />}
            />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent
              value={js}
              setValue={setJs}
              language="javascript"
              icon={<RiJavascriptFill size={24} color="#f7df1e" />}
            />
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Output
            html={html}
            css={css}
            js={js}
            setHtml={setHtml}
            setCss={setCss}
            setJs={setJs}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
