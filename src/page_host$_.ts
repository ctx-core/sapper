import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_ } from './page$_.js'
export function page_host$_(ctx:Ctx):page_host$_T {
	return page$_(ctx).host$
}
export type page_host$_T = ReadableAtom_<string|undefined>
