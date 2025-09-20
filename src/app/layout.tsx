"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Layout() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How To Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          buttonText="Get started"
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MVP Wonders"
          subtitle="Your solution for all MVP needs"
          contractAddress="0xContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="At MVP Wonders, we help you create your dream MVP with ease. Our solutions are tailored to your needs, ensuring a smooth process from start to finish."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understand the core financial model behind MVP Wonders."
          tokenData={[{ value: '1M', description: 'Total Supply' }, { value: '100K', description: 'Initial Liquidity' }, { value: '25%', description: 'Team Allocation' }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MVP Wonders Logo"
          columns={[{ items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] }, { items: [{ label: 'Tokenomics', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }]}
          logoText="MVP Wonders"
        />
      </div>
    </SiteThemeProvider>
  );
}
