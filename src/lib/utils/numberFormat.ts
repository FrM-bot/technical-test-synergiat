export const formatNumber = ({ number, locales, option }: { number: number, locales?: string | string[] | undefined, option?: Intl.NumberFormatOptions | undefined }) => {
  try {
    return new Intl.NumberFormat(locales ?? 'de-DE', option).format(number)
  } catch (error) {
    console.error(error)
  }
}
