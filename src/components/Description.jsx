export default function Description({ description }) {
  return (
    <div className="w-[95%] mt-[40px] m-auto mb-[50px]">
      <h1 className="text-white text-2xl text-bold">Description</h1>
      <div className="mt-[20px] bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25  p-4 rounded-lg ">
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
