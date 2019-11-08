import React, { useContext,useEffect } from 'react';
import {LoadingContext} from '../store/Store';

function Extensions() {
    const [,setLoading] = useContext(LoadingContext);
    useEffect(() => {
        setLoading(false)
      });

    
  return (
    <div className="wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">         
                            <div>
                                <p>Extensions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
    
}

export default Extensions
