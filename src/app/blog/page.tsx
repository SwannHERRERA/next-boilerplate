import { Menu } from "@/components/organisms/menu";
import { atom, useAtom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'

const idAtom = atom(1)
const [userAtom] = atomsWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
  },
}))

const UserData = () => {
  const [data] = useAtom(userAtom)
  return <div>{JSON.stringify(data)}</div>
}

export default function Blog() {
  return (
    <>
      <Menu />
      <p>Blog</p>
    </>
  );
}
