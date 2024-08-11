import { useEffect, useState } from "react";

export const Output = ({
  html,
  css,
  js,
}: {
  html: string;
  css: string;
  js: string;
}) => {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="w-full h-full">
      <iframe
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-iframe"
        className="w-full h-full"
        srcDoc={srcDoc}
      ></iframe>
    </div>
  );
};
