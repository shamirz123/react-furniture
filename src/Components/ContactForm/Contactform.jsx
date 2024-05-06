import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoMdPerson, IoMdCall } from "react-icons/io";
import { MdOutlineMail, MdNavigateNext } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { useForm, ValidationError } from '@formspree/react';

function Contactform() {

    const [state, handleSubmit] = useForm("xbjnwwpn");
    if (state.succeeded) {
        return <p className='form-alert-pra'>Your message is on its way to me! Expect a reply soon.</p>;
    }

    return (
        <>
            <div className="contact-form" id="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className='mt-3'>
                                            <div className='input-with-icon' >
                                                <input
                                                    id='name'
                                                    type='name'
                                                    name='name'
                                                    placeholder="Name"
                                                />
                                                <ValidationError
                                                    prefix="Name"
                                                    field="name"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <IoMdPerson />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className='mt-3'>
                                            <div className='input-with-icon'>

                                                <input
                                                    id='email'
                                                    type='email'
                                                    name='email'
                                                    placeholder="support@gmail.com"
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="email"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <MdOutlineMail />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className='mt-4'>
                                            <div className='input-with-icon'>
                                                <input
                                                    type="text"
                                                    id='number'
                                                    name='number'
                                                    placeholder="+92"
                                                />
                                                <ValidationError
                                                    prefix="Number"
                                                    field="number"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <IoMdCall />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className='mt-4'>
                                            <div className='input-with-icon'>
                                                <input
                                                    type="text"
                                                    name='subject'
                                                    id='subject'
                                                    placeholder="Subject"
                                                />

                                                <ValidationError
                                                    prefix="Subject"
                                                    field="subject"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <RxText />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div>
                                            <textarea
                                                placeholder="write message"
                                                id="message"
                                                name="message"

                                            ></textarea>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="button-with-icon"
                                    type="submit" disabled={state.submitting}
                                >
                                    Send Me Message
                                </button>
                            </form>


                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div class="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1414223033336!2d73.1443823!3d33.5988047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9232e160f69d%3A0x2c6d2f1f3f162693!2s33%C2%B035'55.7%22N%2073%C2%B008'49.1%22E!5e0!3m2!1sen!2suk!4v1649297445725!5m2!1sen!2suk"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactform