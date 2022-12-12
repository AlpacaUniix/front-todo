import { useCallback, useEffect, useState } from 'react';
import { routes } from './config'

export default function Addlists (){
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <h2>Todo List</h2>
                <input className='form-control' type='text' 
                placeholder="Add task..." aria-label='input data'></input>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                </table>
            </div>

        </div>
        </>
    )}

