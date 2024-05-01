import React from 'react'

export default function AddProductForm() {
  return (
    <form className='container-fluid'>
        <h1>Add Product</h1>
        <div className="input-group">
        <label for="">Prodouct ID</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Product Category</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Available Units</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Display Name</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Description</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Unit Price</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Discount</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Discount End Date</label> <br/>
        <input type="text" />
    </div>
    <div className="input-group">
        <label for="">Images</label> <br/>
        <input type="file" />
    </div>
        
    </form>
  )
}

