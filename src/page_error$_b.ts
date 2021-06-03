import type { Readable$ } from '@ctx-core/store'
import { page__b } from './page__b'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page_error_T } from './page'
export function page_error$_b(ctx:sapper_Ctx):page_error$_T {
	const _page = page__b(ctx)
	return _page.error$
}
export interface page_error$_T extends Readable$<page_error_T|undefined> {}
