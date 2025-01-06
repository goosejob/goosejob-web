/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import {
  EditorContent,
  useEditor,
  type Content,
  type Extension,
} from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

import { ImageExtension } from "@/components/editor/extensions/image";
import { ImagePlaceholder } from "@/components/editor/extensions/image-placeholder";
import { SearchAndReplace } from "@/components/editor/extensions/search-and-replace";
import { BlockquoteToolbar } from "@/components/editor/toolbars/blockquote";
import { BoldToolbar } from "@/components/editor/toolbars/bold";
import { BulletListToolbar } from "@/components/editor/toolbars/bullet-list";
import { CodeToolbar } from "@/components/editor/toolbars/code";
import { CodeBlockToolbar } from "@/components/editor/toolbars/code-block";
import { ColorHighlightToolbar } from "@/components/editor/toolbars/color-and-highlight";
import { HardBreakToolbar } from "@/components/editor/toolbars/hard-break";
import { HorizontalRuleToolbar } from "@/components/editor/toolbars/horizontal-rule";
import { ImagePlaceholderToolbar } from "@/components/editor/toolbars/image-placeholder-toolbar";
import { ItalicToolbar } from "@/components/editor/toolbars/italic";
import { LinkURLToolbar } from "@/components/editor/toolbars/link-url";
import { OrderedListToolbar } from "@/components/editor/toolbars/ordered-list";
import { RedoToolbar } from "@/components/editor/toolbars/redo";
import { SearchAndReplaceToolbar } from "@/components/editor/toolbars/search-and-replace-toolbar";
import { StrikeThroughToolbar } from "@/components/editor/toolbars/strikethrough";
import { ToolbarProvider } from "@/components/editor/toolbars/toolbar-provider";
import { UnderlineToolbar } from "@/components/editor/toolbars/underline";
import { UndoToolbar } from "@/components/editor/toolbars/undo";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Rich Text Editor using Tiptap
 *
 * Requires the following Tailwind CSS plugins:
 * - @tailwindcss/typography
 */

const editorMode: "simple" | "complex" = "simple";
const isSimple = editorMode === "simple";

const contentExample =
  '<h2>The new rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. Some features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-accent rounded-md p-1",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "my-2",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: "tiptap-heading",
      },
    },
  }),
  Underline,
  Link,
  Superscript,
  Subscript,
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: "https",
  }),
  TextAlign.configure({
    types: ["heading", "paragraph", "image"],
  }),
  TextStyle,
  Color,
  Highlight.configure({
    multicolor: true,
  }),
  ImageExtension.configure({
    inline: true,
    allowBase64: true,
  }),
  ImagePlaceholder,
  SearchAndReplace,
];

export function RichTextEditorTiptap({
  content = contentExample,
  handleUpdate,
}: {
  content?: Content | string;
  handleUpdate?: (htmlString: string) => void;
}) {
  const editor = useEditor({
    content,
    extensions: extensions as Extension[],
    immediatelyRender: false,
    onUpdate({ editor }) {
      if (handleUpdate) {
        handleUpdate(editor.getHTML());
      }
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="z-10 w-full rounded-md pb-3">
      <TooltipProvider delayDuration={0}>
        <div className="sticky left-0 top-0 w-full justify-between border bg-background p-1">
          <ToolbarProvider editor={editor}>
            <section className="flex flex-wrap items-start gap-1">
              <UndoToolbar />
              <RedoToolbar />
              <Separator orientation="vertical" className="mx-1 h-8" />
              <BoldToolbar />
              <ItalicToolbar />
              <StrikeThroughToolbar />
              <UnderlineToolbar />
              <BulletListToolbar />
              <OrderedListToolbar />
              {!isSimple && (
                <>
                  <CodeToolbar />
                  <CodeBlockToolbar />
                  <HorizontalRuleToolbar />
                  <BlockquoteToolbar />
                  <HardBreakToolbar />
                  <ColorHighlightToolbar />
                </>
              )}
              <LinkURLToolbar />
              <ImagePlaceholderToolbar />
              <div className="sm:ml-auto">
                <SearchAndReplaceToolbar />
              </div>
            </section>
          </ToolbarProvider>
        </div>
        <div
          onClick={() => {
            editor?.chain().focus().run();
          }}
          onKeyDown={() => {
            editor?.chain().focus().run();
          }}
          className="flex min-h-[18rem] cursor-text justify-center"
        >
          <EditorContent
            editor={editor}
            className="prose-config w-full p-4 outline-none"
          />
        </div>
      </TooltipProvider>
    </div>
  );
}
