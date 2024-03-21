import axios from "axios";
import { useState } from "react";

function App() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/submit-form", formData);
      console.log(response.data);
      setFormdata({name:'',email:'',phoneNumber:''});
    } catch (error) {
      console.error("Error in submitting the form:", error);
    }
  };

  return (
    <center>
      <div className="m-[60px] border-[1px] border-teal-100 rounded-md shadow-xl max-w-[700px] p-[20px]">
        <form onSubmit={handleSubmit}>
          <h3 className="text-3xl text-blue-950 font-bold">
            Basic Details Form
          </h3>
          <div className="flex flex-col gap-[20px] items-start p-[40px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-teal-600 font-semibold border-b-[2px] text-lg outline-none w-full p-[10px] placeholder:text-sky-950  placeholder:font-semibold"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="text-teal-600 font-semibold border-b-[2px] text-lg outline-none w-full p-[10px] placeholder:text-sky-950  placeholder:font-semibold"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="text-teal-600 font-semibold border-b-[2px] text-lg outline-none w-full p-[10px] placeholder:text-sky-950 placeholder:font-semibold"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-950 text-white text-xl font-bold p-[10px] text-center mt-[20px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

export default App;
