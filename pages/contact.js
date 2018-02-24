/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './contact.scss'
import React, { Component } from 'react'
import {
  Button,
  Alert,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import sendEmail from '../utils/send-email'
import Loader from '../components/loader'

export default class ContactPage extends Component {
  static title = 'Contact to Takuya'
  static image = '/me.jpg'
  static description = 'Contact form'

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      emailSent: false,
      error: null,
      data: {
        email: '',
        name: '',
        company: '',
        url: '',
        subject: '',
        body: ''
      }
    }
  }

  renderLoader() {
    if (this.state.loading) {
      return (
        <div className="overlay">
          <Loader />
        </div>
      )
    }
  }

  renderForm() {
    return (
      <form onSubmit={::this.handleSubmit}>
        {this.renderError()}
        <FormGroup>
          <ControlLabel>Your E-mail Address *</ControlLabel>
          <FormControl
            type="email"
            name="email"
            maxLength={100}
            onChange={::this.handleChange}
            value={this.state.data.email}
            required
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Your full name *</ControlLabel>
          <FormControl
            type="text"
            name="name"
            maxLength={100}
            onChange={::this.handleChange}
            value={this.state.data.name}
            required
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Your company name</ControlLabel>
          <FormControl
            type="text"
            name="company"
            maxLength={100}
            onChange={::this.handleChange}
            value={this.state.data.company}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>URL (ex. homepage)</ControlLabel>
          <FormControl
            type="text"
            name="url"
            maxLength={100}
            placeholder="https://"
            onChange={::this.handleChange}
            value={this.state.data.url}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Subject *</ControlLabel>
          <FormControl
            type="text"
            name="subject"
            maxLength={100}
            required
            onChange={::this.handleChange}
            value={this.state.data.subject}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Message *</ControlLabel>
          <FormControl
            componentClass="textarea"
            rows={8}
            maxLength={800}
            name="body"
            placeholder="Hello Takuya.."
            required
            onChange={::this.handleChange}
            value={this.state.data.body}
          />
        </FormGroup>
        <div className="right aligned">
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </div>
        {this.renderLoader()}
      </form>
    )
  }

  renderEmailSent() {
    return (
      <div className="email-sent-section">
        <Alert bsStyle="info">
          <strong>Your message has been sent!</strong>
          <p>
            Thank you for your contact. I will respond to your email as soon as
            possible.
          </p>
        </Alert>
      </div>
    )
  }

  renderError() {
    const { error: e } = this.state
    if (e) {
      return (
        <Alert bsStyle="danger">
          <strong>Sorry, failed to send an email</strong>
          <p>{e.message}</p>
        </Alert>
      )
    }
  }

  render() {
    return (
      <div className="contact-page">
        <div className="content-container">
          <h2>Contact me</h2>
          <p>
            Hi! That&apos;s great you are trying to reach out to me. I&apos;m
            available for freelance work, I want to hear about your projects.
            Please fill below forms and submit.
          </p>
          {this.state.emailSent ? this.renderEmailSent() : this.renderForm()}
        </div>
      </div>
    )
  }

  handleChange(e) {
    const { data } = this.state
    this.setState({
      data: {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.sendEmail()
  }

  async sendEmail() {
    this.setState({ loading: true })
    try {
      const { data } = this.state
      const subject = `[Craftzdog Contact Form] ${data.subject}`
      const body = `
Name: ${data.name}
From: ${data.email}
Company: ${data.company}
URL: ${data.url}

${data.body}
      `
      await sendEmail(subject, body)
      this.setState({ loading: false, emailSent: true })
    } catch (e) {
      console.error('Failed to send email:', e)
      this.setState({ loading: false, emailSent: false, error: e })
    }
  }
}
