import { CheckIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { FC } from "react"
import { Button } from "../ui/Button"
import Image from "next/image"

const Sidebar: FC = () => {
  return (
    <aside className="sticky top-24 right-12 h-min min-w-56 max-w-64 w-full space-y-6">
      <section className="bg-secondary-background rounded-lg p-3">
        <header className="flex flex-row items-center gap-x-3.5">
          <Image
            src="/popcat.jpg"
            alt="pfp"
            width={128}
            height={128}
            className="size-11 rounded-lg"
          />
          <div>
            <p className="font-medium text-lg">Hunna</p>
            <p className="text-sm text-muted-foreground">#1 순위</p>
          </div>
        </header>
        <main className="py-4 flex flex-row items-center justify-between">
          <p className="text-sm flex flex-row items-center gap-x-2">
            <LightningBoltIcon className="size-4" /> 14 일
          </p>
          <p className="text-sm flex flex-row items-center gap-x-2">
            <CheckIcon className="size-4" /> 3,143 문제
          </p>
        </main>
        <Button className="w-full" size="sm" variant="outline">
          내 프로필 보기
        </Button>
      </section>
      <section className="bg-secondary-background rounded-lg p-3 min-h-40">
        <p className="text-lg font-medium">시도한 문제</p>
        <ul className="flex flex-col mt-3 gap-y-2 py-1">
          <Link
            href="/#"
            className="flex flex-row items-center justify-between hover:underline"
          >
            <p className="text-sm font-light">413. 다음 팰린드롬 수 찾기</p>
            <p className="text-xs text-muted-foreground">3초 전</p>
          </Link>
        </ul>
      </section>
      <section className="bg-secondary-background rounded-lg p-3 min-h-40">
        <p className="text-lg font-medium">최근 대회</p>
        <ul className="flex flex-col mt-3 gap-y-2 py-1">
          <Link
            href="/#"
            className="flex flex-row items-center justify-between hover:underline"
          >
            <p className="text-sm font-light">한국주택공사 코딩 테스트</p>
            <p className="text-xs text-muted-foreground">3초 전</p>
          </Link>
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
