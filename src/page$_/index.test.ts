import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { page__set, page__error_, page__host_, page__params_, page__path_, page__query_ } from '../index.js'
test('page__', ()=>{
	const ctx = ctx_()
	equal(page__host_(ctx), null)
	equal(page__path_(ctx), null)
	equal(page__params_(ctx), null)
	equal(page__query_(ctx), null)
	equal(page__error_(ctx), null)
	const error = new Error('test error')
	page__set(ctx, {
		host: 'test-host',
		path: '/test/path',
		params: { test: 'params' },
		query: { test: 'query' },
		error,
	})
	equal(page__host_(ctx), 'test-host')
	equal(page__path_(ctx), '/test/path')
	equal(page__params_(ctx), { test: 'params' })
	equal(page__query_(ctx), { test: 'query' })
	is(page__error_(ctx), error)
})
test.run()
