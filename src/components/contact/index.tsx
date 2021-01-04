import React from "react"
import sgMail from "@sendgrid/mail"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
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
  Container,
} from "semantic-ui-react"

import config from "config"

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
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  }

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  const onEmailFormSubmit = async (data: ContactFormTypes) => {
    try {
      const response = await fetch(config.apiSendEmailUrl, {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        toast({
          type: "error",
          icon: "exclamation triangle",
          title: "Occur error",
          description: config.errors.generalError,
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
        description: config.success.sendEmail,
        animation: "bounce",
        time: 5000,
      })
    } catch (e) {
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
            <Segment>
              <Form
                onSubmit={handleSubmit(onEmailFormSubmit)}
                error={!!errors}
                loading={false}
                as="form"
                size="large"
              >
                <Header as="h2" dividing textAlign="center" block>
                  <Icon name="mail" color="blue" />
                  Get in touch
                </Header>
                <Form.Field>
                  <label htmlFor="Email">Email</label>
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
                  <label htmlFor="Subject"> Subject</label>
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
                  <label htmlFor="Message">Message</label>
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
                  color="blue"
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
