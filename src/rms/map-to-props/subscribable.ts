import { selectModuleById } from "../module-selector";

export function mapToSubscribable(id: string) {
  return (response: any) => {
    const data = selectModuleById(id, response);

    const status = typeof (data?.status) === 'string' ? data?.status ?? '' : '';
    let title = data?.id ?? '';

    if (status === 'ok') title = `${title} 😀`;
    if (status === 'error') title = `${title} 😱`;
    if (status === "unknown") title = `${title} 💩`;

    return {
      title,
      items: data?.data?.map?.((item: any) => {
        return {
          id: typeof (item?.id) === 'string' ? item?.id ?? '' : '',
          subscribed: item?.subscribed ? '✅' : '❌'
        }
      }) ?? []
    };
  }
}
