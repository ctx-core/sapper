import { _page_b, page_host_T } from './_page_b'
import type { sapper_Ctx } from './sapper_Ctx'
export function page_host_b(ctx:sapper_Ctx):page_host_T {
	const _page = _page_b(ctx)
	return _page.host
}
