import { tv } from "tailwind-variants";

export const baseStyles = tv({
    base: "text-sm md:text-md bg-black rounded-md p-2 max-w-[90%]",
    variants: {
      sender: {
        ai: "self-start bg-zinc-800 text-neutral-200",
        user: "self-end bg-sky-500 text-white",
      }
    }
  })