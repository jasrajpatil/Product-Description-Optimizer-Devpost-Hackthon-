import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WarningIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line>
  </svg>
);

export const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path>
  </svg>
);

export const BrainCircuitIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.99-1.01"></path><path d="M12 5a3 3 0 1 0 5.99-1.01"></path><path d="M15 11a3 3 0 1 0-5.99-1.01"></path><path d="M15 11a3 3 0 1 0 5.99-1.01"></path><path d="M9 17a3 3 0 1 0-5.99-1.01"></path><path d="M9 17a3 3 0 1 0 5.99-1.01"></path><path d="M12 5v0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3v0Z"></path><path d="M15 11v0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3v0Z"></path><path d="M9 17v0a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3v0Z"></path><path d="M6.01 4A3 3 0 0 1 9 5"></path><path d="M6.01 20A3 3 0 0 1 9 17"></path><path d="M18.01 4A3 3 0 0 0 15 5"></path><path d="M18.01 20A3 3 0 0 0 15 17"></path><path d="M9 11a3 3 0 0 1-3-2.01"></path><path d="M15 17a3 3 0 0 1-3-2.01"></path>
    </svg>
);

export const RocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-.17 1.32-.34 2.02-.57.53-.18 1.04-.39 1.5-.63.27-.13.52-.28.75-.45.23-.17.45-.36.66-.57.2-.2.38-.42.55-.65.17-.23.33-.47.47-.72.14-.25.27-.5.39-.77.12-.26.23-.53.33-.8.1-.27.18-.54.25-.83.07-.28.13-.57.17-.87.04-.3.06-.6.06-.92 0-.32-.02-.62-.06-.92-.04-.3-.1-.6-.17-.87-.07-.29-.15-.56-.25-.83a12.1 12.1 0 0 0-.33-.8c-.1-.26-.22-.51-.39-.77-.14-.25-.29-.49-.47-.72-.17-.23-.35-.45-.55-.65-.21-.21-.43-.4-.66-.57-.23-.18-.48-.32-.75-.45-.46-.24-.97-.45-1.5-.63-.7-.23-1.38-.4-2.02-.57C9.2 3.01 8.36 3 7.55 3.7c-1.26 1.5-5 2-5 2s.5 3.74 2 5c.84.71 2.31.7 3.11.05-.17.64-.34 1.32-.57 2.02-.18.53-.39 1.04-.63 1.5-.13.27-.28.52-.45.75-.17.23-.36.45-.57.66-.2.2-.42.38-.65.55-.23.17-.47.33-.72.47-.25.14-.5.27-.77.39-.26.12-.53.23-.8.33-.27.1-.54.18-.83.25-.28.07-.57.13-.87.17-.3.04-.6.06-.92.06-.32 0-.62-.02-.92-.06-.3-.04-.6-.1-.87-.17-.29-.07-.56-.15-.83-.25a12.1 12.1 0 0 0-.8-.33c-.26-.1-.51-.22-.77-.39-.25-.14-.49-.29-.72-.47-.23-.17-.45-.35-.65-.55-.21-.21-.4-.43-.57-.66-.18-.23-.32-.48-.45-.75-.24-.46-.45-.97-.63-1.5-.23-.7-.4-1.38-.57-2.02.05.8.04 2.25-.71 3.11Z"/>
    </svg>
);

export const StarIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

export const CopyIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
  </svg>
);

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const TrophyIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
);

export const UploadIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>
    </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z"></path><path d="M21 21c-3 0-7-1-7-8V5c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 2v6c0 7-4 8-8 8Z"></path>
    </svg>
);

export const ShopifyLogo = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.284 18.382c-.6.31-1.312.31-1.912 0-2.129-1.114-4.224-2.228-5.719-3.92-2.359-2.67-3.23-5.83-2.483-9.01.034-.145.08-.287.13-.427C4.16 3.44 5.378 2.45 6.81 2.45h10.378c1.432 0 2.652.99 3.512 2.575.048.09.094.18.138.27.747 3.18-1.23 6.34-3.59 9.01-1.493 1.692-3.588 2.806-5.714 3.922zM9.75 12.309c0-2.203 1.791-3.994 3.994-3.994h.01c2.203 0 3.994 1.79 3.994 3.994 0 2.203-1.79 3.994-3.994 3.994h-.01c-2.203 0-3.994-1.79-3.994-3.994z" />
    </svg>
);

export const AmazonLogo = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.51 16.42c-.22-2.14-1.39-4.1-3.55-5.18-2.21-1.1-4.93-1.05-7.14.15-2.2.1-4.92.15-7.13-.15C2.48 10.22 1.3 8.26.99 6.12A.49.49 0 0 1 1.48 5.6l.42.17c.83.35 1.7.58 2.6.66 1.7.17 3.42.14 5.12.06 1.7-.08 3.41-.1 5.12-.05 1.7.04 3.42.12 5.11-.06.88-.1 1.77-.32 2.6-.66l.42-.17a.49.49 0 0 1 .49.52zM21 17.6c-2.17-1.1-4.87-1.04-7.07.15-2.2.1-4.88.15-7.08-.15-2.17-1.1-4.87-1.04-7.07.15a.51.51 0 0 0-.28.45c0 .22.14.4.34.46 2.05.62 4.2.86 6.4.67 2.2-.2 4.42-.16 6.63.02 2.2.18 4.43.16 6.63-.02 2.2.19 4.35-.05 6.4-.67.2-.06.34-.24.34-.46a.51.51 0 0 0-.28-.45z" />
    </svg>
);

export const WooCommerceLogo = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.73 4.34a.27.27 0 00-.33.38l3.65 10.29-2.73 7.64a.27.27 0 00.33.38l5.85-2.09L16.27 4.7a.27.27 0 00-.33-.37zm11.02 4.41l3.52 9.87-2.74 7.67a.27.27 0 00.33.38l5.85-2.09 1.4-3.92a.27.27 0 00-.32-.38l-7.2-2.5z" />
    </svg>
);