import { Extension, ReactRenderer } from '@tiptap/react';
import type { Editor, Range } from '@tiptap/core';
import { Suggestion, SuggestionKeyDownProps, SuggestionOptions, SuggestionProps } from '@tiptap/suggestion';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

import cn from 'classnames';
import tippy from 'tippy.js';

type Item = any;

const SlashCommands = Extension.create({
  name: 'slashCommands',
  addOptions() {
    return {
      items: [],
    };
  },
  addProseMirrorPlugins() {
    console.log(this.options)
    return [
      Suggestion<Item>({
        editor: this.editor,
        char: "/",
        command: ({
          editor,
          range,
          props: item,
        }: {
          editor: Editor;
          range: Range;
          props: Item;
        }) => {
          item.command({ editor, range });
        },
        items: ({ editor, query }: { editor: Editor, query: string }) => {
          // TODO: query에 따라서 다른 명령어를 보여주도록
          return this.options.items;
        },
        render: () => {
          let component: ReactRenderer | null = null;
          let popup: any | null = null;

          return {
            onStart: (props: SuggestionProps) => {
              component = new ReactRenderer(CommandList, {
                props,
                editor: props.editor,
              });
        
              // @ts-ignore
              popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
              });
            },
            onUpdate: (props: SuggestionProps) => {
              component?.updateProps(props);
        
              popup &&
                popup[0].setProps({
                  getReferenceClientRect: props.clientRect,
                });
            },
            onKeyDown: (props: SuggestionKeyDownProps) => {
              if (props.event.key === "Escape") {
                popup?.[0].hide();
    
                return true;
              }
              // @ts-ignore
              return component?.ref?.onKeyDown(props.event.key);
            },
            onExit: () => {
              popup?.[0].destroy();
              component?.destroy();
            },
          };
        },
        
      }),
    ];
  },
});

const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
  const containerHeight = container.offsetHeight;
  const itemHeight = item ? item.offsetHeight : 0;

  const top = item.offsetTop;
  const bottom = top + itemHeight;

  if (top < container.scrollTop) {
    container.scrollTop -= container.scrollTop - top + 5;
  } else if (bottom > containerHeight + container.scrollTop) {
    container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
  }
};

const CommandList = forwardRef(
  ({
  items,
  command,
  editor,
  range,
}: {
  items: any[];
  command: any;
  editor: any;
  range: any;
}, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const selectItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) {
        command(item);
      }
    },
    [command, items],
  );

  useImperativeHandle(ref, () => {
    return {
      onKeyDown(keyEvent: string) {
        const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];
        if (navigationKeys.includes(keyEvent)) {  
          if (keyEvent === "ArrowUp") {
            setSelectedIndex((selectedIndex + items.length - 1) % items.length);
            return true;
          }
          if (keyEvent === "ArrowDown") {
            setSelectedIndex((selectedIndex + 1) % items.length);
            return true;
          }
          if (keyEvent === "Enter") {
            selectItem(selectedIndex);
            return true;
          }
          return false;
        }
      },
    };
    }, [
      items,
      selectItem,
      selectedIndex,
    ]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const commandListContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = commandListContainer?.current;

    const item = container?.children[selectedIndex] as HTMLElement;

    if (item && container) updateScrollView(container, item);
  }, [selectedIndex]);

  if (items.length === 0) {
    return null;
  }


  return (
    <div
      id="slash-command"
      ref={commandListContainer}
      className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-stone-200 bg-white px-1 py-2 shadow-md transition-all"
    >
      {items.map((item: any, index: number) => {
        return (
          <button
            className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm text-stone-900 hover:bg-stone-100 ${
              index === selectedIndex ? "bg-stone-100 text-stone-900" : ""
            }`}
            key={index}
            onClick={() => selectItem(index)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white">
              {item.icon}
            </div>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-stone-500">{item.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
});
CommandList.displayName = "CommandList";

const SlashCommand = SlashCommands.configure({
  items: [
    {
      // icon: <MdFormatBold size="1em" />,
      // TODO: 아래와 같은 형식으로 리팩토링하기 / slash command와 같이 사용할 수 있도록
      // command: ({ editor }) => editor.chain().focus().toggleBold().run(),
      command: ({ editor, range }: {
        editor: Editor,
        range: Range;
      }) => editor
      .chain()
      .focus()
      .deleteRange(range)
      .setNode("heading", { level: 1 })
      .run(),
      title: 'bold'
    },
  ]
});


export default SlashCommand;
