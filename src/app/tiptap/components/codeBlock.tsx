import 'highlight.js/styles/github.css';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React, { ChangeEvent } from 'react';

type Props = {
  node: { attrs: { language: string } };
  updateAttributes: (attrs: { language: string }) => void;
  extension: { options: { lowlight: { listLanguages: () => string[] } } };
}

function CodeBlock({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }: Props) {
  return (
    <NodeViewWrapper>
      <select
        className='select select-bordered select-sm w-full max-w-xs'
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => updateAttributes({ language: event.target.value })}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
}

export default CodeBlock;
