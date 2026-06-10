const galleryItems = [
  {
    title: 'Garden mandap ceremony',
    category: 'Ceremony',
    image: 'https://cdn.corenexis.com/files/c/5482772720.jpg',
    description: 'A soft green mandap framed by floral archways and warm evening lighting.'
  },
  {
    title: 'Joyful baraat procession',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/3729217720.jpg',
    description: 'A colorful procession filled with music, dancing drummers, and procession energy.'
  },
  {
    title: 'Couple portrait moment',
    category: 'Portraits',
    image: 'https://cdn.corenexis.com/files/c/4486132720.jpg',
    description: 'A styled portrait capturing the couple in romantic ceremony light.'
  },
  {
    title: 'Lively dhol performance',
    category: 'Ceremony',
    image: 'https://cdn.corenexis.com/files/c/2512768720.jpg',
    description: 'A group of drummers creating an energetic welcome for the wedding celebration.'
  },
  {
    title: 'Elegant table styling',
    category: 'Decor',
    image: 'https://cdn.corenexis.com/files/c/1128347720.jpg',
    description: 'Luxurious table decor with fresh florals and polished design details.'
  },
  {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/4642343720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
  {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/1764743720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/9744448720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/2297678720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/3269521720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/3932149720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/1666331720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  },
    {
    title: 'Romantic reception lounge',
    category: 'Reception',
    image: 'https://cdn.corenexis.com/files/c/4642343720.jpg',
    description: 'A reception lounge styled with marble, velvet, and subtle green accents.'
  }
]

const bandGalleryItems = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine',
  'thirty',
  'thirty-one',
  'thirty-two',
  'thirty-three',
  'thirty-four',
  'thirty-five',
  'thirty-six',
  'thirty-seven',
  'thirty-eight',
  'thirty-nine',
  'forty',
  'forty-one',
  'forty-two',
  'forty-three'
].map((imageName, index) => ({
  title: `Band celebration ${index + 1}`,
  category: 'Band',
  image: `/band/${imageName}.jpg`,
  caption: `Band celebration ${index + 1}`,
  description: 'Live band moments from premium wedding celebrations.'
}))

export default [...galleryItems, ...bandGalleryItems]
