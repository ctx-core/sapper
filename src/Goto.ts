export type Goto = (href: string, opts?: Goto_opts_T) => Promise<void>
export interface Goto_opts_T {
	noscroll: boolean
	replaceState: boolean
}
export type Goto_opts_type = Goto_opts_T
