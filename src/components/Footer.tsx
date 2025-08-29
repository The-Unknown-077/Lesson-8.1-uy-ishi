import { memo } from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1e] mt-10 py-6">
            <div className="container mx-auto text-center text-gray-400">
                <p className="text-sm">
                    If you are seeing this footer, the information has ended.
                </p>
            </div>
        </footer>
    );
};

export default memo(Footer);