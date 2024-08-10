import { IoLogoJavascript } from "react-icons/io";
import { EditorComponent } from "./components/Editor/Editor";
import { Output } from "./components/Output/Output";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { MdCss, MdHtml } from "react-icons/md";
import { useState } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  console.log(html, css, js);
  

  return (
    <div className="flex h-screen w-screen overflow-clip">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={25} maxSize={50}>
          <ResizablePanelGroup direction="vertical">
            <EditorComponent
              value={html}
              setValue={setHtml}
              language="html"
              icon={<MdHtml size={24} color="#e34c26" />}
            />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent
              value={css}
              setValue={setCss}
              language="css"
              icon={<MdCss size={24} color="#264de4" />}
            />
            <ResizableHandle className="bg-slate-800" />
            <EditorComponent
              value={js}
              setValue={setJs}
              language="javascript"
              icon={<IoLogoJavascript size={24} color="#f7df1e" />}
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
