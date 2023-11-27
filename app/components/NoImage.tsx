import { PhotoIcon } from "@heroicons/react/20/solid";

export default function NoImage() {
  return (
    <div className="w-full bg-zinc-900 rounded-2xl text-gray-500 font-semibold h-full gap-4 flex items-center justify-center">
      <PhotoIcon className="w-6 h-6 text-gray-400" />
      <p className=" text-gray-500">No image</p>
    </div>
  );
}
