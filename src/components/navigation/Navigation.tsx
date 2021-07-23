import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const links = [
  {
    href: 'https://github.com/natterstefan/nextjs-template',
    label: 'GitHub',
  },
  { href: 'https://nextjs.org/docs', label: 'NextJS Docs' },
  { href: 'https://tailwindcss.com/docs', label: 'Tailwind Docs' },
]

export const Navigation = () => {
  const { t } = useTranslation('common')

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 p-8">
      <ul className="flex items-center gap-4" data-cy="home-links">
        <li>
          <Link href="/" locale="en">
            <a className="text-blue-500 no-underline">
              {t('common:home', { context: 'EN' })}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" locale="de">
            <a className="text-blue-500 no-underline">
              {t('home', { context: 'DE' })}
            </a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-wrap items-center gap-4">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a
              href={href}
              className="no-underline btn-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
