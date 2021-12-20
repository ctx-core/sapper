import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Query } from './page.js'
import { page$_b } from './page$_b.js'
export function page_query$_b(ctx:Ctx):page_query$_T {
	const page$ = page$_b(ctx)
	return page$.query$
}
export type page_query$_T = ReadableAtom$<Query|undefined>
