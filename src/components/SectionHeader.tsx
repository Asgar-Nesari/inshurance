interface Props {
  badge: string
  title: string
  highlight: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeader({ badge, title, highlight, subtitle, light }: Props) {
  return (
    <div className="text-center mb-14">
      <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 ${
        light
          ? 'bg-yellow-400/20 text-yellow-300'
          : 'bg-yellow-400/10 text-yellow-600'
      }`}>
        {badge}
      </span>
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}{' '}
        <span className="text-gradient">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${light ? 'text-white/50' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}