import { useState } from "react";
import { Phone, Mail, MapPin, Star, Calendar, Users, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

import heroCarImage from "@/assets/hero-car.jpg";
import luxuryCar1 from "@/assets/luxury-car-1.jpg";
import luxuryCar2 from "@/assets/luxury-car-2.jpg";
import luxuryCar3 from "@/assets/luxury-car-3.jpg";

const Index = () => {
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    vehicle: "",
    occasion: "",
    message: ""
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi deJavu Rent a Car! I'd like to make a booking:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Pickup Date: ${bookingForm.pickup}
Dropoff Date: ${bookingForm.dropoff}
Vehicle: ${bookingForm.vehicle}
Occasion: ${bookingForm.occasion}
Message: ${bookingForm.message}`;

    const whatsappUrl = `https://wa.me/62811549180?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking Request Sent",
      description: "Your booking request has been sent via WhatsApp. We'll contact you shortly!",
    });
  };

  const featuredVehicles = [
    {
      name: "Mercedes-Benz S-Class",
      category: "Luxury Sedan",
      image: luxuryCar1,
      features: ["Leather Interior", "Climate Control", "Premium Sound", "Chauffeur Available"],
      price: "From IDR 2,500,000/day"
    },
    {
      name: "Bentley Continental GT",
      category: "Luxury Sports",
      image: luxuryCar2,
      features: ["Sports Performance", "Premium Interior", "Latest Technology", "VIP Service"],
      price: "From IDR 4,500,000/day"
    },
    {
      name: "BMW 7 Series",
      category: "Executive Sedan",
      image: luxuryCar3,
      features: ["Executive Comfort", "Advanced Safety", "Professional Service", "Corporate Ready"],
      price: "From IDR 2,200,000/day"
    }
  ];

  const services = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Wedding Services",
      description: "Make your special day unforgettable with our luxury wedding car rentals."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Corporate Events",
      description: "Professional transportation solutions for business meetings and corporate events."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "VIP Occasions",
      description: "Premium service for special events, airport transfers, and VIP occasions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Bride",
      text: "deJavu made our wedding day perfect! The Mercedes was immaculate and the service was exceptional.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "CEO",
      text: "Professional service for our corporate events. Always on time and the vehicles are pristine.",
      rating: 5
    },
    {
      name: "Diana Putri",
      role: "Event Organizer",
      text: "Best luxury car rental in Surabaya. Reliable, professional, and excellent customer service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-surface-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            deJavu Rent a Car
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#vehicles" className="hover:text-gold transition-colors">Vehicles</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button variant="outline" className="bg-gradient-gold text-background border-gold hover:shadow-glow">
            <Phone className="h-4 w-4 mr-2" />
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCarImage} 
            alt="Luxury Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-6 animate-luxury-fade-in">
            <Badge className="bg-gradient-gold text-background mb-4">Premium Luxury Rental</Badge>
            <h1 className="font-heading text-6xl md:text-7xl font-bold leading-tight">
              Experience
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Luxury
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Elevate your special moments with our premium fleet of luxury vehicles. 
              Professional service, immaculate cars, unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" className="bg-gradient-gold text-background hover:shadow-glow animate-gold-glow">
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Vehicle
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-background">
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-luxury-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-gold bg-clip-text text-transparent">Premium Fleet</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collection of luxury vehicles, each maintained to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-500 animate-luxury-scale bg-card border-surface-border overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-gold text-background">{vehicle.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-2">{vehicle.name}</h3>
                  <div className="space-y-3 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-gold mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gold">{vehicle.price}</span>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Premium <span className="bg-gradient-gold bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From weddings to corporate events, we provide exceptional luxury transportation for every special occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-500 bg-card border-surface-border text-center p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-gold rounded-full text-background group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                About <span className="bg-gradient-gold bg-clip-text text-transparent">deJavu</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                deJavu Rent a Car is Surabaya's premier luxury vehicle rental service, dedicated to providing 
                exceptional transportation experiences for life's most important moments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our meticulously maintained fleet of luxury vehicles and professional chauffeur services, 
                we ensure every journey is comfortable, stylish, and memorable. From intimate weddings to 
                high-profile corporate events, we bring sophistication to every occasion.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gradient-surface rounded-lg">
                  <div className="text-3xl font-bold text-gold">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gradient-surface rounded-lg">
                  <div className="text-3xl font-bold text-gold">50+</div>
                  <div className="text-sm text-muted-foreground">Luxury Vehicles</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroCarImage} 
                alt="About deJavu" 
                className="w-full rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Client <span className="bg-gradient-gold bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear what our valued clients say about their luxury experiences with deJavu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-surface-border hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Book Your <span className="bg-gradient-gold bg-clip-text text-transparent">Luxury Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to elevate your journey? Fill out the form below and we'll contact you shortly.
              </p>
            </div>

            <Card className="p-8 bg-card border-surface-border shadow-luxury">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Preference</label>
                    <Input 
                      placeholder="e.g., Mercedes S-Class, BMW 7 Series"
                      value={bookingForm.vehicle}
                      onChange={(e) => setBookingForm({...bookingForm, vehicle: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Date</label>
                    <Input 
                      type="date" 
                      required
                      value={bookingForm.pickup}
                      onChange={(e) => setBookingForm({...bookingForm, pickup: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Drop-off Date</label>
                    <Input 
                      type="date" 
                      required
                      value={bookingForm.dropoff}
                      onChange={(e) => setBookingForm({...bookingForm, dropoff: e.target.value})}
                      className="bg-surface border-surface-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Occasion Type</label>
                  <Input 
                    placeholder="e.g., Wedding, Corporate Event, Airport Transfer"
                    value={bookingForm.occasion}
                    onChange={(e) => setBookingForm({...bookingForm, occasion: e.target.value})}
                    className="bg-surface border-surface-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                  <Textarea 
                    placeholder="Special requests, chauffeur requirements, etc."
                    rows={4}
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                    className="bg-surface border-surface-border"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-gold text-background hover:shadow-glow animate-gold-glow"
                >
                  Send Booking Request via WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="bg-gradient-gold bg-clip-text text-transparent">deJavu</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch for bookings, inquiries, or to learn more about our luxury services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card border-surface-border hover:shadow-luxury transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-gold rounded-full text-background">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground">
                Jalan Ikan Tongkol No. 6<br />
                Surabaya, East Java<br />
                Indonesia
              </p>
            </Card>

            <Card className="p-8 text-center bg-card border-surface-border hover:shadow-luxury transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-gold rounded-full text-background">
                  <Phone className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Call or WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                +62 811 549 180
              </p>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-background"
                onClick={() => window.open('https://wa.me/62811549180', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </Card>

            <Card className="p-8 text-center bg-card border-surface-border hover:shadow-luxury transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-gold rounded-full text-background">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Available 24/7 for inquiries<br />
                and booking requests
              </p>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-background"
              >
                Send Email
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-12 border-t border-surface-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-heading text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              deJavu Rent a Car
            </div>
            <p className="text-muted-foreground mb-6">
              Premium luxury vehicle rentals in Surabaya. Your journey to elegance starts here.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://wa.me/62811549180', '_blank')}
                className="text-gold hover:text-gold-light"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="ghost" size="sm" className="text-gold hover:text-gold-light">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 deJavu Rent a Car. All rights reserved. | Jalan Ikan Tongkol No. 6, Surabaya
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;