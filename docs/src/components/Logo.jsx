export function Logomark() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-monad-purple shadow-[0_0_15px_-3px_rgba(135,109,255,0.4)]"></div>
      <span className="text-xl font-bold text-foreground">
        <span className="text-monad-purple">Solonet</span><span className="text-foreground"> on Monad</span>
      </span>
    </div>
  )
}

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-monad-purple shadow-[0_0_15px_-3px_rgba(135,109,255,0.4)]"></div>
      <span className="text-2xl font-bold text-foreground">
        <span className="text-monad-purple">Solonet</span><span className="text-foreground"> on Monad</span>
        <span className="text-lg font-normal text-muted ml-2">Docs</span>
      </span>
    </div>
  )
}
