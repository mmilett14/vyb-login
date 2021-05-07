import React from "react";
import { BoxContainer, FormContainer, Input, MutedLink, BoldLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";

export function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Vmail" />
            <Input type="password" placeholder="Vybword" />
        </FormContainer>
        <Marginer direction="vertical" margin={5} />
        <MutedLink href="#">Forget your vybword?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Vyb In</SubmitButton>
        <Marginer direction="vertical" margin="1.6em" />
        <MutedLink href="#">
            First time vybing? <BoldLink href="#">Vyb up!</BoldLink>
            </MutedLink>
    </BoxContainer>
}