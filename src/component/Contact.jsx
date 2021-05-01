import React, { useState } from "react";

function Contact() {
  let [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let { name, email, message } = user;

  let submitInput = (e) => {
    let { name, value } = e.target;

    if (name === "name") {
      setuser({ ...user, name: value });
    } else if (name === "email") {
      setuser({ ...user, email: value });
    } else if (name === "message") {
      setuser({ ...user, message: value });
    }

  };

  let handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hi, My name is ${name}. My Email is ${email} and My Message is ${message}. Thank You!`
    );

    setuser({
      name: "",
    email: "",
    message: "",
    })
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="page-heading my-5 text-center">
            <h2> Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-md-6 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={submitInput}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={submitInput}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="text-area"> Write a Message </label>
                  <textarea
                    class="form-control mt-2"
                    placeholder="Write Your Message"
                    id="text-area"
                    rows="4"
                    value={message}
                    name="message"
                    onChange={submitInput}
                  >
                    {" "}
                  </textarea>
                </div>

                <div className="col-12 mt-2">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={!(name && email && message)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
