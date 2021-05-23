import { _page_b, page_error_T } from './_page_b'
import type { sapper_Ctx } from './sapper_Ctx'
export function page_error_b(ctx:sapper_Ctx):page_error_T {
	const _page = _page_b(ctx)
	return _page.error
}
