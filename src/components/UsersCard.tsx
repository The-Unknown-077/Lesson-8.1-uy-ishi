import Image from 'next/image';
import { FC, memo } from 'react';

interface Props {
    title: string;
    data: any;
}

const UsersCard:FC<Props> = ({ title, data }) => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl text-center mt-[40px] mb-[40px]'>{title}</h2 >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
                {data?.map((user: any) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 w-[300px] h-[440px] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <Image
                            src={user.image}
                            alt={user.firstName}
                            className="w-full rounded-[12px] h-[260px] object-cover mb-4"
                            width={300}
                            height={260}
                        />
                        <h3 title={user.firstName} className="text-lg line-clamp-1 font-semibold border-t-2 border-gray-400 pt-[10px] text-white">
                            {user.firstName} {user.lastName}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Age: {user.age}
                        </p>
                        <p className="text-indigo-400 font-bold">Phone number: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default memo(UsersCard);