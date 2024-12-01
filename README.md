# NASA EPIC Daily Images Viewer

A web application that showcases stunning images of Earth captured by NASA's EPIC (Earth Polychromatic Imaging Camera). This site dynamically loads daily images of Earth and presents them in a carousel format, allowing users to view, zoom, and learn about these images in an engaging and interactive way.

## Features

- **Dynamic Image Carousel**: Displays daily images of Earth captured by NASA's EPIC camera.
- **Interactive Lightbox**: Clicking on an image in the carousel opens a modal with a larger view of the image and additional information.
- **Smooth Animations**: GSAP animations are applied to the carousel for an engaging visual effect.
- **Responsive Design**: The site adjusts for different screen sizes, ensuring a great user experience on mobile, tablet, and desktop devices.
- **Fallback Support**: In case the API data is unavailable, a fallback image is displayed with a message.

## Demo

Visit [NASA EPIC Daily Images Viewer Demo](#) to see the site in action (replace with the actual demo link if hosted online).

## Technologies Used

- **HTML**: Markup for structuring the content.
- **CSS**: Styling to create a dark theme with a spacey feel and responsive design.
- **JavaScript (Node.js)**: For server-side operations and dynamic content loading.
  - **Fetch API**: Used to fetch daily images from NASA's EPIC API.
  - **GSAP**: For smooth animations on carousel items and hover effects.
  - **Express**: A lightweight Node.js framework to serve the application.
- **Bootstrap 5**: For responsive layout and modal components.

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/nasa-epic-images.git
```

### 2. Navigate to the project directory:

```bash
cd nasa-epic-images
```

### 3. Install dependencies:

Install the required Node.js packages, including Express and any other libraries you are using:

```bash
npm install
```

### 4. Set up the API key:

- Sign up for a free API key from [NASA's API portal](https://api.nasa.gov/).
- In your `script.js` file, replace `YOUR_API_KEY` with your actual API key:

```javascript
const apiKey = "YOUR_API_KEY";  // Replace with your API key
```

### 5. Run the Node.js server:

Start your Node.js server with the following command:

```bash
npm start
```

By default, the server will be available at `http://localhost:3000`.

### 6. View the project:

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## File Structure

```
nasa-epic-images/
│
├── public/
│   ├── images/              # Folder containing fallback image
│   ├── styles.css           # Custom CSS styles
│   └── script.js            # JavaScript to handle fetching data and interactivity
│
├── views/
│   └── index.ejs            # Main HTML template (using EJS)
│
├── app.js                   # Node.js server file (Express setup)
├── package.json             # Node.js dependencies and scripts
└── README.md                # Project documentation
```

## Usage

1. **Homepage**: Displays a carousel of images from NASA's EPIC camera. Users can click on the images to view them in a modal with more details.
2. **Carousel Navigation**: Users can navigate through the images using the carousel controls.
3. **Image Modal**: Clicking on an image in the carousel opens a modal with a larger view of the image, along with the date and description.

## API Integration

The project pulls data from the NASA EPIC API to display daily images of Earth. The API endpoint used is:

```
https://api.nasa.gov/EPIC/api/natural/images?api_key=YOUR_API_KEY
```

To make it work:

1. Sign up for a free API key from [NASA's API portal](https://api.nasa.gov/).
2. Replace the `YOUR_API_KEY` placeholder in the JavaScript file with your actual API key.

```javascript
const apiKey = "YOUR_API_KEY";
```

## Credits

- **NASA EPIC API**: Provides the daily images of Earth captured from space.
- **GSAP**: A powerful library for creating animations.
- **Bootstrap 5**: For responsive, mobile-first design.
- **Font**: The 'Orbitron' font gives the site a space-inspired look.

