import Title from "../Title/Title";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <Title>
            What our <span className="text-blue-500 ">clients</span> say
          </Title>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                “I have purchased from Fat Brain in the past for Christmas toys
                for my 2 grandsons. They offer a nice break from the constant
                video games that they play. I try to find toys that will
                encourage them to play together, while learning things such as
                counting, alphabet letters and teamwork. Nice to find a place
                where good toys still exist!”.
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">Robbert</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                “Quality of the toys is unmatched by any competing toy maker.
                Love the wood they use. Very smooth and sturdy. Toys are
                carefully crafted to keep the kids engaged and thoughtfully
                designed to as a learning toy. I wish shipping was lower often
                when i get the product i go back and order a second one. Keep up
                the good work! I am hooked!”.
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
