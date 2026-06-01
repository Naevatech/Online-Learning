import React, { use } from 'react'


function UserHeader() {
    return (
        <div>
            <div className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">

                            <a href="/" className="flex items-center space-x-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                                    <span className="text-xl font-bold text-white">E</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">EduLearn</span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#categories" className="text-sm text-dark link-offset-2 link-underline link-underline-opacity-0">
                                Home
                            </a>
                            <a href="#courses" className="text-sm text-dark link-offset-2 link-underline link-underline-opacity-0">
                                My Courses
                            </a>
                            <a href="#about" className="text-sm text-dark link-offset-2 link-underline link-underline-opacity-0">
                                My Profile
                            </a>
                            <a href="#testimonials" className="text-sm text-dark link-offset-2 link-underline link-underline-opacity-0">
                                Certificate
                            </a>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#testimonials" className="text-sm text-dark link-offset-2 link-underline link-underline-opacity-0">
                                Logout
                            </a>

                            <button size="sm">
                                Get Started
                            </button>
                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}
export default UserHeader

