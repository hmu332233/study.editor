// import './styles.scss'

import { MdFormatColorText, MdFormatBold, MdFormatItalic, MdFormatStrikethrough, MdCode, MdFormatListBulleted, MdFormatListNumbered, MdFormatQuote } from 'react-icons/md';
import { lowlight } from 'lowlight'



import Youtube from '@tiptap/extension-youtube'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { BubbleMenu, EditorContent, useEditor, ReactNodeViewRenderer } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import type { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Link from '@tiptap/extension-link'
import React from 'react'

import cn from 'classnames';

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

import CodeBlock from './codeBlock';

import { defaultContents } from '../constants';
import ToolBox from './toolbox';
import SlashCommand from '../extensions/slashCommands';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }

  const buttons = [
    {
      icon: <MdFormatBold size="1em" />,
      // TODO: 아래와 같은 형식으로 리팩토링하기 / slash command와 같이 사용할 수 있도록
      // command: ({ editor }) => editor.chain().focus().toggleBold().run(),
      onClick: () => editor.chain().focus().toggleBold().run(),
      canRun: editor.can().chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
      title: 'bold'
    },
    {
      icon: <MdFormatItalic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      canRun: editor.can().chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      title: 'italic'
    },
    {
      icon: <MdFormatStrikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      canRun: editor.can().chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      title: 'strike'
    },
    {
      icon: <MdCode />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      canRun: editor.can().chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
      title: 'code'
    },
    {
      icon: <MdFormatListBulleted />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      canRun: true,
      isActive: editor.isActive('bulletList'),
      title: 'bullet list'
    },
    {
      icon: <MdFormatListNumbered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      canRun: true,
      isActive: editor.isActive('orderedList'),
      title: 'ordered list'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 1 }),
      title: 'h1'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 2 }),
      title: 'h2'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 3 }),
      title: 'h3'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 4 }),
      title: 'h4'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 5 }),
      title: 'h5'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 6 }),
      title: 'h6'
    },
    {
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      canRun: true,
      isActive: editor.isActive('codeBlock'),
      title: 'code block'
    },
    {
      icon: <MdFormatQuote />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      canRun: true,
      isActive: editor.isActive('blockquote'),
      title: 'blockquote'
    },
    {
      icon: <MdFormatColorText color='#958DF1' />,
      onClick: () => editor.chain().focus().setColor('#958DF1').run(),
      canRun: true,
      isActive: editor.isActive('textStyle', { color: '#958DF1' }),
      title: 'purple'
    },
    {
      onClick: () => editor.chain().focus().unsetAllMarks().run(),
      canRun: true,
      isActive: false,
      title: 'clear marks'
    },
    {
      onClick: () => editor.chain().focus().clearNodes().run(),
      canRun: true,
      isActive: false,
      title: 'clear nodes'
    },
    {
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      canRun: true,
      isActive: false,
      title: 'horizontal rule'
    },
    {
      onClick: () => editor.chain().focus().setHardBreak().run(),
      canRun: true,
      isActive: false,
      title: 'hard break'
    },
    {
      onClick: () => editor.chain().focus().undo().run(),
      canRun: editor.can().chain().focus().undo().run(),
      isActive: false,
      title: 'undo'
    },
    {
      onClick: () => editor.chain().focus().redo().run(),
      canRun: editor.can().chain().focus().redo().run(),
      isActive: false,
      title: 'redo'
    }
  ];

  return (
    <ToolBox buttons={buttons}/>
  );
}

const PopupMenu = ({ editor, tippyOptions }: { editor: Editor | null, tippyOptions: any }) => {
  if (!editor) {
    return null
  }

  const buttons = [
    {
      icon: <MdFormatBold size="1em" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      canRun: editor.can().chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
      title: 'bold'
    },
    {
      icon: <MdFormatItalic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      canRun: editor.can().chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      title: 'italic'
    },
    {
      icon: <MdFormatStrikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      canRun: editor.can().chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      title: 'strike'
    },
    {
      icon: <MdCode />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      canRun: editor.can().chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
      title: 'code'
    },
    // {
    //   onClick: () => editor.chain().focus().setParagraph().run(),
    //   canRun: true,
    //   isActive: editor.isActive('paragraph'),
    //   title: 'paragraph'
    // },
    {
      icon: <MdFormatListBulleted />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      canRun: true,
      isActive: editor.isActive('bulletList'),
      title: 'bullet list'
    },
    {
      icon: <MdFormatListNumbered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      canRun: true,
      isActive: editor.isActive('orderedList'),
      title: 'ordered list'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 1 }),
      title: 'h1'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 2 }),
      title: 'h2'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 3 }),
      title: 'h3'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 4 }),
      title: 'h4'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 5 }),
      title: 'h5'
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      canRun: true,
      isActive: editor.isActive('heading', { level: 6 }),
      title: 'h6'
    },
    {
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      canRun: true,
      isActive: editor.isActive('codeBlock'),
      title: 'code block'
    },
    {
      icon: <MdFormatQuote />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      canRun: true,
      isActive: editor.isActive('blockquote'),
      title: 'blockquote'
    },
    {
      icon: <MdFormatColorText color='#958DF1' />,
      onClick: () => editor.chain().focus().setColor('#958DF1').run(),
      canRun: true,
      isActive: editor.isActive('textStyle', { color: '#958DF1' }),
      title: 'purple'
    },
  ];

  return (
    <BubbleMenu editor={editor} tippyOptions={tippyOptions}>
      <ToolBox buttons={buttons}/>
    </BubbleMenu>
  )
}

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

function Tiptap() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none',
      },
    },
    extensions: [
      Youtube,
      Link.configure({
        HTMLAttributes: {
          class: 'link',
        },
      }),
      TaskList.configure({
        HTMLAttributes: {
          class: "not-prose pl-2",
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-start",
        },
        nested: true,
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure(),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        // dropcursor: {
        //   color: "#DBEAFE",
        //   width: 4,
        // },
        // gapcursor: false,
        code: {
          HTMLAttributes: {
            class:
              "rounded-md bg-stone-200 px-1.5 py-1 font-medium text-stone-900",
            spellcheck: "false",
          },
        },
      }),
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        }
      }).configure({ lowlight }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          console.log(node)
          if (node.type.name === 'heading') {
            return '제목을 입력하세요'
          }

          return '내용을 입력하세요. 명령어는 \'/\'을 입력하세요'
        },
        includeChildren: true, // 자식 노드들에도 placeholder 띄울지 여부
      }),
      SlashCommand,
    ],
    content: defaultContents,
  })

  console.log(editor?.getJSON())

  return (
    <div className='flex flex-col gap-6'>
      <PopupMenu editor={editor} tippyOptions={{ duration: 100 }} />
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap;