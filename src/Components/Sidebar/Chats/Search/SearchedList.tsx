import React, {FC} from 'react';
import SearchedPersonal from "./SearchedPersonal";
import {useTypedSelector} from "../../../../Hooks/useTypedSelector";
import SearchedGroup from "./SearchedGroup";

const SearchedList = () => {
    const { searchedGroups, searchedPersonal } = useTypedSelector(state => state.sidebar)

    return (
        <>
            { searchedPersonal.map(room => <SearchedPersonal key={room.id} {...room} />) }
            { searchedGroups.map(room => <SearchedGroup key={room.id} {...room} />) }
        </>
    );
};

export default SearchedList;