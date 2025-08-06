
import React, { useState, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  data = [],
  config = {},
  onPageChange = () => {},
  children,
}) => {
  const defaultConfig = {
    enabled: true,
    position: 'both',
    itemsPerPage: 10,
    itemsPerPageOptions: [5, 10, 20, 50],
    showPageNumbers: true,
    showFirstLast: true,
    showPrevNext: true,
    showItemsInfo: true,
    style: {
      activePageColor: '#00493E',
      hoverColor: '#00382E',
      disabledColor: 'gray',
    },
  };

  const paginationConfig = { ...defaultConfig, ...config };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(paginationConfig.itemsPerPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    onPageChange(data.slice(start, end));
  }, [currentPage, data, itemsPerPage]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    const newTotalPages = Math.ceil(totalItems / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);
    setCurrentPage(newCurrentPage);
  };

  const renderControls = (position) => {
    if (!paginationConfig.enabled ||
      (paginationConfig.position !== position && paginationConfig.position !== 'both')) {
      return null;
    }

    return (
      <div className={`flex flex-col sm:flex-row justify-between items-center ${position === 'top' ? 'mb-4' : 'mt-4'} gap-4`}>
        {paginationConfig.showItemsInfo && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              {paginationConfig.itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        {paginationConfig.showItemsInfo && (
          <div className="text-sm text-gray-600">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex flex-wrap space-x-1">
            {paginationConfig.showFirstLast && (
              <button
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "text-white"}`}
                style={{ backgroundColor: currentPage !== 1 ? paginationConfig.style.activePageColor : '' }}
              >
                First
              </button>
            )}

            {paginationConfig.showPrevNext && (
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "text-white"}`}
                style={{ backgroundColor: currentPage !== 1 ? paginationConfig.style.activePageColor : '' }}
              >
                Prev
              </button>
            )}

            {paginationConfig.showPageNumbers &&
              Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) pageNum = i + 1;
                else if (currentPage <= 3) pageNum = i + 1;
                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                else pageNum = currentPage - 2 + i;

                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`px-3 py-1 rounded-md text-sm ${currentPage === pageNum ? "text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                    style={{ backgroundColor: currentPage === pageNum ? paginationConfig.style.activePageColor : '' }}
                  >
                    {pageNum}
                  </button>
                );
              })}

            {paginationConfig.showPrevNext && (
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "text-white"}`}
                style={{ backgroundColor: currentPage !== totalPages ? paginationConfig.style.activePageColor : '' }}
              >
                Next
              </button>
            )}

            {paginationConfig.showFirstLast && (
              <button
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "text-white"}`}
                style={{ backgroundColor: currentPage !== totalPages ? paginationConfig.style.activePageColor : '' }}
              >
                Last
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderControls('top')}
      {children && React.Children.map(children, (child) =>
        cloneElement(child, { rows: currentItems })
      )}
      {renderControls('bottom')}
    </>
  );
};

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  config: PropTypes.object,
  onPageChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Pagination;
