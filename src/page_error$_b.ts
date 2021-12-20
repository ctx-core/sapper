import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_b } from './page$_b.js'
export function page_error$_b(ctx:Ctx):page_error$_T {
	const page$ = page$_b(ctx)
	return page$.error$
}
export type page_error$_T = ReadableAtom$<Error|undefined>
