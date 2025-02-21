import SocialLogos from "./SocialLogos";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          
          
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-sm text-gray-300 mt-2">
              We offer a wide range of stylish and comfortable clothing at affordable prices. Shop with confidence!
            </p>
          </div>
  
         
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/cart" className="text-gray-300 hover:text-white">Cart</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
  
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
            
              <SocialLogos/>
            </div>
          </div>
  
        </div>
        
  
        
        <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  