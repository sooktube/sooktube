import { useEffect, useCallback, useRef } from 'react';
import {useDispatch} from "react-redux";

function useInfiniteScroll({items, hasMoreItems, ratio, action}) {
    const dispatch = useDispatch();
    const lastItems = useRef([]);

    const loadItems = useCallback(() => {
        const { clientHeight, scrollHeight } = document.documentElement;
        const minusClientHeight = scrollHeight - clientHeight; // 스크롤 높이 - 브라우저 높이(보여지는 부분)

        const scrollRatio =  window.scrollY / minusClientHeight; // 현재 스크롤 비율을 소수점 단위로 계산(0 ~ 0.5 ~ 1)

        if (scrollRatio > ratio && hasMoreItems) {
            // 스크롤링으로 가져온 게시물 중 마지막 게시물이 lastItems 배열에 포함되어 있는지 확인
            // 이미 포함되어 있었던 게시물이라면, 스크롤링을 또 할 필요가 없음
            const lastItem = items[items.length - 1];
            if(!lastItems.current.includes(lastItem)) {
                dispatch(action);
                lastItems.current.push(lastItem);
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