import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-title'>Blogs</h2>
            <div className='blogs-div'>
                <div className='ques1'>
                    <h2>Difference between `authorization` and `authentication`:</h2>
                    <p>	In authentication process, the identity of user is checked for creating the access to the system.While in authorization process,user’s authorities are checked for accessing the resources.In authentication process, users are verified.While in authorization process, users or persons are vauldated.	Authentication needs usually user’s login details.While authorization needs user’s privilege or security levels.Authentication checks whether the person is user or not.While authorization determines What permissions do user have.</p>
                </div>
                <div className='ques2'>
                    <h2>Why are you using `firebase`?</h2>
                    <p>By using Firebase, we can focus our time and attention on developing the great app possible for our businesses. therefor, the operations and internal functions are so sould, and taken care of by the Firebase interface, we can spend effective time developing the high quaulty app that users are gonna use.Some of the features we can develop includes: Cloud Messaging,Authentication,Hosting,Remote Configuration,Test Lab,Crash Reporting,Realtime Database,Storage.</p>
                    <h2>What other options do you have to implement authentication?</h2>
                    <p>Back4App,Parse,AWS Ampulfy,Backendless,Kuzzle,Supabase,appwrite,Hasura,Nhost,Deployd etc.</p>
                </div>
                <div className='ques3'>
                    <h2>What other services does `firebase` provide other than authentication?</h2>
                    <p>There are many services which Firebase provides, Most useful of them are:<br></br>
                        <ul className='list-item'>
                        <ul>
                            Cloud Firestore
                        </ul>
                        <ul>Cloud Functions</ul>
                        <ul>Authentication</ul>
                        <ul>Hosting</ul>
                        <ul>Cloud Storage</ul>
                        <ul>Google Analytics</ul>
                        <ul>Predictions</ul>
                        <ul>Cloud Messaging</ul>
                        <ul>Dynamic ulnks</ul>
                        <ul>Remote Config</ul>
                        </ul>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;