import Header from "@/components/header"
import Com from "@/components/com"
import Image from "next/image"

export default function testDetail() {
  return (
    <>
      <Header />
      <div className="min-[700px]:flex m-20 h-96">
        <Image alt="image" width="700" height="700" className="rounded-lg" src="/images/300x300mono.png" />
        <div className="min-[700px]:ml-20 mb-8">
          <h1 className="mb-2 text-3xl max-[640px]:mt-4">title</h1>
          <h2 className="max-[640px]:w-80 max-[640px]:w-11/12 text-lg">explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation </h2>
          <h2 className="pt-10 italic">creator name</h2>
        </div>
        <div className="w-90 rounded-md border-2 p-2 px-8 pb-2 overflow-scroll">
        <Com />
        <Com />
        <Com />
        <Com />
        </div>
      </div>
    </>
  )
}