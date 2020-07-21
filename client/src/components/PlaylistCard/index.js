import React from 'react';
import './card.scss';
import {CardDate, CardDesc, CardLike, CardTitle, CardWrapper, UtilityInfo} from "./style";
import {FaHeart} from "react-icons/all";

function PlayListCard() {

    return (
        <>
            <CardWrapper>
                <CardTitle>
                    <h3>SPRING FEVER</h3>
                    <hr/>
                    <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                </CardTitle>
                <CardDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim.
                </CardDesc>
                <UtilityInfo>
                    <UtilityInfo>
                        <CardDate> 2020.07.15 </CardDate>
                        <CardLike> 3 <FaHeart/> </CardLike>
                    </UtilityInfo>
                </UtilityInfo>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </CardWrapper>
        </>
    );
}

export default PlayListCard;