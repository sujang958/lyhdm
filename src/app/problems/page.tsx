import Container from "@/components/layouts/Container"
import { Button } from "@/components/ui/Button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"
import { Input } from "@/components/ui/Input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu"
import { MagnifyingGlassIcon, ShuffleIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

export default function Problems() {
  return (
    <>
      <section className="w-full">
        <p className="text-2xl font-semibold">문제</p>
        <div className="py-4"></div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-base">분류별 문제</p>
          {/* <Link href="/#" className="text-xs text-blue-500 hover:underline">
          모두 보기
        </Link> */}
        </div>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>
          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>
          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>

          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end col-span-1">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>
          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>
          <div className="rounded-lg py-2 px-3 bg-secondary-background h-24 flex flex-col items-end justify-end">
            <p className="text-xs text-muted-foreground">EASY</p>
            <p className="text-lg font-semibold">도서</p>
          </div>
        </div>
      </section>
      <div className="py-6"></div>
      <section className="w-full">
        <div className="flex flex-row items-center gap-x-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-secondary-background">
                  상태&nbsp;
                </NavigationMenuTrigger>
                <NavigationMenuContent>asdf</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-secondary-background">
                  태그&nbsp;
                </NavigationMenuTrigger>
                <NavigationMenuContent>asdf</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-secondary-background">
                  태그&nbsp;
                </NavigationMenuTrigger>
                <NavigationMenuContent>분류</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="size-5 absolute top-1/2 right-2 -translate-y-1/2" />
            <Input placeholder="검색하기" />
          </div>
          <Button variant="secondary" size="icon">
            <ShuffleIcon className="size-3.5" />
          </Button>
        </div>
        {/* TODO: use datatable */}
      </section>
    </>
  )
}
