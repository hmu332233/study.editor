'use client'
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function BlockNotePage() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    theme: "dark"
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
};

export default BlockNotePage;