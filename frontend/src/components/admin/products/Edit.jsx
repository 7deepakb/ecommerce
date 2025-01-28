import React, { useState } from 'react'
import Layout from '../../common/Layout'
import Sidebar from '../../common/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { adminToken, apiUrl } from '../../common/http'

const Edit = () => {

const [disable, setDisable] = useState(false)
const navigate = useNavigate();
const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = useForm();

const saveProduct = async (data) => {
    // const formData = {...data, "content": content} 
    setDisable(true);
    const res = await fetch(`${apiUrl}/products`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${adminToken()}`
        },
        body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            setDisable(false);
            if (result.status == 200) {
                toast.success(result.message);
                navigate('/admin/products')
            } else {
                  /* Object.keys(formErrors).forEach((field) => {
                  setError(field, { message: formErrors[field][0]});
                }

                ) */

                console.log('Something went wrong');
            }
            
        })
  }

  return (
    <Layout>
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-between mt-5 pb-3'>
                    <h4 className='h4 pb-0 mb-0'>Edit Product</h4>
                    <Link to="/admin/products" className='btn btn-primary'>Back</Link>
                </div>
                <div className='col-md-3'>
                   <Sidebar/>
                </div>
                <div className='col-md-9 mb-3'>

                  <form onSubmit={handleSubmit(saveProduct)}>
                      <div className='card shadow'>
                          <div className='card-body p-4'>
                              <div className='mb-3'>
                                  <label htmlFor="" className='form-label'>
                                      Title
                                  </label>
                                  <input 
                                  {
                                      ...register('title',{
                                          required : 'Title is required'
                                      })
                                  }
                                  type="text"
                                  className={`form-control ${errors.title && 'is-invalid'}`}
                                  placeholder='Title' />
                                  {
                                      errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                  }
                              </div>
                              <div className='mb-3'>
                                <label htmlFor="" className='form-label'>
                                      Description
                                  </label>
                                  <textarea
                                    {
                                      ...register('description')
                                    }
                                    className='form-control' placeholder='description' rows={3}></textarea>
                              </div>
                              <div className='row'>
                                <div className='col-md-6'>
                                  <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Price</label>
                                    <input
                                      {
                                        ...register('price')
                                      }
                                      type="text" placeholder='Price' className='form-control' />
                                  </div> 
                                </div>
                                <div className='col-md-6'>
                                  <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Qty</label>
                                    <input
                                      {
                                        ...register('qty')
                                      }
                                      type="text" placeholder='qty' className='form-control' />
                                  </div>
                                </div>
                              </div>
                              <div className='mb-3'>
                                <label htmlFor="" className='form-label'>SKU</label>
                                <input
                                  {
                                    ...register('sku')
                                  }
                                  type="text" placeholder='sku' className='form-control' />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Image</label>
                                <input type="file" className='form-control' />
                              </div> 
                          </div>
                      </div>

                      <button
                        disabled={disable}
                        type='submit'
                        className='btn btn-primary mt-3'>
                        Create
                      </button>

                  </form>
                    
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Edit