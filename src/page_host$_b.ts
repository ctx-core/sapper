import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_b } from './page$_b.js'
export function page_host$_b(ctx:Ctx):page_host$_T {
	const page$ = page$_b(ctx)
	return page$.host$
}
export type page_host$_T = ReadableAtom$<string|undefined>
