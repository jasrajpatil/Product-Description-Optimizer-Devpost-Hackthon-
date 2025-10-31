
import { Page } from './types';

interface NavLink {
  name: string;
  page: Page;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', page: 'home' },
  { name: 'Dashboard', page: 'dashboard' },
  { name: 'Optimizer', page: 'optimizer' },
  { name: 'A/B Tests', page: 'ab_tests' },
  { name: 'Bulk Processor', page: 'bulk' },
];