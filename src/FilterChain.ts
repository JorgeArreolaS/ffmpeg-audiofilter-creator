import { getFilterLine, FilterOptions } from "./Filter";

export interface FilterParams {
    name: string
    id: string,
    params: object,
    comment: string,
    options?: {
      muted: boolean
    }
}

export interface FiltersChain {
    id: string,
    name: string,
    description: string,
    filters: FilterParams[],
    categories: string[]
}

export const getFilterComplex = (effectsParams: FilterParams[], filters: FilterOptions[]) => {

    let effects_lines: string[] = []

    effectsParams.forEach( (effect) => {

        let inputs: string[] = [];
        let outputs: number = 1

        let currentFilter = filters.filter(filter => filter.id == effect.id)[0];

        let out = getFilterLine(inputs, outputs, effect, currentFilter); // call the filter

        effects_lines.push(out.line) // save the line
    })

    console.log(effects_lines)

    return effects_lines.join(';')
}