import { _page_b, page_error_type } from './_page_b'
export function page_error_b<C extends object = object>(ctx:C): page_error_type {
	const _page = _page_b<C>(ctx)
	return _page.error
}
