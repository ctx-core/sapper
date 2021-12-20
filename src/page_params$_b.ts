import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { PageParams } from './page.js'
import { page$_b } from './page$_b.js'
export function page_params$_b(ctx:Ctx):page_params$_T {
	const page$ = page$_b(ctx)
	return page$.params$
}
export type page_params$_T = ReadableAtom$<PageParams|undefined>
