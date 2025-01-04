import React from "react";
import { Image as ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToolbar } from "@/components/editor/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ImagePlaceholderToolbar = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, onClick, ...props }, ref) => {
  const { editor } = useToolbar();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 p-2",
            editor?.isActive("image-placeholder") && "bg-accent",
            className
          )}
          onClick={(e) => {
            editor?.chain().focus().insertImagePlaceholder().run();
            onClick?.(e);
          }}
          ref={ref}
          {...props}
        >
          <ImageIcon className="h-4 w-4" />
          <span className="text-xs">Image</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Upload or Embed Image</span>
      </TooltipContent>
    </Tooltip>
  );
});

ImagePlaceholderToolbar.displayName = "ImagePlaceholderToolbar";

export { ImagePlaceholderToolbar };
