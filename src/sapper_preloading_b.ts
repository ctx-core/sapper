import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const sapper_preloading_b:sapper_preloading_b_T = _b('sapper_preloading', ()=>
	writable(null) as sapper_preloading_T
)
export type $sapper_preloading_T = object
export type $sapper_preloading_type = $sapper_preloading_T
export type $maybe_sapper_preloading_T = null|$sapper_preloading_T
export type $maybe_sapper_preloading_type = $maybe_sapper_preloading_T
export interface sapper_preloading_T extends Writable<$maybe_sapper_preloading_T> {}
export type sapper_preloading_type = sapper_preloading_T
export type sapper_preloading_b_T = B<sapper_preloading_T>
export type sapper_preloading_b_type = sapper_preloading_b_T
export {
	sapper_preloading_b as b__preloading__sapper
}
