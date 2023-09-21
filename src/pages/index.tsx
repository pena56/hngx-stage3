/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useSearchParams } from "react-router-dom"

import { auth } from "@/lib/firebase"

import { Login, SortableList } from "@/components"

import { DATA } from "@/data"

function Index() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState("")
  const [renderedData, setRenderedData] = useState(DATA)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSearchParams("")
      } else {
        setSearchParams("login=true")
      }
    })

    return () => listen()
  }, [])

  useEffect(() => {
    if (query) {
      const filteredData = DATA?.filter((item) =>
        item.tag.toLowerCase().includes(query?.toLowerCase())
      )
      setRenderedData(filteredData)
    } else {
      setRenderedData(DATA)
    }
  }, [query])

  const handleSignout = () => {
    signOut(auth).then(() => {
      setSearchParams("login=true")
    })
  }

  return (
    <>
      <Login />

      <div className={`w-full h-full relative`}>
        <nav className="w-full flex items-center gap-5 px-3 py-4 sticky top-0 left-0 right-0 bg-white z-20">
          <div className="flex items-center gap-7">
            <div className="w-6 h-6 bg-rose-400 flex items-center justify-center text-xs text-white font-semibold">
              <p>G</p>
            </div>

            <p className="text-base font-semibold hidden md:block">Home</p>
          </div>

          <div className="flex flex-1 items-center gap-2 rounded-full px-4 py-3 bg-[#E9E9E9] text-[#333333]">
            <span className="material-icons">search</span>

            <input
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-none outline-none placeholder:text-[#333333]"
            />
          </div>

          {searchParams.get("login") !== "true" && (
            <button
              onClick={handleSignout}
              className="flex items-center w-12 h-12 bg-[#E9E9E9] rounded-full justify-center text-[#211922] text-xs font-semibold uppercase"
            >
              <span className="material-icons">logout</span>
            </button>
          )}
        </nav>

        <main className="w-full md:max-w-[90%] mx-auto p-4">
          <SortableList
            items={renderedData}
            onChange={setRenderedData}
            renderItem={(item) => (
              <SortableList.Item id={item.id}>
                <img
                  src={item?.path}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="w-full absolute flex items-end bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-black/0 via-black/40 to-black/80 p-4">
                  <div className="border border-white text-white text-xs py-1 px-3 rounded-full">
                    <p className="uppercase">{item?.tag}</p>
                  </div>
                </div>
              </SortableList.Item>
            )}
          />
        </main>
      </div>

      <footer className="w-full p-6 flex items-center justify-center">
        <p>
          Illustrations by:{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://dribbble.com/SAMji_illustrator"
          >
            SAMji_illustrator
          </a>
        </p>
      </footer>
    </>
  )
}

export default Index
