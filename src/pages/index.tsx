import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { URL } from '../utils';
import VerticalLayout from '../components/VerticalLayout';

export default function Home() {
  const { error, data } = useQuery(
    [URL],
    () => fetch(URL).then((res) => res.json()),
    {
      select: (response) => {
        return response.data.map((module: any) => {
          return { id: module.id, style: module.style };
        });
      },
    }
  );

  if (error) return 'An error has occurred'

  return (
    <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <VerticalLayout modules={data.data} />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([URL], () =>
    fetch(URL).then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
