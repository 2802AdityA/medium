import axios from 'axios';
import { AppBar } from '../components/AppBar/AppBar';
import { BACKEND_URL } from '../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextEditor } from '../components';

export const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <AppBar />
        <div className='flex justify-center w-full pt-8'>

            <div className='max-w-screen-lg w-full'>
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} type="text" className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' placeholder='Title' />
                <TextEditor onChange={(e) => {
                    setContent(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        }
                    });
                    navigate(`/blog/${response.data.id}`)

                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-blue-200 "> Publish Post</button>
            </div>
        </div>
    </div>
}