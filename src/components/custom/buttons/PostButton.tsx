import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type PostButtonProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

const PostButton = ({ children, to, className, ...rest }: PostButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative px-4 py-2 font-medium rounded-full text-slate-100 transition-colors duration-[400ms] hover:text-primary-300",
        className
      )}
      {...rest}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0  bg-primary-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </Link>
  );
};

export default PostButton;
