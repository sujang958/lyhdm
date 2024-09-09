import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

const Container: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className={twMerge("p-12 max-w-5xl w-full", className)}>
        {children}
      </div>
    </section>
  )
}

export default Container
