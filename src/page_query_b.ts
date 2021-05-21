import { _page_b, _page_ctx_I, page_query_T } from './_page_b'
export function page_query_b(ctx:_page_ctx_I):page_query_T {
	const _page = _page_b(ctx)
	return _page.query
}
