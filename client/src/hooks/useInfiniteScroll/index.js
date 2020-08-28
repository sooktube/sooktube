import { useEffect, useCallback, useRef } from 'react';
import {useDispatch} from "react-redux";

function useInfiniteScroll({items, hasMoreItems, ratio, action, ref}) {
    const dispatch = useDispatch();
    const lastIdCount = useRef([]);

    const loadItems = useCallback(() => {
        const { clientHeight, scrollHeight } = document.documentElement;
        const minusClientHeight = scrollHeight - clientHeight; // 스크롤 높이 - 브라우저 높이(보여지는 부분)
        const scrollRatio = window.scrollY / minusClientHeight; // 현재 스크롤 비율을 소수점 단위로 계산(0 ~ 0.5 ~ 1)

        if (scrollRatio > ratio && hasMoreItems) {
            const lastItem = items[items.length - 1];
            if(!lastIdCount.current.includes(lastItem)) {
                dispatch(action);
                lastIdCount.current.push(lastItem);
            }
        }
    }, [action, dispatch, hasMoreItems, items, ratio])

    useEffect(() => {
        // 최초 게시글이 load 되기 전까지 scroll 이벤트 동작을 비할성화
        if (!items.length) return;
        window.addEventListener("scroll", loadItems);
        return () => {
            window.removeEventListener("scroll", loadItems);
        };
    }, [loadItems, items.length]);
}

export default useInfiniteScroll;