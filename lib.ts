export type Goto = (href, opts?: { replaceState: boolean }) => Promise<() => {}>
