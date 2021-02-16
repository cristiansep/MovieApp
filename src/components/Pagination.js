import React from 'react';
import PaginationMovie from 'rc-pagination';

export const Pagination = (props) => {

  const { currentPage, totalItems, onChangePage } = props;

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">

        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
         


         <PaginationMovie
             current={currentPage}
             total={totalItems}
             pageSize={20}
             onChange={onChangePage}
         
         />
   

     
          </div>
        </div>
      </div>
    )
}
