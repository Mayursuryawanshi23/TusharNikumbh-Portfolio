'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!formData.name || !formData.name.trim()) e.name = 'Name is required.';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'A valid email is required.';
        if (!formData.subject || formData.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters.';
        if (!formData.message || formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('sending');
        try {
            const endpoint = 'https://formspree.io/f/xgolkvrq';
            const body = new FormData();
            body.append('name', formData.name);
            body.append('email', formData.email);
            body.append('subject', formData.subject);
            body.append('message', formData.message);

            const res = await fetch(endpoint, {
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error('Form submit error', err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-transparent" aria-label="Contact Section">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">

                {/* Main Card Container */}
                <div className="glass-card bg-white/80 rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 grid md:grid-cols-2 min-h-[500px] hover:shadow-xl hover:border-slate-300/80 transition-shadow duration-200">

                    {/* LEFT COLUMN: Contact Image */}
                    <figure className="relative bg-gradient-to-br from-slate-50/50 to-slate-100/50 border-r border-slate-200/50 flex items-center justify-center p-8 overflow-hidden h-full order-last md:order-first group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/20 via-transparent to-slate-50/20 pointer-events-none" aria-hidden="true" />
                        <img
                            src="/contactimage/contact.png"
                            alt="Contact form illustration - Get in touch with Tushar Nikumbh"
                            className="w-full h-full object-contain max-w-sm"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption className="sr-only">Contact illustration</figcaption>
                    </figure>

                    {/* RIGHT COLUMN: Contact Form (Premium Glass) */}
                    <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 p-8 md:p-12 flex flex-col justify-center order-first md:order-last">
                        <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-6">Let's connect.</h2>

                        <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
                            {status === 'success' && (
                                <div className="p-3 rounded-md bg-green-50 border border-green-200 text-green-800" role="status" aria-live="polite">
                                    <strong>Message sent.</strong> Thank you — Tushar Nikumbh will get back to you shortly.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-800" role="alert" aria-live="assertive">
                                    <strong>Message not sent.</strong> Something went wrong — please try again later.
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4">
                                <fieldset className="space-y-1.5">
                                    <legend className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</legend>
                                    <Input
                                        name="name"
                                        placeholder="Name"
                                        required
                                        aria-required="true"
                                        aria-invalid={errors.name ? "true" : "false"}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-md h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-shadow duration-200 shadow-sm"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="text-xs text-red-600 mt-1" id="name-error">{errors.name}</p>}
                                </fieldset>
                                <fieldset className="space-y-1.5">
                                    <legend className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</legend>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        aria-required="true"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-md h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-shadow duration-200 shadow-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-xs text-red-600 mt-1" id="email-error">{errors.email}</p>}
                                </fieldset>
                            </div>

                            <fieldset className="space-y-1.5">
                                <legend className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</legend>
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    aria-required="true"
                                    aria-invalid={errors.subject ? "true" : "false"}
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                    className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-md h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-shadow duration-200 shadow-sm"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                {errors.subject && <p className="text-xs text-red-600 mt-1" id="subject-error">{errors.subject}</p>}
                            </fieldset>

                            <fieldset className="space-y-1.5">
                                <legend className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</legend>
                                <Textarea
                                    name="message"
                                    placeholder="Message"
                                    className="min-h-[100px] bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-md rounded-lg text-slate-900 placeholder:text-slate-400 resize-none transition-shadow duration-200 shadow-sm p-3"
                                    required
                                    aria-required="true"
                                    aria-invalid={errors.message ? "true" : "false"}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <p className="text-xs text-red-600 mt-1" id="message-error">{errors.message}</p>}
                            </fieldset>

                            <div className="pt-4 flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white hover:bg-slate-800 py-2 h-10 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                                    disabled={status === 'sending'}
                                    aria-busy={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                                </Button>

                                <div className="flex items-center justify-between gap-2 my-1" aria-hidden="true">
                                    <div className="h-px bg-slate-300 flex-1"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OR direct contact</span>
                                    <div className="h-px bg-slate-300 flex-1"></div>
                                </div>

                                <Button
                                    type="button"
                                    className="w-full bg-[#25D366] text-white hover:bg-[#20ba60] py-2 h-10 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center gap-2"
                                    onClick={() => window.open('https://wa.me/917030485048', '_blank')}
                                    aria-label="Contact via WhatsApp"
                                >
                                    <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Footer Info Area */}
                <div className="flex justify-center gap-12 mt-12 text-center" role="list">
                    <address
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.location.href = 'mailto:tusharnikumbh1991@gmail.com'}
                        role="listitem"
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200" aria-hidden="true">
                            <Mail className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">Email</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">tusharnikumbh1991@gmail.com</p>
                    </address>
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.open('https://linkedin.com/in/tusharnikumbh', '_blank')}
                        role="listitem"
                        aria-label="LinkedIn profile"
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200" aria-hidden="true">
                            <span className="font-bold text-xs">in</span>
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">LinkedIn</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">/in/tusharnikumbh</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
