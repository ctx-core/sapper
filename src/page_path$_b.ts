import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_b } from './page$_b.js'
export function page_path$_b(ctx:Ctx):page_path$_T {
	const page$ = page$_b(ctx)
	return page$.path$
}
export type page_path$_T = ReadableAtom$<string|undefined>

