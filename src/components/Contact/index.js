import { useRef } from "react";
import "./index.css";

const Contact = () => {
  const formdata = useRef();

  const sendingMail = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg_contact_container">
      <h1 className="contact_form_head">Get in Touch with us</h1>
      <form
        ref={formdata}
        className="form_container_contact"
        onSubmit={sendingMail}
      >
        <label htmlFor="name_" className="label_">
          Full Name<span className="span_">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          id="name_"
          className="input_"
          name="name"
          required
        />

        <label htmlFor="email_" className="label_">
          Email<span className="span_">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email_"
          className="input_"
          name="email"
          required
        />

        <label htmlFor="name_" className="label_">
          Phone Number<span className="span_">*</span>
        </label>
        <input
          type="number"
          placeholder="Enter Phone Number"
          id="name_"
          className="input_"
          name="phoneNumber"
          required
        />

        <label htmlFor="name_" className="label_">
          Enter Course Name<span className="span_">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Course Name"
          id="name_"
          className="input_"
          name="course"
          required
        />

        <textarea
          rows="3"
          cols="4"
          placeholder="Message(Optional)"
          className="teaxt_area"
          name="textarea"
        />

        <button type="submit" className="contact_button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
