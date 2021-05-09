import Link from "next/link";
export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl lg:text-4xl mb-8 font-bold font-heading">
          Our Blog
        </h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3 mb-12">
            <a href="#">
              <img
                className="h-80 w-full object-cover rounded"
                src="https://images.unsplash.com/photo-1585441695325-21557ef66366?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                alt=""
              />
              <p className="mt-6 text-sm text-blue-400">
                <span>CATEGORY</span>
                <span className="text-blueGray-400">24 Jan, 2020</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </a>
          </div>
          <div className="w-full lg:w-2/3 px-3 mb-12">
            <a href="#">
              <img
                className="h-80 w-full object-cover rounded"
                src="https://images.unsplash.com/photo-1519017524945-ed31bb7a3786?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                alt=""
              />
              <p className="mt-6 text-sm text-blue-400">
                <span>CATEGORY</span>
                <span className="text-blueGray-400">24 Jan, 2020</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit,
                leo a semper venenatis, felis urna pulvinar nibh, vitae porta
                erat risus sed mauris. Vestibulum vehicula leo eget libero
                eleifend.
              </p>
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-12">
            <a href="#">
              <img
                className="h-80 w-full object-cover rounded"
                src="https://images.unsplash.com/photo-1602536100338-c7762727ddb7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
              <p className="mt-6 text-sm text-blue-400">
                <span>CATEGORY</span>
                <span className="text-blueGray-400">24 Jan, 2020</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-12">
            <a href="#">
              <img
                className="h-80 w-full object-cover rounded"
                src="https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt=""
              />
              <p className="mt-6 text-sm text-blue-400">
                <span>CATEGORY</span>
                <span className="text-blueGray-400">24 Jan, 2020</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-12">
            <a href="#">
              <img
                className="h-80 w-full object-cover rounded"
                src="https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
              <p className="mt-6 text-sm text-blue-400">
                <span>CATEGORY</span>
                <span className="text-blueGray-400">24 Jan, 2020</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </a>
          </div>
        </div>
        <div className="text-center">
          <a
            className="btn inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-green-500 hover:bg-green-700 rounded"
            href="#"
          >
            Show all posts
          </a>
        </div>
      </div>
    </section>
  );
}
