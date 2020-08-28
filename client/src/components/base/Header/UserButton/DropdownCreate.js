import React, {useState, useRef} from 'react';
import {StyledLink, DropdownPlusBtn, CreateDropdownContent, CreateDropdownMenu, ArrowDown, PlusMenu} from './style';
import index from "../../../../hooks/useDropdownOutsideClick";

function DropdownCreate() {
    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);
    index(contentRef, setCreateDropdownVisible);

    return (
        <>
            <CreateDropdownMenu>
                <DropdownPlusBtn onClick={toggleDropdown}>
                    <PlusMenu/> <ArrowDown/>
                </DropdownPlusBtn>
                {createDropdownVisible &&
                    <CreateDropdownContent ref={contentRef}>
                        <StyledLink to="/create/playlist"> 재생목록 만들기 </StyledLink>
                        <StyledLink to="/create/video"> 영상 업로드 </StyledLink>
                    </CreateDropdownContent>
                }
            </CreateDropdownMenu>
        </>
    )
}

export default DropdownCreate;