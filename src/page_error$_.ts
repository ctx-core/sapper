import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page$_ } from './page$_.js'
export function page_error$_(ctx:Ctx):page_error$_T {
	return page$_(ctx).error$
}
export type page_error$_T = ReadableAtom_<Error|undefined>
