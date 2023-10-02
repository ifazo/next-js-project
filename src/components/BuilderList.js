import { clearProducts } from "@/store/features/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  {
    _id: 1,
    name: "CPU",
  },
  {
    _id: 2,
    name: "Motherboard",
  },
  {
    _id: 3,
    name: "RAM",
  },
  {
    _id: 4,
    name: "Power Supply Unit",
  },
  {
    _id: 5,
    name: "Storage Device",
  },
  {
    _id: 6,
    name: "Monitor",
  },
];

// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()
//   return { props: { data } }
// }

export default function BuilderList({ data }) {
  console.log(data)
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleClearProducts = () => {
    dispatch(clearProducts());
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Builder products
        </h2>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {categories.map((category) => {
                      const product = products.find(
                        (product) => product.category === category.name
                      );
                      return (
                        <tr key={category._id}>
                          <>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <Image
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full"
                                    src={
                                      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">
                                    Lindsay Walton
                                  </div>
                                  <div className="text-gray-500">
                                    {product ? product.name : "No product"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">
                                {category.name}
                              </div>
                              <div className="text-gray-500">Required</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              $250
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <Link
                                href={`/builder/${category.name}`}
                                className="text-indigo-600 hover:text-indigo-900">
                                Select
                              </Link>
                            </td>
                          </>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center mt-5">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Components</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the components you have selected for your build.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={() => handleClearProducts()}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
              Clear Builder
            </button>
          </div>
        </div>
      </div>
    </>
  );
}