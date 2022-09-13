import React from 'react';
import ReactPaginate from 'react-paginate';
const PaginateWithUseReducer = () => {
  const initialState = {
    results: [],
    totalItems: 0,
    page: 1,
    currentList: [],
  };

  const paginateReducer = (currentState: any, action: any) => {
    if (action.type === 'UPDATE') {
      return {
        ...currentState,
        results: action.results,
        totalItems: action.totalItems,
        currentList: action.currentList,
      };
    }
    if (action.type === 'PAGINATION') {
      return {
        ...currentState,
        page: action.page,
        currentList: action.currentList,
      };
    }
  };
  const [paginateState, dispatchPaginate] = React.useReducer(
    paginateReducer,
    initialState
  );

  React.useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then((res) => res.json())
      .then((data) => {
        const currentList = data.entries.slice(0, 19);
        dispatchPaginate({
          type: 'UPDATE',
          results: data.entries,
          totalItems: data.count,
          currentList: currentList,
        });
      });
  }, []);

  const pageChangeHandler = (event: any) => {
    let currentList = [];
    if (event.selected === 0) currentList = paginateState.results.slice(0, 19);
    else
      currentList = paginateState.results.slice(
        event.selected * 20 - 1,
        (event.selected + 1) * 20 - 1
      );

    dispatchPaginate({
      type: 'PAGINATION',
      page: event.selected,
      currentList: currentList,
    });
  };
  return (
    <div>
      <h1>Paginate with useReducer</h1>

      {paginateState.currentList.map((item: any, index: number) => {
        return <div key={index}>{item.API}</div>;
      })}
      <div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(paginateState.totalItems / 20)}
          previousLabel='< previous'
          containerClassName={'pagination'}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default PaginateWithUseReducer;
