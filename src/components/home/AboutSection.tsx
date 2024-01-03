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
          Usefull atricles, exampless, tricks and more... <br />
          JavaScript/TypeScript on Front-end and Back-end
        </p>
      <div className="flex gap-4">
        <div draggable="true" role="button" title="Hover chip" className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-meta"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z">
                </path>
            </svg>
            <span className="block text-sm font-medium">Meta</span>
        </div>
        <div draggable="true" role="button" title="Hover chip"
            className="h-8 px-3 w-max flex gap-2 items-center rounded-full border border-gray-100 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50 active:border-yellow-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:active:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                <path
                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z">
                </path>
            </svg>
            <span className="block text-sm font-medium">Flash</span>
        </div>
        <div draggable="true" role="button" title="Hover chip"
            className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple"
                viewBox="0 0 16 16">
                <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                </path>
                <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                </path>
            </svg>
            <span className="block text-sm font-medium">Apple</span>
        </div>
      </div>
    </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img id="heroImg1" className="lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="/main.svg" alt="Awesome hero page image" width="500" height="488"/>
      </div>
  </div>


   
   </> 
  )
}