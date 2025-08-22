// UI Component Types
export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export interface IconProps {
  className?: string;
  size?: number;
}

// Page Component Types
export interface LandingPageProps {
  onOpenInvitation: () => void;
}

export interface InvitationContentProps {
  isVisible: boolean;
}

// Wedding Information Types
export interface WeddingDetails {
  date: string;
  time: string;
  venue: string;
  address: string;
  brideName: string;
  groomName: string;
}

// Application State Types
export interface AppState {
  isInvitationOpen: boolean;
}
