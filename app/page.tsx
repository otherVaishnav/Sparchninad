"use client"
import Image from "next/image"
import Link from "next/link"
import { Music, Heart, Calendar, Users, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Header */}
      <header className="border-b border-[#e0d6c8] bg-[var(--brandOne)] text-white fixed z-10 w-full top-0 ">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <div className="h-20 w-10">
              <Image
                src="/Logo18.png"
                alt="Education initiative"
                width={60}
                height={20}
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="h-10 w-40">
              <Image
                src="/Logo24.png"
                alt="Education initiative"
                width={60}
                height={20}
                className="rounded-lg w-full h-full"
              />
            </div>
            <sup className="italic text-[4px]">TM</sup>
            {/* <span className="font-serif text-xl font-medium">SparshNinaad</span> */}
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-lg font-medium hover:bg-[var(--brandTwo)] hover:text-black p-2 rounded-lg transition-colors">
              About
            </Link>
            <Link href="#upcoming" className="text-lg font-medium hover:bg-[var(--brandTwo)] hover:text-black p-2 rounded-lg transition-colors">
              Upcoming Events
            </Link>
            <Link href="#vision" className="text-lg font-medium hover:bg-[var(--brandTwo)] hover:text-black p-2 rounded-lg transition-colors">
              Our Vision
            </Link>
            <Link href="#gallery" className="text-lg font-medium hover:bg-[var(--brandTwo)] hover:text-black p-2 rounded-lg transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:bg-[var(--brandTwo)] hover:text-black p-2 rounded-lg transition-colors">
              Contact
            </Link>
          </nav>
          <a href="https://in.bookmyshow.com/events/sparshninaad-jugalbandi-concert/ET00447223" target="_blank" rel="noopener noreferrer">
            <Button variant={'outline'} className=" hover:bg-[#8b0000] hover:border-white border-solid hover:text-white bg-[var(--brandTwo)] text-lg text-black">
              Jugalbandi 2025
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 md:py-32 relative bg-[var(--brandTwo)]">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* <Image
            src="/placeholder.svg?height=800&width=1600&text=Indian+Classical+Instruments"
            alt="Indian classical musical instruments background"
            fill
            className="object-cover"
          /> */}
        </div>
        {/* add z-10 if need to add a background image */}
        <div className="container mx-auto px-4 relative pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              Soul of Music. <br />
              Echoes of Culture. <br />
              Community Service.
            </h1>
            <p className="text-lg md:text-xl text-[#4a4a4a] mb-8 leading-relaxed">
              At SparshNinaad, we harness the transformative power of Indian music and dance to inspire, uplift, and connect.
              As a charitable trust, we curate soulful performances, conduct workshops and master classes featuring legendary maestros and emerging talents.
              Through music - folk, classical and contemporary -
              we celebrate our rich heritage, nurture talent and uphold social causes to bring about positive changes in the community.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white">Upcoming Concerts</Button>
              <Button className=" hover:bg-[#8b0000] hover:text-white bg-[var(--brandTwo)]">
                Our Mission
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="py-16 bg-[var(--brandOne)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-5xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-[#fff] mx-auto mb-6"></div>
            <p className="text-[#f3f3f3] leading-relaxed">
              Join us for our upcoming concerts and experience the magic of classical music.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div></div>
            <div className="bg-[var(--brandTwo)] p-6 rounded-lg shadow-sm border border-[#e0d6c8]">
              <div className="mb-4">
                <span className="inline-block bg-[var(--brandOne)] text-white text-sm px-3 py-1 rounded">Upcoming</span>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2 text-black">Jugalbandi</h3>
              <Image
                src="/banner.jpg"
                alt="Education initiative"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-[#4a4a4a] mb-4">
                Jugalbandi 2025 brings together Pt. Pratyush Banerjee, Jayati Chakraborty, Sweekruth B.P., and Kirti Ramgopal for an enchanting evening of Indian classical music and dance.
              </p>
              <div className="flex items-center text-sm text-[#4a4a4a] mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>SUNDAY JULY 20, 2025 6PM ONWARDS</span>
              </div>
              <div className="flex items-center text-sm text-[#4a4a4a] mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>AMBEDKAR BHAVAN,
                  VASANTH NAGAR
                  BANGALORE
                </span>
              </div>
              <a href="https://bookmyshow.com/events/sparshninaad-jugalbandi-concert/ET00447223" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[var(--brandOne)] hover:bg-[#6b0000] text-white">Book Tickets</Button>
              </a>
            </div>
            <div></div>
          </div>
          {/* Can convert this to book now button */}
          {/* <div className="text-center mt-8">
            <Button variant="outline" className="border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white">
              View All Events
            </Button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="mission" className="py-16 bg-[var(--brandTwo)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-5xl font-bold text-[#1a1a1a] mb-4">
              Celebrating the Rich Heritage of Classical Music
            </h2>
            <div className="w-20 h-1 bg-[var(--brandOne)] mx-auto mb-6"></div>
            <p className="text-[#4a4a4a] leading-relaxed text-lg">
              We celebrate the rich heritage of classical music through events that range from intimate recitals to
              grand symphonic productions, creating lasting cultural impact.
            </p>
          </div>
          {/* <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Classical music performance"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#f8f5f0] p-3 rounded-full">
                  <Music className="h-6 w-6 text-[#8b0000]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Authentic Experiences</h3>
                  <p className="text-[#4a4a4a]">
                    We bring you the most authentic classical music experiences, preserving traditions while embracing
                    innovation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#f8f5f0] p-3 rounded-full">
                  <Heart className="h-6 w-6 text-[#8b0000]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Passion & Purpose</h3>
                  <p className="text-[#4a4a4a]">
                    Every note played and every rhythm created serves a greater purpose of social upliftment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#f8f5f0] p-3 rounded-full">
                  <Users className="h-6 w-6 text-[#8b0000]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">Community Building</h3>
                  <p className="text-[#4a4a4a]">
                    We bring together artists, audiences, and beneficiaries to create a harmonious community.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Vision Section */}
      < section id="vision" className="py-16 bg-[var(--brandOne)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-5xl font-bold text-[#fff] mb-4">Our Vision</h2>
              <div className="w-20 h-1 bg-[#fff] mb-6"></div>
              <p className="text-[#fff] leading-relaxed mb-6 text-lg">
                At SparshNinaad, we harness the transformative power of Indian music and dance to inspire, uplift, and connect.
                As a charitable trust, we curate soulful performances, conduct workshops and master classes featuring legendary maestros and emerging talents.
                Through music - folk, classical and contemporary -
                we celebrate our rich heritage, nurture talent and uphold social causes to bring about positive changes in the community.
              </p>
              <Button variant={'outline'} className="bg-[var(--brandTwo)] hover:border-white hover:bg-[#6b0000] hover:text-white text-black">Learn More About Our Mission</Button>
            </div>
            <div>
              <Image
                src="/g4.jpg"
                alt="Classical music vision"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      {/*
      <section id="offerings" className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-[#8b0000] mx-auto mb-6"></div>
            <p className="text-[#4a4a4a] leading-relaxed">
              From intimate recitals to grand productions, we create memorable musical experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8]">
              <div className="w-12 h-12 bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-[#8b0000]" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Curated Concerts</h3>
              <p className="text-[#4a4a4a]">
                Featuring solo, duet, and ensemble performances blending vocal, instrumental, and dance forms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8]">
              <div className="w-12 h-12 bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#8b0000]" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Diverse Venues</h3>
              <p className="text-[#4a4a4a]">
                From majestic concert halls to serene open-air settings, each venue carefully selected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8]">
              <div className="w-12 h-12 bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#8b0000]" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Artist Line-up</h3>
              <p className="text-[#4a4a4a]">
                A harmonious mix of legendary maestros, promising newcomers, and hidden talents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8]">
              <div className="w-12 h-12 bg-[#f8f5f0] rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#8b0000]" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Flawless Execution</h3>
              <p className="text-[#4a4a4a]">
                We handle every aspect—from venue selection and stage setup to artist coordination and audience
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

*/}


      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-[var(--brandTwo)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-5xl font-bold text-[#1a1a1a] mb-4">Gallery</h2>
            <div className="w-20 h-1 bg-[#8b0000] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] p-6 rounded-lg shadow-sm border border-[#e0d6c8] hover:shadow-xl">
              <Image
                src="/g2.jpg"
                alt="Education initiative"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium mb-2 text-black">Pt Pratyush Banerjee</h3>
              <p className="text-[#4a4a4a]">
                @ Soul of Music
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8] hover:shadow-xl">
              <Image
                src="/g1.jpg"
                alt="Healthcare support"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium mb-2 text-black">Pt Tanmoy Bose</h3>
              <p className="text-[#4a4a4a]">
                @ Soul of Music
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0d6c8] hover:shadow-xl">
              <Image
                src="/g3.jpg"
                alt="Music education"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium mb-2 text-black">Junior artist Shreejita with senior musicians</h3>
              <p className="text-[#4a4a4a]">
                @ Soul of Music
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[var(--brandOne)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#fff] mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-[#fff] mx-auto mb-6"></div>
            <p className="text-[#fff] leading-relaxed">
              Have questions or want to support our cause? Reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-[var(--brandTwo)] p-8 rounded-lg shadow-sm border border-[#e0d6c8]">
              <h3 className="font-serif text-xl font-medium mb-4 text-black">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-[#000] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b0000] bg-inherit text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-[#000] bg-inherit rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b0000] text-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-[#000] bg-inherit rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b0000] text-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-[#000] bg-inherit rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b0000] text-black"
                  ></textarea>
                </div>
                <Button className="w-full bg-[var(--brandOne)] hover:bg-[#6b0000] text-white">Send Message</Button>
              </form>
            </div>

            <div className="bg-[var(--brandTwo)] p-8 rounded-lg shadow-sm border border-[#e0d6c8] mb-8">
              <h3 className="font-serif text-xl font-medium mb-4 text-black">Contact Information</h3>
              <div className="space-y-4">
                {/* <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-[#8b0000] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-black">Address</h4>
                    <p className="text-[#4a4a4a]">123 Music Avenue, Cultural District, City, Country</p>
                  </div>
                </div> */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-[#8b0000] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-black">Email</h4>
                    <p className="text-[#4a4a4a]">info@sparshninaad.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e0d6c8]">
                <h3 className="font-serif text-xl font-medium mb-4">Support Our Cause</h3>
                <p className="text-[#4a4a4a] mb-4">
                  Your contributions help us continue our mission of bringing music and social change together.
                </p>
                <Button className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white">Donate Now</Button>
              </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--brandOne)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => window.location.href = '/'}
                >
                  <div className="h-20 w-10">
                    <Image
                      src="/Logo18.png"
                      alt="Education initiative"
                      width={60}
                      height={20}
                      className="rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="h-10 w-40">
                    <Image
                      src="/Logo24.png"
                      alt="Education initiative"
                      width={60}
                      height={20}
                      className="rounded-lg w-full h-full"
                    />
                  </div>
                  <sup className="italic text-[4px]">TM</sup>
                  {/* <span className="font-serif text-xl font-medium">SparshNinaad</span> */}
                </div>
              </div>
              <p className="text-lg text-[#fff]">
                <span className="font-bold italic text-xl">
                  Soul of Music. <br />
                  Echoes of Culture. <br />
                  Community Service. <br />
                </span>
                A public charitable trust dedicated to classical music and social causes.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className=" text-[#fff] hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#upcoming" className=" text-[#fff] hover:text-white transition-colors">
                    Jugalbandi 2025
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className=" text-[#fff] hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className=" text-[#fff] hover:text-white transition-colors">
                    Vision & Mission
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Socials</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://www.instagram.com/sparshninaad.foundation/" className=" text-[#fff] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61576730376290&mibextid=wwXIfr&rdid=UYuchZOiFzt10FfJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16SwbCKEGR%2F%3Fmibextid%3DwwXIfr#" className=" text-[#fff] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className=" text-[#fff] hover:text-white transition-colors">
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link href="#" className=" text-[#fff] hover:text-white transition-colors">
                    Whatsapp
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <div>
              <h4 className="font-serif text-lg font-medium mb-4">Newsletter</h4>
              <p className="text-sm text-[#fff] mb-4">
                Subscribe to our newsletter for updates on upcoming events and initiatives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-[#333] text-white rounded-l-md focus:outline-none flex-1"
                />
                <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-l-none">Subscribe</Button>
              </div>
            </div> */}
          </div>
          <div className="border-t border-[#fff] mt-8 pt-8 text-center">
            <p className="text-sm text-[#fff]">
              &copy; {new Date().getFullYear()} SparshNinaad Foundation A Public Charitable Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div >
  )
}
