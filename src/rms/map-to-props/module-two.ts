import { selectModuleById } from "../module-selector";

export function mapToModuleTwo(response: any) {
  const data = selectModuleById('module_2', response);

  let status = data.status;
  if (status === 'ok') status = `${status} 😀`;
  if (status === 'error') status = `${status} 😱`;
  if (status === "unknown") status = `${status} 💩`;

  return {
    title: data?.id ?? '',
    status,
    items: data?.data?.map?.((item: any) => {
      return {
        id: typeof(item?.id) === 'string' ? data?.status ?? '' : '',
        text: item?.text ?? ''
      }
    }) ?? []
  };
}
