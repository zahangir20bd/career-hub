import React from "react";
import Banner from "../Banner/Banner";

const Blogs = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto px-2 my-32">
        <h2 className="text-5xl font-bold text-center mb-20">Blogs</h2>
        <div className="border-2 mb-10 px-3 py-5 rounded-lg bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]">
          <h2 className="text-3xl font-semibold mb-3">
            When Should you use context API?
          </h2>
          <p className="ps-2 pt-3 pb-3 text-justify">
            Context API is a powerful feature in React that allows you to share
            data between components without having to pass props through each
            level of the component tree. I would consider using Context API
            when:
          </p>
          <li className="ps-4">
            I have data that needs to be accessed by multiple components that
            are not directly related to each other.
          </li>
          <li className="ps-4">
            I have data that needs to be updated in one component and then
            immediately reflected in other components that depend on that data.
          </li>
          <li className="ps-4">
            I have a large application with many components that would make prop
            drilling cumbersome and difficult to maintain.
          </li>
          <li className="ps-4">
            I want to keep my code organized and avoid having to manage a large
            number of props.
          </li>
          <li className="ps-4">
            I want to decouple my components and make them more reusable.
          </li>
          <p className="pt-3 text-justify">
            However, it's important to note that Context API should not be used
            for all data sharing situations. If I have data that is only used by
            one or two components that are directly related, it's better to pass
            the data as props. Additionally, if the data is frequently changing,
            I may want to consider using Context API.
          </p>
        </div>
        <div className="border-2 mb-10 px-3 py-5 rounded-lg bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]">
          <h2 className="text-3xl font-semibold mb-3">
            What is a custom hook?
          </h2>
          <p className="pt-3 text-justify">
            In React, a custom hook is a JavaScript function that starts with
            the prefix "use" and allows you to reuse stateful logic between
            components. Custom hooks are a way to abstract complex logic and
            state management in a reusable and composable way.
          </p>
          <p className="pt-3 text-justify">
            Custom hooks follow the same rules as React's built-in hooks, which
            means they can use other hooks and must only be called at the top
            level of a functional component or another hook.
          </p>
          <p className="py-3 text-justify">
            Here's an example of a custom hook that uses the useState hook to
            create a toggle state:
          </p>
          <div>
            <p className="ps-10">{"import {useState} from 'react';"}</p>
            <p className="ps-10">
              {"function useToggle(initialValue = false) {"}
            </p>
            <p className="ps-14">
              {"const [value, setValue] = useState(initialValue);"}
            </p>
            <p className="ps-20">{"const toggle = () => {"}</p>
            <p className="ps-24">{"setValue(!value);"}</p>
            <p className="ps-20">{"};"}</p>
            <p className="ps-20">{"return [value, toggle];"}</p>
            <p className="ps-14">{"}"}</p>
            <p className="ps-10">{"export default useToggle;"}</p>
          </div>
          <p className="pt-3 text-justify">
            In this example, the useToggle hook returns an array with two
            elements: the current toggle state and a function to toggle it. This
            hook can be used in any component that needs a toggle state without
            duplicating the logic of managing the state.
          </p>
        </div>
        <div className="border-2 mb-10 px-3 py-5 rounded-lg bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]">
          <h2 className="text-3xl font-semibold mb-3">What is useRef?</h2>
          <p className="pt-3 text-justify">
            In React, useRef() is a hook that returns a mutable ref object which
            can be used to hold a value that persists across renders. It's
            primarily used to access and modify the properties of DOM elements
            such as input fields, without the need for re-rendering the
            component. useRef() can also be used to store any mutable value that
            needs to persist across renders. Unlike useState(), changes to a ref
            object's value do not trigger a re-render of the component, making
            it useful for handling mutable data that doesn't affect the
            component's rendering.
          </p>
        </div>
        <div className="border-2 mb-10 px-3 py-5 rounded-lg bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]">
          <h2 className="text-3xl font-semibold mb-3">What is useMemo?</h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
