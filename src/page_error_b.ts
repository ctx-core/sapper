import { _page_b, page_error_T } from './_page_b'
export function page_error_b<Ctx extends object = object>(ctx:Ctx): page_error_T {
	const _page = _page_b<Ctx>(ctx)
	return _page.error
}
