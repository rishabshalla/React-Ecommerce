import React from "react";
import { useState } from "react";

function Bill() {
  let [phone, setPhone] = useState("");
  let [first, setFirst] = useState("");
  let [last, setLast] = useState("");
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  const handleChange = (event) => {
    console.log(event.target.v);
    // setPhone(event.target.value);
  };
  return (
    <>
      <div>Place Your Order</div>
      <input
        type="text"
        className="phone-input"
        value={phone}
        placeholder="phone"
        onChange={() => handleChange(setPhone)}
      />
      <input
        type="text"
        className="first-name-input"
        value={first}
        placeholder="first"
        onChange={() => handleChange(setFirst)}
      />
      <input
        type="text"
        className="last-name-input"
        value={last}
        placeholder="last"
        onChange={() => handleChange(setLast)}
      />
      <input
        type="text"
        className="address-input"
        value={address}
        placeholder="address"
        onChange={() => handleChange(setAddress)}
      />
      <input
        type="text"
        className="email-input"
        value={email}
        placeholder="email"
        onChange={() => handleChange(setEmail)}
      />
      <button>Buy Now</button>
    </>
  );
}

export default Bill;
