import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="px-1">
      <div className="flex-col flex sm:flex-row sm:items-start justify-between gap-2 px-5 my-10">
        <div className="flex-1 flex flex-col gap-3 justify-start max-w-prose">
          <h1 className="text-5xl">Name</h1>
          <p>
            Small about Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Saepe nesciunt ipsa aliquam consequuntur ipsum corrupti, vitae
            quo voluptatibus eius laboriosam sed voluptas facere natus
            consectetur nulla sit quos? Nostrum, molestiae?
          </p>
        </div>
        <div className="relative flex-1 aspect-video w-[80vw] sm:max-w-prose mx-auto sm:mx-0">
          <Image
            src={"/5.jpg"}
            alt="solar panels in grass"
            fill
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
