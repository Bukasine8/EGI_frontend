# Google Maps Integration Setup Guide

This guide will help you set up Google Maps API for the EGI NGO website contact page.

## Prerequisites

- A Google Cloud Platform account
- A billing account set up (Google Maps requires billing, but offers $200 free monthly credit)

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "EGI-NGO-Website")
5. Click "Create"

## Step 2: Enable Required APIs

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Enable the following APIs:
   - **Maps JavaScript API** (required for displaying maps)
   - **Places API** (required for location search features)
   - **Geocoding API** (required for address lookups)

To enable each API:
- Search for the API name
- Click on it
- Click "Enable"

## Step 3: Create API Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **API Key**
3. Your API key will be created and displayed
4. **Important:** Click "Restrict Key" to secure it

## Step 4: Restrict Your API Key (Recommended)

### Application Restrictions
1. Select **HTTP referrers (web sites)**
2. Add your website domains:
   ```
   localhost:3000/*
   yourdomain.com/*
   *.yourdomain.com/*
   ```

### API Restrictions
1. Select **Restrict key**
2. Choose only the APIs you need:
   - Maps JavaScript API
   - Places API
   - Geocoding API

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Google Maps API key to `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Never commit `.env.local` to version control!** (It's already in `.gitignore`)

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:3000/contact`

3. You should see:
   - An interactive Google Map
   - Markers for all office locations
   - Clickable markers that show office information
   - "Get Directions" functionality

## Troubleshooting

### Map not loading?
- Check that your API key is correctly set in `.env.local`
- Verify that Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for error messages
- Ensure billing is enabled on your Google Cloud account

### "This page can't load Google Maps correctly"
- Your API key may not have the correct restrictions
- Make sure HTTP referrer restrictions include your domain
- Verify that the API key has access to Maps JavaScript API

### Markers not showing?
- Check that the coordinates in `contact-map.tsx` are valid
- Verify that the map zoom level is appropriate (currently set to 6)

## Features Implemented

✅ Interactive Google Map with custom styling
✅ Multiple office location markers
✅ Custom marker colors (primary office in lime green, others in sky blue)
✅ Clickable markers with info windows
✅ Office information cards that sync with map
✅ "Get Directions" functionality (opens Google Maps in new tab)
✅ Loading states and error handling
✅ Responsive design

## Cost Considerations

Google Maps offers **$200 free credit per month**, which covers:
- ~28,000 map loads per month
- ~40,000 geocoding requests per month

For a typical NGO website, this should be more than sufficient and likely remain free.

## Customization

### Changing Map Center
Edit the initial `mapCenter` state in `contact-map.tsx`:
```typescript
const [mapCenter, setMapCenter] = useState({ lat: YOUR_LAT, lng: YOUR_LNG });
```

### Adding More Offices
Add new office objects to the `offices` array in `contact-map.tsx`:
```typescript
{
  name: "New Office Name",
  address: "Full Address",
  phone: "+234 XXX XXX XXXX",
  hours: "Mon-Fri: 8AM-5PM",
  coordinates: { lat: LATITUDE, lng: LONGITUDE },
  isPrimary: false
}
```

### Changing Marker Colors
Modify the marker `fillColor` in the `icon` prop:
```typescript
fillColor: office.isPrimary ? "#BED450" : "#ACD7EC"
```

## Security Best Practices

1. ✅ Always use environment variables for API keys
2. ✅ Restrict API keys to specific domains
3. ✅ Restrict API keys to only required APIs
4. ✅ Monitor usage in Google Cloud Console
5. ✅ Set up billing alerts to avoid unexpected charges
6. ✅ Never commit API keys to version control

## Support

For issues with Google Maps API:
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Stack Overflow - Google Maps](https://stackoverflow.com/questions/tagged/google-maps)

For issues with this implementation:
- Check the browser console for errors
- Review the `contact-map.tsx` component
- Ensure all dependencies are installed: `npm install`
