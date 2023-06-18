import React from 'react'
import Spline from '@splinetool/react-spline';
import { Margin } from '@mui/icons-material';
import { Button } from '@mui/material';

const Signin = () => {
    return (
        <div>
            <div className='3d-balls' style={{ position: 'absolute', zIndex: '-1', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: 'red' }}>
                <Spline scene="https://prod.spline.design/CDcXJJqM3FlSai9e/scene.splinecode" />
            </div>
            <div className='box' style={{
                position: 'absolute',
                zIndex: '-1', top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor: 'rgba( 255, 255, 255, 0.01 )',
                height: '70%', width: '25%', backdropFilter: 'blur(5px)'
                , borderRadius: '25px', padding: '1%',

            }} />
            <form style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                height: '70%', width: '25%',

                borderRadius: '25px',
                display: 'flex',
                justifyContent: "top", alignItems: "center", flexDirection: 'column',
                padding: '1%',
                fontFamily: 'inter'
            }}>
                <h1 style={{ fontSize: '2.5vw' }}>Sign in</h1>




                <div className='inputs'>
                    <label className='text-3xl font-bold underline'>Email</label><br/>
                    <input type='text'></input>
                </div>

                <div className='inputs'>
                    <label>Password</label><br />
                    <input type='password' />
                </div>
                <div>
                    <input type='radio' />
                    <label>Remember me</label>
                    <a href='/forgotpassword'>Forgot Password</a>
                </div>
                <Button>Login</Button>
                <a href='/signup'>Register Now</a>
            </form> 

        </div>
    )
}

export default Signin