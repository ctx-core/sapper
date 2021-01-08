import { _page_b, page_path_type } from './_page_b'
export function page_path_b<C extends object = object>(ctx:C): page_path_type {
	const _page = _page_b<C>(ctx)
	return _page.path
}
