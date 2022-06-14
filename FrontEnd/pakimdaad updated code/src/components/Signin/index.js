
import React from 'react'
import { Container, Form, FormContent, FormH1, FormLabel, FormWrap,FormButton,FormInput,Text,Icon } from './SigninElements'

const SignIn = () => {
  return (
      <Container>
          <FormWrap>
              <Icon to="/">Pak-Imdad</Icon>
              <FormContent>
                  <Form action="#">
                      <FormH1>Sign in to your account</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type= 'email' required />
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required />
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forgot password</Text>
                  </Form>
              </FormContent>
          </FormWrap>
      </Container>
  )
}

export default SignIn;