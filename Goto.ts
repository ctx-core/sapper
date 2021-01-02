export type Goto = (href: string, opts?: Goto_opts_type) => Promise<() => void>
export interface Goto_opts_type {
	replaceState: boolean
}
