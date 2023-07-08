'use client'
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function BlockNotePage() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    theme: "light",
    defaultStyles: false,
    editorDOMAttributes: { class: 'prose lg:prose-xl' },
  });

  // Renders the editor instance using a React component.
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl mb-8">BlockNote</h1>
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default BlockNotePage;