import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/images/logo_tekkom-removebg-preview.png"
            alt="Logo"
            className='scale-125'
        />
    );
}
