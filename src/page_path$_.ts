import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_ } from './page$_.js'
export function page_path$_(ctx:Ctx):page_path$_T {
	return page$_(ctx).path$
}
export type page_path$_T = ReadableAtom_<string|undefined>

