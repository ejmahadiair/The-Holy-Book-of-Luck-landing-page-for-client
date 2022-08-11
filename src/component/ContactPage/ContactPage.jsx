import React from "react";
import "./contactPage.css";
import { Country } from "country-state-city";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useEffect } from "react";
// import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [message, setMessage] = useState("");
  //   const [ipLocation, setIpLocation] = useState({});
  const [showMessage, setShoWMessage] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (email === conEmail) {
      emailjs
        .sendForm(
          "service_66aqq4j",
          "template_fn2wf8d",
          e.target,
          "Oa3CmY5zQHJdy2t7a"
        )
        .then((res) => {
          setName("");
          setCountry("");
          setEmail("");
          setConEmail("");
          setMessage("");
          setShoWMessage(true);
        })
        .catch((err) => {
          setErrMessage(true);
        });
      //   const data = {
      //     Name: name,
      //     Country: country,
      //     Email: email,
      //     Message: message,
      //   };
      //   axios
      //     .post(
      //       "https://sheet.best/api/sheets/d0b334c2-8959-46c2-b16f-8bae51b83037",
      //       data
      //     )
      //     .then((res) => {
      //       console.log(res);
      //   setName("");
      //   setCountry("");
      //   setEmail("");
      //   setConEmail("");
      //   setMessage("");
      //     })
      //     .catch((err) => console.log(err));
    } else {
      window.alert("Email dose not match");
    }
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShoWMessage(false);
      }, 2000);
    } else if (errMessage) {
      setTimeout(() => {
        setErrMessage(false);
      }, 2000);
    }
  }, [showMessage, errMessage]);
  return (
    <>
      <div id="contact" className="contact-page-container">
        <div className="form-box">
          <form action="mailto:contact@as-alzein.com" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              className="item"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <select
              value={country}
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              className="item"
              required
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((x) => {
                  return (
                    <option key={x.isoCode} value={x.name}>
                      {x.name}
                    </option>
                  );
                })}
            </select>
            <input
              type="email"
              name="user_email"
              placeholder="E-Mail"
              className="item"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="email"
              placeholder="Confirm E-Mail"
              className="item"
              required
              value={conEmail}
              onChange={(e) => setConEmail(e.target.value)}
            />
            <textarea
              name="message"
              value={message}
              id=""
              cols="30"
              rows="10"
              placeholder="Place  your comment"
              className="item"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {showMessage && (
              <p className="msg-delivered">Message successfully delivered!</p>
            )}
            {errMessage && (
              <p className="msg-err">
                Check Your Internet Connection or fill up form correctly{" "}
              </p>
            )}
            <button type="submit">Let's Talk</button>
          </form>
        </div>

        <div className="shape1"></div>
        <div className="shape2"></div>
      </div>
    </>
  );
};

export default ContactPage;
