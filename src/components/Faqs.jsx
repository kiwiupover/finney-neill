import Image from 'next/image'
import { FAQPageJsonLd } from 'next-seo'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs-v2.jpg'

export function Faqs({ faqs }) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt="Seattle Birth Doula Frequently Asked Questions"
        width={1558}
        height={946}
        unoptimized
        role="presentation"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Answers to Your Most Common Questions About Our Seattle Birth Doula
            Services
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((faq, index) => (
            <li key={index}>
              <h3 className="font-display text-lg font-medium leading-7 text-amber-700">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
        <FAQPageJsonLd
          useAppDir={true}
          mainEntity={faqs.map((faq) => ({
            questionName: faq.question,
            acceptedAnswerText: faq.answer,
          }))}
        />
      </Container>
    </section>
  )
}
