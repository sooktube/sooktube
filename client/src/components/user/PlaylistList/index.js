import React, { Suspense, useEffect, lazy, useState } from 'react';
import * as S from './style';
import {useDispatch} from "react-redux";
import FallbackVideoList from "../../common/FallbackVideoList";
import usePagination from "../../../hooks/usePagination";
import { Pagination } from "@material-ui/lab";
import FallbackPlaylistCard from "../../playlist/FallbackPlaylistCard";
import FallbackCardList from "../../common/FallbackCardList";

const PlaylistCard = lazy(() => import("../../common/PlaylistCard"));

function PlaylistList({ action, total, items, showFallbackItems, username, orderBy }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        username,
        orderBy
    })

    useEffect(() => {
        setOpts({ username, orderBy })
    }, [username, orderBy])

    useEffect(() => {
        dispatch(action({offset: 0, limit: 7, username: username, orderBy}));
    },[username, orderBy])

    const { maxPage, handleChange } = usePagination({total, itemsPerPage: 7, action, opts});

    return (
        <S.PlaylistWrapper>
            <Suspense fallback="">
                {items.map(item =>
                    <PlaylistCard key={item.listID}
                                  listID={item.listID}
                                  listName={item.listName}
                                  listDesc={item.listDesc}
                                  like={item.like}
                                  src={item.url}/>
                )}
            </Suspense>
            {showFallbackItems && <FallbackCardList/>}
            <S.PaginationPositioner>
                <Pagination count={maxPage}
                            onChange={handleChange}
                            showFirstButton
                            showLastButton
                            style={{
                                display: 'inline-block',
                                margin: '1rem auto',
                            }}/>
            </S.PaginationPositioner>
        </S.PlaylistWrapper>
    );
}

export default PlaylistList;