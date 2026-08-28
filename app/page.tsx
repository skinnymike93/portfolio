import { CardFan } from "@/components/CardFan";
import { Nav } from "@/components/Nav";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import {
  about,
  available,
  manifesto,
  projects,
  questions,
  quotes,
  site,
  workIntro,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center overflow-x-hidden bg-background">
      <Nav />

      <section className="flex w-full flex-col items-center px-5 pt-8 md:px-14 md:pt-12">
        <h1 className="text-center font-serif text-[36px] leading-10 tracking-display text-ink md:text-display md:leading-display">
          {site.name}
        </h1>
        <p className="mt-3 max-w-xl text-center font-sans text-[15px] leading-[22px] font-medium text-muted md:text-base md:leading-6">
          {site.tagline}
        </p>
        <CardFan />
      </section>

      <section className="mx-auto flex w-full max-w-prose flex-col gap-5 px-5 pt-[72px] pb-20 text-center md:px-0">
        {manifesto.map((paragraph) => (
          <p
            key={paragraph}
            className="font-sans text-base leading-body font-medium text-body"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <Section id="work" title="Work" className="pb-[72px]">
        <p className="pb-5 font-sans text-base leading-body font-medium text-body">
          {workIntro}
        </p>
        <ul className="flex flex-col gap-7">
          {projects.map((project) => (
            <li key={project.name} className="flex flex-col gap-1.5">
              <h3 className="font-serif text-[20px] leading-body text-ink">
                {project.name}
              </h3>
              <p className="font-sans text-small leading-5 font-medium text-muted">
                {project.tags}
              </p>
              <p className="font-sans text-[15px] leading-[22px] font-medium text-body">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Quote {...quotes[0]} />

      <Section title="About" className="pb-12">
        <div className="flex flex-col gap-4">
          {about.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-base leading-body font-medium text-body"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Quote {...quotes[1]} />

      <Section title="Available" className="pb-[72px]">
        <p className="pb-6 font-sans text-base leading-body font-medium text-body">
          {available}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center rounded-pill bg-ink px-[22px] py-3 font-sans text-[15px] leading-5 font-medium text-white transition-opacity hover:opacity-80"
        >
          {site.cta}
        </a>
      </Section>

      <Section title="Questions" className="pb-24">
        <dl className="flex flex-col gap-8">
          {questions.map((item) => (
            <div key={item.q} className="flex flex-col gap-2">
              <dt className="font-sans text-base leading-[22px] font-semibold text-ink">
                {item.q}
              </dt>
              <dd className="font-sans text-base leading-body font-medium text-body">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
