export default function Display({ history, input }) {
  return (
    <div
      id="display"
      className="flex flex-col items-end bg-black text-white px-[3px]"
    >
      <div id="history" className=" text-orange-400 text-xs min-h-[16px]">{history}</div>
      <div id="input">{input}</div>
    </div>
  );
}
