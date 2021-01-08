import { _page_b, page_params_type } from './_page_b'
export function params_b<C extends object = object>(ctx:C): page_params_type {
	const _page = _page_b<C>(ctx)
	return _page.params
}
