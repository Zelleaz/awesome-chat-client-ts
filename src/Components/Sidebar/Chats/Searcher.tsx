import React, {useEffect, useState} from 'react';
import { Input } from '../../../UI/Elements/Form/Input';
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import RoomApi from "../../../Api/Room/RoomApi";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {setSearchResults} from "../../../Store/reducers/sidebarReducer/sidebarCreators";

const Searcher = () => {
    const { name } = useTypedSelector(state => state.user)
    const [query, setQuery] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        const timeout = setTimeout(async () => {
            const { personal, group } = await RoomApi.searchRooms(query, name)
            dispatch(setSearchResults({
                searchedPersonal: personal,
                searchedGroups: group
            }))
        }, 500)

        return () => clearTimeout(timeout)
    }, [query])

    return (
        <div style={{
            marginBottom: 15
        }}>
            <Input value={query} onChange={e => {
                setQuery(e.target.value)
            }} placeholder='Type chat name...' />
        </div>
    );
}

export default Searcher;