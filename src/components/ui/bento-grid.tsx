import { cn } from "@/lib/utils";
import SwapText from "../magicui/swap-text";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border bg-background p-6 shadow-input transition duration-200",
        className,
      )}
    >
      {header}
      {/* <div className="transition duration-200 group-hover/bento:translate-x-2"> */}

      <SwapText
        initialText={title as string}
        icon={icon}
        finalText={description as string}
        disableClick
        // Set min height so that all the text content fits
        // use -mb-7 to hide the extra space when not active
        className="hidden min-h-14 w-full pt-4 transition-all duration-200 group-hover:mb-0 md:flex md:flex-col"
        initialTextClassName="group-hover:opacity-0 h-full duration-200 flex gap-2 font-sans text-xl font-bold text-primary"
        finalTextClassName="text-sm h-full duration-200 font-medium text-gray-500"
      />
      {/* <div className="mb-2 mt-2 flex gap-2 font-sans text-xl font-bold text-primary">
          {icon}
          {title}
        </div>
        <div className="font-sans text-xs text-muted-foreground">
          {description}
        </div> */}
      {/* </div> */}
    </div>
  );
};
