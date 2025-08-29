import UsersCard from '@/components/UsersCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Users",
  description: "All about users",
};

export default async function Users() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json()

    return (
        <>
            <UsersCard title="Users" data={data?.users} />
        </>
    );
};
