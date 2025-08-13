// import React from 'react';
// import { Link } from 'react-router-dom';

// const PendingRequestCard = ({ title, items = [], getName, getLocation, getPrice, viewMoreLink }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg">
//       <h2 className="text-xl font-bold text-[#00493E] mb-4">{title}</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full">
//           <tbody className="bg-white">
//             {items.map((item, index) => (
//               <tr key={index}>
//                 {/* Profile Pic + Name */}
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-full bg-[#00493E] flex items-center justify-center overflow-hidden">
//                       <img
//                         src={item.profilePicture || '/default-profile.png'}
//                         alt={`${getName(item)} profile`}
//                         className="w-8 h-8 rounded-full object-cover"
//                       />
//                     </div>
//                     <div className="text-sm font-medium text-blue-900">
//                       {getName(item)}
//                     </div>
//                   </div>
//                 </td>

//                 {/* Location */}
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-medium text-[#00493E]">{getLocation(item)}</div>
//                 </td>

//                 {/* Price */}
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-blue-900 font-medium">
//                     ${getPrice(item)}/head
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {viewMoreLink && (
//         <div className="mt-5 pt-4 flex justify-center">
//           <Link
//             to={viewMoreLink}
//             className="w-auto bg-[#00493E] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#00382E] transition-colors duration-200 cursor-pointer"
//           >
//             View More
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PendingRequestCard;







import React from 'react';
import { Link } from 'react-router-dom';

const PendingRequestCard = ({ title, items = [], getName, getLocation, getPrice, viewMoreLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold text-[#00493E] mb-4">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <tbody className="bg-white">
            {items.map((item, index) => (
              <tr key={index}>
                {/* Profile Pic + Name */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#00493E] flex items-center justify-center overflow-hidden">
                      <img
                        src={item.coverImage || '/default-profile.png'}
                        alt={`${getName(item)} profile`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium text-blue-900">
                      {getName(item)}
                    </div>
                  </div>
                </td>

                {/* Location */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-[#00493E]">{getLocation(item)}</div>
                </td>

                {/* Price */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-900 font-medium">
                    ${getPrice(item)}/head
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {viewMoreLink && (
        <div className="mt-5 pt-4 flex justify-center">
          <Link
            to={viewMoreLink}
            className="w-auto bg-[#00493E] text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-[#00382E] transition-colors duration-200 cursor-pointer"
          >
            View More
          </Link>
        </div>
      )}
    </div>
  );
};

export default PendingRequestCard;