import { _page_b, path_type } from './_page_b'
export function path_b<C extends object = object>(ctx:C): path_type {
	const _page = _page_b<C>(ctx)
	return _page.path
}
