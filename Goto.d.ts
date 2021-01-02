export declare type Goto = (href: string, opts?: Goto_opts_type) => Promise<void>;
export interface Goto_opts_type {
    noscroll: boolean;
    replaceState: boolean;
}
