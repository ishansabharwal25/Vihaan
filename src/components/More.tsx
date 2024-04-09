import Image from "next/image";

export default function Motivation() {
  return (
    <section id="motivation" className="my-5 px-5 py-4">
      <h2 className="text-5xl md:text-center">More</h2>
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
                src={"/6.jpg"}
                alt="solar panels"
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
                src={"/7.jpg"}
                alt="solar panels"
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
                src={"/9.png"}
                alt="solar panels"
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
                src={"/10.jpg"}
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
