import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import Success from "../Success";

interface IProps {
  Email: string;
  Address: string;
  SocialMedias: ISocialMedia[];
}

interface ISocialMedia {
  Brand: string;
  BrandingIcon: string;
  Link: string;
}

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  contactType: "creator" | "venture";
  message: string;
  twitch?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
};

const ContactForm: React.FC<IProps> = ({ Email, Address, SocialMedias }) => {
  const formDefaults: ContactFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    contactType: "creator",
    message: "",
  };

  const {
    register,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({ defaultValues: formDefaults });

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = (formData: any) => {
    console.log(formData);
    formData.preventDefault();

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        "template_xb7zzjz",
        formData.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID as string
      );
      setStatus("success");
      reset(formDefaults);
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.log("error", err);
    }
  };

  const generalInputs = [
    { name: "fullName", placeholder: "Full Name", type: "text" },
    { name: "email", placeholder: "Email", type: "text" },
    { name: "alias", placeholder: "Alias", type: "text" },
  ];

  const renderCreatorQuestions = () => {
    const creatorInputs = [
      { name: "twitch", placeholder: "Twitch" },
      { name: "youtube", placeholder: "YouTube" },
      { name: "twitter", placeholder: "Twitter" },
      { name: "instagram", placeholder: "Instagram" },
    ];

    return creatorInputs.map(({ name, placeholder }) => (
      <input
        //@ts-ignore
        {...register(name)}
        placeholder={placeholder}
        type="url"
        className="bg-transparent md:text-2xl border-b-2 border-altBackground m-4 placeholder-altBackground focus:border-accent duration-500"
      />
    ));
  };

  return (
    <div className="w-full lg:w-3/4 lg:flex-row flex flex-col rounded-xl">
      {/* <div className="flex-auto bg-background rounded-xl lg:mr-10 p-4">
        <div className="mb-4">
          <h3 className="uppercase font-bold text-accent text-lg lg:text-2xl">
            contact information
          </h3>
          <p className="text-white text-sm">
            Fill out the form and our team will get back to you within 24hrs.
          </p>
        </div>
        <div>
          <div>
            <i className="fas fa-envelope text-accent" />
            <p className="text-white ml-2 inline-block text-sm">{Email}</p>
          </div>
          <div>
            <i className="fas fa-map-marker-alt text-accent" />
            <p className="text-white ml-2 inline-block text-sm">{Address}</p>
          </div>
          <ul>
            {SocialMedias.map(({ BrandingIcon, Brand, Link }: ISocialMedia) => (
              <li key={Brand} className="inline-block mt-3 mr-6 text-accent">
                <a href={Link} target="blank_">
                  <i className={BrandingIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="flex-auto">
        {status === null ? (
          <form onSubmit={onSubmit}>
            {generalInputs.map(({ name, placeholder, type }) => (
              <>
                <input
                  //@ts-ignore
                  {...register(name, { required: true })}
                  placeholder={placeholder}
                  type={type}
                  className="bg-transparent border-b-2 md:text-2xl border-altBackground m-4 text-white placeholder-altBackground focus:border-accent duration-500"
                />
                {/* @ts-ignore */}
                {errors[name] && <h3>Required</h3>}
              </>
            ))}
            <br />
            <h3 className="ml-4 font-bold text-accent mt-4 inline-block md:text-2xl">
              I AM A:
            </h3>
            <div className="inline-block align-middle">
              <select
                className="bg-transparent -mt-2 ml-4 font-black text-accent md:text-2xl"
                {...register("contactType", { required: true })}
              >
                <option value="creator">CREATOR</option>
                <option value="brand">BRAND</option>
              </select>
            </div>
            <br />
            {watch().contactType === "creator"
              ? renderCreatorQuestions()
              : null}
            <label
              className="block ml-4 font-bold text-accent mt-4 md:text-2xl"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <div className="w-10/12">
              <textarea
                {...register("message", { required: true })}
                placeholder="Write your message..."
                maxLength={150}
                className="ml-4 w-full rounded-2xl p-2 md:text-2xl"
              />
              {errors.message && <h3>{errors.message}</h3>}
              <button
                className="block md:text-2xl float-right border-altBackground text-altBackground font-bold mt-4 border-2 px-6 py-1 rounded-full hover:border-accent hover:text-accent duration-500"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
