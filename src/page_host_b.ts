import { _page_b, page_host_T } from './_page_b'
export function page_host_b<Ctx extends object = object>(ctx:Ctx): page_host_T {
	const _page = _page_b<Ctx>(ctx)
	return _page.host
}
