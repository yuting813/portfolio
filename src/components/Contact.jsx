import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  
  @media only screen and (max-width: 768px) {
    width: 18.75rem
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e0dbdb;
  border: none;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  padding: 20px;
  background-color: #e0dbdb;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 20px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;

const Left = styled.div`
  flex: 1;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_moy1ag8",
        "template_2hv7xwk",
        "ref.current",
        "rskX1-De9YaZx8xhF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Map />
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get In Touch</Title>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Email" name="email" type="email" required />
            <Textarea placeholder="Message" name="message" rows={10} required />
            <Button type="Send">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :) "}
          </Form>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
