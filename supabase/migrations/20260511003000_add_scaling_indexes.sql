create index if not exists leads_created_at_desc_idx
  on public.leads (created_at desc);

do $$
begin
  if to_regclass('public.projects') is not null then
    if exists (
      select 1
      from information_schema.columns
      where table_schema = 'public'
        and table_name = 'projects'
        and column_name = 'user_id'
    ) then
      create index if not exists projects_user_id_idx
        on public.projects (user_id);
    end if;

    if exists (
      select 1
      from information_schema.columns
      where table_schema = 'public'
        and table_name = 'projects'
        and column_name = 'created_at'
    ) then
      create index if not exists projects_created_at_desc_idx
        on public.projects (created_at desc);
    end if;
  end if;
end $$;
