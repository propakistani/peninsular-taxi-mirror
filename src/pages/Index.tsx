
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Car, Phone, Star, Users, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/booking');
    // Scroll to booking form after navigation
    setTimeout(() => {
      const bookingForm = document.querySelector('#booking-form');
      if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <head>
        <title>Capel Sound Taxi - Reliable Taxi Service on Mornington Peninsula | 24/7 Available</title>
        <meta name="description" content="Professional taxi service on Mornington Peninsula. Airport transfers, corporate travel, hotel transfers. Available 24/7. Call +61 408 202 034 or book online." />
        <meta name="keywords" content="taxi Mornington Peninsula, Capel Sound taxi, airport transfers, corporate travel, hotel transfers, taxi service Victoria, 24/7 taxi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Capel Sound Taxi - Reliable Taxi Service on Mornington Peninsula" />
        <meta property="og:description" content="Professional, punctual, and affordable taxi service available 24/7 on the Mornington Peninsula." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://capelsoundtaxi.com" />
      </head>

      {/* Hero Section with improved mobile text alignment */}
      <section 
        className="relative h-[65vh] min-h-[500px] max-h-[700px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Reliable Taxi Service on the{" "}
              <span className="text-yellow-400 block sm:inline">Mornington Peninsula</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Professional, punctual, and affordable taxi service available 24/7. Book your ride today 
              and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 items-center px-4">
              <Button 
                onClick={handleBookNowClick}
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg w-full sm:w-auto"
              >
                Book Now
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg w-full sm:w-auto">
                <a href="tel:+61408202034">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  +61 408 202 034
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Capelsound Taxi Section - Improved responsiveness */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">Why Choose Capelsound Taxi?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service with these key benefits
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Clock className="h-8 w-8 lg:h-10 lg:w-10 text-black" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">24/7 Service</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Available round the clock, every day of the year. No matter when you need us, we're here.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-black" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">Licensed & Insured</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  All our drivers are fully licensed and our vehicles are comprehensively insured for your safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Car className="h-8 w-8 lg:h-10 lg:w-10 text-black" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">Modern Fleet</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Clean, comfortable, and well-maintained vehicles to ensure a pleasant journey every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Fleet Section - Fixed mobile image display */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
              Our <span className="text-yellow-400">Fleet</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Modern vehicles to suit every transportation need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative bg-gray-50 overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center p-2 sm:p-4">
                  <img 
                    src="/lovable-uploads/ada7f635-6c64-4449-a05e-5e9e4c9a9ef4.png" 
                    alt="Sedan - Comfortable car for 1-4 passengers"
                    className="max-w-full max-h-full object-contain w-auto h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg lg:text-xl font-bold">SEDAN</CardTitle>
                <CardDescription className="text-gray-600">1-4 Passengers</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-2 pb-6">
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Comfortable and economical choice for standard trips</p>
                <Button 
                  onClick={handleBookNowClick}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative bg-gray-50 overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center p-2 sm:p-4">
                  <img 
                    src="/lovable-uploads/25d6e567-58a2-4884-94e4-e967d0d3d02a.png" 
                    alt="SUV - Spacious vehicle for 1-6 passengers with extra luggage"
                    className="max-w-full max-h-full object-contain w-auto h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg lg:text-xl font-bold">SUV</CardTitle>
                <CardDescription className="text-gray-600">1-6 Passengers</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-2 pb-6">
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Spacious and comfortable for families with extra luggage</p>
                <Button 
                  onClick={handleBookNowClick}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative bg-gray-50 overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center p-2 sm:p-4">
                  <img 
                    src="/lovable-uploads/db90f5df-7275-40c4-83b4-5ba0247c56ec.png" 
                    alt="Maxi Taxi - Large vehicle for 1-11 passengers"
                    className="max-w-full max-h-full object-contain w-auto h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg lg:text-xl font-bold">MAXI-TAXI</CardTitle>
                <CardDescription className="text-gray-600">1-11 Passengers</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-2 pb-6">
                <p className="text-gray-600 mb-4 text-sm lg:text-base">Perfect for larger groups and airport transfers</p>
                <Button 
                  onClick={handleBookNowClick}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4">
              <Link to="/fleet" onClick={() => window.scrollTo(0, 0)}>View Full Fleet Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section - Better image alignment */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">Our <span className="text-yellow-400">Services</span></h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive taxi services for all your transportation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Airport Transfers */}
            <Card className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/lovable-uploads/846b74e9-ba7a-444b-84eb-c1e6dc7bbadb.png" 
                  alt="Airport transfer service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  Airport Transfers
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Reliable and comfortable transfers to and from Melbourne airports. Our professional drivers ensure you arrive on time for your flights.
                </p>
                <ul className="space-y-2 mb-4 lg:mb-6">
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Flight monitoring
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Meet & greet service
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Luggage assistance
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Fixed pricing
                  </li>
                </ul>
                <Button 
                  onClick={handleBookNowClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Travel */}
            <Card className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/lovable-uploads/9325ff52-d502-4894-811a-7b1eca0eb72f.png" 
                  alt="Corporate travel service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Users className="h-5 w-5 text-yellow-400 mr-2" />
                  Corporate Travel
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional transportation solutions for business clients, with executive accounts available with monthly billing options.
                </p>
                <ul className="space-y-2 mb-4 lg:mb-6">
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Executive accounts
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Monthly billing
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Business with style
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Priority booking
                  </li>
                </ul>
                <Button 
                  onClick={handleBookNowClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Hotel Transfers */}
            <Card className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/lovable-uploads/5c434fcc-5b4a-4dfd-99eb-be1072d4c71e.png" 
                  alt="Hotel transfer service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-2" />
                  Hotel Transfers
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Seamless transfers between hotels, airports, and other destinations. Let your accommodation change plans flow smoothly.
                </p>
                <ul className="space-y-2 mb-4 lg:mb-6">
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Door to door service
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Luggage handling
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Hotel coordination
                  </li>
                  <li className="flex items-center text-xs lg:text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Local bookings
                  </li>
                </ul>
                <Button 
                  onClick={handleBookNowClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section - Images only */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">Payment Methods</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-20 lg:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e53452ae-5660-4c00-aa4a-ef8355711874.png" 
                  alt="Cab Charge"
                  className="h-12 lg:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Card>

            <Card className="text-center p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-20 lg:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ff41b36f-b25f-4bbc-ba58-002437e858dd.png" 
                  alt="EFTPOS"
                  className="h-12 lg:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Card>

            <Card className="text-center p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-20 lg:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b2d348c8-6274-4e50-b17b-d6b33e1d7265.png" 
                  alt="Visa Mastercard"
                  className="h-12 lg:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Card>

            <Card className="text-center p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="h-20 lg:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/44b8aba6-5bbb-44c3-8404-5a0aced4318d.png" 
                  alt="Motor Pass"
                  className="h-12 lg:h-16 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section - Updated TAC to TAC Provider */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">Trusted Partners</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading organizations to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white">
              <CardHeader className="pb-3 lg:pb-4">
                <div className="h-20 lg:h-24 flex items-center justify-center mb-4 lg:mb-6">
                  <img 
                    src="/lovable-uploads/35917797-eeda-4d67-909b-d62d517ea074.png" 
                    alt="TAC Provider"
                    className="h-12 lg:h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardTitle className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">TAC Provider</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Authorized provider with Transport Accident Commission for medical transport services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white">
              <CardHeader className="pb-3 lg:pb-4">
                <div className="h-20 lg:h-24 flex items-center justify-center mb-4 lg:mb-6">
                  <img 
                    src="/lovable-uploads/6986d0af-dc1d-437a-a921-78b8beaa0c5a.png" 
                    alt="WorkSafe Provider"
                    className="h-12 lg:h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardTitle className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">WorkSafe Provider</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Approved provider for WorkSafe Victoria transportation services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white">
              <CardHeader className="pb-3 lg:pb-4">
                <div className="h-20 lg:h-24 flex items-center justify-center mb-4 lg:mb-6">
                  <img 
                    src="/lovable-uploads/64dbbb09-9d78-4b7b-9f01-f3b93e6c420a.png" 
                    alt="Safe Transport Victoria"
                    className="h-12 lg:h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardTitle className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Safe Transport Victoria</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Committed to safe and reliable transport services across Victoria
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Ready to Book Your Ride?</h2>
          <p className="text-lg md:text-xl mb-6 lg:mb-8 text-gray-300 max-w-3xl mx-auto">
            Call us now or book online for quick, reliable, and professional taxi service across the Mornington Peninsula.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Button 
              onClick={handleBookNowClick}
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
            >
              Book Online Now
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              <a href="tel:+61408202034">
                <Phone className="h-5 w-5 mr-2" />
                Call +61 408 202 034
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
