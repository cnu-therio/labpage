import { marked } from 'marked';
import { withBase } from './paths';

export function renderMarkdown(content: string) {
  return marked.parse(content, {
    walkTokens(token) {
      if ((token.type === 'link' || token.type === 'image') && /^\/(?!\/)/.test(token.href)) {
        token.href = withBase(token.href);
      }
    },
  });
}
