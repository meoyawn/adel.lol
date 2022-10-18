import React, { ReactNode } from "react"
import { GetStaticProps } from "next"

import { ogImage } from "../lib/web"
import Image from "next/image"
import Head from "next/head"

interface Props {
  ogImages: Record<string, string>
}

interface Org {
  name: string
  url: string
  logoURL?: string
}

const orgs = {
  agape: {
    name: "Agape Labs",
    url: "https://adel.lol",
  },
  wheely: {
    name: "Wheely",
    url: "https://wheely.com",
  },
  infotech: {
    name: "Infotech Group",
    url: "https://infotech.group",
  },
  yandex: {
    name: "Yandex",
    url: "https://yandex.com",
  },
  flatstack: {
    name: "Flatstack",
    url: "https://www.flatstack.com",
  },
  ksu: {
    name: "Kazan State University",
    url: "https://eng.kpfu.ru",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Kazan_federal_university_emblem.png",
  },
  telegram: {
    name: "Telegram",
    url: "https://telegram.org",
  },
  acm: {
    name: "ACM",
    url: "https://www.acm.org",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg",
  },
} as const
type OrgID = keyof typeof orgs

interface Product {
  name: string
  url: string
  archiveImgURL?: string
}

const products = {
  vibes: {
    name: "VK Vibes",
    url: "https://web.archive.org/web/20140829110945/https://play.google.com/store/apps/details?id=com.stiggpwnz.vibes",
    archiveImgURL:
      "https://web.archive.org/web/20221010221523im_/https://lh3.ggpht.com/iykRcs70ukktRV3JaA7akqNhrWB3o3DcFYBz3BsTie55BWYUn7yLf_QjQGEqw54JrRxX=w300",
  },
  schedule: {
    name: "KSU Schedule",
    url: "https://play.google.com/store/apps/details?id=com.stiggpwnz.schedule",
  },
  meloman: {
    name: "Meloman",
    url: "https://web.archive.org/web/20141003050637/https://play.google.com/store/apps/details?id=com.flatsoft.meloman",
    archiveImgURL:
      "https://web.archive.org/web/20141003050637im_/https://lh6.ggpht.com/LEHezD8Eqfpr46bBfGeDqOAd2j6lNLa-4nUzBc4fMZULoo5xisrWkrF4GVs318YFFFs=w300",
  },
  arrowbox: {
    name: "Arrowbox",
    url: "https://arrowbox.co",
  },
  listenbox: {
    name: "Listenbox",
    url: "https://listenbox.app",
  },
  roadtrippers: {
    name: "Roadtrippers",
    url: "https://play.google.com/store/apps/details?id=com.roadtrippers",
  },
  ["wheely-passenger"]: {
    name: "Wheely",
    url: "https://play.google.com/store/apps/details?id=com.wheely.wheely",
  },
  ["wheely-driver"]: {
    name: "Wheely for Chauffeurs",
    url: "https://play.google.com/store/apps/details?id=com.wheely.groundio",
  },
  ["breaking-news"]: {
    name: "BreakingNews.ie",
    url: "https://play.google.com/store/apps/details?id=ie.breakingnews.mobile",
  },
  ["irish-examiner"]: {
    name: "Irish Examiner",
    url: "https://play.google.com/store/apps/details?id=ie.irishexaminer.mobile",
  },
  ["acl-grc"]: {
    name: "Diligent HighBond",
    url: "https://play.google.com/store/apps/details?id=com.aclgrc.android",
  },
  ["yandex"]: {
    name: "Yandex Start",
    url: "https://play.google.com/store/apps/details?id=ru.yandex.searchplugin",
  },
  oek: {
    name: "Районные Электросети",
    url: "https://play.google.com/store/apps/details?id=com.infotechcorp.moscowlamps",
  },
  gorenie: {
    name: "Служба Горения",
    url: "https://play.google.com/store/apps/details?id=group.infotech.gorenie",
  },

  ["android-drawable-dsl"]: {
    name: "Android Drawable Kotlin DSL",
    url: "https://github.com/infotech-group/android-drawable-dsl",
  },
  responsible: {
    name: "Responsible",
    url: "https://github.com/meoyawn/responsible",
  },
} as const
type ProductID = keyof typeof products

const skills = {
  jvm: "Java Virtual Machine (JVM)",
  kotlin: "Kotlin",
  vertx: "Vert.x",
  android: "Android",

  node: "Node.js",
  d3: "D3.js",
  typescript: "TypeScript",
  next: "Next.js",
  tailwind: "Tailwind CSS",
  react: "React.js",

  git: "Git",
  docker: "Docker",
  ffmpeg: "FFmpeg",
  linux: "Linux",

  sqlite: "SQLite",
  postgres: "PostgreSQL",

  stripe: "Stripe",
  seo: "Search Engine Optimization (SEO)",

  crdt: "Conflict-free Replicated Data Types (CRDT)",
} as const
type SkillID = keyof typeof skills

