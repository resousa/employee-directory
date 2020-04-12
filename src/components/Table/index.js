import React from 'react';

function Table() {
    return (
      <div className='row py-3'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-header font-weight-bold'>Search</div>
          <div className='card-body'>
            <form className='form-inline pb-3'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
            </form>

            <a href='#' className='btn btn-primary'>
              Search
            </a>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-header font-weight-bold'>Add Vendor</div>
          <div className='card-body'>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Name
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Contact
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Address
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Inventory Purchased
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text'
                  id='inputGroup-sizing-default'
                >
                  Contract End
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
              ></input>
            </div>

            <a href='#' className='btn btn-primary'>
              Add
            </a>
          </div>
        </div>
      </div>
    </div>
      );
}

export default Table;