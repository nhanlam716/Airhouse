// import React from "react";
// interface ISelect {
//   mapFunction: (k: string[], v: number) => void;
// }
// const Select = ({ mapFunction }: ISelect) => {
//   return (
//     <div>
//       <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//         {mapFunction.map((item: string, index: number) => (
//           <option key={index} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Select;
import React from "react";

interface IAddress {
  title?: string;
}

const Select = ({ title }: IAddress) => {
  return (
    <div>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>{title}</option>
      </select>
    </div>
  );
};

export default Select;
