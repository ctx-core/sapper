import { _page_b, page_query_T } from './_page_b'
export function page_query_b<Ctx extends object = object>(ctx:Ctx): page_query_T {
	const _page = _page_b<Ctx>(ctx)
	return _page.query
}
