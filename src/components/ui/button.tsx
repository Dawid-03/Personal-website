import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <button
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 shadow",
            variant === "destructive" && "bg-red-500 text-white hover:bg-red-600 shadow-sm",
            variant === "outline" && "border border-gray-300 bg-white hover:bg-gray-100 shadow-sm",
            variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
            variant === "ghost" && "hover:bg-gray-100 hover:text-gray-900",
            variant === "link" && "text-blue-600 underline-offset-4 hover:underline",
            size === "default" && "h-10 px-4 py-2",
            size === "sm" && "h-9 rounded-md px-3",
            size === "lg" && "h-11 rounded-md px-8",
            size === "icon" && "h-10 w-10",
            className,
          )}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 shadow",
          variant === "destructive" && "bg-red-500 text-white hover:bg-red-600 shadow-sm",
          variant === "outline" && "border border-gray-300 bg-white hover:bg-gray-100 shadow-sm",
          variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
          variant === "ghost" && "hover:bg-gray-100 hover:text-gray-900",
          variant === "link" && "text-blue-600 underline-offset-4 hover:underline",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          size === "icon" && "h-10 w-10",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export { Button }
