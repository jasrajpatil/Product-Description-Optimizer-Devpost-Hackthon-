export interface Variation {
  title: string;
  description: string;
  score: number;
  framework: string;
}

export interface AnalysisResult {
  overallScore: number;
  weaknesses: string[];
  opportunities: string[];
  variations: Variation[];
}

export interface ABTest {
  id: string;
  productName: string;
  status: 'active' | 'completed' | 'draft';
  original: {
    cvr: number;
    visitors: number;
  };
  variation: {
    name: string;
    cvr: number;
    visitors: number;
    isWinner: boolean;
  };
  progress: number;
  significance: number;
  daysRemaining?: number;
}

export interface BulkItem {
    id: number;
    name: string;
    status: 'completed' | 'processing' | 'queued' | 'error';
    scoreBefore?: number;
    scoreAfter?: number;
    revenueImpact?: number;
}


export type Page = 'home' | 'dashboard' | 'optimizer' | 'ab_tests' | 'bulk';

// For Optimizer customization
export type Tone = 'Rational' | 'Emotional' | 'Balanced';
export type Audience = 'Budget-Conscious' | 'Luxury' | 'Impulse Buyers' | 'Researchers';
export type Framework = 'AIDA' | 'PAS' | 'FAB' | '4Ps';