import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SemanticToastContainer, toast } from "react-semantic-toasts"
import "react-semantic-toasts/styles/react-semantic-alert.css"
import emailjs from "emailjs-com"
import dotenv from "dotenv"

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

import {
  Button,
  Grid,
  Form,
  Message,
  Segment,
  Icon,
  Container,
} from "semantic-ui-react"

import config from "config"
import MainTitle from "components/generic/MainTitle"

const contactFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().trim().min(2).max(244),
  message: yup.string().required().min(2).trim(),
})

interface ContactFormTypes {
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  const onEmailFormSubmit = async (_data: ContactFormTypes, event: any) => {
    try {
      await emailjs.sendForm(
        process.env.GATSBY_EMAIL_SERVICE as string,
        process.env.GATSBY_EMAIL_TEMPLATE_ID as string,
        event.target,
        process.env.GATSBY_EMAIL_USER_ID as string
      )
      reset()
      toast({
        type: "success",
        icon: "envelope",
        title: "Send email",
        description: config.success.sendEmail,
        animation: "bounce",
        time: 5000,
      })
    } catch (error) {
      toast({
        type: "error",
        icon: "exclamation triangle",
        title: "Occur error",
        description: config.errors.generalError,
        animation: "bounce",
        time: 5000,
      })
    }
  }

  return (
    <Container text>
      <SemanticToastContainer position="top-center" />

      <Grid centered style={{ margin: "2.5rem 0" }}>
        <Grid.Row>
          <Grid.Column computer={12} tablet={12} mobile={16}>
            <Segment color="black" inverted padded>
              <Form
                onSubmit={handleSubmit(onEmailFormSubmit)}
                error={!!errors}
                loading={false}
                as="form"
                size="large"
              >
                <MainTitle text="Get in touch" borderBottomWidth="15%" />
                <Form.Field>
                  <Segment
                    style={{ padding: "0" }}
                    inverted
                    as="label"
                    htmlFor="Email"
                  >
                    Email
                  </Segment>
                  <input
                    name="email"
                    ref={register}
                    placeholder="Write your email here..."
                    autoComplete="off"
                  />
                  {Boolean(errors.email) && (
                    <Message error>{errors.email?.message}</Message>
                  )}
                </Form.Field>

                <Form.Field>
                  <Segment
                    style={{ padding: "0" }}
                    inverted
                    as="label"
                    htmlFor="Subject"
                  >
                    {" "}
                    Subject
                  </Segment>
                  <input
                    name="subject"
                    placeholder="Write your subject here..."
                    ref={register}
                    autoComplete="off"
                  />
                  {Boolean(errors.subject) && (
                    <Message error>{errors.subject?.message}</Message>
                  )}
                </Form.Field>
                <Form.Field>
                  <Segment
                    style={{ padding: "0" }}
                    inverted
                    as="label"
                    htmlFor="Message"
                  >
                    Message
                  </Segment>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    ref={register}
                    rows={4}
                  />
                  {Boolean(errors.message) && (
                    <Message error>{errors.message?.message}</Message>
                  )}
                </Form.Field>
                <Button
                  animated="vertical"
                  color="red"
                  fluid
                  type="submit"
                  disabled={
                    Boolean(errors.email) &&
                    Boolean(errors.subject) &&
                    Boolean(errors.message)
                  }
                >
                  <Icon name="send" size="large" aria-label="send" />
                  Send
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Contact
