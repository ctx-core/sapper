import type { Readable$ } from '@ctx-core/store'
import { page$_b } from './page$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
export function page_host$_b(ctx:sapper_Ctx):page_host$_T {
	const page$ = page$_b(ctx)
	return page$.host$
}
export interface page_host$_T extends Readable$<string|undefined> {}
