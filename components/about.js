import Intro from '../components/intro'

export default function About() {
  return <div>
    <div className="w-full flex flex-col justify-center mt-8 sm:px-6 md:px-40 lg:px-64">
      <img className="w-64 h-64 rounded-full self-center" src={'/assets/blog/authors/profile.jpg'} alt="Joe"/>

      <span className="text-4xl self-center mt-8 font-semibold text-black">
        Caio Yoshida
      </span>

      <span className="text-xl text-center self-center mt-8 font-regular text-gray-700">
        I'm a full-stack developer focused in JS. Always studying to increase my programming skills and very excited about new challenges
      </span>
    </div>
  </div>
}