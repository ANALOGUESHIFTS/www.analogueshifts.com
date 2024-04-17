import GuestLayout from './Layouts/GuestLayout'
import BuildTeam from './components/HomeComponents/BuildTeam'
import Features from './components/HomeComponents/Features'
import Landing from './components/HomeComponents/Landing'
import Services from './components/HomeComponents/Services'
import Testimonials from './components/HomeComponents/Testimonials'

export const metadata = {
    title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    openGraph: {
        title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        url: 'https://www.analogueshifts.com',
        siteName: 'AnalogueShifts',
        images: [
            {
                url: '/images/a4.jpg',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
    verification: {
        google: 'SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k',
    },
}

export default function Page() {
    return (
        <GuestLayout>
            <Landing />
            <Features />
            <Services />
            <BuildTeam />
            <Testimonials />
        </GuestLayout>
    )
}
