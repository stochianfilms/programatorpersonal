export default async function ProjectInvoicesPage({
  params,
}: {
  params: Promise<{ projectId: string }> | { projectId: string };
}) {
  const { projectId } = await Promise.resolve(params);

  return <h1 className="text-3xl font-semibold tracking-tight">Facturi {projectId}</h1>;
}