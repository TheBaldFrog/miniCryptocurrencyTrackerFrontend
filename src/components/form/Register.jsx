import React from 'react';
import {DatePicker, Input, InputNumber, Space} from "antd";
import PhoneInput from "antd-phone-input";
import FormItem from "antd/es/form/FormItem";

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const validator = (_, {valid}) => {
    // if (valid(true)) return Promise.resolve(); // strict validation
    if (valid()) return Promise.resolve(); // non-strict validation
    return Promise.reject("Invalid phone number");
}


export default function Register() {
    return (
        <React.Fragment>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
                    Create An Account
                </h1>
                <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto'>
                    Welcome to Cryptoviewer!
                </p>
            </div>
            <form>
                <div className='space-y-4'>
                    <input type='text' placeholder='Name'
                           className='border-gray-400 block text-sm py-3 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />

                    <DatePicker
                        className='py-3 w-full'

                        format={{
                            format: 'DD-MM-YYYY',
                            type: 'mask',
                        }}
                        onChange={onChange}
                    />

                    <Input
                        className='py-3 w-full'
                        type="number"
                        placeholder='Phone number'
                    />

                    <input type='text' placeholder='Username'
                           className='border-gray-400 block text-sm py-3  rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                    <input type='number' placeholder='Phone number'
                           className='border-gray-400 block text-sm py-3  rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                    <input type='email' placeholder='Email'
                           className='border-gray-400 block text-sm py-3  rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                    <input type='password' placeholder='password'
                           className='block text-sm py-3 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                </div>
                <div className='text-center mt-6'>
                    <button type='submit'
                            className='py-3 w-64 text-xl bg-white rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none hover:cursor-pointer'>
                        Create Account
                    </button>
                    <p className='mt-4 text-sm'>Already have an account? <span
                        className='underline cursor-pointer'>Sign In</span>
                    </p>
                </div>
            </form>
        </React.Fragment>
    )
}