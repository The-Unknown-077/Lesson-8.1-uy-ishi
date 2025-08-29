import UsersCard from '@/components/UsersCard';
import { memo } from 'react';

export default async function Users() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json()

    return (
        <>
            <UsersCard title="Users" data={data?.users} />
        </>
    );
};