const ProductLink = ({
  product,
  images,
}: {
  product: Product
  images: Record<string, string>
}) => {
  const bgURL = product.archiveImgURL ?? images[product.url]
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={product.url}
      className="relative h-12 overflow-hidden rounded-lg border border-solid border-gray-200"
    >
      <Image
        loading="eager"
        alt={product.name}
        height={46}
        width={88}
        src={bgURL}
        className="object-cover"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="absolute bottom-0 right-0 flex h-5 w-5 rounded-tl-lg bg-white p-1 text-gray-500"
      >
        <path d="M11 2a3 3 0 00-2.1.87L6.87 4.94a2.93 2.93 0 00-.72 1.21 2.93 2.93 0 00-1.21.72L2.87 8.94a3 3 0 104.19 4.19l2.07-2.07a2.93 2.93 0 00.72-1.21 2.93 2.93 0 001.21-.72l2.07-2.07A3 3 0 0011 2zm-5.17 9.89a1.22 1.22 0 01-1.72-1.72l2.06-2.06A3 3 0 007.91 9.8zm6.07-6.07L9.83 7.89A3 3 0 008.09 6.2l2.07-2.07a1.22 1.22 0 011.73 1.7z" />
      </svg>
    </a>
  )
}

interface ExperienceProps {
  position: string
  org: OrgID
  start: string
  end: string
  duration: string
  location: string
  Description: React.FC<Record<never, never>>
  products: ReadonlyArray<ProductID>
  skills: ReadonlyArray<SkillID>
}

interface EducationProps {
  org: OrgID
  start: string
  end: string
  products: ReadonlyArray<ProductID>
  degree: React.FC<Record<never, never>>
}

const education: ReadonlyArray<EducationProps> = [
  {
    org: "ksu",
    degree: () => (
      <>
        <a
          href="https://academia.stackexchange.com/a/78098"
          target="_blank"
          rel="noreferrer"
        >
          Specialist
        </a>
        <span> of Applied Mathematics and Computer Science</span>
      </>
    ),
    start: "Sept 2010",
    end: "Jul 2015",
    products: ["schedule", "vibes"],
  },
]

const experiences: ReadonlyArray<ExperienceProps> = [
  {
    org: "agape",
    position: "Solopreneur",
    start: "Oct 2019",
    end: "Present",
    duration: "3 yrs 1 mo",
    location: "Remote",
    Description: () => (
      <>
        <span>Working on my own products.</span>
        <ul className="m-0">
          <li>Bootstrapped a profitable SaaS</li>
        </ul>
      </>
    ),
    skills: [
      "react",
      "node",
      "typescript",
      "docker",
      "linux",
      "d3",
      "react",
      "next",
      "tailwind",
      "seo",
      "node",
    ],
    products: ["listenbox", "arrowbox", "responsible"],
  },
  {
    org: "wheely",
    position: "Senior Android Developer",
    start: "Jun 2017",
    end: "Jun 2019",
    duration: "2 yrs",
    location: "Remote",
    Description: () => (
      <>
        <span>
          Developed Passenger & Driver Android Apps. Interviewed Android
          developers.
        </span>

        <ul className="m-0">
          <li>Redesigned the Passenger app</li>
          <li>Introduced UI (integration) tests</li>
        </ul>
      </>
    ),
    products: ["wheely-passenger", "wheely-driver"],
    skills: ["android", "kotlin", "sqlite"],
  },
  {
    org: "infotech",
    position: "Lead Android Developer",
    start: "May 2016",
    end: "Jun 2017",
    duration: "1 yr 2 mos",
    location: "Kazan, Tatarstan",
    Description: () => (
      <>
        <span>
          Developed Android apps. Hired and technically led Android developers.
        </span>

        <ul className={"m-0"}>
          <li>
            Created internal processes and infrastructure for Android
            development
          </li>
          <li>Hired and led 3 Android developers</li>
          <li>Built 2 apps from scratch</li>
        </ul>
      </>
    ),
    products: ["oek", "gorenie", "android-drawable-dsl"],
    skills: ["android", "kotlin", "sqlite"],
  },
  {
    org: "yandex",
    position: "Android Developer",
    products: ["yandex"],
    start: "Jul 2015",
    end: "Mar 2016",
    location: "Saint Petersburg, Russian Federation",
    duration: "9 mos",
    Description: () => (
      <>
        <span>
          <span>Developed </span>
          <a href={products.yandex.url} target="_blank" rel="noreferrer">
            Yandex.Search for Android
          </a>
          <span>.</span>
        </span>

        <ul className={"m-0"}>
          <li>Adapted UI for tablets</li>
          <li>Improved app performance</li>
          <li>Introduced application upgrade tests</li>
        </ul>
      </>
    ),
    skills: ["android", "sqlite"],
  },
  {
    org: "flatstack",
    position: "Lead Android Developer",
    products: [
      "meloman",
      "breaking-news",
      "irish-examiner",
      "roadtrippers",
      "acl-grc",
    ],
    start: "Oct 2012",
    end: "Feb 2015",
    location: "Kazan, Tatarstan",
    duration: "2 yrs 5 mos",
    Description: () => (
      <>
        <span>
          Developed Android apps. Hired and technically led Android developers.
          Did customer demos.
        </span>

        <ul className="m-0">
          <li>Built 4 apps from scratch</li>
          <li>Created internal processes for Android development</li>
          <li>Hired and led 3 Android developers</li>
        </ul>
      </>
    ),
    skills: ["android", "sqlite"],
  },
]

