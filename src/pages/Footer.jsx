import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-secondary mt-auto">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    
                    {/* Company Info */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="d-flex align-items-center mb-3 gap-2">
                            <div 
                                className="d-flex align-items-center justify-content-center rounded" 
                                style={{ 
                                    width: "40px", 
                                    height: "40px", 
                                    background: "linear-gradient(to bottom right, #2563eb, #9333ea)" 
                                }}
                            >
                                <span className="text-white fw-bold fs-5">E</span>
                            </div>
                            <span className="text-white fw-bold fs-4">EduLearn</span>
                        </div>
                        <p className="small">
                            Empowering learners worldwide with quality education and expert-led courses.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="text-secondary hover-white"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-secondary hover-white"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="text-secondary hover-white"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-secondary hover-white"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-6 col-lg-2 offset-lg-1">
                        <h6 className="text-white fw-semibold mb-4">Quick Links</h6>
                        <ul className="list-unstyled small d-grid gap-2">
                            <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Become an Instructor</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Our Courses</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-6 col-md-6 col-lg-2">
                        <h6 className="text-white fw-semibold mb-4">Categories</h6>
                        <ul className="list-unstyled small d-grid gap-2">
                            <li><a href="#" className="text-secondary text-decoration-none">Web Development</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Business</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Design</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Marketing</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h6 className="text-white fw-semibold mb-4">Newsletter</h6>
                        <p className="small mb-4">Subscribe to get updates on new courses and offers.</p>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control bg-transparent border-secondary text-white small shadow-none"
                                placeholder="Your email"
                                aria-label="Your email"
                            />
                            <button 
                                className="btn border-0 text-white" 
                                style={{ background: "linear-gradient(to right, #2563eb, #9333ea)" }}
                                type="button"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-top border-secondary pt-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="small mb-0">© 2026 EduLearn. All rights reserved.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="list-inline small mb-0 text-center text-md-end">
                                <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none me-3">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none me-3">Terms</a></li>
                                <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;