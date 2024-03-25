/* Temporary Component until images */

export default function ImagePlaceholder({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return <div className="bg-slate-800 aspect-square rounded-md w-full"></div>;
}
