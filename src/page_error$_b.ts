import type { Readable$ } from '@ctx-core/store'
import { page$__b } from './page$__b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
import type { page_error_T } from './page.js'
export function page_error$_b(ctx:sapper_Ctx):page_error$_T {
	const _page = page$__b(ctx)
	return _page.error$
}
export interface page_error$_T extends Readable$<page_error_T|undefined> {}
