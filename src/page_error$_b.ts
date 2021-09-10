import type { Readable$ } from '@ctx-core/store'
import { page$_b } from './page$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
export function page_error$_b(ctx:sapper_Ctx):page_error$_T {
	const page$ = page$_b(ctx)
	return page$.error$
}
export interface page_error$_T extends Readable$<Error|undefined> {}
