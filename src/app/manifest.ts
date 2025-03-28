import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Seni Ruang Minimalis Pekalongan',
        short_name: 'SNM Pekalongan',
        description: 'Spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik di Pekalongan dan sekitarnya.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/images/favicon/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}