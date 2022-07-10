import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { page__, page__error__, page__host__, page__params__, page__path__, page__query__ } from '../index.js'
test('page__', ()=>{
	const ctx = ctx_()
	equal(page__host__(ctx).$, null)
	equal(page__path__(ctx).$, null)
	equal(page__params__(ctx).$, null)
	equal(page__query__(ctx).$, null)
	equal(page__error__(ctx).$, null)
	const error = new Error('test error')
	page__(ctx).$ = {
		host: 'test-host',
		path: '/test/path',
		params: { test: 'params' },
		query: { test: 'query' },
		error,
	}
	equal(page__host__(ctx).$, 'test-host')
	equal(page__path__(ctx).$, '/test/path')
	equal(page__params__(ctx).$, { test: 'params' })
	equal(page__query__(ctx).$, { test: 'query' })
	is(page__error__(ctx).$, error)
})
test.run()
