import React, {useState, useRef} from 'react';
import {StyledLink, DropdownPlusBtn, CreateDropdownContent, CreateDropdownMenu, ArrowDown, PlusMenu} from './style';
import useDropdownOutsideClick from "../../../components/useDropdownOutsideClick";

function DropdownCreate() {
    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    return (
        <>
            <CreateDropdownMenu>
                <DropdownPlusBtn onClick={toggleDropdown}>
                    <PlusMenu/> <ArrowDown/>
                </DropdownPlusBtn>
                {createDropdownVisible &&
                    <CreateDropdownContent ref={contentRef}>
                        <StyledLink to="/"> 재생목록 만들기 </StyledLink>
                        <StyledLink to="/"> 영상 만들기 </StyledLink>
                    </CreateDropdownContent>
                }
            </CreateDropdownMenu>
        </>
    )
}

export default DropdownCreate;