import React from 'react'

function GenresInDb(props) {
    return (
        <React.Fragment>
            
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        {props.genre}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default GenresInDb