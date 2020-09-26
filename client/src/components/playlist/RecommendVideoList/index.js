import React, { Fragment } from 'react';
import VideoList from "../VideoList";
import {MAIN} from "../../style/Main";
import {useSelector} from "react-redux";
import {searchActions} from "../../../actions";

function RecommendVideoList({listID, username}) {
    const recVideos = useSelector(state => state.search.recVideos);
    const hasMoreRecVideos = useSelector(state => state.search.hasMoreRecVideos);
    const showFallbackRecVideos = useSelector(state => state.search.showFallbackRecVideos);
    const recOffset = useSelector(state => state.search.recOffset);

    return (
        <Fragment>
            <div style={{
                fontSize: '13px',
                marginTop: '1em',
                lineHeight: '1.2em',
                color: `${MAIN.DARK_TEXT_COLOR}`
            }}> 다른 사용자들은 이런 영상이 추가되길 원해요🤗 </div>
            <VideoList initAction={searchActions.initRecommendedVideos}
                       action={searchActions.loadRecommendedVideos}
                       items={recVideos}
                       hasMoreItems={hasMoreRecVideos}
                       showFallbackItems={showFallbackRecVideos}
                       offset={recOffset}
                       limit={20}
                       marginLeft={-3}
                       checkplaylist={0}
                       username={username}
                       listID={listID}
                       playlist={0}
                       isPublic={1}/>
        </Fragment>
    );
}


export default RecommendVideoList;
