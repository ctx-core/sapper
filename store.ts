import { writable, derived } from 'svelte/store'
// @ts-ignore
import { subscribe__debug } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { _andand } from '@ctx-core/function'
export const b__page__sapper = _b('__page__sapper', ()=>
	writable(null))
export const __page__sapper = b__page__sapper()
export const b__preloading__sapper = _b('__preloading__sapper', ()=>
	writable(null))
export const __preloading__sapper = b__preloading__sapper()
export const b__session__sapper = _b('__session__sapper', ()=>
	writable(null))
export const __session__sapper = b__session__sapper()
export const b__path__sapper = _b('__path__sapper', ctx=>
	derived(
		b__page__sapper(ctx),
		_andand('path')))
export const __path__sapper = b__path__sapper()
