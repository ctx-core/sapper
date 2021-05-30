import type { Readable$ } from '@ctx-core/store'
import { page__b } from './page__b'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page_params_T } from './page'
export function page_params$_b(ctx:sapper_Ctx):page_params$_T {
	const page_ = page__b(ctx)
	return page_.params$
}
export interface page_params$_T extends Readable$<page_params_T> {}
