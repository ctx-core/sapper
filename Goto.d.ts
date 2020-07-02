export declare type Goto = (href: string, opts?: {
    replaceState: boolean;
}) => Promise<() => void>;
