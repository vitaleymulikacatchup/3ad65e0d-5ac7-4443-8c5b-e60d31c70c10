"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Coffee, Facebook, Flame, Heart, Instagram, Mail, MapPin, MessageCircle, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Aroma Craft"
          button={{
            text: "Order Now",
            href: "https://order.aromacraft.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Crafted Coffee Excellence"
          description="Experience the perfect blend of artisan roasting and premium beans, creating extraordinary coffee moments for discerning taste buds."
          tag="Premium Coffee House"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472920435-faxw1pzo.jpg"
          imageAlt="Modern coffee shop with cozy atmosphere"
          imagePosition="right"
          buttons={[
            { text: "Explore Our Menu", href: "menu" },
            { text: "Visit Us Today", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe that exceptional coffee starts with exceptional beans and ends with exceptional people. Our commitment to quality, sustainability, and community drives everything we do."
          features={[
            {
              icon: MapPin,
              title: "Origin Direct",
              description: "We source our beans directly from sustainable farms, ensuring fair trade practices and the highest quality coffee from around the world."
            },
            {
              icon: Flame,
              title: "Artisan Roasting",
              description: "Our master roasters craft each batch with precision, bringing out unique flavor profiles that showcase the character of every origin."
            },
            {
              icon: Award,
              title: "Quality Assurance",
              description: "Every cup is carefully prepared by trained baristas using professional equipment and time-tested brewing methods."
            },
            {
              icon: Heart,
              title: "Community Focus",
              description: "We're more than a coffee shop - we're a gathering place where relationships are built over perfectly crafted beverages."
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Signature Coffee Menu"
          description="Discover our carefully curated selection of premium coffee drinks, each crafted with passion and expertise."
          tag="Featured Menu"
          tagIcon={Coffee}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "signature-espresso",
              name: "Signature Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472930627-9zn7y9w5.jpg",
              imageAlt: "Premium espresso shot in white cup"
            },
            {
              id: "artisan-latte",
              name: "Artisan Latte",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472924707-8d15pvlr.jpg",
              imageAlt: "Beautiful latte with foam art design"
            },
            {
              id: "cold-brew-special",
              name: "Cold Brew Special",
              price: "$4.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472932728-blhsklyf.jpg",
              imageAlt: "Refreshing cold brew coffee with ice"
            },
            {
              id: "classic-cappuccino",
              name: "Classic Cappuccino",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472934092-lb33dg7d.jpg",
              imageAlt: "Perfect cappuccino with milk foam"
            },
            {
              id: "pastry-pairing",
              name: "Coffee & Pastry",
              price: "$6.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472935365-nj7voijz.jpg",
              imageAlt: "Coffee paired with fresh pastry"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Coffee Lovers Say"
          description="Real feedback from customers who've discovered their perfect cup with us"
          tag="Customer Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahcoffee",
              testimonial: "The best coffee in the city! The baristas really know their craft and every cup is consistently perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472936809-177w0o76.jpg",
              imageAlt: "Sarah, happy coffee customer"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@mikebeans",
              testimonial: "I've been coming here for two years. The quality never disappoints and the atmosphere is always welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472938591-8tvcr5na.jpg",
              imageAlt: "Michael, regular coffee customer"
            },
            {
              id: "3",
              name: "Emily",
              handle: "@emilybrews",
              testimonial: "Perfect spot for remote work. Great WiFi, amazing coffee, and the staff makes you feel like family.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472940022-9aojaykv.jpg",
              imageAlt: "Emily working with coffee"
            },
            {
              id: "4",
              name: "David",
              handle: "@davidcups",
              testimonial: "Their single-origin selections are incredible. You can really taste the difference in quality and care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472941479-qvxflo2t.jpg",
              imageAlt: "David, coffee enthusiast"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join Our Coffee Community"
          description="Subscribe to get updates on new roasts, brewing tips, and exclusive offers delivered straight to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763472943404-atlsu43l.jpg"
          imageAlt="Modern coffee shop counter interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you'll receive our weekly newsletter with coffee updates and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Aroma Craft"
          copyrightText="© 2025 Aroma Craft Coffee House"
          columns={[
            {
              title: "Coffee",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Brewing Guide", href: "brewing" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Locations", href: "locations" },
                { label: "Hours", href: "hours" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Newsletter", href: "newsletter" },
                { label: "Events", href: "events" },
                { label: "Wholesale", href: "wholesale" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/aromacraft",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/aromacraft",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/aromacraft",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}