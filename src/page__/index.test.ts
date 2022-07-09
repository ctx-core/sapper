import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { page__ } from '../index.js'
test('page__', ()=>{
	const ctx = ctx_()
	const { host_, path_, params_, query_, error_ } = page__(ctx)
	equal(host_.$, undefined)
	equal(path_.$, undefined)
	equal(params_.$, undefined)
	equal(query_.$, undefined)
	equal(error_.$, undefined)
	const error = new Error('test error')
	page__(ctx).$ = {
		host: 'test-host',
		path: '/test/path',
		params: { test: 'params' },
		query: { test: 'query' },
		error,
	}
	equal(host_.$, 'test-host')
	equal(path_.$, '/test/path')
	equal(params_.$, { test: 'params' })
	equal(query_.$, { test: 'query' })
	is(error_.$, error)
})
test.run()
