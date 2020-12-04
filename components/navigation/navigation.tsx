import React from 'react'
import Link from 'next/link'

const links = [
  {
    href: 'https://github.com/natterstefan/nextjs-tailwind-template',
    label: 'GitHub',
  },
  { href: 'https://nextjs.org/docs', label: 'NextJS Docs' },
  { href: 'https://tailwindcss.com/docs', label: 'Tailwind Docs' },
]

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="btn-blue no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
