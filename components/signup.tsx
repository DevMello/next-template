"use client"

import { Icons } from "@/components/icons"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { login, loginGitHub, loginGoogle, loginInstagram, loginOAuth } from "@/app/actions"

export default function SignUp() {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-6">
          <Button variant="outline" formAction={loginGitHub}>
            <Icons.gitHub />
            Github
          </Button>
          <Button variant="outline" formAction={loginGoogle}>
            <Icons.google />
            Google
          </Button>
          <Button variant="outline" formAction={loginInstagram}>
            <Icons.instagram />
            Instagram
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form className="space-y-4" action={login}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full mt-4">Create account</Button>
        </form>
      </CardContent>
    </Card>
  )
}