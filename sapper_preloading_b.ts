import { _b } from '@ctx-core/object'
import { writable } from 'svelte/store'
export const sapper_preloading_b = _b('sapper_preloading', ()=>
	writable(null))
export const b__preloading__sapper = sapper_preloading_b
