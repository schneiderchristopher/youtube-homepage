import Image from "next/image"

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 bg-neutral-950 text-white">
            <div>
                <Image
                    src='/icons/youtube-logo.svg'
                    height={20}
                    width={120}
                    alt="Youtube Logo"
                    className="p-18"
                />
            </div>
            <div className="flex items-center justify-center">
                <form id="form" role="search" className="flex items-center justify-center border-neutral-800 bg-neutral-800 rounded-full pr-2">
                    <input type="search" id="query"
                        placeholder="Pesquisar"
                        aria-label="Search through site content"
                        className="w-[484px] p-2 pl-5 border rounded-full border-neutral-800 bg-neutral-950 rounded-r-none"
                    />
                    <button className="px-4 py-1">
                        <Image
                            src='/icons/search.svg'
                            height={20}
                            width={20}
                            alt="Search Icon"
                            className="p-18 text-white"
                        />
                    </button>
                </form>
            </div>
            <div>
                Profile
            </div>
        </header>
    )
}