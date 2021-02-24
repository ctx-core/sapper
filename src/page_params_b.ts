import { _page_b, page_params_T } from './_page_b'
export function page_params_b<Ctx extends object = object>(ctx:Ctx):page_params_T {
	const _page = _page_b<Ctx>(ctx)
	return _page.params
}
