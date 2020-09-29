import React, {Fragment, useEffect, useState} from 'react';
import * as S from './style';
import VideoList from "../VideoList";
import RecommendVideoButton from "../RecommendVideoButton";
import { playlistService } from "../../../services";
import { playlistActions } from "../../../actions";
import { useSelector } from "react-redux";

function PlaylistVideo({ listID }) {
    const currentUsername = useSelector(state => state.authentication.username);

    const [loading, setLoading] = useState(true);
    const [isPublic, setIsPublic] = useState(0);
    const [username, setUsername] = useState('');
    const [copied, setCopied] = useState(0);

    const items = useSelector(state => state.playlist.videos);
    const hasMoreItems = useSelector(state => state.playlist.hasMoreVideos);
    const showFallbackItems = useSelector(state => state.playlist.showFallbackVideos);
    const offset = useSelector(state => state.playlist.videoOffset);

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID, currentUsername)
            .then(response => {
                setIsPublic(response.isPublic);
                setUsername(response.username);
                setCopied(response.copied);
                setLoading(false);
            })
    },[listID])

    return (
        <S.PlaylistVideoWrapper>
            {!loading &&
                <Fragment>
                    <RecommendVideoButton listID={listID}
                                          isPublic={isPublic}
                                          username={currentUsername}
                                          copied={copied}/>
                    <VideoList username={currentUsername}
                               listID={listID}
                               playlist={1}
                               action={playlistActions.loadPlaylistVideos}
                               initAction={playlistActions.initPlaylistVideos}
                               items={items}
                               limit={5}
                               hasMoreItems={hasMoreItems}
                               showFallbackItems={showFallbackItems}
                               offset={offset}
                               isPublic={isPublic}
                               marginLeft={0}/>
                </Fragment>
            }
        </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;