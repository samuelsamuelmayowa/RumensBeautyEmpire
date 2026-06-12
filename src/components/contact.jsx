import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-text_gold font-bold uppercase tracking-[0.35em]">
            Book Appointment
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-black">
            Let's Create Your Next Look
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Book your appointment and we'll contact you to confirm your date and
            style.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="grid gap-5">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="rounded-xl border p-4 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="rounded-xl border p-4 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="rounded-xl border p-4 outline-none"
              />

              <select
                name="service"
                required
                className="rounded-xl border p-4 outline-none"
              >
                <option value="">Select Service</option>
                <option>Luxury Braids</option>
                <option>Cornrows</option>
                <option>Wig Install</option>
                <option>Hair Styling</option>
              </select>

              <input
                type="date"
                name="preferred_date"
                required
                className="rounded-xl border p-4 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your desired style..."
                className="rounded-xl border p-4 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-text_gold py-4 font-bold text-black transition hover:scale-105"
              >
                {loading ? "Sending..." : "Book Appointment"}
              </button>

              {success && (
                <div className="rounded-xl bg-green-100 p-4 text-green-700">
                  Appointment request sent successfully.
                </div>
              )}
            </div>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-black">
                Contact Information
              </h2>

              <p className="mt-4 text-gray-600">
                Prefer a faster response? Reach us directly on WhatsApp.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-text_gold text-2xl" />
              <span className="text-lg">+234 XXX XXX XXXX</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationDot className="text-text_gold text-2xl" />
              <span className="text-lg">Your Business Location</span>
            </div>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              <FaWhatsapp />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
// import { FaPhone, FaLocationArrow } from "react-icons/fa"
// import { FaMessage, FaUser } from "react-icons/fa6"
// import { useLocation } from "react-router-dom"


// const Contact = () => {
//     const { pathname } = useLocation()
//     return (
//         <section className={`${pathname === "/contact" ? "bg-dark2" : "bg-[#949191]"} lg:p-32 md:p-10 p-4 py-20`}>
        
//         </section>
//     )
// }

// export default Contact