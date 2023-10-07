import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCall = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setApiData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <div className="fetched-data">
            <div>
                {
                    apiData.map((data) => {
                        let {userId, id, title, body} = data;
                        return(
                            <div>
                                <h4>User ID: {userId}</h4>
                                <h4>ID: {id}</h4>
                                <h4>Title: {title}</h4>
                                <h5>Body: {body}</h5>
                                <br/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ApiCall;