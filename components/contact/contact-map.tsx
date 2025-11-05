"use client";

import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

export default function ContactMap() {
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 6.4281, lng: 3.4219 });

  const offices = [
    {
      name: "Head Office - Lagos",
      address: "123 Innovation Drive, Victoria Island, Lagos State",
      phone: "+234 803 123 4567",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
      coordinates: { lat: 6.4281, lng: 3.4219 },
      isPrimary: true
    },
    {
      name: "Regional Office - Abuja", 
      address: "45 Unity Road, Garki, Abuja FCT",
      phone: "+234 805 987 6543",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
      coordinates: { lat: 9.0579, lng: 7.4951 },
      isPrimary: false
    },
    {
      name: "Field Office - Kaduna",
      address: "78 Community Street, Kaduna State",
      phone: "+234 807 456 7890", 
      hours: "Mon-Fri: 8AM-5PM",
      coordinates: { lat: 10.5105, lng: 7.4165 },
      isPrimary: false
    }
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    }),
    []
  );

  const handleGetDirections = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Offices
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have offices across Nigeria to better serve our communities. 
            Find the location nearest to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-[500px]">
              {loadError && (
                <div className="w-full h-full flex items-center justify-center bg-red-50">
                  <div className="text-center text-red-600">
                    <p className="text-lg font-semibold">Error loading maps</p>
                    <p className="text-sm">Please check your API key configuration</p>
                  </div>
                </div>
              )}
              
              {!isLoaded && !loadError && (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                    <p className="text-lg font-semibold">Loading Map...</p>
                  </div>
                </div>
              )}
              
              {isLoaded && !loadError && (
                <GoogleMap
                  options={mapOptions}
                  zoom={6}
                  center={mapCenter}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  onLoad={() => console.log('Map loaded successfully')}
                >
                  {offices.map((office, index) => (
                    <Marker
                      key={index}
                      position={office.coordinates}
                      onClick={() => {
                        setSelectedOffice(index);
                        setMapCenter(office.coordinates);
                      }}
                      icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: office.isPrimary ? 12 : 8,
                        fillColor: office.isPrimary ? "#BED450" : "#ACD7EC",
                        fillOpacity: 1,
                        strokeColor: "#1B2D1A",
                        strokeWeight: 2,
                      }}
                    />
                  ))}
                  
                  {selectedOffice !== null && (
                    <InfoWindow
                      position={offices[selectedOffice].coordinates}
                      onCloseClick={() => setSelectedOffice(null)}
                    >
                      <div className="p-2 max-w-xs">
                        <h4 className="font-bold text-primary mb-2">
                          {offices[selectedOffice].name}
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          {offices[selectedOffice].address}
                        </p>
                        <button
                          onClick={() => handleGetDirections(
                            offices[selectedOffice].coordinates.lat,
                            offices[selectedOffice].coordinates.lng
                          )}
                          className="text-sm text-secondary hover:text-accent font-semibold"
                        >
                          Get Directions →
                        </button>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              )}
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Office Locations</h3>
            
            {offices.map((office, index) => (
              <div 
                key={index}
                onClick={() => {
                  setSelectedOffice(index);
                  setMapCenter(office.coordinates);
                }}
                className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  selectedOffice === index
                    ? 'bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary ring-2 ring-secondary'
                    : office.isPrimary 
                      ? 'bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20' 
                      : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{office.name}</h4>
                    {office.isPrimary && (
                      <span className="inline-block bg-secondary text-primary text-xs font-semibold px-2 py-1 rounded-full">
                        Primary Office
                      </span>
                    )}
                  </div>
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetDirections(office.coordinates.lat, office.coordinates.lng);
                    }}
                    className="text-secondary hover:text-accent font-semibold text-sm transition-colors"
                  >
                    Get Directions →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Accessible Locations</h4>
              <p className="text-gray-600 text-sm">
                All our offices are wheelchair accessible and located near public transportation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Flexible Hours</h4>
              <p className="text-gray-600 text-sm">
                Extended hours available for appointments. Contact us to schedule outside regular hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Virtual Meetings</h4>
              <p className="text-gray-600 text-sm">
                Can't visit in person? We offer video calls and virtual consultations for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
