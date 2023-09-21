import { FC } from "react"

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
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
          type="text"
          placeholder="Search"
          className="w-full bg-transparent border-none outline-none placeholder:text-[#333333]"
        />
      </div>

      <button className="flex items-center w-12 h-12 bg-[#E9E9E9] rounded-full justify-center text-[#211922] text-xs font-semibold uppercase">
        <span className="material-icons">logout</span>
      </button>
    </nav>
  )
}
