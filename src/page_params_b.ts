import { _page_b, page_params_T } from './_page_b'
import type { sapper_Ctx } from './sapper_Ctx'
export function page_params_b(ctx:sapper_Ctx):page_params_T {
	const _page = _page_b(ctx)
	return _page.params
}
