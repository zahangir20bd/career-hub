import React from "react";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-6xl mx-auto text-white grid grid-cols-2 gap-5 md:flex justify-between px-2 py-12">
        <div>
          <h2 className="text-xl font-bold mb-3">CareerCrafters</h2>
          <p className="max-w-sm mb-3">
            CareerCrafters is a job hunting site with job categories,
            personalized profiles, and interview resources to aid career
            advancement.
          </p>
          <img src="Group 9969.png" alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Company</h2>
          <ul>
            <li className="mb-2">About US</li>
            <li className="mb-2">Work</li>
            <li className="mb-2">Latest News</li>
            <li className="mb-2">Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Product</h2>
          <ul>
            <li className="mb-2">Prototype</li>
            <li className="mb-2">Plans & Pricing</li>
            <li className="mb-2">Customers</li>
            <li className="mb-2">Integrations</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Support</h2>
          <ul>
            <li className="mb-2">Help Desk</li>
            <li className="mb-2">Sales</li>
            <li className="mb-2">Become a Partner</li>
            <li className="mb-2">Developers</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <ul>
            <li className="mb-2">523 Broadway, NYC</li>
            <li className="mb-2">+1777-978-5570</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
