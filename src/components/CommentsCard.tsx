import Image from 'next/image';
import { FC, memo } from 'react';

interface Props {
    title: string;
    data: any;
}

const CommentsCard: FC<Props> = ({ title, data }) => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl text-center mt-[40px] mb-[40px]'>{title}</h2 >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
                {data?.map((user: any) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 w-[300px] h-[200px] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <h3 title={user.user.fullName} className="text-lg line-clamp-1 font-semibold pt-[10px] text-white">
                            {user.user.fullName}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Username: {user.user.username}
                        </p>
                        <p className='text-white text-[16px] mb-[8px]'>Text: {user.body}</p>
                        <p className="text-indigo-400 font-bold">Likes: {user.likes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(CommentsCard);