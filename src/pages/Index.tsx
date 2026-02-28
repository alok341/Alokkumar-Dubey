import { useState, useCallback } from 'react';
import Scene3D from '@/components/Scene3D';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import SkillsGalaxy from '@/components/SkillsGalaxy';
import SocialLinks from '@/components/SocialLinks';
import ResumeButton from '@/components/ResumeButton';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import CreatorSection from '@/components/CreatorSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <Scene3D />

      <main className="relative">
        <HeroSection onSummaryClick={() => setSummaryOpen(true)} />
        <SkillsGalaxy />
        <ResumeButton />
        <CreatorSection />
        <CurrentlyLearning />
        <ContactSection />
        <SocialLinks />

        <footer className="relative z-10 text-center py-8 text-muted-foreground/40 font-mono text-xs">
          © 2025 Alokkumar Dubey
        </footer>
      </main>

      <ProfessionalSummary isOpen={summaryOpen} onClose={() => setSummaryOpen(false)} />
    </>
  );
};

export default Index;
