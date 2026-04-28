export function SpotifyCard() {
  return (
    <div className="relative bg-ink-2 rounded-2xl p-3.5 flex gap-3.5 items-center max-w-[560px] overflow-hidden">
      {/* Spotify icon top right */}
      <div className="absolute top-3.5 right-3.5 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center font-bold text-xs text-ink">
        ♫
      </div>

      {/* Album art placeholder */}
      <div className="w-20 h-20 rounded-lg flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-[#4a90c2] via-[#2d5a7e] to-[#1a3a5a]" />

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm text-paper mb-1">Crush</div>
        <div className="flex items-center gap-1.5 text-xs text-ink-mute">
          <span className="bg-ink-mute text-ink text-[9px] font-bold px-1.5 py-0.5 rounded">E</span>
          Floating Points
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-ink-mute mt-1.5">
          <span className="w-3.5 h-3.5 border border-ink-mute rounded-full flex items-center justify-center text-xs leading-none">
            +
          </span>
          Save on Spotify
        </div>
      </div>

      {/* Progress bar */}
      <div className="spotify-progress absolute bottom-3 left-[110px] right-[60px] h-0.5 bg-white/15 rounded overflow-hidden after:content-[''] after:absolute after:inset-0 after:w-[38%] after:bg-paper after:rounded" />

      {/* Time */}
      <div className="absolute bottom-2 right-[50px] font-mono text-[11px] text-ink-mute">5:48</div>

      {/* Play button */}
      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-xs text-ink flex-shrink-0 ml-auto">
        ▶
      </div>
    </div>
  );
}
