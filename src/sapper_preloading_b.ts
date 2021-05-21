import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'sapper_preloading'
export interface sapper_preloading_Ctx {
	sapper_preloading?:sapper_preloading_T
}
export const sapper_preloading_b = _b<sapper_preloading_Ctx, typeof key>(key, ()=>
	writable$(undefined) as sapper_preloading_T
)
export type $sapper_preloading_T = object
export type $maybe_sapper_preloading_T = undefined|$sapper_preloading_T
export interface sapper_preloading_T extends Writable$<$maybe_sapper_preloading_T> {}
export {
	sapper_preloading_b as b__preloading__sapper
}
