import { _page_b, page_path_T } from './_page_b'
export function page_path_b<Ctx extends object = object>(ctx:Ctx):page_path_T {
	const _page = _page_b<Ctx>(ctx)
	return _page.path
}
