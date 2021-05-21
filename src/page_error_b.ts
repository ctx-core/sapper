import { _page_b, _page_Ctx, page_error_T } from './_page_b'
export function page_error_b(ctx:_page_Ctx):page_error_T {
	const _page = _page_b(ctx)
	return _page.error
}
