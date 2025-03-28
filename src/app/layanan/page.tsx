import PageHeader from '@/components/ui/PageHeader';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import TeamSkills from '@/components/services/TeamSkills';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Layanan Kami | SENI RUANG MINIMALIS PEKALONGAN',
    description: 'Solusi interior minimalis terlengkap untuk rumah, kantor, dan berbagai bangunan di Pekalongan. Dari plafon gypsum hingga kitchen set dengan kualitas terbaik.',
};

export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Layanan Kami"
                description="Kami menyediakan berbagai layanan desain interior minimalis berkualitas tinggi dengan pengerjaan oleh tenaga profesional berpengalaman."
                backgroundImage="/images/pages/services-page.jpg"
                pageHeight="tall"
                overlay="medium"
                alignment="left"
            />
            <ServiceFeatures />
            <TeamSkills />
            <WhyChooseUsSection />
        </main>
    );
}