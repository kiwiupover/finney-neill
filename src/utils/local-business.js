import { LocalBusinessJsonLd } from 'next-seo'

export function LocalBusiness() {
  return (
    <LocalBusinessJsonLd
      useAppDir={true}
      type={['MedicalBusiness', 'Midwifery']}
      id="https://www.seattlebirthdoulas.com/"
      name="Seattle Birth Doulas"
      description="Seattle Birth Doulas provides comprehensive and compassionate support for expecting parents, guiding them through pregnancy, birth, and life with a new baby. Our professional doulas are dedicated to supporting your choices navigating the challenges of this journey with confidence."
      url="https://www.seattlebirthdoulas.com/"
      telephone="+12066576498"
      address={{
        streetAddress: '1230 NE 88th St',
        addressLocality: 'Seattle',
        addressRegion: 'WA',
        postalCode: '98115',
        addressCountry: 'US',
      }}
      knowsAbout={[
        'Doula Services',
        'Birth Doula',
        'Postpartum Doula',
        'Breastfeeding Support',
        'Childbirth Education',
        'Birth',
        'Home Birth',
      ]}
      geo={{
        latitude: '47.6923578',
        longitude: '-122.3161323',
      }}
      images={[
        'https://www.seattlebirthdoulas.com/images/seattle-birth-doulas-baby-hat.jpg',
        'https://www.seattlebirthdoulas.com/images/seattle-birth-doulas-smiles.jpg',
        'https://www.seattlebirthdoulas.com/images/seattle-birth-doulas.jpg',
      ]}
      rating={{
        ratingValue: '5',
        ratingCount: '4',
      }}
      review={[
        {
          author: 'Jaffrey Bagge',
          datePublished: '2023-04-13',
          reviewBody:
            'I had the most amazing experience with Jen. From my first time meeting her, I felt so comfortable and cared for. Leading up to my birth, I was given helpful tools to prepare me, and when I went into labor, Jen arrived at the hospital not long after I did and rolled up her sleeves right away, ready to help. I’m so thankful she was there during my labor and delivery! She helped keep me calm and advocated for me with my amazing nursing team at NW. I will never forget her cool, soft touch and how needed it was! Giving birth for the second time will be easy to plan for knowing I can have Jen by my side. HIRE HER!',
          reviewRating: {
            bestRating: '5',
            worstRating: '1',
            ratingValue: '5',
          },
        },

        {
          author: 'Madeline Devereaux',
          datePublished: '2023-04-22',
          reviewBody:
            'I cannot recommend Jen enough! We are a couple that tends to over analyze, research, and prepare for everything as much as we can. Even with all that and it being our second birth, we relied heavily on Jen’s expertise as we dealt with decision after decision through labor. When my water broke, we talked immediately and she gave us some tips to get labor moving and calmed my anxieties of a similar sequence of events with my last birth ( that led to more interventions than I wanted originally). Jen helped us navigate pressure from our midwife to get induced and also figure out what reasonable options were at each decision point, discussing evidence based research and asking the right questions for us to discover what we wanted to do. She never pressured us into a decision but rather helped us figure out what WE wanted. When she met us at the hospital, I immediately noticed her presence as she made sure I was hydrated, provided comfort measures through back labor and a premature urge to push, and explained what was happening at each step. I was able to have the natural birth I wanted and I truly believe I wouldn’t have without Jen’s help! She stayed after the birth to help me breastfeed and process everything that happened. Even at our postpartum visit, Jen talked about parts of the birth that I didn’t realize I had questions about, validating what I was feeling. She even provided my husband some tips on how to process his own labor experience and how to navigate parenting a toddler through this transition. In every aspect from labor preparation, labor, to postpartum, Jen made each experience easier for us to navigate and I can look back and know we made the right decision at each step of the way. I could say so much more but will cut off here and just say - hire her!!',
          reviewRating: {
            bestRating: '5',
            worstRating: '1',
            ratingValue: '5',
          },
        },
        {
          author: 'Katie Hagstrom',
          datePublished: '2023-04-22',
          reviewBody:
            "I was fortunate to have Jen at all four of my births and believe I wouldn't have had the same, wonderful experiences without her nurturing presence and expertise. Each one presented its own challenges or discomfort, and Jen was stellar every time. She worked well with all the medical professionals and also guided my husband to be the best support, assuring my needs and wishes were met. Thank you, Jen, for helping me bring life into the world!",
          reviewRating: {
            bestRating: '5',
            worstRating: '1',
            ratingValue: '5',
          },
        },
        {
          author: 'Heather Abbot',
          datePublished: '2023-05-05',
          reviewBody:
            'Jen Laird is so attuned and caring in her work. Her skill and expertise helped us in more ways than I can count. I’m so grateful for the 3 beautiful births she supported us through and all the wisdom she offered during labor and in those early days with our newborns.',
          reviewRating: {
            bestRating: '5',
            worstRating: '1',
            ratingValue: '5',
          },
        },
        {
          author: 'Sean Abbot',
          datePublished: '2023-06-27',
          reviewBody:
            'Jen is amazing! She helped us with the birth of all three of our children, and it was such a huge comfort knowing that we had a professional like Jen with us every step of the way.  She is knowledgeable, compassionate, and decisive.  And from my perspective as a father-to-be, she knew how to get me involved and assisting my wife when I felt helpless and unsure of what I should do.',
          reviewRating: {
            bestRating: '5',
            worstRating: '1',
            ratingValue: '5',
          },
        },
      ]}
    />
  )
}
