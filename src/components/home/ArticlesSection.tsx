export default function ArticlesSection() {
  return (
   <>
  <div className="relative mx-auto max-w-7xl mt-16">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The latest articles and guides.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      Useful articles from the world of Web development.</p>
    </div>
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt=""/>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">Article</a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
              <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Roel Aufderehar</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">Roel Aufderehar</a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">Mar 16, 2020</time>
                <span aria-hidden="true">·</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt=""/>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">Video</a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
              <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,
                tempore temporibus quo laudantium.</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Brenna Goyette</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">Brenna Goyette</a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-10">Mar 10, 2020</time>
                <span aria-hidden="true">·</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt=""/>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">Case Study</a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">Improve your customer experience</p>
              <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis
                perferendis hic.</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Daniela Metz</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">Daniela Metz</a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-02-12">Feb 12, 2020</time>
                <span aria-hidden="true">·</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
    <button type="button"
        className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
            <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
        </svg>
        View More
    </button>
</div>
   </> 
  )
}