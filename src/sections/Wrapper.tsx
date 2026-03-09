import type { ReactNode, FC } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="content mx-20 border-r-[0.5px] border-r-[rgba(255,255,255,0.203)] border-l-[0.5px] border-l-[rgba(255,255,255,0.203)] h-[80vh]">
      {children}
    </div>
  )
}

export default Wrapper;