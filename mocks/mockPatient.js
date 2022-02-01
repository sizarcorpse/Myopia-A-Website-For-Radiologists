const mockPatient = {
  hero: {
    title: "Patients Information",
    description:
      "At Myopia we take a patient focused approach to ensure our patients are well looked after and informed from the time the appointment is made.",
    background: {
      desktop:
        "https://images.unsplash.com/photo-1595541436696-9d1ed153a2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=100",
      mobile:
        "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=100)",
    },
    button: [
      {
        title: "Search our Location",
        linkTo: "/",
        variant: "lightish",
      },
      {
        title: "Book an appointment",
        linkTo: "/",
        variant: "light",
      },
    ],
  },
  information: {
    title: "Patients Information",
    subtitle: "RECEIVE",
    descriptions: [
      {
        order: 1,
        icon: "https://myopia.cdn.prismic.io/myopia/dc26018b-8ee4-45c1-a6f5-a35d6578cc08_calander_icon.svg",
        content:
          "At Vision Radiology we take a patient focused approach to ensure our patients are well looked after and informed from the time the appointment is made. The majority of reports will be available to your GP or Health Care Provider within the first 24 hours of you leaving Vision Radiology.",
      },
      {
        order: 2,
        icon: "https://myopia.cdn.prismic.io/myopia/175c9939-555f-475d-a87c-6da4cf784b81_doc_icon.svg",
        content:
          "We understand many patients may be anxious at the time of illness and we endeavour to accommodate appointments as soon as possible. Other than a plain X-ray, all other examinations require a booking. Vision Radiology accepts referrals from all radiology providers, so even if you have a different referral we can perform your requested examination. Please call us to arrange an appointment on 03 9966 3892, alternately complete our request an appointment form below and we will call you",
      },
      {
        order: 3,
        icon: "https://myopia.cdn.prismic.io/myopia/7cfd08fe-b29b-4c15-af1a-6124fb72111e_network_icon.svg",
        content:
          "We are located in the heart of the city of London, just off the A1 at the corner of the Embankment and the Royal Victoria.",
      },
      {
        order: 4,
        icon: "https://myopia.cdn.prismic.io/myopia/b44c3b98-e0ea-40b3-86ad-ed3d5239492e_time_icon.svg",
        content:
          "We are open Monday to Friday from 9am to 5pm and Saturday and Sunday from 9am to 4pm",
      },
    ],
  },
};

export default mockPatient;
