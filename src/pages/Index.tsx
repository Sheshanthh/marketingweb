import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-red-600/95 backdrop-blur z-50 border-b">
        <div className="container flex h-16 items-center">
          <div className="mr-8 flex items-center">
            <span className="text-xl font-bold font-poppins text-white">ARoma</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-white hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-white hover:text-primary"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-white hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-white hover:text-primary"
            >
              Contact
            </button>
          </div>
          <div className="flex-1 flex justify-end">

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 relative overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 font-lobster text-red-600 animate-text">
              Transform Your Restaurant with AR Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-roboto">
              Experience the future of dining with ARoma's innovative augmented
              reality menu system. Revolutionize the way your customers view, order,
              and enjoy their food in a completely immersive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-red-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-red-600">
            Why Choose ARoma?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Interactive 3D Menu</h3>
              <p>View dishes in stunning 3D before placing your order, enhancing your dining experience. See your meal come to life before your eyes!</p>
            </div>
            {/* Feature 2 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Order Tracking</h3>
              <p>Track your food in real-time from kitchen to table with live updates, ensuring a smoother experience with minimal waiting.</p>
            </div>
            {/* Feature 3 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Smart Recommendations</h3>
              <p>Get personalized dish recommendations based on your preferences, allergies, and past orders. ARoma knows your tastes!</p>
            </div>
            {/* Feature 4 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">AR Interactivity</h3>
              <p>Interact with your food in a completely immersive AR experience. Discover detailed nutritional information and presentation styles.</p>
            </div>
            {/* Feature 5 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Multi-Language Support</h3>
              <p>ARoma supports multiple languages, catering to customers from different regions. Enjoy a truly inclusive dining experience.</p>
            </div>
            {/* Feature 6 */}
            <div className="card bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Analytics Dashboard</h3>
              <p>Gain insights into your restaurant’s operations with powerful analytics, helping you make data-driven decisions to improve service and menu offerings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download ARoma App Section */}
      <section id="download" className="py-24 bg-red-600/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600 font-poppins">
            Download the ARoma Mobile App
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-roboto">
            Take your dining experience to the next level. ARoma is now available on both Google Play and the Apple Store. Get real-time insights, adaptive learning, and a seamless experience across all devices.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md">
                Google Play
              </Button>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                Apple Store
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-red-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600">About ARoma</h2>
          <p className="text-xl text-muted-foreground mb-8 font-roboto">
            ARoma is a restaurant management solution designed to provide a futuristic dining experience through augmented reality technology. With features like interactive 3D menus, personalized recommendations, and order tracking, we are redefining how restaurants interact with customers. Our goal is to create a platform that enhances customer satisfaction, reduces wait times, and boosts restaurant efficiency.
          </p>
          <p className="text-lg text-muted-foreground mb-8 font-roboto">
            Our team of developers and engineers work tirelessly to create innovative solutions that improve both the customer dining experience and restaurant management processes. Whether you’re a small café or a large fine-dining establishment, ARoma will elevate your service and streamline your operations.
          </p>
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Meet Our Talented Team</h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/cdalahakoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              C.D. Alahakoon
            </a>
            <a
              href="https://www.linkedin.com/in/vythilingam-sheshanth-378606277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              Vythilingam Sheshanth
            </a>
            <a
              href="https://www.linkedin.com/in/mnperera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              M.N. Perera
            </a>
            <a
              href="https://www.linkedin.com/in/shavinkarravichandran/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              Shavinkar Ravichandran
            </a>
            <a
              href="https://www.linkedin.com/in/wiwithana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              W.I. Withana
            </a>
            <a
              href="https://www.linkedin.com/in/mkasnamsanaf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              M.K. Asnam Sanaf
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section id="social" className="py-12 bg-red-600/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600">
            Follow Us
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/ARomaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/ARomaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/aromaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ARomaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-red-600 text-white">
        <div className="container flex justify-between">
          <span className="font-bold font-poppins">ARoma</span>
          <p className="text-sm text-muted-foreground">
            © 2025 ARoma. Developed by Team RASPBerry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
