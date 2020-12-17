import { _b, B } from '@ctx-core/object'
import { _andand, maybe_null } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { sapper_page_b } from './sapper_page_b'
export const sapper_path_b:sapper_path_b_type = _b('sapper_path', ctx=>
	derived(sapper_page_b(ctx), _andand('path')) as sapper_path
)
export type $sapper_path = string
export type $maybe_sapper_path = maybe_null<$sapper_path>
export interface sapper_path extends Readable<$sapper_path> {}
export type sapper_path_b_type = B<sapper_path>
export {
	sapper_page_b as b__path__sapper
}
