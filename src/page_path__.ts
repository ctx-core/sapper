import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page__ } from './page__.js'
export function page_path__(ctx:Ctx):page_path__T {
	return page__(ctx).path_
}
export type page_path__T = ReadableAtom_<string|undefined>
export { page_path__ as page_path$_ }
