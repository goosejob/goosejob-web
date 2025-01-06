import React from "react";
import { UnderlineIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToolbar } from "@/components/editor/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UnderlineToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { editor } = useToolbar();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              editor?.isActive("underline") && "bg-accent",
              className
            )}
            onClick={(e) => {
              editor?.chain().focus().toggleUnderline().run();
              onClick?.(e);
            }}
            disabled={!editor?.can().chain().focus().toggleUnderline().run()}
            ref={ref}
            {...props}
          >
            {children || <UnderlineIcon className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Underline</span>
          <span className="text-gray-11 ml-1 text-xs">(cmd + u)</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

UnderlineToolbar.displayName = "UnderlineToolbar";

export { UnderlineToolbar };