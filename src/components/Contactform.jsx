import { React, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = data;
    let response;
    if(name && email && phone && message){

    response = await fetch(
      "https://reactproject-f2cbb-default-rtdb.firebaseio.com/Reactcontactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );
  }
    if (response) {
      toast.success("Form Submitted Successfully");
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    else{
      toast.error("Please Fill All Required Field !!");
    }
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"> </i>
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                value={data.name}
                type="text"
                name="name"
                onChange={getData}
                className="input"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={getData}
                className="input"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                onChange={getData}
                className="input"
                value={data.phone}
                placeholder="Phone"
                required
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                onChange={getData}
                value={data.message}
                className="input"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button className="btn" onClick={saveData}>
              Sumbit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contactform;
