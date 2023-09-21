/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"

import { Input } from "./input"
import { auth } from "@/lib/firebase"

interface loginProps {
  //   show: boolean
}

export const Login: FC<loginProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<{
    title: string
    subtitle: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  if (searchParams.get("login") === "true") {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "unset"
  }

  const handleOnSubmit = () => {
    if (isLoading) return
    setError(null)
    if (!email || !password) {
      setError({
        title: "Incomplete form",
        subtitle: "Please complete the form before proceeding.",
      })
    } else {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setSearchParams("")
        })
        .catch(() => {
          setError({
            title: "Invalid Credentials",
            subtitle: "Check your email and password and try again",
          })
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <div
      className={`${
        searchParams.get("login") === "true" ? "fixed" : "hidden"
      } top-0 left-0 bottom-0 right-0 bg-black/50 z-50 flex justify-center items-center`}
    >
      <div className="w-full max-w-[96%] md:max-w-[420px] bg-white rounded-xl p-6 flex flex-col gap-4">
        {error && (
          <div className="w-full rounded-md bg-red-400/30 p-4">
            <p className="font-semibold text-red-500 text-sm">{error?.title}</p>
            <p className="text-red-500 text-xs">{error?.subtitle}</p>
          </div>
        )}

        <div>
          <p className="text-3xl font-bold">Welcome back,</p>
          <p className="text-xl font-semibold">login to your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
        </div>

        <button
          disabled={isLoading}
          onClick={handleOnSubmit}
          className="w-full items-center justify-center py-3 rounded-full bg-rose-500 text-white"
        >
          {isLoading ? (
            <span className="material-icons animate-spin">loop</span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  )
}
