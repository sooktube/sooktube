import React, {useCallback, useState} from 'react';
import RecommendButton from "./RecommendButton";
import DisrecommendButton from "./DisrecommendButton";

function RecommendVideo({videoID, inVideoList, username, recommended, recCount, disrecommended, disrecCount}) {
    const [data, setData] = useState({
        recommended,
        disrecommended,
        loading: false
    })

    const [count, setCount] = useState({
        recommended: recCount,
        disrecommended: disrecCount
    })

    //추천 버튼이나 비추천 버튼을 누르고 서버에서 처리하는 동안은 버튼 비활성화
    const setRecommend = useCallback((recommended) => {
        setData({
            recommended,
            disrecommended: 0,
            loading: true
        })
    }, [data.recommended]);

    const setDisrecommend = useCallback((disrecommended) => {
        setData({
            disrecommended,
            recommended: 0,
            loading: true
        })
    }, [data.disrecommended]);

    const setLoading = useCallback((loading) => {
        setData(data => ({
            ...data,
            loading
        }))
    }, [data.loading]);

    return (
      <>
          <RecommendButton videoID={videoID}
                           inVideoList={inVideoList}
                           username={username}
                           loading={data.loading}
                           recommended={data.recommended}
                           setLoading={setLoading}
                           setRecommend={setRecommend}
                           recCount={count.recommended}
                           setCount={setCount}/>
          <DisrecommendButton videoID={videoID}
                              inVideoList={inVideoList}
                              username={username}
                              loading={data.loading}
                              disrecommended={data.disrecommended}
                              setLoading={setLoading}
                              setDisrecommend={setDisrecommend}
                              disrecCount={count.disrecommended}
                              setCount={setCount}/>
      </>
    );
}

export default RecommendVideo;