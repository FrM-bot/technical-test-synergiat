export const formatDate = ({ date, locales, option }: { date: string | number | Date, locales?: string | string[] | undefined, option?: Intl.DateTimeFormatOptions | undefined }) => {
  try {
    return new Intl.DateTimeFormat(locales ?? 'en-EN', option ?? { dateStyle: 'long' }).format(new Date(date))
  } catch (error) {
    console.error(error)
  }
}
