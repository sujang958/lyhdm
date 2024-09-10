import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"
import Image from "next/image"

export default function Home() {
  return (
    <section className="w-full">
      <p className="text-3xl font-semibold">홈</p>
      <div className="py-4"></div>
      <div className="flex flex-col gap-y-4">
        {/* <div className="flex flex-row items-center">
          <Image
            src="/popcat.jpg"
            alt="pfp"
            width={64}
            height={64}
            className="size-8 rounded"
          />
          <div className="flex flex-col gap-y-2"></div>
        </div> */}
        <article className="grid grid-cols-[.15fr_2fr_1fr] gap-3 items-center">
          <Image
            src="/popcat.jpg"
            alt="pfp"
            width={64}
            height={64}
            className="w-full rounded object-contain"
          />
          <div className="grid-cols-subgrid">
            <p className="font-medium col-span-2">
              Hunna이(가) 문제를 풀었습니다
            </p>
            <p className="text-xs text-neutral-400">2일 전</p>
          </div>

          <Button variant="secondary" className="max-w-36 ml-auto" size="sm">
            <HoverCard openDelay={100}>
              <HoverCardTrigger className="truncate">
                413. 다음 팰린드롬 수 찾기
              </HoverCardTrigger>
              <HoverCardContent className="py-2 px-3 items-start flex flex-col">
                <p className="text-sm font-medium">
                  413. 다음 팰린드롬 수 찾기
                </p>
                <div className="flex flex-row items-center gap-x-1 mt-2">
                  <p className="text-[0.7rem] rounded-xl bg-neutral-100 px-3 py-0.5 text-neutral-500">
                    많은 조건 분기
                  </p>
                  <p className="text-[0.7rem] rounded-xl bg-neutral-100 px-3 py-0.5 text-neutral-500">
                    구현
                  </p>
                  <p className="text-[0.7rem] rounded-xl bg-neutral-100 px-3 py-0.5 text-neutral-500">
                    문자열
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Button>
        </article>
      </div>
      <div className="h-[300vh]"></div>
    </section>
  )
}
