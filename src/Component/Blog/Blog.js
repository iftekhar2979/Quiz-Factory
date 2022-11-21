import React from 'react';
import SingleBlog from './SingleBlog';
const Blog = () => {
    const blogs=[
        {
            id:1,
            img:'https://remix.run/blog-images/headers/react-router-v6.3.0.jpg',
            question:'What is the Pupose of React Router',
            answer:'React Router is a Javascript framework which is used to handle the client side routing and server  side routing. It enables the creation of web or mobile application that allows navigating without refreshing the page. It have many features for making single page web'
        },{
            id:2,
            img:'https://miro.medium.com/max/1024/1*uNQ7pUaqT7HdW41Y_-Amyg.png',
            question:'How Does Context Api Work?',
            answer:'The React Context Api is a way to produce global that can be passed around. This is the alternative of prop drilling when we use prop drilling first we create a property then we passed it to the parent child to components by using props and reciving props. Now context api makes the developers life easy. Because their is no prop drilling the main thing is first create a context in the root component and receive the context by using context hook useContext. when we create the context api we must export it from root otherwise the children can not received the and we must provide a value of context. and wrap the grand component by context provider.'
        },{
            id:3,
            img:'https://miro.medium.com/max/1200/1*i84qwZI8_mxxM1zQ3hYd_A.jpeg',
            question:'explain What is useRef Hook in react?',
            answer:`useRefs is a react Hook that lets you reference a value that's not needed for rendering. useRef returns a ref object with a single current property intially set to the intial value you provided.On the next renders, useRef will return the same object. You can change its current property to store information and read it later.Changing a ref does not trigger a re-render.refs are perfect for storing information that does not effect the visual output of your component .It's particularly common to use a ref to manipulate the DOM. React has built-in support for this. `
        }
    ]
    return (
        <div className='flex justify-center m-4'>
            {/* <h2>Hello this is blog</h2> */}
            <div className=''>
            {
                blogs.map(item=><SingleBlog key={item.id} data={item}></SingleBlog>)
            }

            </div>
        </div>
    );
};

export default Blog;