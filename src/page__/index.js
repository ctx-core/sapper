import { writable_, derived_ } from '@ctx-core/svelte'
import { be_ } from '@ctx-core/object'
export const page__ = be_('page__', ()=>writable_(null))
export const page__host__ = be_('page__host__', ctx=>
	derived_(page__(ctx), $=>$ ? $.host : null))
export const page__path__ = be_('page__path__', ctx=>
	derived_(page__(ctx), $=>$ ? $.path : null))
export const page__params__ = be_('page__params__', ctx=>
	derived_(page__(ctx), $=>$ ? $.params : null))
export const page__query__ = be_('page__query__', ctx=>
	derived_(page__(ctx), $=>$ ? $.query : null))
export const page__error__ = be_('page__error__', ctx=>
	derived_(page__(ctx), $=>$ ? $.error : null))
export { page__ as page$_ }
