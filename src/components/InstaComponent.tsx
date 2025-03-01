import { InstagramEmbed } from 'react-social-media-embed';

export default function InstaComponent() {

    const urls = [
        "https://www.instagram.com/p/DGpr43gMFmV/",
        "https://www.instagram.com/p/DGl9P3tsAwC/",
        "https://www.instagram.com/p/DGeF4gSs-Uf/",
        "https://www.instagram.com/p/DF2ZVEjM7t7/",
        "https://www.instagram.com/p/DBZPYOSsCha/",
        "https://www.instagram.com/reel/DBRfHKCsXlZ/",
        "https://www.instagram.com/p/C-e11HYoV0Q/",
        "https://www.instagram.com/reel/C508ryZIX4z/",
        "https://www.instagram.com/p/C28U-3iokW8/",
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center max-w-full mt-20'>
            {urls.map((url) => {
                return (
                    <InstagramEmbed url={url} width={328} />
                )
            }
            )}
        </div>
    )
}