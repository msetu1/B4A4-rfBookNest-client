const Footer = () => {
    return (
      <div className="bg-black text-white mt-16 pt-16">
        {/* Footer Content */}
        <div className="mb-8">
        <h1 className="text-2xl text-center font-bold">
          Subscribe to Our Newsletter
        </h1>
        <div className="relative flex w-[343px] lg:w-[400px] h-[48px] lg:h-[88px] mx-auto justify-center items-center ">
        <input
          className=" rounded-[100px] text-white w-full h-10 lg:h-14 px-5 mt-5 border bg-black border-gray-500"
          type="text"
          placeholder="Enter your email"
        />
        <button className="absolute right-0 lg:right-2 mt-5 text-sm lg:text-xl text-white font-normal rounded-[100px] border-3 border-[#C16EFD]  bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] py-2  px-6 lg:px-6 flex items-center ">
          Subscribe
        </button>
      </div>
        </div>
        <footer className="flex justify-between  pb-16 max-w-[90%] mx-auto ">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#6a00f4] font-lobster">
              rfBook<span className="text-purple-500">Nest</span>
            </h2>
            <p className="max-w-[400px] mt-4 text-gray-400">
            rfBookNest is an advanced online bookshop designed for book lovers, offering a seamless browsing and purchasing experience. It provides a diverse collection, secure payments, and a user-friendly interface. The name symbolizes a cozy space where readers can explore and discover books effortlessly, making every purchase enjoyable and convenient.
            </p>
          </div>
  
          {/* Services */}
          <div>
            <h6 className="font-bold text-lg uppercase mb-4 text-gray-300">Company</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Design</a></li>
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Advertisement</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h6 className="font-bold text-lg uppercase mb-4 text-gray-300">Services</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Design</a></li>
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Advertisement</a></li>
            </ul>
          </div>
  
          {/* Help Center */}
          <div>
            <h6 className="font-bold text-lg uppercase mb-4 text-gray-300">Help Center</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Press Kit</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h6 className="font-bold text-lg uppercase mb-4 text-gray-300">Contact Info</h6>
            <ul className="space-y-2 text-gray-400">
              <li>📞 Phone: 017-----</li>
              <li>✉️ Email: msetu5763@gmail.com</li>
              <li>📍 Location: 100 Smart Street, LA, USA</li>
            </ul>
          </div>
        </footer>
  
        {/* Divider */}
        <hr className="border-gray-600 mx-10" />
  
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-10 py-6 text-gray-400">
          <p className="text-sm">© Copyright 2024. All Rights Reserved.</p>
          <p>Created with ❤️ by thecreation.design</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  