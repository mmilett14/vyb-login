import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    top: 50px;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    padding-bottom: 5rem;
`;

const BackDrop = styled.div`
    width: 100%;
    height: 850px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 0%;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1)
    );
`;

const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-family: sans-serif;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
    margin-left: 25px;
    
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    font-family: sans-serif; 
    z-index: 10;
    margin: 0;
    margin-left: 25px;
    margin-top: 2px;
`;

export function AccountBox(props) {
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Vyb in bb!</SmallText> 
            </HeaderContainer>
        </TopContainer>
    </BoxContainer>
}