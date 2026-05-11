create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nume text not null,
  firma text not null default '',
  email text not null,
  telefon text not null default '',
  domeniu text not null default '',
  dimensiune text not null default '',
  buget text not null default '',
  nevoie text not null,
  mesaj text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

create policy "Service role can manage leads"
  on public.leads
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
