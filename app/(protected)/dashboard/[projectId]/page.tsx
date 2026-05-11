export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }> | { projectId: string };
}) {
  const { projectId } = await Promise.resolve(params);

  return <h1 className="text-3xl font-semibold tracking-tight">Proiect {projectId}</h1>;
}