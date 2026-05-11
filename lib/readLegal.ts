import fs from 'fs';
import path from 'path';

const LEGAL_PATH = path.resolve(process.cwd(), 'content', 'legal-pages-templates.md');

export function getLegalSection(section: 'privacy' | 'terms' | 'cookies') {
  const raw = fs.readFileSync(LEGAL_PATH, 'utf8');

  const lower = raw.toLowerCase();

  if (section === 'privacy') {
    const start = lower.indexOf('## 1. privacy policy');
    const end = lower.indexOf('## 2. terms & conditions');
    if (start !== -1 && end !== -1) return raw.slice(start, end).trim();
  }

  if (section === 'terms') {
    const start = lower.indexOf('## 2. terms & conditions');
    const end = lower.indexOf('## 3. cookie policy');
    if (start !== -1 && end !== -1) return raw.slice(start, end).trim();
  }

  if (section === 'cookies') {
    const start = lower.indexOf('## 3. cookie policy');
    if (start !== -1) return raw.slice(start).trim();
  }

  return '';
}
