import React, { useContext } from "react"
import sgMail from "@sendgrid/mail"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { SemanticToastContainer, toast } from "react-semantic-toasts"
import "react-semantic-toasts/styles/react-semantic-alert.css"

import {
  Button,
  Grid,
  Form,
  Message,
  Segment,
  Header,
  Icon,
} from "semantic-ui-react"

import Background from "components/generic/Background"

const FormHolder = styled.div`
  height: calc(100vh - 62px - 70.25px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const contactFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().trim().min(2).max(244),
  message: yup.string().required().min(2).trim(),
})

interface ContactForm {
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  }

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  const onEmailFormSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        toast({
          type: "error",
          icon: "exclamation triangle",
          title: "Occur error",
          description: "Sorry, something went wrong.",
          animation: "bounce",
          time: 5000,
        })
        return
      }

      reset()
      toast({
        type: "success",
        icon: "envelope",
        title: "Send email",
        description: "The email has been sending successfully",
        animation: "bounce",
        time: 5000,
      })
    } catch (e) {
      toast({
        type: "error",
        icon: "exclamation triangle",
        title: "Occur error",
        description: "Sorry, something went wrong.",
        animation: "bounce",
        time: 5000,
      })
    }
  }

  return (
    <Background>
      <SemanticToastContainer position="top-center" />

      <Grid centered>
        <Grid.Row>
          <Grid.Column computer={6} tablet={12} mobile={16}>
            <FormHolder>
              <Segment inverted color="black">
                <Header icon textAlign="center" inverted>
                  Get in touch
                  <Icon name="mail" />
                </Header>
                <Form
                  onSubmit={handleSubmit(onEmailFormSubmit)}
                  error={!!errors}
                  loading={false}
                  as="form"
                  size="large"
                  inverted
                >
                  <Form.Field>
                    <label>Email</label>
                    <input
                      name="email"
                      ref={register}
                      placeholder="Write your email here..."
                      autoComplete="off"
                      style={{ background: "none", color: colors.white }}
                    />
                  </Form.Field>

                  <Form.Field>
                    <label> Subject</label>
                    <input
                      name="subject"
                      placeholder="Write your subject here..."
                      ref={register}
                      autoComplete="off"
                      style={{ background: "none", color: colors.white }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your email here..."
                      ref={register}
                      rows={4}
                      style={{
                        background: "none",
                        color: colors.white,
                        border: "1px solid rgba(255,255,255,.1)",
                      }}
                    />
                  </Form.Field>
                  <Button animated="vertical" color="blue" fluid type="submit">
                    <Icon name="send" size="large" aria-label="send" />
                    Send
                  </Button>
                  {Object.values(errors).length > 0 && (
                    <Message error={Object.values(errors).length > 0}>
                      <Message.List>
                        <Message.Item>{errors.email?.message}</Message.Item>
                        <Message.Item>{errors.subject?.message}</Message.Item>
                        <Message.Item>{errors.message?.message}</Message.Item>
                      </Message.List>
                    </Message>
                  )}
                </Form>
              </Segment>
            </FormHolder>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Background>
  )
}

export default Contact
