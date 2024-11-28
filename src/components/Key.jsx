export default function Key({ value, type, id, onClick }) {
  const style = `${type === 'function 2' ? 'bg-blue-500' : 'bg-zinc-500'}
    ${type === 'function 1' ? 'bg-red-500' : 'bg-zinc-500'}
    ${type === 'operator' ? 'bg-slate-500' : 'bg-zinc-500'}
    ${id === 'clear' ? 'col-span-2' : ''} 
    ${id === 'zero' ? 'col-span-2' : ''} 
    ${id === 'equals' ? 'row-span-2' : ''}
    border border-black p-4 text-center text-white cursor-pointer hover:border-slate-500 hover:text-black`;

  return (
    <div id={id} type={type} className={style} onClick={() => onClick(value)}>
      {value}
    </div>
  );
}
