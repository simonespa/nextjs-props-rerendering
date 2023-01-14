export function selectModuleById(id: string, response: any) {
  return response?.data?.find((module: any) => module?.id === id);
}
