"use client";

import { useQuery } from "@tanstack/react-query";
import type { Project } from "@/types";

type ProjectsResponse = {
  projects: Project[];
};

async function fetchProjects() {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error("Nu am putut incarca proiectele.");
  }

  return (await response.json()) as ProjectsResponse;
}

export function DashboardClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard", "projects"],
    queryFn: fetchProjects,
  });

  const projects = data?.projects ?? [];

  return (
    <section className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Dashboard proiecte
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Status rapid pentru proiectele active si livrabilele recente.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-sm text-slate-500">Proiecte</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {isLoading ? "..." : projects.length}
          </p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-sm text-slate-500">Active</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {isLoading
              ? "..."
              : projects.filter((project) => project.status === "active").length}
          </p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-sm text-slate-500">Finalizate</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {isLoading
              ? "..."
              : projects.filter((project) => project.status === "completed")
                  .length}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-black/10 bg-white">
        <div className="border-b border-black/10 px-4 py-3">
          <h2 className="text-base font-semibold text-slate-950">
            Proiecte recente
          </h2>
        </div>
        <div className="divide-y divide-black/10">
          {isLoading && (
            <p className="px-4 py-5 text-sm text-slate-600">
              Se incarca proiectele...
            </p>
          )}
          {isError && (
            <p className="px-4 py-5 text-sm text-red-700">
              Nu am putut incarca proiectele acum.
            </p>
          )}
          {!isLoading && !isError && projects.length === 0 && (
            <p className="px-4 py-5 text-sm text-slate-600">
              Nu exista proiecte inca.
            </p>
          )}
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid gap-2 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <p className="font-medium text-slate-950">{project.name}</p>
                {project.description && (
                  <p className="mt-1 line-clamp-1 text-sm text-slate-600">
                    {project.description}
                  </p>
                )}
              </div>
              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
