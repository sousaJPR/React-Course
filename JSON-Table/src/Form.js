import Button from './Button';
import { useState } from 'react';
import './index.css';

const Content = ({reqType, setReqType }) => {
    const [pageContent, setPageContent] = useState('');
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                reqType = {reqType}
                setReqType = {setReqType}/>
            <Button
                buttonText="posts"
                reqType = {reqType}
                setReqType = {setReqType}/>
            <Button
                buttonText="comments"
                reqType = {reqType}
                setReqType = {setReqType}/>
        </form>
    )
}

export default Content