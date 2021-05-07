import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, BoldLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="What's yr name bb?" />
            <Input type="email" placeholder="Vmail" />
            <Input type="password" placeholder="Vybword" />
            <Input type="password" placeholder="Confirm Vybword" />
        </FormContainer>
        <Marginer direction="vertical" margin={5} />
        <SubmitButton type="submit">Vyb</SubmitButton>
        <Marginer direction="vertical" margin="1.6em" />
        <MutedLink href="#">
            Vyb'd wit us before? {" "}
             <BoldLink href="#" onClick={switchToSignin}>
                 Vyb in
            </BoldLink>
            </MutedLink>
    </BoxContainer>
}