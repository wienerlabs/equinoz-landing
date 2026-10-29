import Image from 'next/image'
import Consult from '@/components/consult'
import JsonLd from '@/components/json-ld'
import LightHero from '@/components/light-hero'
import LinkedinLink from '@/components/linkedin-link'
import Values from '@/components/values'
import dusk from '@/assets/media/dusk-burj.jpg'
import { brands } from '@/lib/content/brands'
import { home } from '@/lib/content/home'
import { publishedTeam, type Member } from '@/lib/content/people'
import { ui } from '@/lib/content/ui'
import type { Lang } from '@/lib/i18n'
import { breadcrumbLd } from '@/lib/seo'
import { site } from '@/lib/site'
import { sunOnArc } from '@/lib/sun'

const HORIZON = 72

function initials(name: string) {
  const parts = name.split(' ')
  return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0][0]
}

function Portrait({ member, index }: { member: Member; index: number }) {
  if (member.photo) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden bg-night">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 7rem"
          placeholder="blur"
          className="object-cover object-top"
        />
      </div>
    )
  }
  const light = brands[index % brands.length].light
  const sun = sunOnArc(light.hour)
  const x = 12 + sun.x * 76
  const y = HORIZON - sun.y * 48
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/5] overflow-hidden"
      style={{
        background: `radial-gradient(14% 11% at ${x}% ${y}%, ${light.glow}8c, transparent 70%), radial-gradient(85% 65% at ${x}% ${y}%, ${light.glow}47, transparent 72%), #061211`,
      }}
    >
      <span className="absolute inset-x-0 h-px bg-sand/10" style={{ top: `${HORIZON}%` }} />
      <span className="absolute inset-0 flex items-center justify-center text-[clamp(1.8rem,4.4vw,3.6rem)] font-extralight tracking-[-0.06em] text-sand/85">
        {initials(member.name)}
      </span>
    </div>
  )
}

export default function TeamPage({ lang }: { lang: Lang }) {
  const [founder, ...members] = publishedTeam
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(lang, [
            { name: ui.home[lang], key: 'home' },
            { name: ui.team[lang], key: 'team' },
          ]),
          ...publishedTeam.map((member) => ({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.title,
            worksFor: { '@id': `${site.url}/#organization` },
            ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
          })),
        ]}
      />
      <LightHero
        image={dusk}
        alt={lang === 'tr' ? 'Alacakaranlıkta Burj Khalifa silueti' : 'The Burj Khalifa silhouetted at dusk'}
        focus="50% 60%"
        glow="#f2a65a"
        eyebrow={<span className="text-clay/80">{ui.team[lang]}</span>}
        title={home.team.title[lang]}
      >
        <p className="text-lg leading-relaxed text-clay/90">{home.team.lead[lang]}</p>
      </LightHero>

      {founder ? (
        <section data-theme="light" aria-labelledby="founder-name" className="bg-sand text-ink">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-36">
            {founder.photo ? (
              <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5" data-clip>
                <div className="absolute inset-[-8%]" data-parallax="5">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    placeholder="blur"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ) : null}
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6 text-ink/55" data-reveal>
                {home.leadership.eyebrow[lang]}
              </p>
              <h2 id="founder-name" data-split className="text-[clamp(2.6rem,5.6vw,5.4rem)] leading-[0.95] tracking-[-0.035em]">
                {founder.name}
              </h2>
              <p data-reveal className="mt-4 text-lg text-terracotta">
                {founder.title}
              </p>
              {founder.bio ? (
                <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
                  {founder.bio[lang]}
                </p>
              ) : null}
              {founder.linkedin ? (
                <div data-reveal className="mt-8">
                  <LinkedinLink href={founder.linkedin} name={founder.name} className="text-ink/70 hover:text-ink" />
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {members.length ? (
        <section data-theme="light" aria-labelledby="team-title" className="border-t border-ink/10 bg-sand text-ink">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <p className="eyebrow mb-6 text-ink/55" data-reveal>
              {home.team.members.eyebrow[lang]}
            </p>
            <h2 id="team-title" data-split className="max-w-[18ch] text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.98] tracking-[-0.045em]">
              {home.team.members.title[lang]}
            </h2>
            <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-y-16">
              {members.map((member, index) => (
                <li key={member.name} data-reveal className="grid grid-cols-[7rem_1fr] items-start gap-5 sm:block">
                  <Portrait member={member} index={index} />
                  <div className="sm:mt-6">
                    <h3 className="text-[clamp(1.35rem,1.8vw,1.6rem)] leading-tight tracking-[-0.03em]">{member.name}</h3>
                    <p className="mt-1.5 text-sm text-ink/75">{member.title}</p>
                    {member.bio ? <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/70">{member.bio[lang]}</p> : null}
                    {member.linkedin ? (
                      <LinkedinLink href={member.linkedin} name={member.name} className="mt-4 text-sm text-ink/70 hover:text-ink" />
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <Values lang={lang} />
      <Consult lang={lang} routeKey="team" />
    </>
  )
}
