import '../src/styles/_main.scss';

// Environment: server
export { onRenderHtml };

import { escapeInject, dangerouslySkipEscape } from 'vike/server';

async function onRenderHtml(pageContext) {
  const { Page } = pageContext;

  return escapeInject`<html>
    <body>
      <div id="root">
          ${dangerouslySkipEscape(Page())}
      </div>
    </body>
  </html>`;
}
