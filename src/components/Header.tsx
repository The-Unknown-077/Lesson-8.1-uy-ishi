"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-[#1e1e1e] shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-indigo-400">Logoo</h1>
                <nav className="flex gap-6">
                    <Link
                        href="/"
                        className={`text-lg font-medium transition ${pathname === "/"
                                ? "text-indigo-400 border-b-2 border-indigo-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Products
                    </Link>

                    <Link
                        href="/recipes"
                        className={`text-lg font-medium transition ${pathname === "/recipes"
                                ? "text-indigo-400 border-b-2 border-indigo-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Recipes
                    </Link>

                    <Link
                        href="/users"
                        className={`text-lg font-medium transition ${pathname === "/users"
                                ? "text-indigo-400 border-b-2 border-indigo-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Users
                    </Link>

                    <Link
                        href="/comments"
                        className={`text-lg font-medium transition ${pathname === "/comments"
                                ? "text-indigo-400 border-b-2 border-indigo-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Comments
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default memo(Header);