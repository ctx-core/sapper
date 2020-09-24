import { writable, derived } from 'svelte/store'
import { _b } from '@ctx-core/object'
import { _andand } from '@ctx-core/function'
export const b__page__sapper = _b('__page__sapper', ()=>
	writable(null))
export const b__preloading__sapper = _b('__preloading__sapper', ()=>
	writable(null))
export const b__session__sapper = _b('__session__sapper', ()=>
	writable(null))
export const b__path__sapper = _b('__path__sapper', ctx=>
	derived(
		b__page__sapper(ctx),
		_andand('path')))
