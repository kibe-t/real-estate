import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73a78a8a-0b66-4b33-a10b-450e53352e9f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("")
      toast.success("form submitted succefully.")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  }; 
  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-fu overflow-hidden
    ' id='Contact'>
       
       <h1 className='text-2xl sm:text-4xl font-bold mb-2
        text-center'>Contact<span className='underline underline-offset-4
        decoration-1 under font-light'>with us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 
        mx-auto'>Ready to make a move together </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2  text-left'>
                    Your name
                    <input className='w-full border border-gray-300
                    rounded py-3 px-4 mt-2' type="text" name='name' placeholder='your name' required />
                </div>
                <div className='w-full md:w-1/2  text-left md:pl-4'>
                    Your emai;
                    <input className='w-full border border-gray-300
                    rounded py-3 px-4 mt-2' type="email" name='email' placeholder='your email' required />
                </div>
            </div>
            <div className='m-6 text-left'>
                Message.
                <textarea className='w-full border border-gray-300 rounded
                py-3 px-4 mt-2 h-48 resize-none' name="Messafe" placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-600 text-white 
            py-2 px-12 mb-10 rounded'>{result ?result :"send message"}</button>
        </form>

    </motion.div>
  )
}

export default Contact