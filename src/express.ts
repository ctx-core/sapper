import { promisify } from 'util'
import { flatten } from '@ctx-core/array'
const resolve = promisify(require('resolve'))
import fs from 'fs'
/**
 * GET asset
 */
export function _get_asset(opts:_get_asset_opts_T) {
	const { asset_key, root_dir } = opts
	return get_asset
	async function get_asset(_, res) {
		const NODE_ENV = process.env.NODE_ENV
		const dir__build =
			(NODE_ENV === 'dev' || NODE_ENV === 'development')
			? `${root_dir}/__sapper__/dev`
			: `${root_dir}/__sapper__/build`
		const path__build = await resolve(`${dir__build}/build.json`)
		const build = JSON.parse(
			(await fs.promises.readFile(path__build)).toString()
		)
		const { assets } = build
		const str__path__relative = assets[asset_key]
		const a1__path__relative = flatten([str__path__relative])
		res.writeHead(200, {
			'Content-Type': 'application/javascript',
		})
		const body = await _body()
		res.end(body)
		async function _body() {
			const asset_body_a1 = await Promise.all(_a1__promise__asset_body())
			return asset_body_a1.join('\n')
		}
		function _a1__promise__asset_body() {
			const promise_a1 = [] as Promise<Buffer>[]
			for (let i = 0; i < a1__path__relative.length; i++) {
				promise_a1.push(_asset_body(a1__path__relative[i]))
			}
			return promise_a1
		}
		async function _asset_body(path__relative) {
			const path__resolved =
				await resolve(`${dir__build}/client/${path__relative}`)
			return fs.promises.readFile(path__resolved)
		}
	}
}
export {
	_get_asset as _get__asset
}
export interface _get_asset_opts_T {
	asset_key:string,
	root_dir:string,
}
export type _get_asset_opts_type = _get_asset_opts_T
