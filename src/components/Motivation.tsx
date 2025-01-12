import Image from "next/image";

export default function Motivation() {
  return (
    <section
      id="motivation"
      className="my-5 px-5 bg-slate-800 text-white rounded-t-lg py-4"
    >
      <h2 className="text-5xl md:text-center">Aim</h2>
      <div className="pt-10">
        <ul className="flex flex-col space-y-5">
          <li className="flex-col flex sm:flex-row sm:items-center justify-between gap-2 px-5">
            <p className="flex-1 flex flex-col gap-3 justify-start max-w-prose mb-5 sm:mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officia maxime a. Eligendi, optio? Quisquam dolore similique
              doloremque recusandae cupiditate illum, voluptatem enim voluptate
              excepturi harum dicta ducimus qui assumenda?
            </p>
            <div className="relative flex-1 aspect-video w-[80vw] sm:max-w-prose mx-auto sm:mx-0">
              <Image
                src={"/1.jpg"}
                alt="solar panels in evening"
                fill
                className="rounded-lg"
              />
            </div>
          </li>
          <li className="flex-col flex sm:flex-row-reverse sm:items-center justify-between gap-2 px-5">
            <p className="flex-1 flex flex-col gap-3 justify-start max-w-prose mb-5 sm:mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officia maxime a. Eligendi, optio? Quisquam dolore similique
              doloremque recusandae cupiditate illum, voluptatem enim voluptate
              excepturi harum dicta ducimus qui assumenda?
            </p>
            <div className="relative flex-1 aspect-video w-[80vw] sm:max-w-prose mx-auto sm:mx-0">
              <Image
                src={"/2.png"}
                alt="solar panels on roof"
                fill
                className="rounded-lg"
              />
            </div>
          </li>
          <li className="flex-col flex sm:flex-row sm:items-center justify-between gap-2 px-5">
            <p className="flex-1 flex flex-col gap-3 justify-start max-w-prose mb-5 sm:mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officia maxime a. Eligendi, optio? Quisquam dolore similique
              doloremque recusandae cupiditate illum, voluptatem enim voluptate
              excepturi harum dicta ducimus qui assumenda?
            </p>
            <div className="relative flex-1 aspect-video w-[80vw] sm:max-w-prose mx-auto sm:mx-0">
              <Image
                src={"/3.png"}
                alt="solar panels separate"
                fill
                className="rounded-lg"
              />
            </div>
          </li>
          <li className="flex-col flex sm:flex-row-reverse sm:items-center justify-between gap-2 px-5">
            <p className="flex-1 flex flex-col gap-3 justify-start max-w-prose mb-5 sm:mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              officia maxime a. Eligendi, optio? Quisquam dolore similique
              doloremque recusandae cupiditate illum, voluptatem enim voluptate
              excepturi harum dicta ducimus qui assumenda?
            </p>
            <div className="relative flex-1 aspect-video w-[80vw] sm:max-w-prose mx-auto sm:mx-0">
              <Image
                src={"/4.png"}
                alt="solar panels in grass"
                fill
                className="rounded-lg"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
