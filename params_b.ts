import { _page_b, params_type } from './_page_b'
export function params_b<C extends object = object>(ctx:C): params_type {
	const _page = _page_b<C>(ctx)
	return _page.params
}