interface AwardProps {
  org: OrgID
  what: string
  when: string
  products: ReadonlyArray<ProductID>
  url: string
}

const awards: ReadonlyArray<AwardProps> = [
  {
    org: "telegram",
    url: "https://vk.com/wall1_1108590",
    what: "Winner of Telegram Android Challenge 2016",
    when: "Jul 2016",
    products: [],
  },
  {
    org: "acm",
    url: "https://neerc.ifmo.ru/archive/2011/southern/standings.html",
    what: "55th in 2011 ACM ICPC Quarterfinals",
    when: "Oct 2011",
    products: [],
  },
]

const Award = ({ e }: { e: AwardProps }) => {
  const org = orgs[e.org]

  return (
    <div>
      <h3 className="m-0">
        <a href={e.url} target="_blank" rel="noreferrer">
          <strong>{e.what}</strong>
        </a>
        <span> - </span>
        <span>{org.name}</span>
      </h3>

      <span>{e.when}</span>
      <br />
    </div>
  )
}

const ExperienceChildren = ({ e }: { e: ExperienceProps }) => {
  const org = orgs[e.org]

  return (
    <>
      <h3 className="m-0">{e.position}</h3>

      <a href={org.url} target="_blank" rel="noreferrer">
        {org.name}
      </a>
      <br />

      <span>{`${e.start} - ${e.end} · ${e.duration}`}</span>
      <br />

      <e.Description />
    </>
  )
}

const EducationChildren = ({ e }: { e: EducationProps }) => {
  const org = orgs[e.org]

  return (
    <>
      <a href={org.url} target="_blank" rel="noreferrer">
        <h3 className="m-0">{org.name}</h3>
      </a>

      <e.degree />
      <br />

      <span>{`${e.start} - ${e.end}`}</span>
    </>
  )
}

const OrgAndProducts = ({
  e,
  images,
  children,
}: {
  e: ExperienceProps | EducationProps | AwardProps
  images: Record<string, string>
  children: ReactNode
}): JSX.Element => {
  const org = orgs[e.org] as Org

  return (
    <div className="flex flex-row gap-2">
      <a
        className="mt-1 flex-shrink-0"
        target="_blank"
        rel="noreferrer"
        href={org.url}
      >
        <Image
          width={24}
          height={24}
          loading="eager"
          className="object-cover"
          src={org.logoURL ?? images[org.url]}
          alt={org.name}
        />
      </a>

      <div>
        {children}

        <div className="flex flex-row flex-wrap gap-1 print:hidden">
          {e.products.map(p => (
            <ProductLink key={p} product={products[p]} images={images} />
          ))}
        </div>
      </div>
    </div>
  )
}

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    ogImages: Object.fromEntries(
      await Promise.all(
        [
          ...Object.values(orgs).map(x => x.url),
          ...Object.values(products).map(x => x.url),
        ].map(async url => [url, await ogImage(url)] as const),
      ),
    ),
  },
})

