import { getLegalSection } from '@/lib/readLegal';

export default function CookiesPage() {
  const md = getLegalSection('cookies');

  return (
    <main className="prose lg:prose-xl max-w-4xl mx-auto py-12 px-4">
      <h1>Cookie Policy</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{md || 'Cookie policy not found. Please customize /content/legal-pages-templates.md'}</pre>
    </main>
  );
}
