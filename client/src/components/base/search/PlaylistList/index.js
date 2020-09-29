import React, {Suspense, useEffect, lazy, useState, useCallback} from 'react';
import * as S from './style';
import { useDispatch } from "react-redux";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";
import FallbackCardList from "../../../common/FallbackCardList";
import debounce from "lodash.debounce";

const PlaylistCard = lazy(() => import("../../../common/PlaylistCard"));

function PlaylistList({ initAction, action, keyword, items, hasMoreItems, showFallbackItems, offset, marginLeft }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        orderBy: "newest",
        limit: 9,
        offset,
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset, keyword])

    const updateSearch = useCallback(() => {
        if(keyword) {
            dispatch(initAction({...opts, keyword}));
        }
    }, [keyword])

    const delayedSearch = useCallback(debounce(updateSearch, 500),[keyword]);

    useEffect(() =>{
        delayedSearch();
        return delayedSearch.cancel;
    }, [keyword])

    useInfiniteScroll({
        items,
        hasMoreItems,
        ratio: 0.75,
        action: action({...opts, keyword})
    });

    return (
        <>
            <Suspense fallback="">
                {keyword && items.map(item =>
                    <PlaylistCard key={item.listID}
                                  listID={item.listID}
                                  listName={item.listName}
                                  listDesc={item.listDesc}
                                  like={item.like}
                                  src={item.url}/>
                )}
                {keyword && !showFallbackItems && items.length === 0 &&
                <S.NoResultComment> 검색 결과가 없습니다. </S.NoResultComment>
                }
            </Suspense>
            {keyword && showFallbackItems && <FallbackCardList total={9}/>}
        </>
    );
}

export default PlaylistList;