const Header = ({
  email,
  phone,
  website,
  linkedin,
  name,
  location,
}: {
  email: string
  phone?: string
  website: string
  linkedin: string
  name: string
  location: string
}) => (
  <section>
    <h1 className="mb-0 font-normal">{name}</h1>
    <p className="mt-0">{location}</p>

    <div className="grid grid-cols-2">
      <a
        className="space-x-1"
        target="_blank"
        rel="noreferrer"
        href={`mailto:${email}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="inline h-4 w-4"
        >
          <path d="M8 1L1 4.47V11a3 3 0 003 3h8a3 3 0 003-3V4.47zm5 10a1 1 0 01-1 1H4a1 1 0 01-1-1V6.51L8 9l5-2.49z"></path>
        </svg>
        <span>{email}</span>
      </a>

      {phone ? (
        <a
          className="space-x-1"
          target="_blank"
          rel="noreferrer"
          href={`tel:${phone}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="inline h-4 w-4"
          >
            <path d="M4.18 11.82C6.62 14.26 8.64 15 10.79 15a3.76 3.76 0 002.66-1.1l1.32-1.32a.8.8 0 000-1.13L11.6 8.29a1 1 0 00-.69-.29 1 1 0 00-.42.09l-1.67.73-1.64-1.64.73-1.67A1 1 0 008 5.09a1 1 0 00-.29-.69L4.55 1.23a.8.8 0 00-1.13 0L2.1 2.55A3.76 3.76 0 001 5.21c0 2.15.74 4.17 3.18 6.61zm1.24-1.24c-2.34-2.34-2.67-4-2.67-5.37a2 2 0 01.59-1.42L4 3.14l2 2-1 2.32L8.54 11l2.29-1 2 2-.65.65a2 2 0 01-1.42.59c-1.38.01-3-.31-5.34-2.66z" />
          </svg>
          <span>{phone}</span>
        </a>
      ) : null}

      <a
        className="space-x-1"
        target="_blank"
        rel="noreferrer"
        href={`https://linkedin.com/in/${linkedin}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="inline h-4 w-4"
        >
          <path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" />
        </svg>
        <span>{linkedin}</span>
      </a>

      <a className="space-x-1" target="_blank" rel="noreferrer" href={website}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="inline h-4 w-4"
        >
          <path d="M11 2a3 3 0 00-2.1.87L6.87 4.94a2.93 2.93 0 00-.72 1.21 2.93 2.93 0 00-1.21.72L2.87 8.94a3 3 0 104.19 4.19l2.07-2.07a2.93 2.93 0 00.72-1.21 2.93 2.93 0 001.21-.72l2.07-2.07A3 3 0 0011 2zm-5.17 9.89a1.22 1.22 0 01-1.72-1.72l2.06-2.06A3 3 0 007.91 9.8zm6.07-6.07L9.83 7.89A3 3 0 008.09 6.2l2.07-2.07a1.22 1.22 0 011.73 1.7z"></path>
        </svg>
        <span>{website.replace("https://", "")}</span>
      </a>
    </div>
  </section>
)

const Summary = ({ children }: { children: ReactNode }): JSX.Element => (
  <section>
    <h2>Summary</h2>

    {children}
  </section>
)

// noinspection JSUnusedGlobalSymbols
export default function CV({ ogImages }: Props): JSX.Element {
  const name = "Adel Nizamutdinov"

  return (
    <div className="prose prose-sky m-6 flex max-w-none flex-col print:prose-sm print:m-0 sm:m-12 md:m-16">
      <Head>
        <title>{`CV - ${name}`}</title>
        <meta name="description" content="Making new stuff" />
      </Head>

      <Header
        name={name}
        location="United States or Remote"
        email="mail@adel.lol"
        phone={undefined}
        website="https://adel.lol"
        linkedin="adelnizamuddin"
      />

      <Summary>
        <span>
          <span>
            10 years of building commercial software in Java, Kotlin, Typescript
            & Python.
          </span>
          <br />
          <span>Bootstrapped a profitable SaaS</span>
        </span>
      </Summary>

      <section>
        <h2>Experience</h2>
        <Things>
          {experiences.map(e => (
            <OrgAndProducts key={e.org} e={e} images={ogImages}>
              <ExperienceChildren e={e} />
            </OrgAndProducts>
          ))}
        </Things>
      </section>

      <section>
        <h2>Education</h2>
        <Things>
          {education.map(e => (
            <OrgAndProducts key={e.org} e={e} images={ogImages}>
              <EducationChildren e={e} />
            </OrgAndProducts>
          ))}
        </Things>
      </section>

      <section>
        <h2>Skills</h2>
        <span
          dangerouslySetInnerHTML={{
            __html: Object.values(skills).join(" •&nbsp;"),
          }}
        />
      </section>

      <section>
        <h2>Honors & Awards</h2>
        <Things>
          {awards.map(e => (
            <OrgAndProducts key={e.org} e={e} images={ogImages}>
              <Award e={e} />
            </OrgAndProducts>
          ))}
        </Things>
      </section>
    </div>
  )
}

const Things = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-6 print:gap-2">{children}</div>
)
