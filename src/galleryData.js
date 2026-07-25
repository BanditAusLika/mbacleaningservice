const galleryDescriptions = {
  1: 'Detailed bathroom cleaning result',
  10: 'High-pressure surface cleaning',
  20: 'Commercial floor polishing in progress',
  30: 'Commercial carpet cleaning result',
  40: 'Elevated exterior window cleaning',
  45: 'Detailed property cleaning project',
  50: 'Large commercial floor cleaning project',
  55: 'Professional property cleaning result',
};

export const cleaningGallery = Array.from({ length: 57 }, (_, index) => {
  const number = index + 1;
  return {
    src: `/images/gallery/${number}.jpg`,
    alt: galleryDescriptions[number] || `MBA professional cleaning project ${String(number).padStart(2, '0')}`,
    category: 'Cleaning',
    type: 'image',
  };
});

export const videoGallery = Array.from({ length: 3 }, (_, index) => ({
  src: `/images/gallery/vid${index + 1}.mp4`,
  alt: `MBA professional cleaning project video ${index + 1}`,
  category: 'Videos',
  type: 'video',
}));

export const galleryItems = [...cleaningGallery, ...videoGallery];

export const featuredGallery = [
  cleaningGallery[0],
  cleaningGallery[9],
  cleaningGallery[19],
  cleaningGallery[29],
  cleaningGallery[39],
  cleaningGallery[49],
];
