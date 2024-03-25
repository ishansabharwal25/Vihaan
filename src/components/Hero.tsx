import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section id="about" className="px-1">
      {/* Name */}
      <h2 className="border-b-2">What</h2>
      {/* Short About */}
      <div className="text-xs text-center py-5 max-w-[80%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui optio
        odio veniam eligendi error mollitia aliquam. Suscipit repellendus magni
        velit quis, tempora voluptates minima nihil natus?
      </div>
      {/* Image */}
      <ImagePlaceholder />
    </section>
  );
}
