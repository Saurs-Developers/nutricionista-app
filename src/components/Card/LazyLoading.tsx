export function LazyLoading() {
  return (
    <div className="flex justify-between gap-4 items-center p-4 rounded-lg bg-zinc-400 animate-pulse w-full h-32">
      <div>
        <div className="rounded-full w-24 h-24 bg-zinc-500 " />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="bg-zinc-500 rounded-md h-4 w-full" />
        <div className="bg-zinc-500 rounded-md h-4 w-full" />
        <div className="bg-zinc-500 rounded-md h-4 w-full" />
      </div>
    </div>
  )
}
