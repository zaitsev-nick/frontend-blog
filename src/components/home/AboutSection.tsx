import TagsBlock from '@/components/tags/TagsBlock';

export default function AboutSection() {
  return (
   <>
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-violet-600 xl:text-5xl lg:text-3xl">
          <span className="block w-full">All about JavaScript/TypeScript</span>
          <span className="block w-full">UI Frameworks and libraries</span>
          in Web development</h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          Usefull atricles, examples, tricks and more... <br />
          JavaScript & TypeScript<br /> 
          Front-end / Back-end / Game development
        </p>
      <div className="flex flex-wrap gap-4">
        <TagsBlock />
      </div>
    </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img id="heroImg1" className="lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="/main.svg" alt="Awesome hero page image" width="500" height="488"/>
      </div>
  </div>


   
   </> 
  )
}