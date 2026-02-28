import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] py-10 px-5 md:px-10 text-center relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-[#6c47ff22] rounded-full -top-20 -left-10 blur-3xl" />
      <div className="absolute w-60 h-60 bg-[#06b6d433] rounded-full -bottom-16 -right-10 blur-3xl" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full text-[#a78bfa] text-xs px-4 py-1.5 mb-4 relative z-10">
        ⚡ {t('hero_badge')}
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 relative z-10">
        {t('hero_headline1')}{" "}
        <span className="bg-gradient-to-r from-[#6c47ff] to-[#06b6d4] bg-clip-text text-transparent">
          {t('hero_headline2')}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#94a3b8] text-sm mb-6 relative z-10">
        {t('hero_subtitle')}
      </p>

      {/* Search bar */}
      <div className="flex items-center max-w-xl mx-auto bg-white rounded-xl border-2 border-[#6c47ff] shadow-lg shadow-[#6c47ff22] relative z-10">
        <span className="px-3 text-[#6c47ff]">🔍</span>
        <input
          type="text"
          placeholder={t('hero_search_placeholder')}
          className="flex-1 py-3 text-sm outline-none text-gray-700 min-w-0"
        />
        <button className="bg-[#6c47ff] text-white text-sm font-bold px-5 py-3 rounded-r-xl">
          {t('hero_search_btn')}
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-3 mt-6 relative z-10 flex-wrap">
        {[
          { val: t('hero_stat1_val'), lbl: t('hero_stat1_lbl') },
          { val: t('hero_stat2_val'), lbl: t('hero_stat2_lbl') },
          { val: t('hero_stat3_val'), lbl: t('hero_stat3_lbl') },
        ].map(s => (
          <div key={s.lbl} className="bg-white/10 border border-white/20 rounded-xl px-5 py-2 text-center">
            <span className="block text-white font-extrabold text-base">{s.val}</span>
            <span className="text-[#94a3b8] text-xs">{s.lbl}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero