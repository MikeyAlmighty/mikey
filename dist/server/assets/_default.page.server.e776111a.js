import ReactDOMServer from "react-dom/server";
import React__default from "react";
import { a as jsx } from "./chunk-2839ff2c.js";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import "react/jsx-runtime";
const Context = React__default.createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
const PageShell$1 = "";
function PageShell({
  children,
  pageContext
}) {
  return /* @__PURE__ */ jsx(React__default.StrictMode, {
    children: /* @__PURE__ */ jsx(PageContextProvider, {
      pageContext,
      children: /* @__PURE__ */ jsx(Layout, {
        children: /* @__PURE__ */ jsx(Content, {
          children
        })
      })
    })
  });
}
const Layout = ({
  children
}) => /* @__PURE__ */ jsx("div", {
  children
});
const Content = ({
  children
}) => /* @__PURE__ */ jsx("div", {
  children
});
const logoUrl = "/assets/logo.ebcda4a8.svg";
const index = "";
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(PageShell, {
    pageContext,
    children: /* @__PURE__ */ jsx(Page, {
      ...pageProps
    })
  }));
  const {
    documentProps
  } = pageContext.exports;
  const title = documentProps && documentProps.title || "Michael Leibbrandt | Frontend Developer";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
export {
  passToClient,
  render
};
