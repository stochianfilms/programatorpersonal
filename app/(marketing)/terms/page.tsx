import { getLegalSection } from '@/lib/readLegal';

export default function TermsPage() {
  const md = getLegalSection('terms');

  return (
    <main className="prose lg:prose-xl max-w-4xl mx-auto py-12 px-4">
      <h1>Terms & Conditions</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{md || 'Terms & Conditions not found. Please customize /content/legal-pages-templates.md'}</pre>
    </main>
  );
}
