import { useQuery } from '@tanstack/react-query'

export function useRmsModule(url: string, selector: () => any) {
  const { error, data } = useQuery(
    [url],
    () =>
      fetch(url).then(res =>
        res.json()
      ),
    {
      select: selector
    }
  )

  return { error, data };
}
