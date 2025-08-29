import Image from 'next/image';
import { FC, memo } from 'react';

interface Props {
    title: string;
    data: any;
}

const Cards: FC<Props> = ({ title, data }) => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl text-center mt-[40px] mb-[40px]'>{title}</h2 >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
                {data?.map((product: any) => (
                    <div
                        key={product.id}
                        className="bg-gray-800 w-[300px] h-[440px] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-[260px] object-cover mb-4"
                            width={300}
                            height={260}
                        />
                        <h3 className="text-lg font-semibold border-t-2 border-gray-400 pt-[10px] text-white">
                            {product.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                            On stock: {product.stock}
                        </p>
                        <p className="text-indigo-400 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default memo(Cards);