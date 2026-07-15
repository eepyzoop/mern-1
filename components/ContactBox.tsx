import Link from "next/link";

type Props = { heading: string; text: string; tightTop?: boolean };

export default function ContactBox({ heading, text, tightTop }: Props) {
  return (
    <section className="reveal" style={tightTop ? { paddingTop: 0 } : undefined}>
      <div className="contact-box">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link className="btn btn-primary" href="/contact">
          Contact me →
        </Link>
      </div>
    </section>
  );
}
