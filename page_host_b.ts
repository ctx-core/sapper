import { _page_b, page_host_type } from './_page_b'
export function page_host_b<C extends object = object>(ctx:C): page_host_type {
	const _page = _page_b<C>(ctx)
	return _page.host
}
