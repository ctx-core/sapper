import { derived_, writable_ } from '@ctx-core/svelte'
import { globalThis__be_ } from '@ctx-core/object'
export const page__ =
	globalThis__be_('page__', ()=>
		writable_(null))
export { page__ as page$_ }
export const page__host__ =
	globalThis__be_('page__host__', ctx=>
		derived_(page__(ctx), $=>
			$
			? $.host
			: null))
export const page__path__ =
	globalThis__be_('page__path__', ctx=>
		derived_(page__(ctx), $=>
			$
			? $.path
			: null))
export const page__params__ =
	globalThis__be_('page__params__', ctx=>
		derived_(page__(ctx), $=>
			$
			? $.params
			: null))
export const page__query__ =
	globalThis__be_('page__query__', ctx=>
		derived_(page__(ctx),
			$=>
				$
				? $.query
				: null))
export const page__error__ =
	globalThis__be_('page__error__', ctx=>
		derived_(page__(ctx), $=>
			$
			? $.error
			: null))
