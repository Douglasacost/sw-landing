import React, { useState } from "react"
import styled from "styled-components"
import { flexCenter, Title } from "../const/styleds"
import FormImages from "../components/images/form-images"
import Button from "../components/button"
import useJsonApi from "../utils/useJsonApi"

const Form = () => {
    const [data, setData] = useState({})
    const [actions, state] = useJsonApi()

    const handleChange = (e) => {
        const el = e.currentTarget
        setData({
            ...data,
            [el.name]: el.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        console.log(data, state)
        actions.submitPost(data)
        el.reset()
    }

    return (
        <StyledForm>
            <div className="with-background">
            </div>
            <p>Facing Problem?</p>
            <p><strong>Lets Get In Touch Now</strong></p>
            <StyledContent>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <Input onChange={handleChange} name="title" placeholder="test placeholder" label="Title" type="text" />
                        <Input onChange={handleChange} name="body" placeholder="very long text... so long..." label="Content" type="textarea" />
                        <Padding />
                        <Button disabled={state && state.isLoading} variant="light" type="submit">Submit</Button>
                    </form>
                </FormContainer>
                <div className="image-container">
                    <FormImages className="air-plane" image="airplane" />
                    <FormImages className="device" image="device" />
                </div>
            </StyledContent>
        </StyledForm>
    )
}

const Input = ({ label, ...rest }) => (
    <InputContainer>
        <p>{label}</p>
        {rest.type === "textarea" ?
            <StyledTextarea rows={4} cols={50} {...rest} /> :
            <StyledInput {...rest} />}
    </InputContainer>
)

const Padding = styled.div`
    width: 100%;
    flex: 1 1 50%;
`

const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 1.5em;;
    * {
        width: 100%;
    }
    > p {
        text-align: left;
        font: normal 16px/25px "Poppins Medium";
        letter-spacing: 0px;
        color: #222222;
        margin-bottom: 0;
    }
    > input, textarea {
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #E5E5E5;
        font: normal 14px/26px 'Poppins Regular';
        padding: 0;
        &::placeholder {
            text-align: left;
            font: normal 15px/23px "Poppins Regular";
            letter-spacing: 0px;
            color: #C2C2C2
        }
        &:focus {
            outline: none;
            color: #555555;
        }
    }
`

const StyledInput = styled.input`
    height: 49px;
`

const StyledTextarea = styled.textarea`

`

const StyledContent = styled.div`
    ${flexCenter}
    align-items: flex-start;
    justify-content: space-between;
    width: 78%;
    margin 0 auto;
    > div {
        margin-top: 2em;
    }
    .image-container {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 35%;
    }
    .air-plane {
        position: absolute;
        width: 60%;
        left: -26%;
        top: 60px;
    }
    .device {
        width: 100%;
        margin-top: 3em;
    }
`

const FormContainer = styled.div`
    width: 60% !important;
    height: 74vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 60px #3E3E3E29;
    border-radius: 8px;
    z-index: 2;
    > form {
        display: flex;
        flex-direction: column;
        padding: 3.1em;
        height: 100%;
        > button {
            margin: 0;
            align-self: baseline;
        }
    }
`

const StyledForm = styled.div`
    ${flexCenter}
    margin-top: 5.5em;
    padding-top: 2em;
    background: transparent linear-gradient(1deg, #FFFFFF 0%, #C9E6FF 100%) 0% 0% no-repeat padding-box;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    margin 0 auto;
    height: 100vh;
    position: relative;
    > div:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    > p {
        ${Title}
        margin-bottom: 0;
        width: 50%;
    }
`

export default Form
