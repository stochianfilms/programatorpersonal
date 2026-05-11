export default async function QuoteDetailPage({
  params,
}: {
  params: Promise<{ quoteId: string }> | { quoteId: string };
}) {
  const { quoteId } = await Promise.resolve(params);

  return <h1 className="text-3xl font-semibold tracking-tight">Ofertă {quoteId}</h1>;
}