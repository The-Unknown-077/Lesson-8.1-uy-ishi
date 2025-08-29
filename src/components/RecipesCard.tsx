import Image from 'next/image';
import { FC, memo } from 'react';

interface Props {
    title: string;
    data: any;
}

const RecipesCard: FC<Props> = ({ title, data }) => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl text-center mt-[40px] mb-[40px]'>{title}</h2 >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
                {data?.map((recipe: any) => (
                    <div
                        key={recipe.id}
                        className="bg-gray-800 w-[300px] h-[440px] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <Image
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full rounded-[12px] h-[260px] object-cover mb-4"
                            width={300}
                            height={260}
                        />
                        <h3 title={recipe.name} className="text-lg line-clamp-1 font-semibold border-t-2 border-gray-400 pt-[10px] text-white">
                            {recipe.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            {recipe.cuisine}
                        </p>
                        <p className="text-indigo-400 font-bold">Rating: {recipe.rating}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default memo(RecipesCard);