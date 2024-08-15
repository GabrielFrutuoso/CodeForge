import { useEffect, useState } from "react";

export const Output = ({
  html,
  css,
  js,
  setHtml,
  setCss,
  setJs,
}: {
  html: string;
  css: string;
  js: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  setCss: React.Dispatch<React.SetStateAction<string>>;
  setJs: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setHtml(localStorage.getItem("html") || "");
    setCss(localStorage.getItem("css") || "");
    setJs(localStorage.getItem("js") || "");
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
      localStorage.setItem("html", html);
      localStorage.setItem("css", css);
      localStorage.setItem("js", js);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="w-full h-full">
      {html || css || js ? 
      <iframe
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-iframe"
        className="w-full h-full"
        srcDoc={srcDoc}
      ></iframe>
      :
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-neutral-300">Start coding now 🤓</h1>
      </div>
      }
    </div>
  );
};
