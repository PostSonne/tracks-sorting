import * as React from "react";
import { FC } from "react";
import { handleSetFilters } from "./App";

interface FiltersProps {
    filters?: [];
}

type FilterProps = Partial<Pick<FiltersProps, "filters">> & {
    item: object,
    index: number,
    checked: boolean;
}
const reformatFilerParameterName = (index: number) => {
    let name = [
        "Liked",
        "With Name",
        "Listen > 30 times",
    ];
    return (name[index])
};


//const handleSetFiltersOne = (index: number, checked: boolean) => handleSetFilters("one", index, checked);
//const handleSetFiltersOnly = (index: number, checked: boolean) => handleSetFilters("only", index, checked);


const filter: FC<FilterProps> = ({index}) => {
    //const isChecked = filters[index];
    const filerParameterName = reformatFilerParameterName(index);
    return (
        <div className="lineInSelecting"
             key={index}>
            <input type="checkbox"
                   id={index.toString()}
                   //checked={isChecked}
                   // onChange={handleSetFiltersOne(index, checked)}
            >
            </input>
            <label>
                <span/>
                {filerParameterName}
            </label>
            <div className="onlySelecting"
                 // onClick={handleSetFiltersOnly(index, checked)}
            >
                только
            </div>
        </div>
    )
};

const Filters: FC<FiltersProps> = ({}) => {
    /*let checked = filters?.reduce(
        (previous, current) => previous && current);*/
    let checked = true;
    const handleSetFiltersAll = () => handleSetFilters("all", -1, !checked);
    return (
        <div className="selecting">
            <form>
                {"\u2003\u00A0 КОЛИЧЕСТВО ПЕРЕСАДОК \u2003\u00A0"}
                <br/><br/>
                <div className="allSelecting">
                    <input type="checkbox"
                           id="allFilters"
                           checked={checked}
                           onClick={handleSetFiltersAll}
                           onChange={handleSetFiltersAll}>
                    </input>
                    <label htmlFor="allfilters">
                        <span/>
                        Все
                    </label>
                </div>
                {[].map((item, index) => filter(item, index))}
            </form>
        </div>
    )
};


export {Filters}