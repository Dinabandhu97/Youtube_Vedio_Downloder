import React from "react"
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function App() {
  const [url1, setURL] = useState("")

  const handleInput = (e) => {
    e.preventDefault()

    setURL(e.target.value)
  }

  const downloadVideo = async (e) => {
    e.preventDefault()

    const options = {
      method: 'GET',
      url: 'https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo',
      params: {
        url: `${url1}`
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'youtube-video-and-shorts-downloader1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.links[0].link);
      window.location.href=response.data.links[0].link;
      
    } catch (error) {
      console.log(error);
    }

  }
  console.log(URL)

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-slate-200">
      <div  className="flex items-center justify-center gap-x-2">
        {/* Youtube logo, text */}
        <FaYoutube size={60} className="text-red-600"/>
        <p className="text-2xl font-bold text-red-400">
          Video Downloader
        </p>
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <input type="url" className="h-10 w-96 border-none outline-none px-5 rounded-lg shadow-lg" onChange={handleInput}/>
        <button className="h-10 bg-slate-600 text-white px-2 rounded-lg border-none outline-none" onClick={downloadVideo}>Download</button>
      </div>
    </div>
  )
}

export default App