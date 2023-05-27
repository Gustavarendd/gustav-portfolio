'use client';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Heading from '../heading.component';
import Input from '../inputs/input.component';
import Button from '../button/button.component';
import { AiOutlineSend } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);

  function isValidEmail() {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e: any) => {
    if (!isValidEmail()) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    setEmail((e.target as HTMLInputElement).value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsSending(true);

    emailjs
      .send(
        'service_qrf1spf',
        'template_s05e2mm',
        {
          from_name: data.name,
          to_name: 'Gustav',
          subject: data.subject,
          reply_to: data.email,
          message: data.message,
        },
        'e6kkH-BNLS3rmLQLr',
      )

      .then(
        result => {
          setIsSending(false);
          toast.success('Message was sent!');
        },
        error => {
          toast.error('Something went wrong!');
          setIsSending(false);
        },
      );
  };

  return (
    <section className="mt-10 mb-10 text-center flex flex-col items-center justify-center">
      <Heading
        title="Contact me"
        subtitle="Write an email, and let's get in touch!"
        center
      />
      <div className="flex flex-col md:gap-6 md:flex-row">
        <div className="mt-10 mb-10 flex flex-col gap-4 items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
              required
            />
            <Input
              id="email"
              label="Email"
              type="email"
              register={register}
              errors={errors}
              required
              onChange={handleChange}
              isValid={emailError}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Input
              id="subject"
              label="Subject"
              type="text"
              register={register}
              errors={errors}
              required
            />
            <Input
              id="message"
              label="Message"
              type="text"
              register={register}
              errors={errors}
              required
              textarea
            />
          </div>

          <Button
            outline
            label={isSending ? 'Sending...' : 'Send'}
            icon={AiOutlineSend}
            onClick={handleSubmit(onSubmit)}
            disabled={isSending}
            isValid={emailError}
          />
        </div>
        <div className="md:mt-[35px] flex flex-row items-center justify-center h-[50%] gap-4 md:flex-col">
          <Image
            className="rounded-full w-[150px] h-[150px]"
            src="/images/profilePictureBG.jpeg"
            alt="Profile picture"
            width={100}
            height={50}
          />
          <div>
            <Heading
              title="Telephone"
              subtitle="+420 792361694"
            />
            <Heading
              title="Email"
              subtitle="gustavarend@me.com"
            />
            <Heading
              title="Location"
              subtitle="Prague, Czech Republic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
