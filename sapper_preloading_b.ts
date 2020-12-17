import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const sapper_preloading_b:sapper_preloading_b_type = _b('sapper_preloading', ()=>
	writable(null) as sapper_preloading_type
)
export type $sapper_preloading_type = object
export type $maybe_sapper_preloading_type = null|$sapper_preloading_type
export interface sapper_preloading_type extends Writable<$maybe_sapper_preloading_type> {}
export type sapper_preloading_b_type = B<sapper_preloading_type>
export {
	sapper_preloading_b as b__preloading__sapper
}
