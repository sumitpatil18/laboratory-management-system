import "./CreateLaboratory.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import Inputfield from "../../Components/InputField/Inputfield";
import Button from "../../Components/Button/Button";

export default function CreateLaboratory() {
    return (
        <div className="page">

            <Sidebar />

            <div className="content">

                <h1>Create Laboratory Account</h1>

                <p className="subtitle">
                    Add and manage laboratory accounts easily.
                </p>

                <Card>

                    {/* Row 1 */}
                    <div className="form-row two-column">

                        <Inputfield
                            label="Laboratory Name"
                            type="text"
                            placeholder="Enter Laboratory Name"
                        />

                        <Inputfield
                            label="Email Address"
                            type="email"
                            placeholder="Enter Email Address"
                        />

                    </div>

                    {/* Row 2 */}

                    <div className="form-row two-column">

                        <Inputfield
                            label="Phone Number"
                            type="tel"
                            placeholder="Enter Phone Number"
                        />

                        <Inputfield
                            label="Username"
                            type="text"
                            placeholder="Enter Username"
                        />

                    </div>

                    {/* Row 3 */}

                    <div className="form-row three-column">

                        <Inputfield
                            label="City"
                            type="text"
                            placeholder="Enter City"
                        />

                        <Inputfield
                            label="Taluka"
                            type="text"
                            placeholder="Enter Taluka"
                        />

                        <Inputfield
                            label="District"
                            type="text"
                            placeholder="Enter District"
                        />

                    </div>

                    {/* Row 4 */}

                    <div className="form-row two-column">

                        <Inputfield
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                        />

                        <Inputfield
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm Password"
                        />

                    </div>

                    <div className="button-area">

                        <Button
                            type="submit"
                            info="Create Laboratory"
                        />

                    </div>

                </Card>

            </div>

        </div>
    );
}