import { ReadableAtom_, WritableAtom_ } from '@ctx-core/nanostores'
import { type be__return_T } from '@ctx-core/object'
import { type PageContext, PageParams, Query } from '../_types'
export declare const page__:be__return_T<WritableAtom_<PageContext>>
export declare const page__host__:be__return_T<ReadableAtom_<string|null>>
export declare const page__path__:be__return_T<ReadableAtom_<string|null>>
export declare const page__params__:be__return_T<ReadableAtom_<PageParams|null>>
export declare const page__query__:be__return_T<ReadableAtom_<Query|null>>
export declare const page__error__:be__return_T<ReadableAtom_<Error|null>>
export { page__ as page$_ }
