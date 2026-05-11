alter table public.leads
  add column if not exists source_page text not null default '',
  add column if not exists metadata jsonb not null default '{}'::jsonb;

create index if not exists leads_source_page_idx on public.leads (source_page);
