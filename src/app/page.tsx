import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

export default function Home() {
  return (
    <section>
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
        <article className="grid grid-cols-[.1fr_2fr_1fr] gap-3 items-center">
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

          <Button variant="secondary" className="w-min" size="sm">
            413. 다음 팰린드롬 수 찾기
          </Button>
        </article>
      </div>
      <div className="h-[300vh]"></div>
    </section>
  )
}
