import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import addDays from 'date-fns/addDays'

/**
 * useChangeLocation observes the current `locale` of the page and compares it
 * wit the the `defaultLocale`. If they do not match it updates the user's
 * cookies which will used by Next.js to determine the user's language.
 *
 * Docs
 * - @see https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
 * - @see https://www.infoxicator.com/how-i-translated-my-next-js-blog
 * - @see https://github.com/vinissimus/next-translate#10-how-to-save-the-user-defined-language
 *
 * Other Links
 * - @see https://dev.to/debosthefirst/how-to-use-cookies-for-persisting-users-in-nextjs-4617
 */
export const useChangeLocation = () => {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
  const { locale, defaultLocale } = useRouter()

  useEffect(() => {
    if (cookie.NEXT_LOCALE !== locale) {
      const expires = addDays(new Date(), 100)
      setCookie('NEXT_LOCALE', locale, { path: '/', expires })
    }
  }, [locale, defaultLocale, cookie.NEXT_LOCALE, setCookie])
}
