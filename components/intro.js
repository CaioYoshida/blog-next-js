export default function Intro({ nameIntro, introId }) {
  return (
    <section id={introId} className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        {nameIntro}
      </h1>
    </section>
  )
}
