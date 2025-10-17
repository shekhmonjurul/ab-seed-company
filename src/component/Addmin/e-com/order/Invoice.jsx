import React from 'react';
import Barcode from 'react-barcode';


const Invoice = () => {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center p-6 page">
            <div className="bg-white rounded-lg w-[777px] max-w-4xl p-8 border border-gray-200 ">
                {/* User and Company Info Section */}
                <div className="flex justify-between items-start mb-8">
                    {/* User Info */}
                    <div className="text-left mb-6 md:mb-0">
                        <h1 className="text-3xl font-bold text-black mb-2">INVOICE</h1>
                        <img src="/vite.svg" alt="logo" className="w-24 h-24 object-contain mb-4" /> {/* Added size and object-contain for better fitting */}
                        <p className="font-semibold text-gray-700">BILLING TO:</p>
                        <p className="text-gray-900">Sobuj</p>
                        <p className="text-gray-600">01736473969</p>
                        <p className="text-gray-600">Mohammadpur</p>
                    </div>

                    {/* Company Info */}
                    <div className="text-left">
                        <Barcode value="27511" className="w-25 h-22" />
                        <h4 className="text-2xl font-semibold text-gray-800 mb-1">Sent From</h4>
                        <p className="text-gray-900">AB Seed Company</p>
                        <p className="text-gray-600">09647101501</p>
                        <p className="text-gray-600">Mohammdpur, Dhaka-1207</p>
                        <p className="text-2xl font-bold text-black mt-4">INVOICE # 275111</p>
                        <p className="text-gray-500">Date: 15/10/25</p>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="mb-8">
                    {/* Heading Row */}
                    <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-5 text-gray-700 font-semibold">
                        <span className="w-1/4">PRODUCT</span>
                        <div className='flex justify-between w-[200px]'>
                            <span className="w-1/4 text-center">PRICE</span>
                            <span className="w-1/4 text-center">QTY</span>
                            <span className="w-1/4 text-right">TOTAL</span>
                        </div>
                    </div>

                    {/* Product Row */}
                 {
                    // repitaed work
                    <div>
                           <div className="flex items-center justify-between  my-5 border-b border-gray-200 pb-6">
                        <div className="flex items-center w-[480px] text-justify">

                            <img src="/vite.svg" alt="product" className="w-16 h-16 object-contain mr-4 rounded shadow-sm" /> {/* Added size, rounding, and shadow */}
                            <div>
                                <p className="font-semibold text-gray-900">tal begun - kalo begun imported</p>
                                <p className="text-sm text-gray-600">
                                    আমদানিকৃত কালো তাল বেগুর (আনুমানিক 300 বীজ) দ্রুত ফলন, দীর্ঘ সময় ধরে সংগ্রযোগ্য
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between w-[200px]">
                            <span className="text-gray-800">145</span>
                            <span className="text-gray-800">1</span>
                            <span className="text-gray-800 font-medium">145</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between my-5 border-b border-gray-200 pb-6">
                        <div className="flex items-center w-[480px] text-justify">

                            <img src="/vite.svg" alt="product" className="w-16 h-16 object-contain mr-4 rounded shadow-sm" /> {/* Added size, rounding, and shadow */}
                            <div>
                                <p className="font-semibold text-gray-900">tal begun - kalo begun imported</p>
                                <p className="text-sm text-gray-600">
                                    আমদানিকৃত কালো তাল বেগুর (আনুমানিক 300 বীজ) দ্রুত ফলন, দীর্ঘ সময় ধরে সংগ্রযোগ্য
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between w-[200px]">
                            <span className="text-gray-800">145</span>
                            <span className="text-gray-800">1</span>
                            <span className="text-gray-800 font-medium">145</span>
                        </div>
                    </div>

                     <div className="flex items-center justify-between my-5 border-b border-gray-200 pb-6">
                        <div className="flex items-center w-[480px] text-justify">

                            <img src="/vite.svg" alt="product" className="w-16 h-16 object-contain mr-4 rounded shadow-sm" /> {/* Added size, rounding, and shadow */}
                            <div>
                                <p className="font-semibold text-gray-900">tal begun - kalo begun imported</p>
                                <p className="text-sm text-gray-600">
                                    আমদানিকৃত কালো তাল বেগুর (আনুমানিক 300 বীজ) দ্রুত ফলন, দীর্ঘ সময় ধরে সংগ্রযোগ্য
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between w-[200px]">
                            <span className="text-gray-800">145</span>
                            <span className="text-gray-800">1</span>
                            <span className="text-gray-800 font-medium">145</span>
                        </div>
                    </div>
                    </div>
                 }


                </div>

                {/* Price Calculation Section */}
                <div className="border-gray-200 pt-6">
                    <div className="flex justify-between mb-2 text-gray-700">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">646</span>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-700">
                        <span>Discount</span>
                        <span className="font-medium text-gray-900">646</span>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-700">
                        <span>Shipping</span>
                        <span className="font-medium text-gray-900">646</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mt-4">
                        <span>TOTAL</span>
                        <span >646</span> {/* Highlighted TOTAL for emphasis */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
