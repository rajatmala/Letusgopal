import React from 'react'

const UserDetails = () =>
{
    return (
        <div>
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">Shree venkata</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Ahemdabad-Gujarat, India</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;

