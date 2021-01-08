import { _page_b, error_type } from './_page_b'
export function error_b<C extends object = object>(ctx:C): error_type {
	const _page = _page_b<C>(ctx)
	return _page.error
}
