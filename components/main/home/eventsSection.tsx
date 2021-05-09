export default function () {
  return (
    <section className="py-20 bg-blueGray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading">
          MTs TechnoNatura Events
        </h2>
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
            <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
              Science
            </span>
            <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
              Science Exhibition 2020
            </h3>
            <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
              Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo
              a semper venenatis, felis urna pulvinar nibh, vitae porta erat
              risus sed mauris. Vestibulum vehicula leo eget libero eleifend,
              quis dictum eros bibendum. Maecenas convallis tempor varius.
            </p>
            <a className="text-xs font-semibold text-blue-600" href="#">
              <span>Read More</span>
              <svg
                className="inline-block w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
            <img
              className="w-full h-80 object-cover rounded"
              src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt=""
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
            <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
              Robotic
            </span>
            <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
              FTC 2021 Competition
            </h3>
            <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
              Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo
              a semper venenatis, felis urna pulvinar nibh, vitae porta erat
              risus sed mauris. Vestibulum vehicula leo eget libero eleifend,
              quis dictum eros bibendum. Maecenas convallis tempor varius.
            </p>
            <a className="text-xs font-semibold text-blue-600" href="#">
              <span>Read More</span>
              <svg
                className="inline-block w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
            <img
              className="w-full h-80 object-cover rounded"
              src="https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
              alt=""
            />
          </div>
        </div>

        {/* <div className="text-center">
          <a
            className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
            href="#"
          >
            Show all posts
          </a>
        </div> */}
      </div>
    </section>
  );
}
