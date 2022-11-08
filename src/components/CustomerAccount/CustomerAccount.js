import React from "react"
import "./style.css"
//eslint-disable-next-line 
export default function (props) {
    return (

        <div class="login-form">
            <div class="login">

                <h1 class="text-center">Add Customer</h1>

                <form class="needs-validation">
                    <div class="form-group ">
                        <label class="form-label">Account Number</label>
                        <input class="form-control" type="text"

                            placeholder="Account Number"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Customer Number</label>
                        <input class="form-control" type="text"

                            placeholder="Customer Number"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Branch Id</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Opening Balance</label>
                        <input class="form-control" type="number" min="5000"

                            placeholder="atleast 5000"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Opening Date</label>
                        <input class="form-control" type="date"

                            // placeholder="Customer Number"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Account Type</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value="1">Current</option>
                            <option value="2">Savings</option>
                        </select>
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Account Status</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                        </select>
                    </div>
                    <input class="btn btn-success w-100" type="submit" value="Add" />
                </form>
            </div>
        </div>

    )
}
