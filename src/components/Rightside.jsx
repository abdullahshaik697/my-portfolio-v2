import { siteMeta } from "../data";

export default function Rightside() {
  return (
    <section className="mt-24 px-6 ">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-12 py-20">
    
    {/* Left Side */}
    <div className="text-center md:text-left ">
      <h1 className="text-5xl font-extrabold text-indigo-500  text-right">
        {siteMeta.name}
      </h1>
      <h4 className="text-xl font-semibold text-yellow-300 mt-2  text-right">
         {siteMeta.title}
      </h4>
      <h3 className="text-lg text-slate-700 dark:text-slate-300 mt-4  text-right">
        {siteMeta.tagline}
      </h3>
    </div>

    {/* Right Side */}
    <div className="text-center md:text-left ">
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
        I am a passionate backend developer who loves building scalable, secure, and efficient web applications. My expertise includes 
        working with Node.js, Express.js, and MongoDB. I enjoy solving complex problems, designing APIs, and ensuring smooth data flow between the client and server. Always eager to learn new technologies and improve performance.
      </p>
    </div>

  </div>
</section>

  )
}
