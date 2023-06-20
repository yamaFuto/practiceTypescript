import { useEffect, useState, ChangeEvent } from "react";
import Modal from "@/components/modal"

export default function ModalContent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ image, setImage ] = useState<File>();
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;
    const img = e.target.files[0];
    setImage(img);
  }
  return (
    <>
      <button onClick={() => setIsOpen(true)}>開く</button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto">
              <div className="flex flex-col text-center w-full mb-4">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Post your photographs</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Up to 4 photos</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="creatorName" className="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="creatorName" name="creatorName" className="w-40 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative">
                      <label htmlFor="PhotoName" className="leading-7 text-sm text-gray-600">Photo Name</label>
                      <input type="text" id="PhotoName" name="PhotoName" className="w-40 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 text-center w-full">
                    <div className="relative flex flex-col">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600 mr-64">Photos</label>
                      <div>
                      <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                      <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                      <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                      <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="border-2 p-2 rounded-lg hover:bg-zinc-400" onClick={() => setIsOpen(false)}>cancel</button>
          </Modal>
    </>
  )
}