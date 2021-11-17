import { be_, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { sapper_Ctx } from './sapper_Ctx.js'
const key = 'sapper_preloading$'
export const sapper_preloading$_b:B<sapper_Ctx, typeof key> = be_<sapper_Ctx, typeof key>(key, ()=>
	writable$(undefined) as sapper_preloading$_T
)
export type sapper_preloading$_T = Writable$<object|undefined>
export {
	sapper_preloading$_b as b__preloading__sapper
}
