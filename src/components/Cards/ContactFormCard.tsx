import { motion } from "framer-motion";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { BsSend, BsSendCheck } from "react-icons/bs";

export const ContactFormCard = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formValues, setFormValues] = useState({
    senderName: "",
    senderEmail: "",
    reasonToContact: "General inquries",
    senderMsg: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const sendEmailPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderName: formValues.senderName,
            senderEmail: formValues.senderEmail,
            reasonToContact: formValues.reasonToContact,
            senderMsg: formValues.senderMsg,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSent(true);
          setFormValues({
            senderName: "",
            senderEmail: "",
            reasonToContact: "General inquries",
            senderMsg: "",
          });
          resolve(data.message);
        } else {
          reject(new Error(data.error || "Failed to send message"));
        }
      } catch (error) {
        reject(error);
      } finally {
        setIsSending(false);
      }
    });

    toast.promise(sendEmailPromise, {
      loading: "Sending your message...",
      success: "Message received. I'll get back to you soon.",
      error: (error) => {
        if (error.message.includes("not valid")) {
          return "The email address you entered is not valid (".concat(
            formValues.senderEmail,
            "). Please use a real email."
          );
        }
        return (
          error.message ||
          "An error occurred while sending your message. Please try again later."
        );
      },
    });
  };

  useEffect(() => {
    if (!isSent) return;

    const timer = setTimeout(() => {
      setIsSent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSent]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="surface h-full p-6 sm:p-7"
    >
      <p className="metric-label">Send a message</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">
        Tell me what you are building.
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
        Use this form for collaborations, hiring conversations, technical
        questions, or any project discussion where AI and product delivery
        overlap.
      </p>

      <form onSubmit={sendEmail} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input
            required
            type="text"
            placeholder="Your Name"
            name="senderName"
            onChange={handleChange}
            value={formValues.senderName}
            className="field-shell"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            name="senderEmail"
            onChange={handleChange}
            value={formValues.senderEmail}
            className="field-shell"
          />
        </div>

        <select
          required
          name="reasonToContact"
          onChange={handleChange}
          value={formValues.reasonToContact}
          className="field-shell"
        >
          <option className="text-black" value="General inquries">
            General Inquiries
          </option>
          <option className="text-black" value="Project inquiries">
            Project Inquiries
          </option>
          <option className="text-black" value="Collaboration request">
            Collaboration Request
          </option>
          <option className="text-black" value="Feedback/Question">
            Feedback or Question
          </option>
          <option className="text-black" value="Bug report">
            Bug Report
          </option>
          <option className="text-black" value="Feature request">
            Feature Request
          </option>
        </select>

        <textarea
          placeholder="Your Message"
          rows={5}
          name="senderMsg"
          onChange={handleChange}
          value={formValues.senderMsg}
          required
          className="field-shell min-h-36 resize-none"
        />

        <motion.button
          type="submit"
          disabled={isSending}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent"
              />
              Sending...
            </>
          ) : isSent ? (
            <>
              <BsSendCheck className="h-5 w-5" />
              Sent
            </>
          ) : (
            <>
              <BsSend className="h-5 w-5" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};
