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

  console.log(html, css, js);
  

  return (
    <div className="flex h-screen w-screen overflow-clip">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={25} maxSize={50} defaultSize={25}>
          <ResizablePanelGroup direction="vertical">
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
          <Output html={html} css={css} js={js} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
