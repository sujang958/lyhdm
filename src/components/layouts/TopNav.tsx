"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu"
import Image from "next/image"
import Router from "next/router"
import { DrawingPinFilledIcon } from "@radix-ui/react-icons"
import Container from "./Container"

export function TopNav() {
  return (
    <Container className="p-0 left-0 right-0 top-0 fixed bg-white">
      <NavigationMenu className="pl-2 pr-6 py-2">
        <NavigationMenuList>
          <NavigationMenuItem className="px-4">
            <NavigationMenuLink href="/" className="text-lg font-semibold">
              준랩
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>문제</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        alt="Book Cover"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791185402451.jpg"
                        width={458 * 0.2}
                        height={589 * 0.2}
                      />
                      <div className="mb-1 mt-4 text-lg font-semibold">
                        도서
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        책에서 나온 문제들입니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="전제">
                  문제 전체입니다.
                </ListItem>
                <ListItem href="/docs" title="기본">
                  브론즈 정도 되는 문제들입니다.
                </ListItem>
                <ListItem href="/docs/installation" title="대학">
                  실버~골드 정도 되는 문제들입니다.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="대기업">
                  ㅁㄴㅇㄹ
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="올림피아드">
                  ㅁㄴㅇㄻㄴㄻㄹ
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>대회</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 flex flex-col gap-y-2.5 p-3 bg-neutral-50 rounded-lg">
                  <p className="text-lg font-semibold flex flex-row items-center gap-x-2 mb-0.5">
                    <DrawingPinFilledIcon className="size-4" /> 최근 대회
                  </p>
                  <NavigationMenuLink
                    className="text-sm hover:underline font-medium"
                    href="/asdfasfasf"
                  >
                    1학년 3반 실력 겨루기
                    <p className="text-xs text-neutral-500 mt-0.5">
                      2024. 12. 24. 22:32에 시작
                    </p>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="전체">
                  대회 전체입니다.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                공지사항
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                순위
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
