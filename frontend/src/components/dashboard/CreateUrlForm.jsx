import { useState } from "react";

const CreateUrlForm = ({ createUrl }) => {

    const [originalUrl,setOriginalUrl]=useState("");

    const [customAlias,setCustomAlias]=useState("");

    const submit=(e)=>{

        e.preventDefault();

        createUrl({

            originalUrl,

            customAlias

        });

        setOriginalUrl("");

        setCustomAlias("");

    };

    return(

        <div className="card shadow p-4 mb-4">

            <h3>Create Smart URL</h3>

            <form onSubmit={submit}>

                <input

                    className="form-control mb-3"

                    placeholder="Original URL"

                    value={originalUrl}

                    onChange={(e)=>

                        setOriginalUrl(e.target.value)

                    }

                />

                <input

                    className="form-control mb-3"

                    placeholder="Custom Alias (Optional)"

                    value={customAlias}

                    onChange={(e)=>

                        setCustomAlias(e.target.value)

                    }

                />

                <button className="btn btn-primary">

                    Shorten URL

                </button>

            </form>

        </div>

    );

};

export default CreateUrlForm;