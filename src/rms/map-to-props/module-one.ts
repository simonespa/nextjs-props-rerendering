import { selectModuleById } from "../module-selector";

export function mapToModuleOne(response: any) {
  const data = selectModuleById('module_1', response);

  const status = typeof(data?.status) === 'string' ? data?.status ?? '' : '';
  let title = data?.id ?? '';

  if (status === 'ok') title = `${title} 😀`;
  if (status === 'error') title = `${title} 😱`;
  if (status === "unknown") title = `${title} 💩`;

  return {
    title,
    items: data?.data?.map?.((item: any) => {
      return {
        id: typeof(item?.id) === 'string' ? data?.status ?? '' : '',
        title: item?.title?.long ?? ''
      }
    }) ?? []
  };
}
