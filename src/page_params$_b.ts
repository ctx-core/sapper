import type { Readable$ } from '@ctx-core/store'
import type { PageParams } from './page.js'
import { page$_b } from './page$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
export function page_params$_b(ctx:sapper_Ctx):page_params$_T {
	const page$ = page$_b(ctx)
	return page$.params$
}
export interface page_params$_T extends Readable$<PageParams|undefined> {}
