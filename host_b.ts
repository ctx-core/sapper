import { _page_b, host_type } from './_page_b'
export function host_b<C extends object = object>(ctx:C): host_type {
	const _page = _page_b<C>(ctx)
	return _page.host
}
